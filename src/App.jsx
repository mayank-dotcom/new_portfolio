"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"

function App() {
  const mountRef = useRef(null)

  useEffect(() => {
    // Three.js Scene Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 1) // Set background color
    mountRef.current.appendChild(renderer.domElement)

    // Create stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 15000
    const positions = new Float32Array(starCount * 3)
    const velocities = new Float32Array(starCount)

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000 // x
      positions[i + 1] = (Math.random() - 0.5) * 2000 // y
      positions[i + 2] = (Math.random() - 0.5) * 2000 // z
      velocities[i / 3] = Math.random() * 0.5 + 0.5
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    camera.position.z = 500

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Update star positions
      const positions = stars.geometry.attributes.position.array

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += velocities[i / 3]

        // Reset star position if it goes too far
        if (positions[i + 2] > 1000) {
          positions[i + 2] = -1000
        }
      }

      stars.geometry.attributes.position.needsUpdate = true
      stars.rotation.y += 0.0002

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="App">
      <div ref={mountRef} className="three-bg" />
      <div className="content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default App

