import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Eye, Plus } from "lucide-react"

export default function ComponentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">UI Components</h1>
            <p className="text-gray-500 mt-1">Browse and manage reusable UI components</p>
          </div>
          <div className="flex gap-3">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Component
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Components</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 1, title: "Primary Button", category: "Buttons", date: "2 days ago" },
                { id: 2, title: "Form Input", category: "Forms", date: "3 days ago" },
                { id: 3, title: "Navigation Bar", category: "Navigation", date: "1 week ago" },
                { id: 4, title: "Card Component", category: "Layout", date: "1 week ago" },
                { id: 5, title: "Modal Dialog", category: "Overlays", date: "2 weeks ago" },
                { id: 6, title: "Dropdown Menu", category: "Navigation", date: "3 weeks ago" },
              ].map((component) => (
                <Card key={component.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Component preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{component.category}</span>
                      <span className="text-sm text-gray-500">Updated {component.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}/code`}>
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="buttons" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ id: 1, title: "Primary Button", category: "Buttons", date: "2 days ago" }].map((component) => (
                <Card key={component.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Component preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{component.category}</span>
                      <span className="text-sm text-gray-500">Updated {component.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}/code`}>
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="forms" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ id: 2, title: "Form Input", category: "Forms", date: "3 days ago" }].map((component) => (
                <Card key={component.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Component preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{component.category}</span>
                      <span className="text-sm text-gray-500">Updated {component.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}/code`}>
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="navigation" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 3, title: "Navigation Bar", category: "Navigation", date: "1 week ago" },
                { id: 6, title: "Dropdown Menu", category: "Navigation", date: "3 weeks ago" },
              ].map((component) => (
                <Card key={component.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Component preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{component.category}</span>
                      <span className="text-sm text-gray-500">Updated {component.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/components/${component.id}/code`}>
                        <Code className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
