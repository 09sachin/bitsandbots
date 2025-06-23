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

// Projects data with detailed information
const projects = [
  {
    id: 1,
    title: "Regulatory Data Scraping Engine",
    description: "AI-powered scraping engine collecting regulatory data from 500+ U.S. utility sources with semantic search and NLP capabilities.",
    longDescription: `
This comprehensive regulatory data scraping engine represents a sophisticated solution for monitoring and analyzing utility regulations across the United States. The system combines traditional web scraping techniques with cutting-edge AI technologies to provide real-time insights into regulatory changes.

## Key Features

### Intelligent Data Collection
- **Multi-source Integration**: Monitors 500+ regulatory websites across all 50 states
- **Dynamic Content Handling**: Uses both BeautifulSoup and Selenium for JavaScript-heavy sites
- **Smart Rate Limiting**: Implements hierarchical token bucket algorithms to respect server limits
- **Proxy Rotation**: AWS-based proxy infrastructure ensures reliable access

### AI-Powered Processing
- **Document Classification**: Custom NLP models categorize documents by type and relevance
- **Entity Extraction**: Identifies key regulatory entities, dates, and compliance requirements
- **Semantic Search**: Vector embeddings enable intelligent content discovery
- **Quality Assessment**: ML models validate document completeness and accuracy

### Real-time Analytics
- **Change Detection**: Monitors regulatory updates in real-time
- **Impact Analysis**: Assesses potential business impact of regulatory changes
- **Compliance Tracking**: Maintains compliance calendars and deadlines
- **Automated Alerts**: Notifies stakeholders of critical regulatory updates

## Technical Implementation

The architecture follows a microservices pattern with:
- **Scraping Layer**: Distributed scrapers with fault tolerance
- **Processing Pipeline**: Kafka-based streaming for real-time processing
- **AI Services**: Containerized ML models for scalable inference
- **Data Layer**: PostgreSQL for structured data, Elasticsearch for search
- **API Gateway**: RESTful APIs with GraphQL for complex queries

## Impact and Results

- **500+ sources** monitored continuously
- **99.5% uptime** with automatic failover
- **10,000+ documents** processed daily
- **25% improvement** in compliance accuracy
- **50ms average** response time for searches
    `,
    category: "AI/ML",
    technologies: ["Python", "NLP", "Vector Embeddings", "Semantic Search", "AWS", "Kafka", "PostgreSQL", "Elasticsearch"],
    image: "/api/placeholder/600/400",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    status: "In Production",
    timeline: "6 months",
    team: "4 engineers",
    role: "Lead Developer",
    company: "Vellex Computing",
    year: "2024",
    challenges: [
      "Handling rate limits across 500+ diverse websites",
      "Building scalable NLP pipeline for real-time processing",
      "Ensuring 99.5% uptime for critical regulatory monitoring",
      "Developing semantic search with high accuracy"
    ],
    achievements: [
      "Successfully monitors 500+ regulatory sources",
      "Processes 10,000+ documents daily",
      "Achieved 25% improvement in compliance accuracy",
      "Maintains 50ms average search response time"
    ],
    keyTechnologies: {
      "Python": "Core language for scraping and ML pipelines",
      "NLP": "Custom models for document classification and entity extraction",
      "Vector Embeddings": "Semantic search and document similarity",
      "AWS": "Cloud infrastructure and serverless components",
      "Kafka": "Real-time streaming and event processing",
      "PostgreSQL": "Structured data storage and relationships",
      "Elasticsearch": "Full-text search and analytics"
    }
  },
  {
    id: 2,
    title: "Healthcare Platform Backend",
    description: "High-throughput microservices backend for India's digital health ecosystem with face match API handling 10,000 requests/second.",
    longDescription: `
The Healthcare Platform Backend serves as the core infrastructure for India's digital health ecosystem, supporting millions of users across the country. This mission-critical system handles sensitive healthcare data while maintaining the highest standards of security, performance, and reliability.

## System Overview

### Architecture
- **Microservices Design**: 15+ independent services with clear boundaries
- **API Gateway**: Centralized routing, authentication, and rate limiting
- **Database Strategy**: PostgreSQL for ACID compliance, Redis for caching
- **Message Queue**: Apache Kafka for asynchronous processing
- **Container Orchestration**: Kubernetes with auto-scaling capabilities

### Core Services
- **Face Match API**: Biometric authentication for patient verification
- **AHIPR Portal**: Healthcare provider registration and management
- **Document Processing**: Automated verification of medical documents
- **Notification Service**: Multi-channel communication (SMS, Email, Push)
- **Analytics Engine**: Real-time healthcare insights and reporting

## Technical Deep Dive

### High-Performance Face Match API
Built with Flask and optimized for extreme throughput:
- **10,000 requests/second** sustained performance
- **Sub-100ms** response times for face matching
- **99.99% accuracy** in biometric verification
- **Load balancing** across multiple GPU instances
- **Caching strategy** for frequent matches

### Database Optimization
- **Connection pooling** with HikariCP
- **Read replicas** for analytics workloads
- **Partitioning** for large datasets
- **Indexing strategy** optimized for query patterns
- **Backup and recovery** with point-in-time restoration

### Security Implementation
- **OAuth 2.0** for API authentication
- **Role-based access control** (RBAC)
- **Data encryption** at rest and in transit
- **Audit logging** for compliance
- **HIPAA compliance** for healthcare data

## Performance Metrics

- **10,000 RPS** sustained throughput
- **99.9% uptime** SLA achievement
- **<100ms** average response time
- **100+ man-hours** saved through automation
- **Zero security incidents** in production

## Compliance and Standards

- **HIPAA compliance** for healthcare data protection
- **ISO 27001** security standards
- **FHIR R4** for healthcare interoperability
- **Government audit** requirements met
- **Data residency** compliance for Indian regulations
    `,
    category: "Backend",
    technologies: ["Spring Boot", "Flask", "PostgreSQL", "Microservices", "Java", "Redis", "Kafka", "Kubernetes"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://nha.gov.in",
    githubUrl: null,
    featured: true,
    status: "In Production",
    timeline: "12 months",
    team: "8 engineers",
    role: "Senior Backend Engineer",
    company: "National Health Authority",
    year: "2023-2024",
    challenges: [
      "Achieving 10,000 RPS with sub-100ms response times",
      "Ensuring HIPAA compliance for sensitive healthcare data",
      "Building fault-tolerant microservices architecture",
      "Optimizing face match accuracy to 99.99%"
    ],
    achievements: [
      "Successfully handles 10,000 requests per second",
      "Maintained 99.9% uptime in production",
      "Saved 100+ man-hours through automation",
      "Zero security incidents in 12 months"
    ],
    keyTechnologies: {
      "Spring Boot": "Primary framework for microservices development",
      "Flask": "Lightweight service for face matching API",
      "PostgreSQL": "Primary database for healthcare records",
      "Java": "Main programming language for business logic",
      "Redis": "Caching layer for improved performance",
      "Kafka": "Event streaming for real-time processing",
      "Kubernetes": "Container orchestration and scaling"
    }
  },
  {
    id: 3,
    title: "Car Recommendation System",
    description: "ML-powered recommendation engine using LightFM with real-time data processing through Apache Kafka and Debezium CDC pipelines.",
    longDescription: `
The Car Recommendation System revolutionizes how customers discover and purchase vehicles by leveraging advanced machine learning algorithms and real-time data processing. This system provides personalized recommendations based on user behavior, preferences, and market trends.

## Machine Learning Architecture

### Collaborative Filtering with LightFM
- **Hybrid Approach**: Combines collaborative and content-based filtering
- **User-Item Matrix**: Sparse matrix factorization for scalability
- **Feature Engineering**: Rich user and item features for better recommendations
- **Cold Start Problem**: Effective handling of new users and vehicles
- **Model Training**: Regular retraining with fresh data

### Real-time Data Pipeline
- **Change Data Capture**: Debezium monitors database changes
- **Event Streaming**: Kafka processes user interactions in real-time
- **Feature Store**: Real-time feature computation and storage
- **Model Serving**: Low-latency inference for live recommendations
- **A/B Testing**: Continuous experimentation framework

## System Components

### Data Ingestion
- **User Interactions**: Clicks, views, test drives, purchases
- **Vehicle Inventory**: Real-time inventory updates
- **Market Data**: Pricing trends and competitor analysis
- **External APIs**: Third-party automotive data sources

### ML Pipeline
- **Data Preprocessing**: Feature extraction and normalization
- **Model Training**: Distributed training on Spark clusters
- **Model Validation**: Cross-validation and holdout testing
- **Model Deployment**: Containerized serving with auto-scaling
- **Performance Monitoring**: Real-time model performance tracking

### Recommendation API
- **Real-time Serving**: Sub-50ms response times
- **Personalization**: User-specific recommendations
- **Contextual Filtering**: Location, budget, and preference filters
- **Explanation**: Interpretable recommendations with reasoning
- **Fallback Strategy**: Content-based fallbacks for edge cases

## Technical Implementation

### LightFM Configuration
\`\`\`python
# Hybrid matrix factorization model
model = LightFM(
    no_components=150,
    loss='warp',
    learning_rate=0.05,
    item_alpha=1e-6,
    user_alpha=1e-6
)

# Feature matrices for users and items
user_features = build_user_features(user_data)
item_features = build_item_features(vehicle_data)

# Training with user-item interactions
model.fit(
    interactions=interaction_matrix,
    user_features=user_features,
    item_features=item_features,
    epochs=50,
    num_threads=8
)
\`\`\`

### Real-time Processing
- **Kafka Topics**: User events, inventory updates, recommendations
- **Stream Processing**: Kafka Streams for real-time aggregations
- **Feature Updates**: Live feature computation and caching
- **Model Updates**: Incremental learning for fresh recommendations

## Performance Metrics

- **Recommendation Accuracy**: 85% precision@10
- **Click-through Rate**: 12% improvement over baseline
- **Conversion Rate**: 8% increase in purchase conversions
- **Response Time**: <50ms for recommendation API
- **Data Freshness**: <1 second for real-time updates

## Business Impact

- **Revenue Increase**: 15% boost in sales attributed to recommendations
- **User Engagement**: 25% increase in time spent on platform
- **Inventory Turnover**: 20% faster vehicle sales
- **Customer Satisfaction**: 4.5/5 rating for recommendation quality
    `,
    category: "AI/ML",
    technologies: ["Python", "LightFM", "Apache Kafka", "gRPC", "AWS", "Spark", "Redis", "Docker"],
    image: "/api/placeholder/600/400",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    status: "Completed",
    timeline: "8 months",
    team: "5 engineers",
    role: "ML Engineer",
    company: "Spinny",
    year: "2022",
    challenges: [
      "Building scalable real-time recommendation system",
      "Handling cold start problem for new users and vehicles",
      "Optimizing LightFM model for sub-50ms inference",
      "Implementing effective A/B testing framework"
    ],
    achievements: [
      "Achieved 85% precision@10 in recommendations",
      "Increased conversion rate by 8%",
      "Maintained <50ms API response times",
      "Generated 15% revenue increase through personalization"
    ],
    keyTechnologies: {
      "Python": "Core language for ML pipeline development",
      "LightFM": "Hybrid recommendation algorithm",
      "Apache Kafka": "Real-time event streaming and processing",
      "gRPC": "High-performance API communication",
      "AWS": "Cloud infrastructure for scalable deployment",
      "Spark": "Distributed computing for large-scale training",
      "Redis": "Feature store and caching layer"
    }
  }
  // Add more detailed project data as needed...
]

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

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))
  
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