"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Calendar, Clock, Eye, ArrowLeft, Tag, Share2 } from "lucide-react"
import Link from "next/link"
import { marked } from 'marked'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  views: number
  tags: string[]
  featured: boolean
}

interface BlogPostClientProps {
  post: BlogPost | null
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  if (!post) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 px-4 text-center">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
          <Link href="/blog" className="text-blue-400 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </main>
    )
  }

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
      
      {/* Article Header */}
      <article className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent"
          >
            {post.title}
          </motion.h1>

          {/* Article Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border/30"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()} views
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent/30 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-blue-400 prose-pre:bg-muted prose-blockquote:text-muted-foreground prose-hr:border-border"
          >
            <div dangerouslySetInnerHTML={{ __html: marked(post.content.trim()) }} />
          </motion.div>
        </div>
      </article>
    </main>
  )
} 