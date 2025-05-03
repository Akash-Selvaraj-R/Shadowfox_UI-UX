import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <header className="sticky top-0 z-10 border-b bg-white dark:bg-slate-950 dark:border-slate-800">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold">LuminousLabs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-slate-900 dark:text-white">
              Dashboard
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Team
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign out</Link>
            </Button>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Welcome to your Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400">
              You have successfully logged in to the LuminousLabs platform
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Manage your active projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">3 updated recently</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>View and manage your team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2 new this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>Track your pending tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">5 due today</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
