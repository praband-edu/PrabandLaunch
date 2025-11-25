'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const greetings = [
    'Goooood',
    'Morninggg',
    'Maaaaaaam',
]

export function WordsPreloader() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % greetings.length)
        }, 600)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
                >
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.2,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-7xl md:text-9xl font-light tracking-tight text-black dark:text-white"
                            style={{
                                fontFamily: 'var(--font-noto-sans), system-ui, -apple-system, sans-serif',
                            }}
                        >
                            {greetings[currentIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export function useWordsPreloader(duration: number = 2500) {
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreloader(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration])

    return showPreloader
}

