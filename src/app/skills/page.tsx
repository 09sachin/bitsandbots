"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Code, Database, Cloud, Monitor, Smartphone, Zap } from "lucide-react"

// Import react-icons
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiGnubash,
  SiDjango,
  SiFlask,
  SiSpring,
  SiReact,
  SiGraphql,
  SiLangchain,
  SiKubernetes,
  SiDocker,
  SiAmazon,
  SiGit,
  SiRedis,
  SiApachekafka,
  SiElasticsearch
} from 'react-icons/si';
import { RiJavaLine } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi"; 
import { FcLinux } from "react-icons/fc";

// Tech Icon Component using react-icons
const TechIcon = ({ icon: Icon, title }: { icon: React.ComponentType<any>, title: string }) => {
  // Color mapping for better visibility
  const getIconColor = (iconTitle: string) => {
    const colorMap: { [key: string]: string } = {
      'Python': '#18ccf5',
      'JavaScript': '#f7df1e',
      'Java': '#f89820',
      'C++': '#18ccf5',
      'SQL': '#18ccf5',
      'Bash': '#4eaa25',
      'Django': 'green',
      'Flask': '#ff6b6b',
      'Spring Boot': '#6db33f',
      'React.js': '#61dafb',
      'gRPC': '#e10098',
      'LangChain': '#4c9aff',
      'Kubernetes': '#326ce5',
      'Docker': '#0db7ed',
      'AWS': '#ff9900',
      'Git': '#f05032',
      'Linux': '#ffffff',
      'Redis': '#dc382d',
      'Kafka': '#ff9500',
      'Elasticsearch': '#00bcd4'
    }
    return colorMap[iconTitle] || '#6b7280'
  }

  return (
    <Icon 
      className="w-6 h-6" 
      style={{ color: getIconColor(title) }}
      title={title}
    />
  )
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const skillCategories = [
    { name: "All", icon: Code, count: 20 },
    { name: "Languages", icon: Monitor, count: 6 },
    { name: "Frameworks", icon: Database, count: 6 },
    { name: "Tools", icon: Cloud, count: 8 }
  ]

  const skills = [
    // Languages/Databases
    { name: "Python", level: 95, category: "Languages", experience: "3+ years", icon: SiPython },
    { name: "JavaScript", level: 88, category: "Languages", experience: "3+ years", icon: SiJavascript },
    { name: "Java", level: 85, category: "Languages", experience: "2+ years", icon: RiJavaLine },
    { name: "C++", level: 82, category: "Languages", experience: "4+ years", icon: SiCplusplus },
    { name: "SQL", level: 90, category: "Languages", experience: "3+ years", icon: PiFileSql },
    { name: "Bash", level: 78, category: "Languages", experience: "2+ years", icon: SiGnubash },

    // Frameworks/Libraries
    { name: "Django", level: 88, category: "Frameworks", experience: "2+ years", icon: SiDjango },
    { name: "Flask", level: 92, category: "Frameworks", experience: "3+ years", icon: SiFlask },
    { name: "Spring Boot", level: 85, category: "Frameworks", experience: "2+ years", icon: SiSpring },
    { name: "React.js", level: 87, category: "Frameworks", experience: "3+ years", icon: SiReact },
    { name: "gRPC", level: 83, category: "Frameworks", experience: "1+ years", icon: SiGraphql },
    { name: "LangChain", level: 80, category: "Frameworks", experience: "1+ years", icon: SiLangchain },

    // Tools/Platforms
    { name: "Kubernetes", level: 82, category: "Tools", experience: "2+ years", icon: SiKubernetes },
    { name: "Docker", level: 88, category: "Tools", experience: "3+ years", icon: SiDocker },
    { name: "AWS", level: 90, category: "Tools", experience: "3+ years", icon: SiAmazon },
    { name: "Git", level: 92, category: "Tools", experience: "4+ years", icon: SiGit },
    { name: "Linux", level: 85, category: "Tools", experience: "3+ years", icon: FcLinux },
    { name: "Redis", level: 80, category: "Tools", experience: "2+ years", icon: SiRedis },
    { name: "Kafka", level: 78, category: "Tools", experience: "1+ years", icon: SiApachekafka },
    { name: "Elasticsearch", level: 75, category: "Tools", experience: "1+ years", icon: SiElasticsearch }
  ]

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500"
    if (level >= 80) return "from-blue-500 to-cyan-500"
    if (level >= 70) return "from-yellow-500 to-orange-500"
    return "from-red-500 to-blue-500"
  }

  const stats = [
    { label: "Programming Languages", value: "6", icon: Code },
    { label: "Frameworks & Libraries", value: "6", icon: Zap },
    { label: "Years of Experience", value: "3+", icon: Database },
    { label: "Tools & Platforms", value: "8", icon: Cloud }
  ]

  const achievements = [
    {
      title: "Codeforces Specialist",
      description: "Achieved rating of 1501 on Codeforces (invincible sachin 9)",
      icon: "🏆"
    },
    {
      title: "CodeChef Invincible",
      description: "Rating of 1848 on CodeChef (invincible009)",
      icon: "⭐"
    },
    {
      title: "Meta Hacker Cup",
      description: "Qualified for Round 2, rank 617 out of 27,603 in qualifying round 2022",
      icon: "🥇"
    },
    {
      title: "Google Kick-start",
      description: "Global rank 1033 out of 23,644 in Round E 2022",
      icon: "🎯"
    }
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
              Technical Expertise
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            My technical toolkit developed through professional experience at leading companies and competitive programming achievements.
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

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Competitive Programming Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl border border-border/30"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      : "glass-effect border border-border/30 hover:border-primary/50"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-effect p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <TechIcon icon={skill.icon} title={skill.name} />
                    <div>
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.experience}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{skill.level}%</div>
                    <div className="text-xs text-muted-foreground">Proficiency</div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                    />
                  </div>
                  <div className="absolute -top-1 right-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-75" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skill Distribution
            </h2>
            <p className="text-muted-foreground">
              Visual representation of my expertise across different technology stacks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-foreground">Frontend Development</h3>
              </div>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === "Frameworks").slice(0, 4).map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <TechIcon icon={skill.icon} title={skill.name} />
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted/30 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-foreground">Backend Development</h3>
              </div>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === "Languages").slice(0, 4).map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <TechIcon icon={skill.icon} title={skill.name} />
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted/30 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Leverage These Skills?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to apply these technologies to solve real-world problems. 
              Let&apos;s discuss how my skills can benefit your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Projects
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-border/50 hover:border-primary/50 rounded-lg font-medium transition-all duration-300"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 