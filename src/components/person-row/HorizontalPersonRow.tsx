'use client'

import './HorizontalPersonRow.scss'
import { PersonCardData as Person } from '@/types/person'
import { getImageUrl } from '@/lib/utils/get-image-url'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { RowHeader } from './_internal/RowHeader'
import { ScrollContainer } from './_internal/ScrollContainer'
import PersonCard from './_internal/person-card/PersonCard'

interface HorizontalPersonRowProps {
  title: string
  persons: Person[]
  showAllLink?: string
}

const HorizontalPersonRow = ({
  title,
  persons,
  showAllLink,
}: HorizontalPersonRowProps) => {
  const {
    containerRef,
    scrollLeft,
    scrollRight,
    handleScroll,
    canScrollLeft,
    canScrollRight,
  } = useHorizontalScroll()

  return (
    <div className='horizontal-person-row'>
      <RowHeader title={title} showAllLink={showAllLink} />
      <ScrollContainer
        containerRef={containerRef}
        onScroll={handleScroll}
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      >
        {persons.map((person) => (
          <PersonCard
            key={person.id}
            id={person.id}
            name={person.name}
            profile={getImageUrl({ path: person.profile_path }) as string}
            media_type={person.media_type}
          />
        ))}
      </ScrollContainer>
    </div>
  )
}

export default HorizontalPersonRow
