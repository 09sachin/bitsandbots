import ProjectDetailClient from './ProjectDetailClient'

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

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(p => p.id === parseInt(id))
  
  return <ProjectDetailClient project={project as any || null} />
} 