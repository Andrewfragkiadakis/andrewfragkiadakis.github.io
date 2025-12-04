'use client'
import { useContent } from '@/hooks/useContent'
import { motion } from 'framer-motion'

export default function About() {
    const t = useContent()

    return (
        <section id="about" className="min-h-screen snap-start snap-always bg-white dark:bg-zinc-950 text-black dark:text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12"
                >
                    {t.about.title}
                </motion.h2>

                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
                    {t.about.description.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl font-bold mt-12 sm:mt-16 md:mt-24 mb-8 sm:mb-12"
                >
                    {t.skillsTitle}
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {t.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 p-6 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
                        >
                            <div className="text-4xl mb-4 text-zinc-800 dark:text-white">
                                <i className={skill.icon}></i>
                            </div>
                            <h4 className="text-xl font-semibold mb-3">{skill.label}</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{skill.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
