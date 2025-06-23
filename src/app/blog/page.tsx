"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Calendar, Clock, Search, Tag, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "AI/ML", "Backend", "Competitive Programming", "System Design", "Career", "Tutorial"]

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Scraping Engines for Regulatory Data",
      excerpt: "Learn how to build robust data scraping systems that can handle 500+ sources with AI-powered classification and semantic search.",
      content: "In this comprehensive guide, we'll explore building enterprise-grade scraping engines with NLP capabilities...",
      category: "AI/ML",
      author: "Sachin Khoja",
      publishedAt: "2024-01-15",
      readTime: "12 min read",
      views: 1248,
      tags: ["Python", "NLP", "Web Scraping", "AI/ML"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Building Intelligent AI Agents with LangChain",
      excerpt: "A comprehensive guide to creating autonomous AI agents that can reason, plan, and execute complex tasks using LangChain framework.",
      content: "Discover how to build sophisticated AI agents that can interact with external tools, maintain memory, and make intelligent decisions...",
      category: "AI/ML",
      author: "Sachin Khoja",
      publishedAt: "2024-01-10",
      readTime: "16 min read",
      views: 2156,
      tags: ["LangChain", "AI Agents", "Python", "OpenAI", "RAG"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Designing Hierarchical Rate Limiting Systems",
      excerpt: "Deep dive into implementing scalable rate limiting solutions using Token Bucket algorithms for high-throughput applications.",
      content: "Learn how to design and implement sophisticated rate limiting systems that can handle millions of requests while maintaining fairness...",
      category: "System Design",
      author: "Sachin Khoja",
      publishedAt: "2024-01-05",
      readTime: "14 min read",
      views: 1879,
      tags: ["System Design", "Rate Limiting", "Performance", "Algorithms", "Scalability"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Building High-Performance APIs with Spring Boot",
      excerpt: "Design patterns and optimization techniques for building APIs that handle 10,000+ requests per second.",
      category: "Backend",
      author: "Sachin Khoja",
      publishedAt: "2023-12-28",
      readTime: "15 min read",
      views: 1567,
      tags: ["Spring Boot", "Performance", "Microservices"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "RAG Systems: Improving AI Accuracy with Hybrid Search",
      excerpt: "Deep dive into building retrieval-augmented generation systems with BM25, vector search, and entity linking.",
      category: "AI/ML",
      author: "Sachin Khoja",
      publishedAt: "2023-12-20",
      readTime: "18 min read",
      views: 892,
      tags: ["RAG", "LangChain", "Vector Search", "NLP"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Microservices Architecture: Lessons from Healthcare Platforms",
      excerpt: "Designing resilient microservices for critical healthcare systems with health checks and rate limiting.",
      category: "System Design",
      author: "Sachin Khoja",
      publishedAt: "2023-12-15",
      readTime: "14 min read",
      views: 1834,
      tags: ["Microservices", "System Design", "Healthcare"],
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
              Tech Blog
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Thoughts & Insights
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Sharing my experiences, learnings, and insights about web development, technology trends, and career growth in the tech industry.
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Featured Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white/80 text-sm">
                    <Eye className="w-4 h-4" />
                    {post.views.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent/30 border border-border/30 rounded text-xs text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.id}`}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary font-medium group-hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            All Articles
          </motion.h2>
          
          {/* Search and Filters */}
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
                placeholder="Search articles..."
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
          
          {/* Posts Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group glass-effect rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-400">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white/70 text-xs">
                      <Eye className="w-3 h-3" />
                      {post.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-accent/30 border border-border/30 rounded text-xs text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-primary font-medium text-sm group-hover:text-primary/80 transition-colors"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter to get notified about new articles, tutorials, and insights about web development and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-effect rounded-lg border border-border/30 focus:border-primary/50 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 