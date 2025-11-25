'use client'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { motion } from 'motion/react'

export const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline md:max-w-44 md:border-r md:pr-6 mb-4 md:mb-0"
                    >
                        <p className="text-end text-sm">Trusted by educators</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative py-6 md:w-[calc(100%-11rem)] w-full"
                    >
                        <div className="relative overflow-hidden">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={60}
                                className="w-full">
                                <span className="text-muted-foreground whitespace-nowrap text-sm font-medium px-4">Tuition Teachers</span>
                                <span className="text-muted-foreground whitespace-nowrap text-sm font-medium px-4">Coaching Institutes</span>
                                <span className="text-muted-foreground whitespace-nowrap text-sm font-medium px-4">Schools</span>
                                <span className="text-muted-foreground whitespace-nowrap text-sm font-medium px-4">Colleges</span>
                                <span className="text-muted-foreground whitespace-nowrap text-sm font-medium px-4">Online Tutors</span>
                                <span className="text-muted-foreground whitespace-nowrap text-sm font-medium px-4">Test Prep Centers</span>
                                <span className="text-muted-foreground whitespace-nowrap text-sm font-medium px-4">Skill Training Institutes</span>
                            </InfiniteSlider>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
