import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Layout, Server, Smartphone, Zap } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3/SCSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "RESTful APIs", level: 80 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      title: "Database",
      description: "Managing and optimizing data storage",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      skills: [
        { name: "React Native", level: 60 },
        { name: "Expo", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      description: "Development tools and methodologies",
      icon: <Zap className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 60 },
        { name: "CI/CD", level: 70 },
        { name: "Agile/Scrum", level: 75 },
      ],
    },
    {
      title: "Programming Languages",
      description: "General programming knowledge",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 60 },
        { name: "Java", level: 50 },
      ],
    },
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            I've acquired a diverse set of skills throughout my career. Here's an overview of my technical expertise and
            competencies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="w-full mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tighter mb-6 text-center">Additional Skills & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Responsive Design",
              "UI/UX Principles",
              "Performance Optimization",
              "SEO Basics",
              "Accessibility",
              "Testing (Jest/RTL)",
              "Webpack",
              "Vite",
              "AWS Basics",
              "Vercel",
              "Netlify",
              "Figma",
            ].map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
