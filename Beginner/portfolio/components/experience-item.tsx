"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ExperienceProps {
  experience: {
    id: number
    role: string
    company: string
    period: string
    description: string
    skills: string[]
  }
  isLast: boolean
}

export default function ExperienceItem({ experience, isLast }: ExperienceProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative experience-item">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[39px] top-[80px] bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-purple-500/20" />
      )}

      <div
        className="relative flex gap-8 mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Timeline dot */}
        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-full bg-purple-900/30 border-2 border-purple-500 flex items-center justify-center z-10 relative"
            animate={{
              scale: isHovered ? 1.1 : 1,
              borderColor: isHovered ? "rgb(168, 85, 247)" : "rgb(168, 85, 247, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl font-bold">{experience.id}</span>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 relative"
          animate={{
            y: isHovered ? -5 : 0,
            boxShadow: isHovered ? "0 10px 30px -10px rgba(168, 85, 247, 0.3)" : "0 0px 0px 0px rgba(168, 85, 247, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <span className="text-purple-400 text-sm">{experience.period}</span>
          </div>

          <h4 className="text-lg text-gray-300 mb-4">{experience.company}</h4>
          <p className="text-gray-400 mb-4">{experience.description}</p>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Tooltip */}
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white text-sm py-2 px-4 rounded-lg pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.2 }}
          >
            {experience.period}
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-900 rotate-45" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
