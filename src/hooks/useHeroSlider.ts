import { useState, useEffect, useRef, useCallback } from 'react'

interface Options {
  total: number
  autoplay: boolean
  interval: number
  infinite: boolean
}

export const useHeroSlider = ({
  total,
  autoplay,
  interval,
  infinite,
}: Options) => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const isAnimating = useRef(false)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current || index === current) return
      isAnimating.current = true
      setCurrent(index)

      setTimeout(() => {
        isAnimating.current = false
      }, 500)
    },
    [current]
  )

  const next = useCallback(() => {
    const nextIndex = current + 1
    if (nextIndex >= total) {
      if (!infinite) return
      goTo(0)
    } else {
      goTo(nextIndex)
    }
  }, [current, total, infinite, goTo])

  const prev = useCallback(() => {
    const prevIndex = current - 1
    if (prevIndex < 0) {
      if (!infinite) return
      goTo(total - 1)
    } else {
      goTo(prevIndex)
    }
  }, [current, total, infinite, goTo])

  useEffect(() => {
    if (!autoplay || paused || total <= 1) return
    const id = setInterval(next, interval)
    return () => clearInterval(id)
  }, [autoplay, paused, interval, next, total])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev()
      } else if (e.key === 'ArrowRight') {
        next()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let startX = 0

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
    }

    const onTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) < 50) return

      (diff > 0) ? next() : prev()
    }

    slider.addEventListener('touchstart', onTouchStart)
    slider.addEventListener('touchend', onTouchEnd)

    return () => {
      slider.removeEventListener('touchstart', onTouchStart)
      slider.removeEventListener('touchend', onTouchEnd)
    }
  }, [next, prev, sliderRef])

  return {
    sliderRef,
    current,
    next,
    prev,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  }
}
