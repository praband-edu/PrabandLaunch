'use client'
import React from 'react';
import { motion } from 'motion/react';

// Reusable Icon Component for the "X" (Left side)
const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" className="stroke-gray-500" strokeWidth="2"/>
    <path d="M15 9L9 15" className="stroke-gray-500" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 9L15 15" className="stroke-gray-500" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Reusable Icon Component for the "Check" (Right side)
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" className="fill-white"/>
    <path d="M8 12L11 15L16 9" className="stroke-black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ComparisonSection = () => {
  const badFeatures = [
    "Multiple disconnected apps",
    "Manual attendance, scheduling & reporting",
    "No unified analytics",
    "Complicated workflows",
  ];

  const goodFeatures = [
    "All-in-one academic OS",
    "AI Search + Smart Learning Model",
    "Unified dashboard for teachers",
    "Scales with your institute — from 1 teacher to 10,000 students",
  ];

  return (
    <div className="">

    
    <div className="text-white min-h-screen flex flex-col items-center justify-center font-sans">
      
      {/* Main Section Container */}
      <div className="bg-[#080C14]  w-full max-w-[1200px] px-6 md:px-12 lg:px-20 mx-auto py-20">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          style={{ willChange: "transform, opacity" }}
          className="text-center mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
            className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4"
          >
            Compare
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="text-4xl md:text-5xl font-medium text-white mb-6"
          >
            Why Choose Prabhand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Stop relying on scattered tools, manual registers, and outdated workflows. 
            Prabhand automates your institute's entire academic operations so your team can focus.
          </motion.p>
        </motion.div>

        {/* Comparison Grid Container */}
        <div className="px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
            style={{ willChange: "transform, opacity" }}
            className="w-full border border-white/10 rounded-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Column: Other Agencies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col border-b md:border-b-0 md:border-r border-white/10"
            >
              <div className="p-8 border-b border-white/10 flex items-center justify-center h-24">
                <span className="text-lg md:text-xl text-gray-200">Other agencies</span>
              </div>
              
              <div className="p-8 md:p-10 bg-[#0a0e17] flex-grow">
                <ul className="space-y-6">
                  {badFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <CrossIcon />
                      </div>
                      <span className="text-gray-400 font-light">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Prabhand */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col"
            >
              <div className="p-8 border-b border-white/10 flex items-center justify-center h-24">
                <span className="text-lg md:text-xl text-white font-medium">Prabhand</span>
              </div>
              
              <div className="p-8 md:p-10 bg-[#0a0e17] flex-grow">
                <ul className="space-y-6">
                  {goodFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <CheckIcon />
                      </div>
                      <span className="text-gray-200 font-light">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ComparisonSection;