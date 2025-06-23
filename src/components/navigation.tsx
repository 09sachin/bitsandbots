"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, Mail, FileText, Award } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Experience", href: "/experience", icon: Award },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                &lt;Dev/&gt;
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-primary/10 rounded-md"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="md:hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-foreground hover:bg-accent"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </motion.div>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16" />
    </>
  )
} 