'use client'

import { useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.985, y: 18 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          clearProps: 'transform',
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [pathname])

  return <div ref={containerRef}>{children}</div>
}
