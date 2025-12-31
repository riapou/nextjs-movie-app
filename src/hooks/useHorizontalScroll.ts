import { useRef, useState, useCallback } from 'react'

export const useHorizontalScroll = (scrollAmount = 400) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollByAmount = useCallback((amount: number) => {
    containerRef.current?.scrollBy({
      left: amount,
      behavior: 'smooth',
    })
  }, [])

  const scrollLeft = () => scrollByAmount(-scrollAmount)
  const scrollRight = () => scrollByAmount(scrollAmount)

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  return {
    containerRef,
    scrollLeft,
    scrollRight,
    handleScroll,
    canScrollLeft,
    canScrollRight,
  }
}
