"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    category: string
    link: string
    github: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden">
        <div className="relative h-[220px] overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute top-4 right-4 flex space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href={project.github}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={18} />
            </a>
            <a
              href={project.link}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-xl"
          animate={{
            borderColor: isHovered ? "rgba(168, 85, 247, 0.5)" : "rgba(168, 85, 247, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
