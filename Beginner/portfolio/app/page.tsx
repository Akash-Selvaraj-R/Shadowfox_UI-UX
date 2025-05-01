"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TypeAnimation } from "react-type-animation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import ProjectCard from "@/components/project-card"
import ExperienceItem from "@/components/experience-item"
import ParallaxSection from "@/components/parallax-section"
import { useForm } from "react-hook-form"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Project data
const projects = [
  {
    id: 1,
    title: "Amazon Clone",
    description: "A full-stack Clone platform with payment integration and admin dashboard",
    image: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    link: "#",
    github: "https://github.com/Akash-Selvaraj-R/Amazon_Clone.git",
  },
  {
    id: 2,
    title: "Real time Chat Application",
    description: "Web application that generates chat using AI based on text prompts",
    image: "https://thecrazyprogrammer.com/wp-content/uploads/2020/08/How-a-Real-Time-Chat-Application-Works.png",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    category: "ai",
    link: "#",
    github: "",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking personal finances with data visualization",
    image: "https://other-levels.com/cdn/shop/products/Personal_Finance_Tracker_Advanced_Excel_Dashboards.png?v=1732556846",
    tags: ["React", "D3.js", "Firebase"],
    category: "frontend",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Mobile-first social media application with real-time messaging",
    image: "https://www.ncsc.gov.uk/images/library/iStock-1704413556.jpg",
    tags: ["React Native", "Socket.io", "Express"],
    category: "mobile",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Location-based weather forecast application with interactive maps",
    image: "https://img.freepik.com/free-vector/weather-report-app_23-2147552561.jpg",
    tags: ["JavaScript", "Weather API", "Leaflet"],
    category: "frontend",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates",
    image: "https://www.sweetprocess.com/wp-content/uploads/2022/10/task-management-32-1.png",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    category: "fullstack",
    link: "#",
    github: "#",
  },
]

