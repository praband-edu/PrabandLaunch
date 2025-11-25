'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { motion, AnimatePresence } from 'motion/react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

// Icon components for each step - Simple, clean icons matching the reference design
const DiscoveryIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const SetupIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const OptimizeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="12" width="3" height="7" rx="1" fill="currentColor"/>
        <rect x="10" y="8" width="3" height="11" rx="1" fill="currentColor"/>
        <rect x="15" y="4" width="3" height="15" rx="1" fill="currentColor"/>
    </svg>
)

const tabs = [
    { id: 'overview', label: 'Discovery', icon: DiscoveryIcon },
    { id: 'setup', label: 'Setup', icon: SetupIcon },
    { id: 'optimize', label: 'Optimize', icon: OptimizeIcon },
]

const processSteps = [
    {
        number: '01',
        title: 'DISCOVERY',
        headline: 'Identify Bottlenecks & Improve Efficiency',
        description: 'We analyze how your institute operates — from class scheduling to assignments, attendance, exams, and communication — to help identify what can be automated.',
        icon: DiscoveryIcon,
    },
    {
        number: '02',
        title: 'SETUP',
        headline: 'Streamline Your Workflows',
        description: 'Our team configures Prabhand to match your institute\'s unique needs, setting up automated workflows that save time and reduce errors.',
        icon: SetupIcon,
    },
    {
        number: '03',
        title: 'OPTIMIZE',
        headline: 'Continuous Improvement & Growth',
        description: 'We monitor performance, gather insights, and continuously optimize your processes to ensure maximum efficiency and better outcomes.',
        icon: OptimizeIcon,
    },
]

export default function ProcessSection() {
    const [activeTab, setActiveTab] = useState('overview')

    const currentStep = processSteps.find((_, index) => tabs[index].id === activeTab) || processSteps[0]

    return (
        <section className="bg-background py-20 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                        PROCESS
                    </TextEffect>
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.2}
                        as="h3"
                        className="text-3xl font-bold md:text-4xl lg:text-5xl max-w-4xl mx-auto">
                        Empower your institute's growth with intelligent automation
                    </TextEffect>
                </div>

                {/* Feature Selection Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                    className="flex justify-center mb-16"
                >
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-sm flex gap-3 flex-wrap justify-center">
                        {tabs.map((tab, index) => {
                            const IconComponent = tab.icon
                            return (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ willChange: "transform" }}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-medium transition-all ${
                                        activeTab === tab.id
                                            ? 'bg-white dark:bg-gray-50 text-gray-900 border border-gray-200 dark:border-gray-300'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    <IconComponent />
                                    <span>{tab.label}</span>
                                </motion.button>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Content Area */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content Area - Feature Details */}
                    <AnimatePresence mode="wait">
                        {(() => {
                            const IconComponent = currentStep.icon
                            return (
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    style={{ willChange: "transform, opacity" }}
                                    className="space-y-6"
                                >
                                    {/* Icon and Title */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
                                        className="flex items-center gap-3 mb-2"
                                    >
                                        {IconComponent && (
                                            <div className="w-8 h-8 flex items-center justify-center text-foreground">
                                                <IconComponent />
                                            </div>
                                        )}
                                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                                            {currentStep.headline}
                                        </h3>
                                    </motion.div>

                                    {/* Subtitle */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
                                        className="mb-6"
                                    >
                                        <p className="text-base md:text-lg font-medium text-muted-foreground">
                                            {currentStep.title}
                                        </p>
                                    </motion.div>

                                    {/* Description */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
                                    >
                                        <p className="text-muted-foreground leading-relaxed text-base mb-8">
                                            {currentStep.description}
                                        </p>
                                    </motion.div>

                                    {/* Learn More Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.25 }}
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            style={{ willChange: "transform" }}
                                            className="flex items-center gap-2 text-base font-medium text-foreground hover:text-foreground/80 transition-colors"
                                        >
                                            <span>Learn more</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            )
                        })()}
                    </AnimatePresence>

                    {/* Right Visual Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                        style={{ willChange: "transform, opacity" }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{ willChange: "transform" }}
                            className="bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-square p-12 relative overflow-hidden"
                        >
                            {/* Abstract pattern background */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute inset-0"
                            >
                                <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <motion.line
                                            key={i}
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, delay: 0.5 + i * 0.02 }}
                                            x1={i * 20}
                                            y1="0"
                                            x2={i * 20}
                                            y2="400"
                                            stroke="currentColor"
                                            strokeWidth="0.5"
                                            className="text-gray-400"
                                        />
                                    ))}
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <motion.line
                                            key={`v-${i}`}
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, delay: 0.5 + i * 0.02 }}
                                            x1="0"
                                            y1={i * 20}
                                            x2="400"
                                            y2={i * 20}
                                            stroke="currentColor"
                                            strokeWidth="0.5"
                                            className="text-gray-400"
                                        />
                                    ))}
                                </svg>
                            </motion.div>
                            {/* Circular element */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: 0.6
                                }}
                                style={{ willChange: "transform, opacity" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{ willChange: "transform" }}
                                    className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-900 shadow-lg"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

