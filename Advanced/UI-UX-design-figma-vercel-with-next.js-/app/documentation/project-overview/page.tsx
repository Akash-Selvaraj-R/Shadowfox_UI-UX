import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Edit, Share2 } from "lucide-react"
import Link from "next/link"

export default function ProjectOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/documentation">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Link>
          </Button>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Project Overview</h1>
          <p className="text-gray-500">Last updated: May 2, 2025</p>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <Card className="p-6">
              <div className="prose max-w-none">
                <h2>Project Description</h2>
                <p>
                  This UI/UX design project aims to create a modern, user-friendly interface for [Client Name]'s web
                  application. The project will deliver a complete set of design assets, interactive prototypes, and
                  implementation guidelines for the development team.
                </p>

                <h2>Project Goals</h2>
                <ul>
                  <li>Create a cohesive and modern design system that aligns with the client's brand identity</li>
                  <li>Improve user experience by simplifying navigation and user flows</li>
                  <li>Increase user engagement and conversion rates through intuitive interface design</li>
                  <li>Ensure accessibility compliance across all designs</li>
                  <li>Provide comprehensive documentation for seamless handoff to developers</li>
                </ul>

                <h2>Deliverables</h2>
                <ul>
                  <li>Complete design system (colors, typography, components)</li>
                  <li>High-fidelity mockups for all key screens</li>
                  <li>Interactive prototypes for main user flows</li>
                  <li>User research findings and recommendations</li>
                  <li>Accessibility audit and guidelines</li>
                  <li>Developer handoff documentation</li>
                </ul>

                <h2>Stakeholders</h2>
                <ul>
                  <li>
                    <strong>Client:</strong> [Client Name] - Marketing and Product teams
                  </li>
                  <li>
                    <strong>Design Team:</strong> UI/UX designers, researchers, and content strategists
                  </li>
                  <li>
                    <strong>Development Team:</strong> Frontend and backend developers
                  </li>
                  <li>
                    <strong>Project Management:</strong> Project managers and account executives
                  </li>
                </ul>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="timeline" className="mt-6">
            <Card className="p-6">
              <div className="prose max-w-none">
                <h2>Project Timeline</h2>

                <h3>Phase 1: Discovery and Research (2 weeks)</h3>
                <ul>
                  <li>Kickoff meeting with client</li>
                  <li>User research and competitive analysis</li>
                  <li>Define user personas and journeys</li>
                  <li>Requirements gathering</li>
                </ul>

                <h3>Phase 2: Design Exploration (3 weeks)</h3>
                <ul>
                  <li>Mood boards and style exploration</li>
                  <li>Low-fidelity wireframes</li>
                  <li>Design system development</li>
                  <li>Client review and feedback</li>
                </ul>

                <h3>Phase 3: High-Fidelity Design (4 weeks)</h3>
                <ul>
                  <li>High-fidelity mockups</li>
                  <li>Interactive prototypes</li>
                  <li>Usability testing</li>
                  <li>Design iterations based on feedback</li>
                </ul>

                <h3>Phase 4: Finalization and Handoff (3 weeks)</h3>
                <ul>
                  <li>Final design revisions</li>
                  <li>Developer handoff documentation</li>
                  <li>Implementation support</li>
                  <li>Project closure and retrospective</li>
                </ul>

                <h3>Key Milestones</h3>
                <ul>
                  <li>
                    <strong>May 15, 2025:</strong> Research findings presentation
                  </li>
                  <li>
                    <strong>June 5, 2025:</strong> Design system approval
                  </li>
                  <li>
                    <strong>July 10, 2025:</strong> High-fidelity prototype review
                  </li>
                  <li>
                    <strong>August 1, 2025:</strong> Final design delivery
                  </li>
                </ul>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="team" className="mt-6">
            <Card className="p-6">
              <div className="prose max-w-none">
                <h2>Project Team</h2>

                <h3>Design Team</h3>
                <ul>
                  <li>
                    <strong>Lead Designer:</strong> Sarah Johnson - Responsible for overall design direction and client
                    communication
                  </li>
                  <li>
                    <strong>UI Designer:</strong> Michael Chen - Focused on visual design and component creation
                  </li>
                  <li>
                    <strong>UX Designer:</strong> Emily Rodriguez - Responsible for user flows and interaction design
                  </li>
                  <li>
                    <strong>UX Researcher:</strong> David Kim - Conducts user research and usability testing
                  </li>
                </ul>

                <h3>Development Team</h3>
                <ul>
                  <li>
                    <strong>Frontend Lead:</strong> Alex Thompson - Oversees implementation of designs
                  </li>
                  <li>
                    <strong>Frontend Developers:</strong> Jamie Wilson, Priya Patel - Implement UI components and
                    interactions
                  </li>
                </ul>

                <h3>Project Management</h3>
                <ul>
                  <li>
                    <strong>Project Manager:</strong> Carlos Mendez - Oversees project timeline, resources, and
                    deliverables
                  </li>
                  <li>
                    <strong>Account Manager:</strong> Lisa Chen - Primary client contact and relationship manager
                  </li>
                </ul>

                <h3>Client Team</h3>
                <ul>
                  <li>
                    <strong>Product Owner:</strong> Jennifer Smith - Main decision maker for the client
                  </li>
                  <li>
                    <strong>Marketing Director:</strong> Robert Johnson - Ensures brand alignment
                  </li>
                  <li>
                    <strong>Technical Lead:</strong> Samantha Williams - Provides technical requirements and constraints
                  </li>
                </ul>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="resources" className="mt-6">
            <Card className="p-6">
              <div className="prose max-w-none">
                <h2>Project Resources</h2>

                <h3>Design Tools</h3>
                <ul>
                  <li>
                    <strong>Figma:</strong> Primary design tool for creating mockups and prototypes
                  </li>
                  <li>
                    <strong>Adobe Creative Suite:</strong> For additional graphic design needs
                  </li>
                  <li>
                    <strong>Miro:</strong> For collaborative workshops and user journey mapping
                  </li>
                  <li>
                    <strong>UserTesting:</strong> Platform for conducting remote usability tests
                  </li>
                </ul>

                <h3>Development Resources</h3>
                <ul>
                  <li>
                    <strong>Next.js:</strong> Frontend framework for implementation
                  </li>
                  <li>
                    <strong>Vercel:</strong> Deployment platform for previews and collaboration
                  </li>
                  <li>
                    <strong>GitHub:</strong> Version control and code collaboration
                  </li>
                  <li>
                    <strong>Storybook:</strong> For documenting and testing UI components
                  </li>
                </ul>

                <h3>Communication Channels</h3>
                <ul>
                  <li>
                    <strong>Slack:</strong> Daily team communication
                  </li>
                  <li>
                    <strong>Google Meet:</strong> Virtual meetings with team and client
                  </li>
                  <li>
                    <strong>Notion:</strong> Documentation and knowledge base
                  </li>
                  <li>
                    <strong>Email:</strong> Formal communications and approvals
                  </li>
                </ul>

                <h3>Reference Materials</h3>
                <ul>
                  <li>
                    <strong>Client Brand Guidelines:</strong>{" "}
                    <a href="#" className="text-primary hover:underline">
                      View Document
                    </a>
                  </li>
                  <li>
                    <strong>Technical Requirements:</strong>{" "}
                    <a href="#" className="text-primary hover:underline">
                      View Document
                    </a>
                  </li>
                  <li>
                    <strong>Competitive Analysis:</strong>{" "}
                    <a href="#" className="text-primary hover:underline">
                      View Document
                    </a>
                  </li>
                  <li>
                    <strong>UX Design Roadmap:</strong>{" "}
                    <a href="https://roadmap.sh/ux-design" className="text-primary hover:underline">
                      View Roadmap
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
