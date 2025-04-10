import { Link } from 'react-router';
import { CheckCircle, ArrowRight, Twitter, Github } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About Our Platform
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We built this feature request dashboard to help teams prioritize
            what to build next based on user feedback.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-500">
              We believe that the best products are built with direct input from
              users. Our feature request platform bridges the gap between
              development teams and their users, creating a transparent and
              collaborative environment for product development.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p>Collect user feedback in one centralized location</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p>Prioritize features based on user votes and engagement</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p>Keep users informed about the status of their requests</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border shadow-sm">
            <img
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Team collaboration"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 w-full"></div>

        {/* How It Works Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Submit Requests</h3>
                  <p className="text-gray-500">
                    Users can submit feature requests with detailed descriptions
                    of what they need.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Vote and Discuss</h3>
                  <p className="text-gray-500">
                    The community votes on features they want, helping teams
                    understand demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Track Progress</h3>
                  <p className="text-gray-500">
                    Teams update the status of features as they move through
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="h-px bg-gray-200 w-full"></div>

        {/* Team Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Alex Johnson"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Alex Johnson</h3>
              <p className="text-primary font-medium">Founder & CEO</p>
              <p className="text-gray-500">
                Alex has over 10 years of experience in product management and
                software development.
              </p>
              <div className="flex gap-2 mt-2">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </button>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sarah Miller"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Miller</h3>
              <p className="text-primary font-medium">Lead Developer</p>
              <p className="text-gray-500">
                Sarah is a full-stack developer with expertise in React,
                Node.js, and database design.
              </p>
              <div className="flex gap-2 mt-2">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </button>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Michael Chen"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-primary font-medium">UX Designer</p>
              <p className="text-gray-500">
                Michael creates intuitive user experiences with a focus on
                accessibility and usability.
              </p>
              <div className="flex gap-2 mt-2">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">
            Ready to start collecting feedback?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join thousands of teams using our platform to build better products
            with user feedback.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
