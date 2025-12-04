'use client'

import { useContent } from '@/hooks/useContent'
import { useState, useEffect } from 'react'

export default function MobileNav() {
    const t = useContent()
    const [activeSection, setActiveSection] = useState('hero')

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(id)
        }
    }

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'services', 'projects', 'contact']
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { id: 'hero', icon: 'fas fa-home', label: 'Home' },
        { id: 'about', icon: 'fas fa-user', label: 'About' },
        { id: 'projects', icon: 'fas fa-code', label: 'Projects' },
        { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' },
    ]

    return (
        <div className="md:hidden fixed bottom-4 left-4 right-4 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg z-50 px-4 py-3 flex justify-between items-center">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center gap-1 transition-colors duration-300 ${activeSection === item.id
                            ? 'text-black dark:text-white'
                            : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400'
                        }`}
                >
                    <i className={`${item.icon} text-xl`}></i>
                    <span className="text-[10px] font-medium uppercase tracking-wide">{item.label}</span>
                </button>
            ))}
        </div>
    )
}
