"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      src: "/placeholder.svg?height=600&width=400&text=E-Commerce+App",
      alt: "E-commerce mobile app",
      title: "ShopSmart App",
      description: "React Native mobile application with Node.js backend",
      github: "#",
      live: "#",
    },
    {
      src: "/placeholder.svg?height=600&width=400&text=Analytics+Dashboard",
      alt: "SaaS dashboard",
      title: "Analytics Dashboard",
      description: "Next.js web application with real-time data visualization",
      github: "#",
      live: "#",
    },
    {
      src: "/placeholder.svg?height=600&width=400&text=Fitness+Tracker",
      alt: "Fitness tracking app",
      title: "FitTrack",
      description: "Cross-platform mobile app built with Flutter",
      github: "#",
      live: "#",
    },
    {
      src: "/placeholder.svg?height=600&width=400&text=Restaurant+Booking",
      alt: "Restaurant booking system",
      title: "TableReserve",
      description: "Full-stack web application with payment integration",
      github: "#",
      live: "#",
    },
  ]

  return (
    <section className="relative bg-gray-100 py-20 dark:bg-black" id="projects">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter text-zinc-800 dark:text-white sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg dark:bg-zinc-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/80">
                <h3 className="mb-2 text-xl font-semibold text-zinc-800 dark:text-white">{project.title}</h3>
                <p className="mb-4 text-center text-sm text-zinc-600 dark:text-gray-300">{project.description}</p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

