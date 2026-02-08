"use client"

import { useEffect, useState } from "react"

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; left: number; delay: number; duration: number; size: number; opacity: number }>
  >([])

  useEffect(() => {
    const flakes = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 8 + Math.random() * 15,
      size: 2 + Math.random() * 6,
      opacity: 0.3 + Math.random() * 0.5,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <>
      {/* Main snowfall */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute snowflake rounded-full bg-white shadow-lg"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
              boxShadow: `0 0 ${flake.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {Array.from({ length: 30 }, (_, i) => ({
          id: i + 1000,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 20,
          size: 6 + Math.random() * 10,
        })).map((flake) => (
          <div
            key={flake.id}
            className="absolute snowflake rounded-full bg-white/30 blur-sm"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
