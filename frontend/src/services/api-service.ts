// Base Types for API
export interface Feature {
  id: number;
  title: string;
  likes: number;
  createdAt: string;
}

export interface StandardResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  timestamp: string;
}

// Base API URL
const BASE_URL = 'http://localhost:3001';

// Helper function to handle API responses
async function handleResponse<T>(
  response: Response
): Promise<StandardResponse<T>> {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'API request failed');
  }
  return response.json();
}

// API Service Functions

// GET /features
export interface FeaturesResponse {
  features: Feature[];
}

export async function getFeatures(
  searchTerm: string = ''
): Promise<StandardResponse<FeaturesResponse>> {
  const url = new URL('/features', BASE_URL);
  if (searchTerm) {
    url.searchParams.append('search', searchTerm);
  }
  const response = await fetch(url.toString());
  return handleResponse<FeaturesResponse>(response);
}

// GET /features/:id
export interface FeatureResponse {
  feature: Feature;
}

export async function getFeatureById(
  id: number
): Promise<StandardResponse<FeatureResponse>> {
  const url = new URL(`/features/${id}`, BASE_URL);
  const response = await fetch(url.toString());
  return handleResponse<FeatureResponse>(response);
}

// POST /features
export async function createFeature(
  title: string
): Promise<StandardResponse<FeatureResponse>> {
  const url = new URL('/features', BASE_URL);
  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  return handleResponse<FeatureResponse>(response);
}

// PUT /features/:id/toggle-like
export async function toggleLikeFeature(
  id: number,
  liked: boolean
): Promise<StandardResponse<FeatureResponse>> {
  const url = new URL(`/features/${id}/toggle-like`, BASE_URL);
  const response = await fetch(url.toString(), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ liked }),
  });
  return handleResponse<FeatureResponse>(response);
}

// GET /profile-picture
export interface ProfilePictureResponse {
  avatarUrl: string;
}

export async function getProfilePicture(): Promise<
  StandardResponse<ProfilePictureResponse>
> {
  const url = new URL('/profile-picture', BASE_URL);
  const response = await fetch(url.toString());
  return handleResponse<ProfilePictureResponse>(response);
}
