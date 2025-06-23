"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Calendar, MapPin, Coffee, Code, Users, Trophy, GraduationCap, Award } from "lucide-react"

export default function About() {
  const timeline = [
    {
      year: "2018",
      title: "Started at IIT Kharagpur",
      description: "Began Dual Degree program in Ocean Engineering and Naval Architecture with Minor in Mathematics and Computing",
      icon: GraduationCap
    },
    {
      year: "2020",
      title: "First Internship & Freelance Work",
      description: "Backend development internship at Buddin, followed by freelance projects at Cuvette.tech and QuantSolar",
      icon: Code
    },
    {
      year: "2021",
      title: "TimelyAI & Competitive Programming",
      description: "Built appointment booking platform, joined Spinny as SDE intern, started competitive programming journey",
      icon: Users
    },
    {
      year: "2022",
      title: "DevOps Focus & Meta Hacker Cup",
      description: "DevOps internships at Legato Health and Koo India, qualified for Meta Hacker Cup Round 2",
      icon: Trophy
    },
    {
      year: "2023",
      title: "Graduated from IIT Kharagpur",
      description: "Completed Dual Degree with CGPA 8.39/10, joined National Health Authority as Software Engineer",
      icon: GraduationCap
    },
    {
      year: "2024",
      title: "Software Engineer at Vellex Computing",
      description: "Currently working on regulatory data scraping engines and AI-powered solutions in San Francisco",
      icon: Users
    }
  ]

  const stats = [
    { label: "CGPA at IIT KGP", value: "8.39", icon: GraduationCap },
    { label: "Years of Experience", value: "4+", icon: Calendar },
    { label: "Companies Worked", value: "10", icon: Users },
    { label: "Codeforces Rating", value: "1501", icon: Trophy }
  ]

  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "Java", "C++", "SQL", "Bash"] },
    { category: "Frameworks", items: ["Django", "Flask", "Spring Boot", "React.js", "LangChain", "gRPC"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
    { category: "Cloud & Tools", items: ["AWS", "Docker", "Kubernetes", "Kafka", "Git", "Linux"] }
  ]

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
              About Sachin Khoja
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              IIT Graduate & Software Engineer
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m a Software Engineer from IIT Kharagpur with expertise in full-stack development, 
            microservices architecture, and AI/ML applications. Currently building scalable solutions at Vellex Computing.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 glass-effect rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey began at IIT Kharagpur, where I pursued a Dual Degree in Ocean Engineering and Naval Architecture 
                  with a Minor in Mathematics and Computing, achieving a CGPA of 8.39/10.
                </p>
                <p>
                  During my time at IIT, I developed a passion for competitive programming, achieving a rating of 1501 
                  (Specialist) on Codeforces and qualifying for Meta Hacker Cup Round 2 by securing rank 617 out of 27,603 participants.
                </p>
                <p>
                  My professional journey spans across multiple domains - from building recommendation systems at Spinny 
                  to developing healthcare platforms at National Health Authority, and currently working on regulatory 
                  data solutions at Vellex Computing in San Francisco.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-border/30 glass-effect p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <span className="text-muted-foreground">IIT Kharagpur Graduate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span className="text-muted-foreground">Full-Stack Engineer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-blue-400" />
                    <span className="text-muted-foreground">Competitive Programmer</span>
                  </div>
                  
                  <div className="pt-6">
                    <h3 className="font-semibold mb-3 text-foreground">Core Expertise</h3>
                    <div className="space-y-2">
                      {["Microservices Architecture", "AI/ML Applications", "Cloud Solutions", "System Design"].map((expertise) => (
                        <div key={expertise} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                          <span className="text-sm text-muted-foreground">{expertise}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-muted-foreground">
              Key milestones in my development career
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-cyan-500" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass-effect p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-accent/30 border border-border/30 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 