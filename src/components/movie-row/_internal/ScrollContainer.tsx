import { LeftArrow, RightArrow } from './ScrollArrows'

interface ScrollContainerProps {
  containerRef: React.RefObject<HTMLDivElement>
  onScroll: () => void
  canScrollLeft: boolean
  canScrollRight: boolean
  scrollLeft: () => void
  scrollRight: () => void
  children: React.ReactNode
}

export const ScrollContainer = ({
  containerRef,
  onScroll,
  canScrollLeft,
  canScrollRight,
  scrollLeft,
  scrollRight,
  children,
}: ScrollContainerProps) => {
  return (
    <div className='scroll-container-wrapper'>
      {canScrollLeft && <LeftArrow onClick={scrollLeft} />}

      <div
        className='scroll-container'
        ref={containerRef}
        onScroll={onScroll}
      >
        {children}
      </div>

      {canScrollRight && <RightArrow onClick={scrollRight} />}
    </div>
  )
}
