'use client'
import { useContent } from '@/hooks/useContent'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useRef } from 'react'

interface BinaryParticle {
    x: number
    y: number
    char: string
    life: number
    maxLife: number
    velocity: { x: number; y: number }
}

export default function Experience() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<BinaryParticle[]>([])
    const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 })
    const animationFrameRef = useRef<number | undefined>(undefined)
    const isInitializedRef = useRef(false)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            // Use clientX/clientY directly since canvas fills the screen

            // Initialize mouse position on first movement
            if (!isInitializedRef.current) {
                mouseRef.current.x = e.clientX
                mouseRef.current.y = e.clientY
                mouseRef.current.lastX = mouseRef.current.x
                mouseRef.current.lastY = mouseRef.current.y
                isInitializedRef.current = true
                return // Don't create particles on first movement
            }

            mouseRef.current.lastX = mouseRef.current.x
            mouseRef.current.lastY = mouseRef.current.y
            mouseRef.current.x = e.clientX
            mouseRef.current.y = e.clientY

            // Create particles along the path
            const dx = mouseRef.current.x - mouseRef.current.lastX
            const dy = mouseRef.current.y - mouseRef.current.lastY
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Add particles with moderate frequency
            const particlesToAdd = Math.floor(distance / 20)
            for (let i = 0; i < particlesToAdd; i++) {
                const t = i / particlesToAdd
                const x = mouseRef.current.lastX + dx * t
                const y = mouseRef.current.lastY + dy * t

                particlesRef.current.push({
                    x,
                    y,
                    char: Math.random() > 0.5 ? '1' : '0',
                    life: 0,
                    maxLife: 40 + Math.random() * 20, // Shorter lifespan to reduce overlap
                    velocity: {
                        x: (Math.random() - 0.5) * 0.3,
                        y: Math.random() * 0.5 // Gentle downward only
                    }
                })
            }
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Clear canvas when scrolling away from hero section
        const handleScroll = () => {
            const heroSection = document.getElementById('hero')
            const scroller = document.getElementById('scroller')

            if (heroSection && scroller) {
                const rect = heroSection.getBoundingClientRect()
                // If hero section is mostly out of view, clear particles
                if (rect.bottom < window.innerHeight * 0.3) {
                    particlesRef.current = []
                }
            }
        }

        const scroller = document.getElementById('scroller')
        if (scroller) {
            scroller.addEventListener('scroll', handleScroll)
        } else {
            window.addEventListener('scroll', handleScroll)
        }

        // Animation loop
        const animate = () => {
            // Theme-aware background colors with faster fade
            const bgColor = theme === 'light'
                ? 'rgba(255, 255, 255, 0.25)' // Faster fade for light mode
                : 'rgba(9, 9, 11, 0.25)' // Faster fade for dark mode
            ctx.fillStyle = bgColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter(particle => {
                particle.life++
                particle.x += particle.velocity.x
                particle.y += particle.velocity.y
                particle.velocity.y += 0.02 // Very gentle gravity

                if (particle.life >= particle.maxLife) {
                    return false
                }

                // Calculate opacity based on life with faster fade
                const opacity = Math.max(0, 1 - (particle.life / particle.maxLife) * 1.5)

                // Theme-aware colors: dark gray for light mode, Matrix green for dark
                const color = theme === 'light'
                    ? `rgba(31, 41, 55, ${opacity})` // gray-800
                    : `rgba(0, 255, 65, ${opacity})` // Matrix green

                ctx.fillStyle = color
                ctx.font = 'bold 24px monospace'
                ctx.fillText(particle.char, particle.x, particle.y)

                return true
            })

            // Limit number of particles for performance and visual clarity
            if (particlesRef.current.length > 100) {
                particlesRef.current = particlesRef.current.slice(-100)
            }

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            const scroller = document.getElementById('scroller')
            if (scroller) {
                scroller.removeEventListener('scroll', handleScroll)
            } else {
                window.removeEventListener('scroll', handleScroll)
            }
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [theme]) // Re-run when theme changes

    return (
        <div className="h-full w-full">
            <canvas
                ref={canvasRef}
                className="w-full h-full cursor-none pointer-events-none"
                style={{ background: theme === 'light' ? '#ffffff' : '#09090b' }}
            />
        </div>
    )
}
