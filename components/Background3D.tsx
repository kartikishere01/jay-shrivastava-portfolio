'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x0a0a0a, 1)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 500

    const posArray = new Float32Array(particlesCnt * 3)
    for (let i = 0; i < particlesCnt * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 2000
      posArray[i + 1] = (Math.random() - 0.5) * 2000
      posArray[i + 2] = (Math.random() - 0.5) * 2000
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 7,
      color: 0xf5f5f5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation loop
    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0001
      particlesMesh.rotation.y += 0.0002

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}