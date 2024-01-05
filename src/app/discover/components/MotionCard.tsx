'use client'

import { motion } from 'framer-motion'

interface MotionCardProps {
  children: React.ReactNode
  index: number
}

export function MotionCard({ children, index }: MotionCardProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      {children}
    </motion.div>
  )
}
