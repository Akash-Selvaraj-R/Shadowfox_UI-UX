import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FolderPlus, Plus } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
            <p className="text-gray-500 mt-1">Project documentation, guidelines, and resources</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FolderPlus className="mr-2 h-4 w-4" />
              New Folder
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Document
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                General information about the project, goals, timeline, and stakeholders.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/documentation/project-overview">
                  <FileText className="mr-2 h-4 w-4" />
                  View Document
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Design System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Documentation for the design system, including colors, typography, and components.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/documentation/design-system">
                  <FileText className="mr-2 h-4 w-4" />
                  View Document
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>User Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">User research findings, personas, and user journey maps.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/documentation/user-research">
                  <FileText className="mr-2 h-4 w-4" />
                  View Document
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Development Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Guidelines for developers on how to implement the designs.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/documentation/development-guidelines">
                  <FileText className="mr-2 h-4 w-4" />
                  View Document
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Accessibility requirements and guidelines for the project.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/documentation/accessibility-standards">
                  <FileText className="mr-2 h-4 w-4" />
                  View Document
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Client Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Collected feedback from client review sessions.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/documentation/client-feedback">
                  <FileText className="mr-2 h-4 w-4" />
                  View Document
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
          <div className="space-y-4">
            {[
              { user: "Sarah Johnson", document: "Design System", action: "updated", time: "2 hours ago" },
              { user: "Michael Chen", document: "User Research", action: "created", time: "1 day ago" },
              { user: "Emily Rodriguez", document: "Client Feedback", action: "commented on", time: "2 days ago" },
              { user: "David Kim", document: "Development Guidelines", action: "updated", time: "3 days ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center p-3 border rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  {activity.user.charAt(0)}
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                    <Link
                      href={`/documentation/${activity.document.toLowerCase().replace(" ", "-")}`}
                      className="text-primary hover:underline"
                    >
                      {activity.document}
                    </Link>
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
