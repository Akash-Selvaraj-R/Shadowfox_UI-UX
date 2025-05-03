import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Figma, Github, Layers, Palette, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Palette className="h-6 w-6" />
            <span>DesignCollab</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/designs" className="text-sm font-medium hover:underline underline-offset-4">
              Designs
            </Link>
            <Link href="/prototypes" className="text-sm font-medium hover:underline underline-offset-4">
              Prototypes
            </Link>
            <Link href="/components" className="text-sm font-medium hover:underline underline-offset-4">
              Components
            </Link>
            <Link href="/documentation" className="text-sm font-medium hover:underline underline-offset-4">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Collaborative UI/UX Design Project
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A centralized workspace for designers, developers, and stakeholders to collaborate on UI/UX design
                  assets, prototypes, and documentation.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/designs">
                      View Designs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/documentation">View Documentation</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl bg-gray-100 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Layers className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500">Design previews will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to collaborate on UI/UX design projects
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card>
                <CardHeader className="pb-2">
                  <Figma className="h-6 w-6 mb-2" />
                  <CardTitle>Design Integration</CardTitle>
                  <CardDescription>Seamlessly integrate with Figma and other design tools</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Connect your design files directly to the project for easy access and version control.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/integrations">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Github className="h-6 w-6 mb-2" />
                  <CardTitle>Version Control</CardTitle>
                  <CardDescription>Track changes and collaborate with Git integration</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Use Vercel's Git integration to manage versions and collaborate with your team.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/version-control">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-6 w-6 mb-2" />
                  <CardTitle>Client Previews</CardTitle>
                  <CardDescription>Share secure preview links with clients</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Generate preview deployments for each update to share with clients and stakeholders.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/previews">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-semibold">
              <Palette className="h-6 w-6" />
              <span>DesignCollab</span>
            </div>
            <p className="text-sm text-gray-500">
              A collaborative UI/UX design project platform built with Next.js and Vercel.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="font-medium">Quick Links</p>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/designs" className="hover:underline underline-offset-4">
                Designs
              </Link>
              <Link href="/prototypes" className="hover:underline underline-offset-4">
                Prototypes
              </Link>
              <Link href="/components" className="hover:underline underline-offset-4">
                Components
              </Link>
              <Link href="/documentation" className="hover:underline underline-offset-4">
                Documentation
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
