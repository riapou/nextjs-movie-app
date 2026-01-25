'use client'

import './HorizontalRow.scss'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { RowHeader } from './RowHeader'
import { ScrollContainer } from './ScrollContainer'
import CardSkeleton from '../../card/skeleton/cardSkeleton'

interface HorizontalRowBaseProps<T> {
  title: string
  items: T[]
  isLoading: boolean
  showAllLink?: string
  renderItem: (item: T) => React.ReactNode
  skeletonCount?: number
}

const HorizontalRowBase = <T,>({
  title,
  items,
  isLoading,
  showAllLink,
  renderItem,
  skeletonCount = 10,
}: HorizontalRowBaseProps<T>) => {
  const {
    containerRef,
    scrollLeft,
    scrollRight,
    handleScroll,
    canScrollLeft,
    canScrollRight,
  } = useHorizontalScroll()

  return (
    <div className='horizontal-row'>
      <RowHeader title={title} showAllLink={showAllLink} />

      <ScrollContainer
        containerRef={containerRef}
        onScroll={handleScroll}
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      >
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          : items.map(renderItem)}
      </ScrollContainer>
    </div>
  )
}

export default HorizontalRowBase
