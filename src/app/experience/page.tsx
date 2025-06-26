"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Calendar, MapPin, ExternalLink, Award, Users, TrendingUp } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Vellex Computing",
      position: "Software Engineer",
      duration: "Oct 2024 - Present",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      description: "Building regulatory data solutions for the energy sector, developing scraping engines and AI-powered tools for utility compliance.",
      achievements: [
        "Engineered a scraping engine to collect regulatory data from 500+ U.S. utility, state, and county federal sources",
        "Automated tariff and interconnection rule extraction with custom classifiers, reducing manual data handling by 70%",
        "Implemented semantic search with NLP and vector embeddings, boosting rule retrieval precision by 80%",
        "Built a dynamic knowledge graph linking 500+ utilities, programs, and compliance rules for real-time querying",
        "Delivered MVP enabling energy developers to file interconnection applications, improving workflow efficiency by 60%"
      ],
      technologies: ["Python", "NLP", "Vector Embeddings", "Knowledge Graphs", "Semantic Search"],
      website: "https://vellex.com"
    },
    {
      id: 2,
      company: "National Health Authority",
      position: "Software Engineer",
      duration: "Jul 2023 - Sep 2024",
      location: "New Delhi, India",
      type: "Full-time",
      description: "Developed healthcare platforms and APIs for India's digital health ecosystem, focusing on performance optimization and microservices architecture.",
      achievements: [
        "Designed a lightweight flask service for the face match API, achieving a high throughput of 10,000 requests per second",
        "Architected the AHIPR portal's backend in Spring Boot, economizing over 100 man-hours in manual workloads",
        "Accelerated SQL read query execution time from 5s to 500ms using optimized joins, materialized views, and indexing",
        "Designed a microservices backend for the CAPF application using Python and Java, and integrated health checks",
        "Devised a rate limiting solution using the Hierarchical Token Bucket algorithm to optimize system performance",
        "Developed a RAG pipeline with hybrid search, improving faithfulness by 25% and relevancy by 30% (RAGAS)",
        "Built a hybrid search with BM25, vector search, and entity linking, boosting recall by 20% and precision by 15%"
      ],
      technologies: ["Spring Boot", "Flask", "Python", "Java", "PostgreSQL", "RAG", "Microservices"],
      website: "https://nha.gov.in"
    },
    {
      id: 3,
      company: "TimelyAI",
      position: "Software Engineer - Full Stack",
      duration: "Jan 2023 - Jul 2023",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Developed full-stack solutions for AI-powered business automation, focusing on web scraping and cloud infrastructure optimization.",
      achievements: [
        "Optimized back-end services on AWS, reducing resource usage by more than 60% by utilising efficient data caching",
        "Automated Google Maps scraping with Selenium based user click simulation, increasing lead conversions by 30%",
        "Orchestrated AWS Lambda web scraping solution handling over 10,000 data points daily with network calls and BS4",
        "Crafted a Retool dashboard integrating microservices to optimize Google Map Profiles, reducing update time by 80%",
        "Enhanced lead extraction and processing with AWS Step Functions and Athena, reducing processing time by 90%"
      ],
      technologies: ["AWS Lambda", "Selenium", "Retool", "AWS Step Functions", "BeautifulSoup4"],
      website: null
    },
    {
      id: 4,
      company: "Koo India",
      position: "DevOps Engineer",
      duration: "Dec 2022 - Jan 2023",
      location: "Bangalore, India",
      type: "Internship",
      description: "Worked on DevOps practices and infrastructure optimization for India's social media platform.",
      achievements: [
        "Implemented infrastructure monitoring and alerting systems for production environments",
        "Optimized CI/CD pipelines for faster deployment cycles",
        "Automated deployment processes reducing manual intervention by 50%",
        "Collaborated with development teams to implement best practices for containerization"
      ],
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring", "Infrastructure"],
      website: "https://kooapp.com"
    },
    {
      id: 5,
      company: "Legato Health Technologies",
      position: "Software Engineer - DevOps",
      duration: "May 2022 - Jul 2022",
      location: "Bangalore, India",
      type: "Internship",
      description: "Mastered containerization, orchestration, build automation, deployments, and CI/CD pipelines for healthcare technology solutions.",
      achievements: [
        "Automated builds and deployments triggered by git commits/merge using Bamboo and Bitbucket, reducing deployment time by 60%",
        "Integrated GitOps in Kubernetes using ArgoCD to enhance existing CI/CD pipeline by adding blue-green and canary deployments",
        "Made git a single source of truth and reduced rollback time by 60% through GitOps implementation",
        "Mastered containerization and orchestration technologies for scalable healthcare applications"
      ],
      technologies: ["Git", "Docker", "Kubernetes", "Bamboo", "GitOps", "ArgoCD", "AWS", "Python"],
      website: null
    },
    {
      id: 6,
      company: "Spinny",
      position: "Software Development Engineer",
      duration: "Nov 2021 - May 2022",
      location: "Gurugram, India",
      type: "Internship",
      description: "Worked on data engineering and machine learning systems for automotive recommendations and real-time data processing.",
      achievements: [
        "Engineered CDC pipelines for real-time data lakes using Apache Kafka and Debezium, slashing time lag by 70%",
        "Formulated a car recommendation algorithm using lightFM with regular retraining cycles, reducing costs by over 60%",
        "Deployed the recommendation service as a Python gRPC micro-service on AWS, increasing 25% in click-through rates",
        "Leveraged Protocol Buffers for efficient serialization, reducing latency to 50ms by leveraging HTTP/2 communication"
      ],
      technologies: ["Apache Kafka", "Debezium", "lightFM", "gRPC", "Protocol Buffers", "AWS"],
      website: "https://spinny.com"
    },
    {
      id: 7,
      company: "TimelyAI",
      position: "Full Stack Engineer",
      duration: "May 2021 - Jul 2021",
      location: "Bangalore, India", 
      type: "Contract",
      description: "Built appointment booking platform with React frontend and FastAPI backend, integrating Google Calendar API and OAuth authentication.",
      achievements: [
        "Developed responsive React.js frontend with modern UI/UX for appointment scheduling",
        "Built FastAPI backend with OAuth integration for secure user authentication",
        "Integrated Google Calendar API for seamless calendar synchronization",
        "Implemented real-time notifications and booking confirmations"
      ],
      technologies: ["React.js", "FastAPI", "Google Calendar API", "OAuth", "Python", "JavaScript"],
      website: null
    },
    {
      id: 8,
      company: "QuantSolar",
      position: "Full Stack Developer",
      duration: "Jan 2021 - Feb 2021",
      location: "Remote",
      type: "Freelance",
      description: "Developed complete full-stack website for solar energy company with modern design and functionality.",
      achievements: [
        "Built responsive website with modern design showcasing solar solutions",
        "Implemented contact forms and lead generation functionality",
        "Integrated CMS for easy content management",
        "Optimized for SEO and mobile responsiveness"
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "CSS3", "JavaScript"],
      website: null
    },
    {
      id: 9,
      company: "Cuvette.tech",
      position: "Web Developer",
      duration: "Sep 2020 - Nov 2020",
      location: "Remote",
      type: "Freelance",
      description: "Developed website for restaurant chain with online ordering system and modern user interface.",
      achievements: [
        "Created responsive website for restaurant chain with online menu system",
        "Implemented order management and customer portal functionality",
        "Designed modern UI/UX focusing on user experience and conversion",
        "Integrated payment gateway for online transactions"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      website: null
    },
    {
      id: 10,
      company: "Buddin",
      position: "Backend Developer",
      duration: "May 2020 - Aug 2020",
      location: "Remote",
      type: "Internship",
      description: "Built seeker-provider app backend using Django REST Framework for connecting service seekers with providers.",
      achievements: [
        "Developed REST API using Django REST Framework for service marketplace",
        "Implemented user authentication and authorization system",
        "Created matching algorithm for connecting seekers with service providers",
        "Built admin dashboard for platform management and analytics"
      ],
      technologies: ["Django", "Django REST Framework", "Python", "PostgreSQL", "REST API"],
      website: null
    }
  ]

  const stats = [
    {
      label: "Years Experience",
      value: "4+",
      icon: Calendar,
      description: "Professional development"
    },
    {
      label: "Companies Worked",
      value: "10",
      icon: TrendingUp,
      description: "Diverse experience"
    },
    {
      label: "Performance Improvements",
      value: "90%",
      icon: Users,
      description: "Average optimization"
    },
    {
      label: "Systems Built",
      value: "15+",
      icon: Award,
      description: "Production systems"
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
              Professional Journey
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey across startups and enterprises, building scalable solutions and driving impactful results.
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-effect rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
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
              Professional Timeline
            </h2>
            <p className="text-muted-foreground">
              My career progression and key achievements at each role
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-sky-500" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-12 glass-effect p-6 rounded-2xl">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="mb-4 lg:mb-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                          {exp.website && (
                            <a 
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="text-lg font-semibold text-primary mb-2">{exp.company}</div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <span className="px-2 py-1 bg-accent/30 border border-border/30 rounded text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent/30 border border-border/30 rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and exciting projects. 
              Let&apos;s connect and see how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-border/50 hover:border-primary/50 rounded-lg font-medium transition-all duration-300"
              >
                View My Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 