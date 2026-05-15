"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface IllustrationBlockProps {
  src: string
  alt: string
  className?: string
  animate?: boolean
}

export function IllustrationBlock({
  src,
  alt,
  className,
  animate = false,
}: IllustrationBlockProps) {
  const animation = animate
    ? {
        animate: {
          y: [0, -14, 0],
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }
    : {}

  return (
    <motion.div {...animation} className={cn("relative w-full h-full", className)}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-auto object-contain"
        priority
      />
    </motion.div>
  )
}
