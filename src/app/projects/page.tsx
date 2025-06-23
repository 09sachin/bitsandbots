"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ExternalLink, Github, Filter, Search, Code, Database, Cloud, Brain, Cpu, Server, BarChart, Zap, Globe, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

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
const TechLogo = ({ icon, size = "w-6 h-6", className = "" }: { icon: any, size?: string, className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={`#${icon.hex}`}
    className={`${size} ${className}`}
    style={{ filter: 'brightness(1.1) saturate(1.2)' }}
  >
    <path d={icon.path} />
  </svg>
)

// Project Graphics Component
const ProjectGraphic = ({ category, title, technologies }: { category: string, title: string, technologies: string[] }) => {
  const getCategoryIcon = () => {
    switch (category) {
      case "AI/ML": return Brain
      case "Backend": return Server
      case "Web Apps": return Globe
      case "DevOps": return Settings
      case "Cloud": return Cloud
      case "Data Engineering": return BarChart
      case "Algorithms": return Code
      case "E-commerce": return Zap
      case "Automation": return Cpu
      default: return Database
    }
  }

  const getCategoryColors = () => {
    switch (category) {
      case "AI/ML": return {
        bg: "from-purple-500/20 via-pink-500/20 to-red-500/20",
        accent: "from-purple-400 to-pink-400",
        dots: "bg-purple-400/30"
      }
      case "Backend": return {
        bg: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
        accent: "from-blue-400 to-indigo-400",
        dots: "bg-blue-400/30"
      }
      case "Web Apps": return {
        bg: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
        accent: "from-green-400 to-emerald-400",
        dots: "bg-green-400/30"
      }
      case "DevOps": return {
        bg: "from-orange-500/20 via-red-500/20 to-pink-500/20",
        accent: "from-orange-400 to-red-400",
        dots: "bg-orange-400/30"
      }
      case "Cloud": return {
        bg: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
        accent: "from-cyan-400 to-blue-400",
        dots: "bg-cyan-400/30"
      }
      case "Data Engineering": return {
        bg: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
        accent: "from-yellow-400 to-orange-400",
        dots: "bg-yellow-400/30"
      }
      case "Algorithms": return {
        bg: "from-teal-500/20 via-cyan-500/20 to-blue-500/20",
        accent: "from-teal-400 to-cyan-400",
        dots: "bg-teal-400/30"
      }
      case "E-commerce": return {
        bg: "from-violet-500/20 via-purple-500/20 to-pink-500/20",
        accent: "from-violet-400 to-purple-400",
        dots: "bg-violet-400/30"
      }
      case "Automation": return {
        bg: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
        accent: "from-indigo-400 to-blue-400",
        dots: "bg-indigo-400/30"
      }
      default: return {
        bg: "from-gray-500/20 via-slate-500/20 to-gray-500/20",
        accent: "from-gray-400 to-slate-400",
        dots: "bg-gray-400/30"
      }
    }
  }

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
      'Debezium': siApachekafka,
      'Real-time Processing': siApachekafka,
      'Data Lakes': siGoogle,
      'Protocol Buffers': siGraphql,
      'OAuth': siGoogle,
      'Google Calendar API': siGoogle,
      'BeautifulSoup': siPython,
      'Step Functions': siGoogle,
      'Athena': siGoogle,
      'ArgoCD': siKubernetes,
      'GitOps': siGit,
      'Bamboo': siGit
    }
    return techMap[tech] || siPython
  }

  const colors = getCategoryColors()
  const IconComponent = getCategoryIcon()
  
  // Get relevant tech icons (max 6)
  const relevantTechs = technologies.slice(0, 6)

  return (
    <div className={`relative h-full bg-gradient-to-br ${colors.bg} overflow-hidden`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id={`pattern-${category}-${title.replace(/\s+/g, '')}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#pattern-${category}-${title.replace(/\s+/g, '')})`} />
        </svg>
      </div>

      {/* Technology logos positioned around the design */}
      <div className="absolute inset-0">
        {relevantTechs.map((tech, index) => {
          const positions = [
            { top: '15%', left: '15%' },
            { top: '20%', right: '20%' },
            { bottom: '25%', left: '20%' },
            { bottom: '20%', right: '15%' },
            { top: '45%', left: '8%' },
            { top: '45%', right: '8%' }
          ]
          const position = positions[index] || positions[0]
          
          return (
            <motion.div
              key={tech}
              className="absolute"
              style={position}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <TechLogo icon={getTechIcon(tech)} size="w-5 h-5" />
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${colors.dots} rounded-full`}
            style={{
              top: `${30 + (i * 20)}%`,
              left: `${25 + (i * 15)}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* Main icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`p-4 rounded-full bg-gradient-to-r ${colors.accent} shadow-xl`}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 right-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`w-6 h-6 border-2 border-white/20 rounded-full opacity-30`}
        />
      </div>
      
      <div className="absolute bottom-4 left-4">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-2 h-2 bg-white/40 rounded-full opacity-50`}
        />
      </div>

      {/* Abstract lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <motion.path
          d="M0,30 Q50,10 100,30 T200,30"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M0,70 Q50,50 100,70 T200,70"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </svg>
    </div>
  )
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Web Apps", "Backend", "AI/ML", "DevOps", "E-commerce", "Cloud", "Data Engineering", "Algorithms", "Automation"]

  const projects = [
    {
      id: 1,
      title: "Regulatory Data Scraping Engine",
      description: "AI-powered scraping engine collecting regulatory data from 500+ U.S. utility sources with semantic search and NLP capabilities.",
      category: "AI/ML",
      technologies: ["Python", "NLP", "Vector Embeddings", "Semantic Search", "AWS"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: true,
      status: "In Production"
    },
    {
      id: 2,
      title: "Healthcare Platform Backend",
      description: "High-throughput microservices backend for India's digital health ecosystem with face match API handling 10,000 requests/second.",
      category: "Backend",
      technologies: ["Spring Boot", "Flask", "PostgreSQL", "Microservices", "Java"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://nha.gov.in",
      githubUrl: null,
      featured: true,
      status: "Completed"
    },
    {
      id: 3,
      title: "Car Recommendation System",
      description: "ML-powered recommendation engine using LightFM with real-time data processing through Apache Kafka and Debezium CDC pipelines.",
      category: "AI/ML",
      technologies: ["Python", "LightFM", "Apache Kafka", "gRPC", "AWS"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: true,
      status: "Completed"
    },
    {
      id: 4,
      title: "Appointment Booking Platform",
      description: "Full-stack appointment scheduling platform with React frontend, FastAPI backend, Google Calendar integration, and OAuth authentication.",
      category: "Web Apps",
      technologies: ["React.js", "FastAPI", "Google Calendar API", "OAuth", "Python"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: true,
      status: "Completed"
    },
    {
      id: 5,
      title: "AHIPR Portal Backend",
      description: "Spring Boot backend for healthcare portal economizing 100+ man-hours with optimized SQL queries and microservices architecture.",
      category: "Backend",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "Microservices", "SQL Optimization"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 6,
      title: "Face Match API Service",
      description: "Lightweight Flask service achieving 10,000 requests/second throughput for biometric authentication in healthcare applications.",
      category: "Backend",
      technologies: ["Flask", "Python", "Biometric APIs", "High Performance Computing"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 7,
      title: "RAG Pipeline with Hybrid Search",
      description: "Advanced retrieval-augmented generation system with BM25, vector search, and entity linking improving faithfulness by 25%.",
      category: "AI/ML",
      technologies: ["LangChain", "Vector Search", "BM25", "NLP", "Python", "RAGAS"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 8,
      title: "AWS Lambda Web Scraping Solution",
      description: "Scalable web scraping infrastructure handling 10,000+ data points daily with automated lead extraction and processing.",
      category: "Cloud",
      technologies: ["AWS Lambda", "Selenium", "BeautifulSoup", "Step Functions", "Athena"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 9,
      title: "Knowledge Graph Platform",
      description: "Dynamic knowledge graph linking 500+ utilities, programs, and compliance rules for real-time querying in the energy sector.",
      category: "Backend",
      technologies: ["Knowledge Graphs", "Graph Databases", "Python", "NLP", "Real-time APIs"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "In Production"
    },
    {
      id: 10,
      title: "Google Maps Lead Extraction",
      description: "Selenium-based automation for Google Maps scraping with user simulation, increasing lead conversions by 30%.",
      category: "Automation",
      technologies: ["Selenium", "Python", "Web Scraping", "Lead Generation", "Automation"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 11,
      title: "DevOps CI/CD Pipeline",
      description: "GitOps implementation with ArgoCD and Kubernetes featuring blue-green and canary deployments, reducing rollback time by 60%.",
      category: "DevOps",
      technologies: ["Docker", "Kubernetes", "ArgoCD", "GitOps", "Bamboo", "AWS"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 12,
      title: "Rate Limiting System",
      description: "Hierarchical Token Bucket algorithm implementation for optimizing system performance and handling traffic spikes.",
      category: "Backend",
      technologies: ["Python", "Algorithm Design", "System Design", "Performance Optimization"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 13,
      title: "Restaurant Chain Website",
      description: "Modern responsive website for restaurant chain with online ordering system, customer portal, and payment gateway integration.",
      category: "E-commerce",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Payment Gateway"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 14,
      title: "Solar Energy Company Website",
      description: "Full-stack website for solar energy company featuring modern design, CMS integration, and lead generation functionality.",
      category: "Web Apps",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "CSS3"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 15,
      title: "Service Marketplace Platform",
      description: "Backend API for seeker-provider marketplace using Django REST Framework with matching algorithms and admin dashboard.",
      category: "Backend",
      technologies: ["Django", "Django REST Framework", "Python", "PostgreSQL", "REST API"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 16,
      title: "Competitive Programming Solutions",
      description: "Collection of algorithmic solutions achieving Specialist rating (1501) on Codeforces and Meta Hacker Cup Round 2 qualification.",
      category: "Algorithms",
      technologies: ["C++", "Algorithms", "Data Structures", "Competitive Programming"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://codeforces.com/profile/invincible009",
      githubUrl: null,
      featured: false,
      status: "Ongoing"
    },
    {
      id: 17,
      title: "Real-time Data Lake Pipeline",
      description: "CDC pipelines using Apache Kafka and Debezium for real-time data processing, reducing time lag by 70%.",
      category: "Data Engineering",
      technologies: ["Apache Kafka", "Debezium", "Real-time Processing", "Data Lakes"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 18,
      title: "gRPC Microservice Architecture",
      description: "High-performance microservice with Protocol Buffers achieving 50ms latency through HTTP/2 communication.",
      category: "Backend",
      technologies: ["gRPC", "Protocol Buffers", "Microservices", "Python", "AWS"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 19,
      title: "Retool Dashboard Integration",
      description: "Custom dashboard integrating multiple microservices for Google Maps profile optimization, reducing update time by 80%.",
      category: "Web Apps",
      technologies: ["Retool", "Dashboard", "Microservices Integration", "Data Visualization"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    },
    {
      id: 20,
      title: "Infrastructure Monitoring System",
      description: "Production environment monitoring and alerting system with automated deployment processes for social media platform.",
      category: "DevOps",
      technologies: ["Monitoring", "Alerting", "AWS", "Infrastructure", "Automation"],
      image: "/api/placeholder/600/400",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: "Completed"
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              My Work
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects that showcase my skills and passion for creating innovative digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Featured Work
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <ProjectGraphic category={project.category} title={project.title} technologies={project.technologies} />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                      project.status === "In Development" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
                      "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-400">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/30 border border-border/30 rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-accent/30 border border-border/30 rounded text-xs text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.button>
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 border border-border/50 hover:border-primary/50 text-sm font-medium rounded-lg transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </motion.button>
                      </Link>
                    )}
                    <Link href={`/projects/${project.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 glass-effect border border-border/30 hover:border-primary/50 text-sm font-medium rounded-lg transition-all"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            All Projects
          </motion.h2>
          
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 space-y-4"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-effect rounded-lg border border-border/30 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      : "glass-effect border border-border/30 hover:border-primary/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group glass-effect rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <ProjectGraphic category={project.category} title={project.title} technologies={project.technologies} />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed" ? "bg-green-500/20 text-green-400" :
                        project.status === "In Development" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-blue-500/20 text-blue-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-400">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/30 border border-border/30 rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Link href={project.liveUrl} className="flex-1">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium text-sm"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </motion.button>
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 border border-border/50 hover:border-primary/50 rounded-lg transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </motion.button>
                        </Link>
                      )}
                      <Link href={`/projects/${project.id}`} className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center gap-2 px-3 py-2 glass-effect border border-border/30 hover:border-primary/50 rounded-lg font-medium text-sm transition-all"
                        >
                          Details
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
} 