// Experience data
const experiences = [
  {
    id: 1,
    role: "MERN Developer",
    company: "Pregrad institution",
    period: "2023",
    description:
      "Led the frontend development team in building responsive web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    skills: ["React", "Next.js", "TypeScript", "CI/CD"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Pregrad Institution",
    period: "2023",
    description:
      "Developed and maintained full-stack applications using MERN stack. Collaborated with UX designers to implement responsive designs and animations.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 3,
    role: "UI/UX Developer",
    company: "Shadowfox",
    period: "2025",
    description:
      "Created interactive prototypes and implemented frontend designs. Worked closely with clients to deliver engaging user experiences.",
    skills: ["JavaScript", "CSS/SCSS", "Figma", "User Testing"],
  },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Here you would typically send the form data to your backend
    alert("Message sent successfully!")
  }

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  // GSAP animations
  useEffect(() => {
    // About section animations
    const aboutElements = document.querySelectorAll(".about-animate")

    aboutElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Experience timeline animations
    gsap.fromTo(
      ".experience-item",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#experience",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const scrollToSection = (ref) => {
    setMobileMenuOpen(false)
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <button onClick={() => scrollToSection(aboutRef)} className="nav-link relative">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(experienceRef)} className="nav-link relative">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(projectsRef)} className="nav-link relative">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </motion.nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-lg border-b border-purple-500/20"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <button onClick={() => scrollToSection(aboutRef)} className="text-left py-2">
                  About
                </button>
                <button onClick={() => scrollToSection(experienceRef)} className="text-left py-2">
                  Experience
                </button>
                <button onClick={() => scrollToSection(projectsRef)} className="text-left py-2">
                  Projects
                </button>
                <button onClick={() => scrollToSection(contactRef)} className="text-left py-2">
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <AnimatedBackground />

          <div className="container mx-auto px-4 z-10 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block mb-2">Hello, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
                  <TypeAnimation
                    sequence={["Akash Selvaraj R", 2000, "a Developer", 2000, "a Designer", 2000, "a Creator", 2000]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Building digital experiences that make an impact
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button
                  onClick={() => scrollToSection(projectsRef)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection(contactRef)}
                  variant="outline"
                  className="border-purple-500 text-white hover:bg-purple-500/20 px-8 py-6 rounded-full text-lg"
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="flex justify-center space-x-6 mt-12"
              >
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                  className="w-2 h-2 bg-white rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <ParallaxSection>
          <section ref={aboutRef} id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              >
                About Me
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="about-animate"
                >
                  <div className="relative">
                    <div className="w-full h-[400px] rounded-lg overflow-hidden">
                      <img
                        src="https://img.freepik.com/premium-vector/ak-logo-design_731343-612.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg -z-10"></div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  <motion.p
                    className="text-xl text-gray-300 about-animate"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    I'm a passionate full-stack developer with over 5 years of experience creating beautiful,
                    functional, and user-centered digital experiences.
                  </motion.p>

                  <motion.p
                    className="text-xl text-gray-300 about-animate"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    I believe in crafting clean, efficient code and immersive user experiences that solve real-world
                    problems. My expertise spans frontend and backend technologies, with a special focus on creating
                    responsive, accessible web applications.
                  </motion.p>

                  <motion.div
                    className="about-animate"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">My Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "PostgreSQL",
                        "GraphQL",
                        "Tailwind CSS",
                        "Framer Motion",
                        "GSAP",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Experience Section */}
        <section
          ref={experienceRef}
          id="experience"
          className="py-20 md:py-32 bg-gradient-to-b from-black to-purple-950/20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Experience
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              {experiences.map((experience, index) => (
                <ExperienceItem key={experience.id} experience={experience} isLast={index === experiences.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ParallaxSection>
          <section ref={projectsRef} id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Projects
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <Button
                  onClick={() => setActiveCategory("all")}
                  variant={activeCategory === "all" ? "default" : "outline"}
                  className={cn(
                    "rounded-full",
                    activeCategory === "all"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "border-purple-500 text-white hover:bg-purple-500/20",
                  )}
                >
                  All
                </Button>
                <Button
                  onClick={() => setActiveCategory("frontend")}
                  variant={activeCategory === "frontend" ? "default" : "outline"}
                  className={cn(
                    "rounded-full",
                    activeCategory === "frontend"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "border-purple-500 text-white hover:bg-purple-500/20",
                  )}
                >
                  Frontend
                </Button>
                <Button
                  onClick={() => setActiveCategory("fullstack")}
                  variant={activeCategory === "fullstack" ? "default" : "outline"}
                  className={cn(
                    "rounded-full",
                    activeCategory === "fullstack"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "border-purple-500 text-white hover:bg-purple-500/20",
                  )}
                >
                  Full Stack
                </Button>
                <Button
                  onClick={() => setActiveCategory("mobile")}
                  variant={activeCategory === "mobile" ? "default" : "outline"}
                  className={cn(
                    "rounded-full",
                    activeCategory === "mobile"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "border-purple-500 text-white hover:bg-purple-500/20",
                  )}
                >
                  Mobile
                </Button>
                <Button
                  onClick={() => setActiveCategory("ai")}
                  variant={activeCategory === "ai" ? "default" : "outline"}
                  className={cn(
                    "rounded-full",
                    activeCategory === "ai"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "border-purple-500 text-white hover:bg-purple-500/20",
                  )}
                >
                  AI
                </Button>
              </motion.div>

              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-20 md:py-32 bg-gradient-to-b from-black to-purple-950/20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Get In Touch
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-purple-400">Let's Talk</h3>
                <p className="text-lg text-gray-300">
                  Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to
                  discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">Email</h4>
                      <p className="text-lg">rakashselvaraj@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">LinkedIn</h4>
                      <p className="text-lg">https://www.linkedin.com/in/r-akash-selvaraj-61882b291/</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                      <Github size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">GitHub</h4>
                      <p className="text-lg">https://github.com/Akash-Selvaraj-R</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="relative">
                    <div className="relative">
                      <Input
                        id="name"
                        type="text"
                        className="bg-purple-950/20 border-purple-500/30 rounded-lg p-4 w-full focus:border-pink-500 transition-all peer placeholder:text-transparent"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                      />
                      <Label
                        htmlFor="name"
                        className="absolute left-4 -top-3 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm transition-all"
                      >
                        Name
                      </Label>
                    </div>
                    {errors.name && <p className="text-pink-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="relative">
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        className="bg-purple-950/20 border-purple-500/30 rounded-lg p-4 w-full focus:border-pink-500 transition-all peer placeholder:text-transparent"
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      <Label
                        htmlFor="email"
                        className="absolute left-4 -top-3 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm transition-all"
                      >
                        Email
                      </Label>
                    </div>
                    {errors.email && <p className="text-pink-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="relative">
                    <div className="relative">
                      <Textarea
                        id="message"
                        className="bg-purple-950/20 border-purple-500/30 rounded-lg p-4 w-full min-h-[120px] focus:border-pink-500 transition-all peer placeholder:text-transparent"
                        placeholder="Message"
                        {...register("message", { required: "Message is required" })}
                      />
                      <Label
                        htmlFor="message"
                        className="absolute left-4 -top-3 text-sm text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm transition-all"
                      >
                        Message
                      </Label>
                    </div>
                    {errors.message && <p className="text-pink-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-lg text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Akash Selvaraj R. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a href="https://github.com/Akash-Selvaraj-R" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/r-akash-selvaraj-61882b291/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:rakashselvaraj@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
