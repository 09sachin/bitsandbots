"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Calendar, Clock, Eye, ArrowLeft, Tag, Share2 } from "lucide-react"
import Link from "next/link"
import { marked } from 'marked'

// Blog posts data (same as in blog page)
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Scraping Engines for Regulatory Data",
    excerpt: "Learn how to build robust data scraping systems that can handle 500+ sources with AI-powered classification and semantic search.",
    content: `
# Building Scalable Scraping Engines for Regulatory Data

## Introduction

In today's data-driven world, regulatory compliance requires access to vast amounts of information from multiple sources. At Vellex Computing, I built a sophisticated scraping engine that processes over 500 utility sources across the United States, combining traditional web scraping with AI-powered classification and semantic search capabilities.

## Architecture Overview

The system follows a modular architecture with these core components:

### 1. Data Collection Layer
- **Multi-source scraping**: BeautifulSoup and Selenium for dynamic content
- **Rate limiting**: Hierarchical token bucket implementation
- **Error handling**: Exponential backoff with circuit breakers
- **Proxy rotation**: AWS-based proxy pool for reliability

### 2. AI Processing Pipeline
- **NLP Classification**: Custom transformer models for document categorization
- **Entity Extraction**: Named Entity Recognition for key regulatory terms
- **Vector Embeddings**: Sentence transformers for semantic similarity
- **Quality Assessment**: ML models for content validation

### 3. Search and Retrieval
- **Hybrid Search**: Combining BM25 and vector similarity
- **Semantic Indexing**: FAISS for efficient vector operations
- **Real-time Updates**: Change detection and incremental indexing

## Implementation Details

### Web Scraping at Scale

\`\`\`python
import asyncio
import aiohttp
from bs4 import BeautifulSoup
from selenium import webdriver

class ScalingEngine:
    def __init__(self, max_concurrent=10):
        self.semaphore = asyncio.Semaphore(max_concurrent)
        self.session = aiohttp.ClientSession()
    
    async def scrape_source(self, url, source_config):
        async with self.semaphore:
            # Rate limiting and error handling
            await self.rate_limiter.acquire(source_config.domain)
            
            try:
                async with self.session.get(url) as response:
                    content = await response.text()
                    return self.parse_content(content, source_config)
            except Exception as e:
                await self.handle_error(e, url)
\`\`\`

### AI-Powered Classification

The system uses a multi-stage classification approach:

1. **Document Type Classification**: Regulatory notice, compliance update, enforcement action
2. **Regulatory Domain**: Environmental, financial, safety, etc.
3. **Priority Scoring**: ML model predicting regulatory impact

### Performance Optimizations

- **Async Processing**: 10,000+ documents processed concurrently
- **Caching Strategy**: Redis for frequently accessed documents
- **Database Optimization**: PostgreSQL with proper indexing
- **CDN Integration**: CloudFront for global content delivery

## Results and Impact

- **500+ sources** monitored daily
- **10,000+ documents** processed per day
- **99.5% uptime** with robust error handling
- **50ms average** search response time
- **25% improvement** in regulatory compliance accuracy

## Key Learnings

1. **Rate limiting is crucial** for sustainable scraping
2. **AI classification** significantly improves data quality
3. **Hybrid search** provides better relevance than either approach alone
4. **Monitoring and alerting** are essential for production systems

## Conclusion

Building a scalable scraping engine requires careful consideration of both technical and ethical factors. The combination of traditional web scraping techniques with modern AI capabilities creates powerful systems that can handle the complexity of regulatory data at scale.

The system continues to evolve, with ongoing improvements in AI accuracy, performance optimization, and coverage expansion.
    `,
    category: "AI/ML",
    author: "Sachin Khoja",
    publishedAt: "2024-01-15",
    readTime: "12 min read",
    views: 1248,
    tags: ["Python", "NLP", "Web Scraping", "AI/ML"],
    featured: true
  },
  {
    id: 2,
    title: "Building Intelligent AI Agents with LangChain",
    excerpt: "A comprehensive guide to creating autonomous AI agents that can reason, plan, and execute complex tasks using LangChain framework.",
    content: `
# Building Intelligent AI Agents with LangChain

## Introduction

AI agents represent the next frontier in artificial intelligence - systems that can reason, plan, and execute complex tasks autonomously. With LangChain's powerful framework, we can build sophisticated agents that interact with external tools, maintain memory, and make intelligent decisions.

## What are AI Agents?

AI agents are autonomous systems that can:
- **Perceive** their environment through various inputs
- **Reason** about the best course of action
- **Act** by using tools and executing plans
- **Learn** from their experiences and interactions

## LangChain Agent Architecture

### Core Components

1. **Agent Executor**: Orchestrates the agent's decision-making process
2. **Tools**: External functions the agent can call
3. **Memory**: Maintains conversation and task context
4. **LLM**: Large language model for reasoning and planning

### Agent Types

LangChain provides several agent types:
- **ReAct Agents**: Reason and Act in iterative cycles
- **Plan-and-Execute**: Create comprehensive plans before execution
- **OpenAI Functions**: Leverage function calling capabilities

## Building Your First Agent

### 1. Setting Up the Environment

\`\`\`python
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
from langchain.memory import ConversationBufferMemory
from langchain.tools import DuckDuckGoSearchRun

# Initialize the LLM
llm = OpenAI(temperature=0.7)

# Create memory for the agent
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)
\`\`\`

### 2. Defining Tools

\`\`\`python
# Web search tool
search = DuckDuckGoSearchRun()

# Custom calculator tool
def calculator(expression: str) -> str:
    """Calculate mathematical expressions safely."""
    try:
        result = eval(expression)
        return f"The result is: {result}"
    except:
        return "Invalid mathematical expression"

# File system tool
def read_file(filename: str) -> str:
    """Read content from a file."""
    try:
        with open(filename, 'r') as f:
            return f.read()
    except FileNotFoundError:
        return f"File {filename} not found"

tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Search the web for current information"
    ),
    Tool(
        name="Calculator",
        func=calculator,
        description="Perform mathematical calculations"
    ),
    Tool(
        name="FileReader",
        func=read_file,
        description="Read content from files"
    )
]
\`\`\`

### 3. Creating the Agent

\`\`\`python
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent_type="zero-shot-react-description",
    memory=memory,
    verbose=True,
    max_iterations=5
)
\`\`\`

## Advanced Agent Patterns

### Multi-Agent Systems

\`\`\`python
class ResearchAgent:
    def __init__(self):
        self.researcher = self.create_researcher()
        self.writer = self.create_writer()
        self.reviewer = self.create_reviewer()
    
    def create_researcher(self):
        research_tools = [search_tool, database_tool]
        return initialize_agent(
            tools=research_tools,
            llm=llm,
            agent_type="zero-shot-react-description"
        )
    
    def process_query(self, query):
        # Research phase
        research_results = self.researcher.run(f"Research: {query}")
        
        # Writing phase
        draft = self.writer.run(f"Write based on: {research_results}")
        
        # Review phase
        final_result = self.reviewer.run(f"Review and improve: {draft}")
        
        return final_result
\`\`\`

### Agent with Custom Memory

\`\`\`python
from langchain.memory import ConversationSummaryBufferMemory

# Advanced memory that summarizes old conversations
memory = ConversationSummaryBufferMemory(
    llm=llm,
    max_token_limit=2000,
    return_messages=True
)

# Agent with persistent context
agent = initialize_agent(
    tools=tools,
    llm=llm,
    memory=memory,
    agent_type="conversational-react-description"
)
\`\`\`

## Real-World Applications

### 1. Customer Support Agent

\`\`\`python
def create_support_agent():
    support_tools = [
        knowledge_base_search,
        ticket_creation_tool,
        escalation_tool,
        customer_history_tool
    ]
    
    system_message = """
    You are a helpful customer support agent. Your goals:
    1. Understand customer issues clearly
    2. Search knowledge base for solutions
    3. Create tickets for unresolved issues
    4. Escalate complex problems when needed
    """
    
    return initialize_agent(
        tools=support_tools,
        llm=llm,
        system_message=system_message
    )
\`\`\`

### 2. Data Analysis Agent

\`\`\`python
def create_analyst_agent():
    analysis_tools = [
        sql_query_tool,
        data_visualization_tool,
        statistical_analysis_tool,
        report_generation_tool
    ]
    
    return initialize_agent(
        tools=analysis_tools,
        llm=llm,
        agent_type="plan-and-execute"
    )
\`\`\`

## Best Practices

### 1. Tool Design
- **Clear descriptions**: Help the agent understand when to use each tool
- **Error handling**: Robust error messages for failed tool calls
- **Input validation**: Prevent malicious or malformed inputs

### 2. Memory Management
- **Selective memory**: Store only relevant information
- **Memory cleanup**: Implement strategies to prevent memory overflow
- **Context summarization**: Use summarization for long conversations

### 3. Safety and Control
- **Rate limiting**: Prevent excessive API calls
- **Cost monitoring**: Track LLM usage and costs
- **Human oversight**: Implement approval workflows for critical actions

## Performance Optimization

### Caching Strategies
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=100)
def cached_search(query: str):
    return search_tool.run(query)
\`\`\`

### Parallel Execution
\`\`\`python
import asyncio

async def parallel_agent_execution(tasks):
    agents = [create_specialized_agent(task) for task in tasks]
    results = await asyncio.gather(*[
        agent.arun(task) for agent, task in zip(agents, tasks)
    ])
    return results
\`\`\`

## Monitoring and Debugging

### Agent Callbacks
\`\`\`python
from langchain.callbacks import BaseCallbackHandler

class AgentMonitor(BaseCallbackHandler):
    def on_tool_start(self, serialized, input_str, **kwargs):
        print(f"Tool started: {serialized['name']}")
    
    def on_tool_end(self, output, **kwargs):
        print(f"Tool finished: {output}")
    
    def on_agent_action(self, action, **kwargs):
        print(f"Agent action: {action.tool}")
\`\`\`

## Future Directions

1. **Multi-modal agents**: Incorporating vision and audio capabilities
2. **Reinforcement learning**: Agents that improve through interaction
3. **Federated agents**: Collaborative agent networks
4. **Specialized domains**: Agents tailored for specific industries

## Conclusion

LangChain provides a powerful framework for building intelligent AI agents that can tackle complex, multi-step tasks. By combining the right tools, memory systems, and reasoning patterns, we can create agents that truly augment human capabilities.

The key to successful agent development lies in careful tool design, robust error handling, and continuous monitoring and improvement.
    `,
    category: "AI/ML",
    author: "Sachin Khoja",
    publishedAt: "2024-01-10",
    readTime: "16 min read",
    views: 2156,
    tags: ["LangChain", "AI Agents", "Python", "OpenAI", "RAG"],
    featured: true
  },
  {
    id: 3,
    title: "Designing Hierarchical Rate Limiting Systems",
    excerpt: "Deep dive into implementing scalable rate limiting solutions using Token Bucket algorithms for high-throughput applications.",
    content: `
# Designing Hierarchical Rate Limiting Systems

## Introduction

Rate limiting is crucial for protecting systems from abuse, ensuring fair resource allocation, and maintaining system stability. In high-throughput applications, a well-designed rate limiting system can mean the difference between a responsive service and a crashed system.

## Why Rate Limiting Matters

### System Protection
- **Resource conservation**: Prevent resource exhaustion
- **DDoS mitigation**: Protect against denial-of-service attacks
- **Cost control**: Manage API costs and infrastructure usage

### Fair Usage
- **Equal access**: Ensure all users get fair resource allocation
- **Quality of service**: Maintain consistent performance
- **Priority handling**: Give premium users better access

## Rate Limiting Algorithms

### 1. Token Bucket Algorithm

The token bucket algorithm provides flexible rate limiting with burst capacity.

\`\`\`python
import time
import threading
from typing import Optional

class TokenBucket:
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity
        self.refill_rate = refill_rate  # tokens per second
        self.tokens = capacity
        self.last_refill = time.time()
        self.lock = threading.Lock()
    
    def consume(self, tokens: int = 1) -> bool:
        with self.lock:
            now = time.time()
            # Add tokens based on elapsed time
            elapsed = now - self.last_refill
            self.tokens = min(
                self.capacity,
                self.tokens + elapsed * self.refill_rate
            )
            self.last_refill = now
            
            if self.tokens >= tokens:
                self.tokens -= tokens
                return True
            return False
    
    def available_tokens(self) -> float:
        with self.lock:
            now = time.time()
            elapsed = now - self.last_refill
            return min(
                self.capacity,
                self.tokens + elapsed * self.refill_rate
            )
\`\`\`

### 2. Sliding Window Log

Precise rate limiting by tracking request timestamps.

\`\`\`python
from collections import deque
import time

class SlidingWindowLog:
    def __init__(self, limit: int, window_size: int):
        self.limit = limit
        self.window_size = window_size
        self.requests = deque()
        self.lock = threading.Lock()
    
    def allow_request(self) -> bool:
        with self.lock:
            now = time.time()
            
            # Remove old requests outside the window
            while self.requests and self.requests[0] <= now - self.window_size:
                self.requests.popleft()
            
            if len(self.requests) < self.limit:
                self.requests.append(now)
                return True
            return False
\`\`\`

### 3. Fixed Window Counter

Simple counting with fixed time windows.

\`\`\`python
import time
from collections import defaultdict

class FixedWindowCounter:
    def __init__(self, limit: int, window_size: int):
        self.limit = limit
        self.window_size = window_size
        self.windows = defaultdict(int)
        self.lock = threading.Lock()
    
    def allow_request(self) -> bool:
        with self.lock:
            current_window = int(time.time()) // self.window_size
            
            if self.windows[current_window] < self.limit:
                self.windows[current_window] += 1
                return True
            return False
\`\`\`

## Hierarchical Rate Limiting Design

### Multi-Level Architecture

\`\`\`python
class HierarchicalRateLimiter:
    def __init__(self):
        self.global_limiter = TokenBucket(10000, 100)  # Global limit
        self.user_limiters = {}  # Per-user limits
        self.endpoint_limiters = {}  # Per-endpoint limits
        self.ip_limiters = {}  # Per-IP limits
    
    def check_limits(self, user_id: str, endpoint: str, ip: str) -> tuple[bool, str]:
        # Check global limit first
        if not self.global_limiter.consume():
            return False, "Global rate limit exceeded"
        
        # Check IP-based limit
        ip_limiter = self.get_ip_limiter(ip)
        if not ip_limiter.consume():
            return False, "IP rate limit exceeded"
        
        # Check user-specific limit
        user_limiter = self.get_user_limiter(user_id)
        if not user_limiter.consume():
            return False, "User rate limit exceeded"
        
        # Check endpoint-specific limit
        endpoint_limiter = self.get_endpoint_limiter(endpoint)
        if not endpoint_limiter.consume():
            return False, "Endpoint rate limit exceeded"
        
        return True, "Request allowed"
    
    def get_user_limiter(self, user_id: str) -> TokenBucket:
        if user_id not in self.user_limiters:
            # Different limits for different user tiers
            if self.is_premium_user(user_id):
                self.user_limiters[user_id] = TokenBucket(1000, 10)
            else:
                self.user_limiters[user_id] = TokenBucket(100, 1)
        return self.user_limiters[user_id]
    
    def get_endpoint_limiter(self, endpoint: str) -> TokenBucket:
        if endpoint not in self.endpoint_limiters:
            # Heavy endpoints get stricter limits
            if endpoint in ['/search', '/export']:
                self.endpoint_limiters[endpoint] = TokenBucket(50, 0.5)
            else:
                self.endpoint_limiters[endpoint] = TokenBucket(200, 2)
        return self.endpoint_limiters[endpoint]
    
    def get_ip_limiter(self, ip: str) -> TokenBucket:
        if ip not in self.ip_limiters:
            self.ip_limiters[ip] = TokenBucket(500, 5)
        return self.ip_limiters[ip]
\`\`\`

## Distributed Rate Limiting

### Redis-Based Implementation

\`\`\`python
import redis
import json

class DistributedRateLimiter:
    def __init__(self, redis_client: redis.Redis):
        self.redis = redis_client
    
    def check_rate_limit(self, key: str, limit: int, window: int) -> tuple[bool, dict]:
        """
        Sliding window rate limiter using Redis
        """
        pipeline = self.redis.pipeline()
        now = time.time()
        
        # Remove old entries
        pipeline.zremrangebyscore(key, 0, now - window)
        
        # Count current requests
        pipeline.zcard(key)
        
        # Add current request
        pipeline.zadd(key, {str(now): now})
        
        # Set expiration
        pipeline.expire(key, window)
        
        results = pipeline.execute()
        current_requests = results[1]
        
        allowed = current_requests < limit
        remaining = max(0, limit - current_requests - 1)
        
        if not allowed:
            # Remove the request we just added
            self.redis.zrem(key, str(now))
        
        return allowed, {
            'allowed': allowed,
            'remaining': remaining,
            'reset_time': now + window,
            'current': current_requests
        }
\`\`\`

### Lua Script for Atomic Operations

\`\`\`lua
-- Redis Lua script for atomic rate limiting
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local now = tonumber(ARGV[3])

-- Remove expired entries
redis.call('ZREMRANGEBYSCORE', key, 0, now - window)

-- Get current count
local current = redis.call('ZCARD', key)

if current < limit then
    -- Add current request
    redis.call('ZADD', key, now, now)
    redis.call('EXPIRE', key, window)
    return {1, limit - current - 1}
else
    return {0, 0}
end
\`\`\`

## Advanced Patterns

### Adaptive Rate Limiting

\`\`\`python
class AdaptiveRateLimiter:
    def __init__(self, base_limit: int):
        self.base_limit = base_limit
        self.current_limit = base_limit
        self.error_rate = 0.0
        self.response_time_avg = 0.0
        self.adjustment_factor = 0.1
    
    def update_metrics(self, response_time: float, is_error: bool):
        # Update moving averages
        self.response_time_avg = (
            0.9 * self.response_time_avg + 0.1 * response_time
        )
        self.error_rate = (
            0.9 * self.error_rate + 0.1 * (1.0 if is_error else 0.0)
        )
        
        # Adjust limits based on system health
        if self.error_rate > 0.05 or self.response_time_avg > 1.0:
            # System under stress, reduce limits
            self.current_limit = max(
                self.base_limit * 0.1,
                self.current_limit * (1 - self.adjustment_factor)
            )
        else:
            # System healthy, gradually increase limits
            self.current_limit = min(
                self.base_limit * 2,
                self.current_limit * (1 + self.adjustment_factor)
            )
\`\`\`

### Circuit Breaker Integration

\`\`\`python
from enum import Enum

class CircuitState(Enum):
    CLOSED = "closed"
    OPEN = "open"
    HALF_OPEN = "half_open"

class CircuitBreakerRateLimiter:
    def __init__(self, failure_threshold: int, recovery_timeout: int):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failure_count = 0
        self.last_failure_time = 0
        self.state = CircuitState.CLOSED
        self.rate_limiter = TokenBucket(100, 1)
    
    def allow_request(self) -> bool:
        if self.state == CircuitState.OPEN:
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = CircuitState.HALF_OPEN
            else:
                return False
        
        if self.state == CircuitState.HALF_OPEN:
            # Allow limited requests to test system health
            self.rate_limiter = TokenBucket(10, 0.1)
        
        return self.rate_limiter.consume()
    
    def record_success(self):
        if self.state == CircuitState.HALF_OPEN:
            self.state = CircuitState.CLOSED
            self.failure_count = 0
            self.rate_limiter = TokenBucket(100, 1)  # Restore normal limits
    
    def record_failure(self):
        self.failure_count += 1
        self.last_failure_time = time.time()
        
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN
\`\`\`

## Monitoring and Metrics

### Rate Limiting Metrics

\`\`\`python
from dataclasses import dataclass
from typing import Dict

@dataclass
class RateLimitMetrics:
    total_requests: int = 0
    allowed_requests: int = 0
    blocked_requests: int = 0
    bucket_utilization: float = 0.0
    
    @property
    def block_rate(self) -> float:
        if self.total_requests == 0:
            return 0.0
        return self.blocked_requests / self.total_requests

class MonitoredRateLimiter:
    def __init__(self, bucket: TokenBucket):
        self.bucket = bucket
        self.metrics = RateLimitMetrics()
    
    def consume(self, tokens: int = 1) -> bool:
        self.metrics.total_requests += 1
        
        if self.bucket.consume(tokens):
            self.metrics.allowed_requests += 1
            return True
        else:
            self.metrics.blocked_requests += 1
            return False
    
    def get_metrics(self) -> Dict:
        self.metrics.bucket_utilization = (
            1.0 - self.bucket.available_tokens() / self.bucket.capacity
        )
        return {
            'total_requests': self.metrics.total_requests,
            'allowed_requests': self.metrics.allowed_requests,
            'blocked_requests': self.metrics.blocked_requests,
            'block_rate': self.metrics.block_rate,
            'bucket_utilization': self.metrics.bucket_utilization
        }
\`\`\`

## Production Considerations

### Performance Optimization
1. **Memory management**: Cleanup old rate limiters
2. **Lock-free algorithms**: Use atomic operations where possible
3. **Partitioning**: Distribute load across multiple instances

### Scalability
1. **Consistent hashing**: Distribute rate limiters across nodes
2. **Eventual consistency**: Accept slight inconsistencies for performance
3. **Local caching**: Cache rate limit decisions

### Reliability
1. **Graceful degradation**: Fall back to allowing requests on failures
2. **Health checks**: Monitor rate limiter performance
3. **Alerting**: Alert on high block rates or system failures

## Conclusion

Hierarchical rate limiting systems require careful design to balance protection, performance, and user experience. The key is to:

1. Choose the right algorithm for your use case
2. Implement proper monitoring and alerting
3. Design for scalability and reliability
4. Consider the trade-offs between accuracy and performance

A well-designed rate limiting system is invisible to legitimate users while effectively protecting your infrastructure from abuse and overload.
    `,
    category: "System Design",
    author: "Sachin Khoja",
    publishedAt: "2024-01-05",
    readTime: "14 min read",
    views: 1879,
    tags: ["System Design", "Rate Limiting", "Performance", "Algorithms", "Scalability"],
    featured: false
  },
  // ... other blog posts
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
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