"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Zap, Award, Code, Database, Cloud } from "lucide-react"
import Link from "next/link"
import { marked } from 'marked'

// Import simple-icons for technology logos
import {
  siPython,
  siJavascript,
  siReact,
  siSpring,
  siFlask,
  siDjango,
  siPostgresql,
  siMongodb,
  siDocker,
  siKubernetes,
  siGoogle,
  siOpenjdk,
  siCplusplus,
  siLangchain,
  siGraphql,
  siApachekafka,
  siElasticsearch,
  siRedis,
  siNodedotjs,
  siHtml5,
  siCss,
  siPhp,
  siMysql,
  siExpress,
  siSelenium,
  siGit,
  siLinux,
  siFastapi
} from 'simple-icons'

// Tech Icon Component for logos
const TechLogo = ({ icon, size = "w-8 h-8", className = "" }: { icon: any, size?: string, className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill={`#${icon.hex}`}
    className={`${size} ${className}`}
    style={{ filter: 'brightness(1.1) saturate(1.2)' }}
  >
    <path d={icon.path} />
  </svg>
)

// Map technology names to simple-icons
const getTechIcon = (tech: string) => {
  const techMap: { [key: string]: any } = {
    'Python': siPython,
    'JavaScript': siJavascript,
    'React.js': siReact,
    'Spring Boot': siSpring,
    'Flask': siFlask,
    'Django': siDjango,
    'PostgreSQL': siPostgresql,
    'MongoDB': siMongodb,
    'Docker': siDocker,
    'Kubernetes': siKubernetes,
    'AWS': siGoogle,
    'Java': siOpenjdk,
    'C++': siCplusplus,
    'LangChain': siLangchain,
    'gRPC': siGraphql,
    'Apache Kafka': siApachekafka,
    'Kafka': siApachekafka,
    'Elasticsearch': siElasticsearch,
    'Redis': siRedis,
    'Node.js': siNodedotjs,
    'HTML5': siHtml5,
    'CSS3': siCss,
    'PHP': siPhp,
    'MySQL': siMysql,
    'Express': siExpress,
    'Selenium': siSelenium,
    'Git': siGit,
    'Linux': siLinux,
    'FastAPI': siFastapi,
    'Microservices': siDocker,
    'REST API': siGraphql,
    'NLP': siPython,
    'Vector Embeddings': siPython,
    'Semantic Search': siPython,
    'LightFM': siPython,
    'Spark': siGoogle
  }
  return techMap[tech] || siPython
}

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  category: string
  technologies: string[]
  image: string
  liveUrl: string | null
  githubUrl: string | null
  featured: boolean
  status: string
  timeline: string
  team: string
  role: string
  company: string
  year: string
  challenges: string[]
  achievements: string[]
  keyTechnologies?: { [key: string]: string }
}

interface ProjectDetailClientProps {
  project: Project | null
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  if (!project) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 px-4 text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link href="/projects" className="text-blue-400 hover:underline">
            ← Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Project Detail */}
      <article className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "Completed" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                    project.status === "In Development" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
                    "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-4 mb-8"
              >
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.button>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 border border-border/50 hover:border-primary/50 font-medium rounded-lg transition-all"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            </div>

            {/* Project Meta */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold mb-6 text-primary">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-medium">{project.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium">{project.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Role</p>
                      <p className="font-medium">{project.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Company</p>
                      <p className="font-medium">{project.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="glass-effect p-4 rounded-xl flex flex-col items-center gap-3 hover:shadow-lg transition-all group"
                >
                  <TechLogo icon={getTechIcon(tech)} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">{tech}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Technologies Detail */}
          {project.keyTechnologies && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Key Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(project.keyTechnologies).map(([tech, description]) => (
                  <div key={tech} className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <TechLogo icon={getTechIcon(tech)} size="w-6 h-6" />
                      <h3 className="text-lg font-semibold">{tech}</h3>
                    </div>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Achievements & Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Achievements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Key Achievements</h2>
              <div className="space-y-4">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Technical Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Detailed Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Project Deep Dive</h2>
            <div className="glass-effect p-8 rounded-2xl">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-blue-400 prose-pre:bg-muted prose-blockquote:text-muted-foreground prose-hr:border-border"
                dangerouslySetInnerHTML={{ 
                  __html: marked(project.longDescription.trim())
                }} 
              />
            </div>
          </motion.section>
        </div>
      </article>
    </main>
  )
} 