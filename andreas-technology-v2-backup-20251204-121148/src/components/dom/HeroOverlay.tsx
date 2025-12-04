'use client'

import { useContent } from '@/hooks/useContent'

export default function HeroOverlay() {
    const t = useContent()

    return (
        <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-start p-6 sm:p-12 pointer-events-none z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black dark:text-white">
                {t.name.split(' ')[0]}
            </h1>
            <div className="h-2" />
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-zinc-600 dark:text-zinc-400 uppercase">
                {t.title}
            </p>

            <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                SCROLL TO EXPLORE
            </div>
        </div>
    )
}
