import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, FileUp, FolderPlus } from "lucide-react"

export default function DesignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Design Assets</h1>
            <p className="text-gray-500 mt-1">Manage and view all design assets for the project</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileUp className="mr-2 h-4 w-4" />
              Upload Design
            </Button>
            <Button>
              <FolderPlus className="mr-2 h-4 w-4" />
              New Folder
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Designs</TabsTrigger>
            <TabsTrigger value="ui">UI Elements</TabsTrigger>
            <TabsTrigger value="mockups">Mockups</TabsTrigger>
            <TabsTrigger value="wireframes">Wireframes</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 1, title: "Homepage Mockup", type: "Figma", date: "2 days ago" },
                { id: 2, title: "User Dashboard", type: "Figma", date: "3 days ago" },
                { id: 3, title: "Mobile Navigation", type: "Sketch", date: "1 week ago" },
                { id: 4, title: "Settings Panel", type: "Figma", date: "1 week ago" },
                { id: 5, title: "Onboarding Flow", type: "Figma", date: "2 weeks ago" },
                { id: 6, title: "Color Palette", type: "PNG", date: "3 weeks ago" },
              ].map((design) => (
                <Card key={design.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Design preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{design.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{design.type}</span>
                      <span className="text-sm text-gray-500">Updated {design.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/designs/${design.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Design
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ui" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ id: 6, title: "Color Palette", type: "PNG", date: "3 weeks ago" }].map((design) => (
                <Card key={design.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Design preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{design.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{design.type}</span>
                      <span className="text-sm text-gray-500">Updated {design.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/designs/${design.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Design
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="mockups" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 1, title: "Homepage Mockup", type: "Figma", date: "2 days ago" },
                { id: 2, title: "User Dashboard", type: "Figma", date: "3 days ago" },
              ].map((design) => (
                <Card key={design.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Design preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{design.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{design.type}</span>
                      <span className="text-sm text-gray-500">Updated {design.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/designs/${design.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Design
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="wireframes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 3, title: "Mobile Navigation", type: "Sketch", date: "1 week ago" },
                { id: 5, title: "Onboarding Flow", type: "Figma", date: "2 weeks ago" },
              ].map((design) => (
                <Card key={design.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-500">Design preview</p>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{design.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{design.type}</span>
                      <span className="text-sm text-gray-500">Updated {design.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/designs/${design.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Design
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
