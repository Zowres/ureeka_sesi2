import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <div className="mt-8 space-y-6 text-gray-500 dark:text-gray-400">
            <p>
              Hello! I'm John Doe, a passionate web developer with over 5 years of experience in creating modern,
              responsive websites and web applications. I specialize in front-end development using React, TypeScript,
              and Next.js, but I'm also comfortable working with back-end technologies.
            </p>
            <p>
              My journey in web development began during my computer science studies, where I discovered my passion for
              creating user-friendly interfaces. Since then, I've worked with various clients and companies to bring
              their digital visions to life.
            </p>
            <p>
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting
              with new technologies. I believe in continuous learning and staying updated with the latest trends in web
              development.
            </p>
            <h2 className="text-2xl font-bold tracking-tighter pt-4">Education</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bachelor of Science in Computer Science, University of Technology (2015-2019)</li>
              <li>Full Stack Web Development Bootcamp, Code Academy (2019)</li>
            </ul>
            <h2 className="text-2xl font-bold tracking-tighter pt-4">Work Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Senior Front-end Developer</h3>
                <p className="text-sm text-muted-foreground">Tech Solutions Inc. | 2021 - Present</p>
                <p className="mt-2">
                  Leading front-end development for enterprise clients, implementing modern React applications with
                  TypeScript and Next.js.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Web Developer</h3>
                <p className="text-sm text-muted-foreground">Digital Agency | 2019 - 2021</p>
                <p className="mt-2">
                  Developed responsive websites and e-commerce solutions for various clients using React and Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <Image
            src="/placeholder/smiling-young-man-illustration_1308-174669.avif"
            width={600}
            height={600}
            alt="John Doe"
            className="mx-auto rounded-xl object-cover"
            priority
          />
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-bold">3+</h3>
              <p className="text-sm text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
