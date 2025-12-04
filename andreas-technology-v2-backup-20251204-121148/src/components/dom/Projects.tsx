'use client'
import { useContent } from '@/hooks/useContent'
import Image from 'next/image'

export default function Projects() {
    const t = useContent()

    return (
        <section id="projects" className="min-h-screen snap-start snap-always bg-white dark:bg-zinc-950 text-black dark:text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">
                    {t.projectsTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {t.projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-black dark:hover:border-white transition-all group flex flex-col"
                        >
                            {project.image && (
                                <div className="relative w-full h-48 bg-zinc-200 dark:bg-zinc-800">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover group-hover:opacity-90 transition-opacity"
                                        unoptimized
                                        loading="lazy"
                                    />
                                </div>
                            )}

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    {project.name}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Action Buttons - More Prominent */}
                                <div className="flex flex-col gap-2 mt-auto">
                                    {project.liveSiteLink && (
                                        <a
                                            href={project.liveSiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-black px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                            Live Presentation
                                        </a>
                                    )}

                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700 text-black dark:text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                                        >
                                            <i className="fab fa-github"></i>
                                            View on GitHub
                                        </a>
                                    )}

                                    {project.reportLink && (
                                        <a
                                            href={project.reportLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700 text-black dark:text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                                        >
                                            <i className="fas fa-download"></i>
                                            Download Thesis
                                        </a>
                                    )}

                                    {project.publicationLink && (
                                        <a
                                            href={project.publicationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700 text-black dark:text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                                        >
                                            <i className="fas fa-book-open"></i>
                                            View Publication
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
