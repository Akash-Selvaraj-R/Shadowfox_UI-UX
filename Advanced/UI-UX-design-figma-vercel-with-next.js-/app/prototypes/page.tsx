import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, Play } from "lucide-react"

export default function PrototypesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Interactive Prototypes</h1>
            <p className="text-gray-500 mt-1">Test and share interactive prototypes with stakeholders</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileUp className="mr-2 h-4 w-4" />
              Import Prototype
            </Button>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Create New
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Prototypes</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="tablet">Tablet</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "User Onboarding Flow",
                  type: "Figma Prototype",
                  date: "2 days ago",
                  device: "Desktop",
                },
                { id: 2, title: "Checkout Process", type: "Figma Prototype", date: "3 days ago", device: "Mobile" },
                { id: 3, title: "Dashboard Navigation", type: "InVision", date: "1 week ago", device: "Desktop" },
                { id: 4, title: "Settings Panel", type: "Figma Prototype", date: "1 week ago", device: "Tablet" },
              ].map((prototype) => (
                <Card key={prototype.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                    <p className="text-sm text-gray-500">Prototype preview</p>
                    <div className="absolute top-2 right-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {prototype.device}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{prototype.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{prototype.type}</span>
                      <span className="text-sm text-gray-500">Updated {prototype.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/prototypes/${prototype.id}`}>
                        <Play className="mr-2 h-4 w-4" />
                        View Prototype
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="desktop" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "User Onboarding Flow",
                  type: "Figma Prototype",
                  date: "2 days ago",
                  device: "Desktop",
                },
                { id: 3, title: "Dashboard Navigation", type: "InVision", date: "1 week ago", device: "Desktop" },
              ].map((prototype) => (
                <Card key={prototype.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                    <p className="text-sm text-gray-500">Prototype preview</p>
                    <div className="absolute top-2 right-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {prototype.device}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{prototype.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{prototype.type}</span>
                      <span className="text-sm text-gray-500">Updated {prototype.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/prototypes/${prototype.id}`}>
                        <Play className="mr-2 h-4 w-4" />
                        View Prototype
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 2, title: "Checkout Process", type: "Figma Prototype", date: "3 days ago", device: "Mobile" },
              ].map((prototype) => (
                <Card key={prototype.id} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                    <p className="text-sm text-gray-500">Prototype preview</p>
                    <div className="absolute top-2 right-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {prototype.device}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{prototype.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{prototype.type}</span>
                      <span className="text-sm text-gray-500">Updated {prototype.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/prototypes/${prototype.id}`}>
                        <Play className="mr-2 h-4 w-4" />
                        View Prototype
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tablet" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ id: 4, title: "Settings Panel", type: "Figma Prototype", date: "1 week ago", device: "Tablet" }].map(
                (prototype) => (
                  <Card key={prototype.id} className="overflow-hidden">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                      <p className="text-sm text-gray-500">Prototype preview</p>
                      <div className="absolute top-2 right-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {prototype.device}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{prototype.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{prototype.type}</span>
                        <span className="text-sm text-gray-500">Updated {prototype.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <Link href={`/prototypes/${prototype.id}`}>
                          <Play className="mr-2 h-4 w-4" />
                          View Prototype
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ),
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
