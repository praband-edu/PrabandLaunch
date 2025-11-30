"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "@/config.json";

export function WordsPreloader() {
  const [greetings, setGreetings] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load greetings from config on mount
  useEffect(() => {
    if (config.loaderText && config.loaderText.length > 0) {
      // Randomly select one greeting set
      const randomIndex = Math.floor(Math.random() * config.loaderText.length);
      const selectedGreeting = config.loaderText[randomIndex];
      
      // Extract the 3 parts from the selected greeting object
      if (selectedGreeting && typeof selectedGreeting === 'object') {
        setGreetings([
          selectedGreeting.part1 || "",
          selectedGreeting.part2 || "",
          selectedGreeting.part3 || ""
        ]);
      } else {
        // Fallback for old format (flat array)
        setGreetings(Array.isArray(selectedGreeting) ? selectedGreeting : ["Welcome", "To", "Praband!"]);
      }
    } else {
      // Fallback if config is empty
      setGreetings(["Welcome", "To", "Praband!"]);
    }
  }, []);

  // Word rotation every 600ms
  useEffect(() => {
    if (greetings.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 600);

    return () => clearInterval(interval);
  }, [greetings]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
    >
      <AnimatePresence mode="wait">
        {greetings.length > 0 && (
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
              fontFamily:
                "var(--font-noto-sans), system-ui, -apple-system, sans-serif",
            }}
          >
            {greetings[currentIndex]}
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Custom hook for preloader visibility
export function useWordsPreloader(duration: number = 2500) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return showPreloader;
}

