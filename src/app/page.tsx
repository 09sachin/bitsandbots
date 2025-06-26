"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Terminal, Minimize2, Maximize2, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// Import react-icons
import {
  SiPython,
  SiJavascript,
  SiOpenjdk,
  SiReact,
  SiSpring,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiLangchain,
  SiGraphql
} from 'react-icons/si';
import { RiJavaLine } from "react-icons/ri";

// Tech Icon Component using react-icons
const TechIcon = ({ icon: Icon, title }: { icon: React.ComponentType<any>, title: string }) => {
  // Enhanced color mapping with better contrast
  const getIconColor = (iconTitle: string) => {
    const colorMap: { [key: string]: string } = {
      'Python': '#18ccf5',        // Bright Python bl
      'JavaScript': '#F7DF1E',    // JavaScript yellow
      'Java': '#ED8B00',          // Java orange
      'React.js': '#61DAFB',      // React cyan
      'Spring Boot': '#6DB33F',   // Spring green
      'AWS': '#FF9900',           // AWS orange
      'Docker': '#2496ED',        // Docker blue
      'Kubernetes': '#326CE5',    // Kubernetes blue
      'PostgreSQL': 'cyan',    // PostgreSQL blue
      'MongoDB': '#47A248',       // MongoDB green
      'LangChain': 'cyan',     // Deep blue
      'gRPC': '#e10098',      // Dark teal
    }
    return colorMap[iconTitle] || '#8B5CF6' // Purple fallback
  }

  return (
    <Icon 
      className="w-5 h-5 drop-shadow-sm" 
      style={{ 
        color: getIconColor(title),
        filter: 'brightness(1.1) contrast(1.2)'
      }}
      title={title}
    />
  )
}

