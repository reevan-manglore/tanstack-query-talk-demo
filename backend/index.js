import express, { json } from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import cors from "cors";

const fileName = "db.json";
const PORT = 3001;
const defaultData = {
  features: [
    {
      id: 1,
      title: "Add dark mode",
      liked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Improve search speed",
      liked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Better mobile support",
      liked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Add keyboard shortcuts",
      liked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 5,
      title: "Improve accessibility",
      liked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 6,
      title: "Add custom themes",
      liked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 7,
      title: "Integrate with third-party APIs",
      liked: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 8,
      title: "Add user profiles",
      liked: false,
      createdAt: new Date().toISOString(),
    },
  ],
};

const app = express();
const adapter = new JSONFile(fileName);
const db = new Low(adapter, defaultData);

// Initialize database
await db.read();

// Middleware
app.use(json());
app.use(cors()); // Allow cross-origin requests from React frontend

// Standard response format function
const standardResponse = (success, data, message = "") => {
  return {
    success,
    data,
    message,
    timestamp: new Date().toISOString(),
  };
};

// Simulate variable delay (500ms to 1500ms) for race conditions
const randomDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000 + 500));

// More extreme random delay specifically for demonstrating race conditions
const raceConditionDelay = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000)); // 1-4 seconds delay

// GET /features - Fetch features with optional search
app.get("/features", async (req, res) => {
  const searchTerm = req.query.search || "";

  // Use the more extreme delay to demonstrate race conditions
  await raceConditionDelay();

  await db.read(); // Refresh data

  // Add search param to response to help identify which response belongs to which request
  const requestIdentifier = searchTerm ? `search:${searchTerm}` : "all";

  const features = db.data.features.filter((f) =>
    f.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedFeatures = features.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  res.json(
    standardResponse(
      true,
      { features: sortedFeatures, requestIdentifier },
      `Features retrieved successfully for request: ${requestIdentifier}`
    )
  );
});

// GET /features/:id - Fetch a single feature by ID
app.get("/features/:id", async (req, res) => {
  await randomDelay();
  await db.read(); // Refresh data

  const id = parseInt(req.params.id);
  const feature = db.data.features.find((f) => f.id === id);

  if (!feature) {
    return res
      .status(404)
      .json(standardResponse(false, null, "Feature not found"));
  }

  res.json(
    standardResponse(true, { feature }, "Feature retrieved successfully")
  );
});

// POST /features - Add a new feature
app.post("/features", async (req, res) => {
  await randomDelay();
  await db.read(); // Ensure we have fresh data

  const { title } = req.body;
  if (!title) {
    return res
      .status(400)
      .json(standardResponse(false, null, "Title is required"));
  }

  // Check for duplicate titles (case insensitive)
  const duplicateExists = db.data.features.some(
    (feature) => feature.title.toLowerCase() === title.toLowerCase()
  );

  if (duplicateExists) {
    return res
      .status(409)
      .json(
        standardResponse(
          false,
          null,
          "A feature with this title already exists"
        )
      );
  }

  const newFeature = {
    id: db.data.features.length + 1,
    title,
    liked: false,
    createdAt: new Date().toISOString(),
  };

  db.data.features.push(newFeature);
  await db.write();
  res
    .status(201)
    .json(
      standardResponse(
        true,
        { feature: newFeature },
        "Feature created successfully"
      )
    );
});

// PUT /features/:id/toggle-like - Toggle like status for a feature
app.put("/features/:id/toggle-like", async (req, res) => {
  await randomDelay();
  await db.read(); // Ensure we have fresh data

  const id = parseInt(req.params.id);
  const feature = db.data.features.find((f) => f.id === id);
  if (!feature) {
    return res
      .status(404)
      .json(standardResponse(false, null, "Feature not found"));
  }

  // Get the liked state from the request body
  const { liked } = req.body;

  // Set the liked state directly
  feature.liked = liked;

  await db.write();
  res.json(
    standardResponse(
      true,
      { feature },
      "Feature like status updated successfully"
    )
  );
});

// GET /profile-picture - Fetch a random profile picture
app.get("/profile-picture", async (req, res) => {
  await randomDelay();

  // Generate a random seed (two capital letters)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstLetter = letters[Math.floor(Math.random() * letters.length)];
  const secondLetter = letters[Math.floor(Math.random() * letters.length)];
  const seed = firstLetter + secondLetter;

  // Create the DiceBear URL with initials style as specified
  const avatarUrl = `https://api.dicebear.com/9.x/initials/svg?seed=${seed}`;

  res.json(
    standardResponse(
      true,
      { avatarUrl },
      "Random profile picture URL generated successfully"
    )
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
