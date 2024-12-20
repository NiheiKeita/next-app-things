import React, { useRef, useState, useEffect } from "react"
import anime from "animejs"

export const AnimeButton = React.memo(function AnimeButton() {
  const [stars, setStars] = useState<
    { id: number; x: number; y: number }[]
  >([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const x = containerRect.width / 2
    const y = containerRect.height / 2

    // 新しい星を追加
    const newStars = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }))
    setStars((prevStars) => [...prevStars, ...newStars])
  }

  useEffect(() => {
    if (stars.length > 0) {
      stars.forEach((star) => {
        anime({
          targets: `#star-${star.id}`,
          translateX: {
            value: () => Math.random() * 200 - 100, // -100〜100のランダムなX方向
            duration: 1000,
          },
          translateY: {
            value: () => Math.random() * 200 - 100, // -100〜100のランダムなY方向
            duration: 1000,
          },
          opacity: {
            value: 0,
            duration: 1000,
          },
          easing: "easeOutQuad",
          complete: () => {
            setStars((prevStars) => prevStars.filter((s) => s.id !== star.id))
          },
        })
      })
    }
  }, [stars])

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen items-center justify-center bg-gray-100"
    >
      <button
        onClick={handleClick}
        className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
      >
        Click Me!
      </button>
      {stars.map((star) => (
        <div
          key={star.id}
          id={`star-${star.id}`}
          className="absolute size-2 rounded-full bg-yellow-400 shadow-md"
          style={{
            left: star.x,
            top: star.y,
          }}
        ></div>
      ))}
    </div>
  )
})

export default AnimeButton
