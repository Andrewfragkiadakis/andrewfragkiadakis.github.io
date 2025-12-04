'use client'
import { useContent } from '@/hooks/useContent'
import { motion } from 'framer-motion'

export default function Experience() {
    const t = useContent()

    return (
        <section id="experience" className="min-h-screen snap-start snap-always bg-white dark:bg-zinc-950 text-black dark:text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12"
                >
                    {t.experienceTitle}
                </motion.h2>

                {/* Work Experience */}
                <div className="space-y-12 mb-24">
                    {t.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                        >
                            <div className="text-sm text-zinc-500 mb-2">{exp.duration}</div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-1">{exp.role}</h3>
                            <div className="text-zinc-600 dark:text-zinc-400 mb-4">{exp.company}</div>
                            <ul className="space-y-2">
                                {exp.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex} className="text-zinc-700 dark:text-zinc-300 flex gap-2">
                                        <span className="text-zinc-400 dark:text-zinc-600">•</span>
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12"
                >
                    {t.educationTitle}
                </motion.h2>

                <div className="space-y-12">
                    {t.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                        >
                            <div className="text-sm text-zinc-500 mb-2">{edu.duration}</div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-1">{edu.degree}</h3>
                            <div className="text-zinc-600 dark:text-zinc-400 mb-4">{edu.institution}</div>
                            <ul className="space-y-2">
                                {edu.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-zinc-700 dark:text-zinc-300 flex gap-2">
                                        <span className="text-zinc-400 dark:text-zinc-600">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