export default function Home() {
  const skills = [
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Java", icon: RiJavaLine },
    { name: "React.js", icon: SiReact },
    { name: "Spring Boot", icon: SiSpring },
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "LangChain", icon: SiLangchain },
    { name: "gRPC", icon: SiGraphql }
  ]

  // Enhanced animated taglines with better timing
  const taglines = [
    "Building Scalable Solutions",
    "Crafting AI-Powered Systems",
    "Designing Cloud Architecture"
  ]
  
  const [currentTagline, setCurrentTagline] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  
  useEffect(() => {
    const currentText = taglines[currentTagline]
    
    const typingSpeed = 100
    const pauseAfterComplete = 1500 // Pause when text is complete
  
    let timeout
  
    if (displayText === currentText) {
      // Text is complete, pause then move to next tagline
      timeout = setTimeout(() => {
        setDisplayText("") // Clear text instantly
        setCurrentTagline((prev) => (prev + 1) % taglines.length)
      }, pauseAfterComplete)
    } else {
      // Continue typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      }, typingSpeed)
    }
  
    return () => clearTimeout(timeout)
  }, [displayText, currentTagline])

  // Looping terminal typing effect with auto-scroll
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const terminalContentRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when terminal text updates
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight
    }
  }, [terminalText])

  useEffect(() => {
    const lines = [
      "$ whoami",
      "sachin-khoja",
      "",
      "$ cat about.txt",
      "Full-stack Software Engineer passionate about",
      "building scalable solutions and innovative",
      "digital experiences.",
      "",
      "$ cat education.txt",
      "IIT Kharagpur",
      "B.Tech + M.Tech Dual Degree",
      "CGPA: 8.39/10",
      "",
      "$ ls experience/",
      "2020/ 2021/ 2022/ 2023/ 2024/",
      "buddin/ cuvette/ quantsolar/ timelyai/",
      "spinny/ Legato/ koo/ nha/ vellex/",
      "",
      "$ cat experience.txt",
      "• Vellex Computing - Software Engineer (Current)",
      "• National Health Authority - Software Engineer",
      "• Multiple internships & freelance projects",
      "• 10+ companies across 4+ years",
      "",
      "$ ls skills/",
      "python/ javascript/ java/ react/",
      "spring-boot/ aws/ docker/ kubernetes/",
      "",
      "$ echo 'Building the future, one line at a time!'",
      "Building the future, one line at a time! 🚀"
    ];

    let r = 0, c = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (r < lines.length) {
        if (c < lines[r].length) {
          let x = c;  
          if(c === 0) {
            x = 0;
          }
          setTerminalText(prev => prev + lines[r][x]);
          c++;
          timeoutId = setTimeout(type, 50);
        } else {
          setTerminalText(prev => prev + "\n");
          r++;
          c = 0;
          timeoutId = setTimeout(type, 50);
        }
      } else {
        timeoutId = setTimeout(() => {
          setTerminalText("");
          r = 0;
          c = 0;
          type();
        }, 3000);
      }
    };

    timeoutId = setTimeout(type, 500);
    const cursor = setInterval(() => setShowCursor(prev => !prev), 500);
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursor);
    };
  }, []);
  
  return (
    <main className="relative h-screen overflow-hidden bg-background">
      <Navigation />
      
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 md:opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-cyan-900/5 to-sky-900/10 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-sky-900/20" />

      {/* Enhanced Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          {top:"12%",left:"8%",size:"w-32 h-32 md:w-48 md:h-48",delay:0,type:"ring",mobile:true},
          {top:"20%",right:"10%",size:"w-24 h-24 md:w-36 md:h-36",delay:1.5,type:"solid",mobile:false},
          {top:"35%",left:"75%",size:"w-20 h-20 md:w-28 md:h-28",delay:3,type:"dotted",mobile:false},
          {top:"50%",left:"15%",size:"w-40 h-40 md:w-56 md:h-56",delay:4.5,type:"gradient",mobile:true},
          {top:"65%",right:"20%",size:"w-16 h-16 md:w-24 md:h-24",delay:6,type:"ring",mobile:false},
          {top:"75%",left:"30%",size:"w-28 h-28 md:w-40 md:h-40",delay:7.5,type:"solid",mobile:true},
          {top:"25%",right:"35%",size:"w-12 h-12 md:w-20 md:h-20",delay:9,type:"dotted",mobile:false},
          {top:"85%",right:"45%",size:"w-36 h-36 md:w-52 md:h-52",delay:10.5,type:"gradient",mobile:false},
        ].map(({top,left,right,size,delay,type,mobile},i)=>(
          <motion.div
            key={i}
            className={`absolute ${size} ${mobile ? '' : 'hidden lg:block'}`}
            style={{top,left,right}}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.15, 0.08, 0.2, 0],
              scale: [0.8, 1, 1.1, 0.95, 1.05],
              rotate: [0, 60, 120, 180, 240, 300, 360],
              x: [0, 15, -10, 20, 0],
              y: [0, -20, 10, -15, 0]
            }}
            transition={{
              duration: 35 + delay * 3,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
          >
            {type === "ring" && (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/5 via-cyan-400/8 to-sky-400/5 blur-lg" />
                <div className="absolute inset-4 rounded-full border-2 bg-gradient-to-br from-blue-500/3 via-transparent to-cyan-500/3 backdrop-blur-sm"
                     style={{
                       background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.12), rgba(14, 165, 233, 0.08), rgba(59, 130, 246, 0.08))',
                       borderColor: 'rgba(59, 130, 246, 0.15)'
                     }}>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/5 to-transparent" />
                </div>
              </div>
            )}
            
            {type === "solid" && (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/8 via-blue-400/12 to-indigo-400/8 blur-xl opacity-40" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/12 via-cyan-400/18 to-sky-400/12 backdrop-blur-sm border border-white/8">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/8 via-transparent to-cyan-200/5" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-cyan-300/60 to-blue-300/60 rounded-full" />
                </div>
              </div>
            )}
            
            {type === "dotted" && (
              <div className="relative w-full h-full">
                {[...Array(6)].map((_, dotIndex) => {
                  const angle = dotIndex * 60;
                  const radius = 24;
                  return (
                    <motion.div
                      key={dotIndex}
                      className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        x: Math.cos((angle * Math.PI) / 180) * radius,
                        y: Math.sin((angle * Math.PI) / 180) * radius,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [0.5, 1, 0.5],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{
                        duration: 12,
                        delay: dotIndex * 0.3 + delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-sm" />
              </div>
            )}
            
            {type === "gradient" && (
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute inset-0 rounded-full opacity-15"
                  style={{
                    background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.15), rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.1))'
                  }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/8 via-blue-100/5 to-cyan-100/8 dark:from-blue-400/5 dark:via-cyan-400/3 dark:to-sky-400/5 backdrop-blur-sm border border-white/10">
                  {[...Array(2)].map((_, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full"
                      animate={{
                        x: [0, 15, -10, 18, 0],
                        y: [0, -18, 10, -15, 0],
                        opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
                        scale: [0.5, 1, 0.7, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 8 + particleIndex * 2,
                        delay: particleIndex * 1.5 + delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        top: `${40 + particleIndex * 20}%`,
                        left: `${30 + particleIndex * 25}%`
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 grid-pattern"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Subtle Radial Gradient Spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-400/5 via-cyan-400/3 to-transparent dark:from-blue-400/10 dark:via-cyan-400/5 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/5 via-sky-400/3 to-transparent dark:from-cyan-400/10 dark:via-sky-400/5 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/3 via-transparent to-transparent dark:from-blue-500/8 dark:via-transparent dark:to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content Section */}
      <section className="h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center justify-center -mt-8 sm:-mt-12 lg:-mt-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              
              {/* Text Column - Always first on mobile, first on desktop */}
              <motion.div className="text-center lg:text-left px-2 sm:px-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-3 md:mb-4"
                >
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs md:text-sm font-medium">
                    👋 Hello, I&apos;m Sachin Khoja
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 md:mb-4 leading-tight min-h-[2.5em] sm:min-h-[1em] lg:min-h-[2.5em]"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 dark:from-white dark:via-blue-200 dark:to-cyan-200 bg-clip-text text-transparent" style={{lineHeight: '1.25em'}}>
                    {displayText}
                    <motion.span 
                      className="text-blue-500 dark:text-cyan-400"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="hidden lg:block text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  I&apos;m a Software Engineer specializing in full-stack development, with expertise in building scalable applications,
                  microservices architecture, and cloud solutions. IIT Kharagpur graduate with experience at Vellex Computing, National Health Authority, and more.
                </motion.p>

                {/* Mobile Terminal - Replaces text description on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="lg:hidden mb-4 md:mb-6 w-full max-w-md mx-auto"
                >
                  <div className="rounded-lg border border-gray-700/50 bg-gray-900/95 shadow-xl overflow-hidden backdrop-blur-sm" style={{textAlign: 'left'}}>
                    <div className="flex items-center justify-between px-3 py-1.5 bg-gray-800/80 border-b border-gray-700/50">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-300 text-xs font-mono">
                        <Terminal className="w-3 h-3" />
                        <span>zsh</span>
                      </div>
                      <div className="flex gap-1 opacity-60">
                        <Maximize2 className="w-2.5 h-2.5 text-gray-400" />
                        <X className="w-2.5 h-2.5 text-gray-400" />
                      </div>
                    </div>
                    <div 
                      className="p-3 h-36 overflow-y-auto bg-gray-900/60 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
                      style={{
                        scrollBehavior: 'smooth'
                      }}
                    >
                      <pre className="text-green-400 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                        {terminalText}
                        <motion.span 
                          className="text-green-400"
                          animate={{ opacity: showCursor ? 1 : 0 }}
                          transition={{ duration: 0.1 }}
                        >
                          ▊
                        </motion.span>
                      </pre>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="hidden lg:flex flex-col sm:flex-row gap-2 md:gap-3 justify-center lg:justify-start mb-4 md:mb-6"
                >
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      View My Work
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto px-4 py-2.5 md:px-6 md:py-3 border border-border/50 hover:border-primary/50 rounded-full transition-all duration-300 flex items-center justify-center gap-2 glass-effect text-sm md:text-base"
                    >
                      Contact Me
                      <Mail className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="hidden lg:flex justify-center lg:justify-start gap-3 md:gap-4 mb-8 lg:mb-0"
                >
                  {[
                    { icon: Github, href: "https://github.com/invincible009", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:sachinkhoja18@gmail.com", label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 md:p-2 rounded-full bg-accent/50 hover:bg-accent transition-colors border border-border/20 hover:border-primary/30"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="sr-only">{label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Enhanced Terminal Column - Hidden on mobile, shown on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
              >
                <div className="rounded-lg md:rounded-xl border border-gray-700/50 bg-gray-900/95 shadow-xl md:shadow-2xl overflow-hidden backdrop-blur-sm">
                  <div className="flex items-center justify-between px-3 py-1.5 md:px-4 md:py-2 bg-gray-800/80 border-b border-gray-700/50">
                    <div className="flex gap-1.5 md:gap-2">
                      <motion.span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full" whileHover={{ scale: 1.2 }} />
                      <motion.span className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full" whileHover={{ scale: 1.2 }} />
                      <motion.span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full" whileHover={{ scale: 1.2 }} />
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-gray-300 text-xs md:text-sm font-mono">
                      <Terminal className="w-3 h-3 md:w-4 md:h-4" />
                      <span>portfolio — zsh</span>
                    </div>
                    <div className="flex gap-1 opacity-60">
                      <Maximize2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                      <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400" />
                    </div>
                  </div>
                  <div 
                    ref={terminalContentRef}
                    className="p-3 md:p-4 h-48 sm:h-56 md:h-64 overflow-y-auto bg-gray-900/60 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
                    style={{
                      scrollBehavior: 'smooth'
                    }}
                  >
                    <pre className="text-green-400 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
                      {terminalText}
                      <motion.span 
                        className="text-green-400"
                        animate={{ opacity: showCursor ? 1 : 0 }}
                        transition={{ duration: 0.1 }}
                      >
                        ▊
                      </motion.span>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Action Buttons at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="lg:hidden px-4 pb-4 flex-shrink-0"
        >
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                View My Work
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 border border-border/50 hover:border-primary/50 rounded-full transition-all duration-300 flex items-center justify-center gap-2 glass-effect text-sm"
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </motion.button>
            </Link>
            
            {/* Mobile Social Media Icons */}
            <div className="flex justify-center gap-4 mt-2 pt-3 border-t border-border/20">
              {[
                { icon: Github, href: "https://github.com/invincible009", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/sachin-kgp", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sachinkhoja18@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent/50 hover:bg-accent transition-colors border border-border/20 hover:border-primary/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Marquee at Bottom */}
        <div className="relative py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 flex-shrink-0">
          <div className="overflow-hidden mask-gradient">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              className="flex gap-2 md:gap-3 whitespace-nowrap"
            >
              {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 skill-tag rounded-full font-medium shadow-lg backdrop-blur-sm text-xs md:text-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    transition: { duration: 0.01 }
                  }}
                >
                  <span className="flex items-center gap-1.5 md:gap-2">
                    <span className="text-sm md:text-base">{<TechIcon icon={skill.icon} title={skill.name} />}</span>
                    <span>{skill.name}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}