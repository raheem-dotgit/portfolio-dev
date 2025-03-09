"use client"

import { motion } from "framer-motion"
import { Code, Server, Smartphone, Globe, Database, Cpu } from "lucide-react"

export default function TechIcons() {
  const icons = [
    { icon: <Code className="h-8 w-8" />, label: "Web Development" },
    { icon: <Smartphone className="h-8 w-8" />, label: "Mobile Apps" },
    { icon: <Server className="h-8 w-8" />, label: "Backend" },
    { icon: <Database className="h-8 w-8" />, label: "Databases" },
    { icon: <Globe className="h-8 w-8" />, label: "API Integration" },
    { icon: <Cpu className="h-8 w-8" />, label: "System Architecture" },
  ]

  return (
    <section className="bg-gray-100 py-16 dark:bg-zinc-900" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {icons.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 rounded-full bg-white p-4 text-blue-500 shadow-md dark:bg-zinc-800 dark:text-blue-400">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-zinc-700 dark:text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

