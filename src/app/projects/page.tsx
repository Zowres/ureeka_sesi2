import Image from "next/image"
import Link from "next/link"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=300&width=600&text=E-commerce+Platform",
      tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website to showcase projects and skills.",
      image: "/placeholder.svg?height=300&width=600&text=Portfolio+Website",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and deadlines.",
      image: "/placeholder.svg?height=300&width=600&text=Task+Management+App",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application showing current conditions and forecasts.",
      image: "/placeholder.svg?height=300&width=600&text=Weather+Dashboard",
      tags: ["React", "OpenWeather API", "Chart.js"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "An app to discover and save recipes based on available ingredients.",
      image: "/placeholder.svg?height=300&width=600&text=Recipe+Finder",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "An application to track workouts, progress, and fitness goals.",
      image: "/placeholder.svg?height=300&width=600&text=Fitness+Tracker",
      tags: ["React Native", "Firebase", "Expo"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Here's a collection of my recent work. Each project represents different skills and technologies I've worked
            with.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-8">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Card key={project.id} id={`project-${project.id}`} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="gap-1">
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1">
                        Code
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-8">Other Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <Card key={project.id} id={`project-${project.id}`} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="gap-1">
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1">
                        Code
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
