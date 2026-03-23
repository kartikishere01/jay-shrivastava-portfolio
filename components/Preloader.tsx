'use client'

import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      data-preloader
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-dark-bg flex items-center justify-center transition-opacity duration-500"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-2 border-dark-border border-t-dark-text rounded-full"
        />
        <p className="text-sm text-dark-muted uppercase tracking-widest">
          Loading...
        </p>
      </div>
    </motion.div>
  )
}