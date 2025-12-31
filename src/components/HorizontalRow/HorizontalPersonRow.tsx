'use client'

import './HorizontalRow.scss'
import { PersonCardData as Person } from '@/types/person'
import { getImageUrl } from '@/lib/utils/get-image-url'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { RowHeader } from '../UI/row/RowHeader'
import { ScrollContainer } from '../UI/row/ScrollContainer'
import PersonCard from '../UI/card/PersonCard'
import { API_ROUTES } from '@/config/api_routes'

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
        {persons.map((person) => (
          <PersonCard
            key={person.id}
            id={person.id}
            name={person.name}
            profile={
              getImageUrl({ path: person.profile_path }) ||
              API_ROUTES.FALLBACK_PROFILE
            }
            media_type={person.media_type}
          />
        ))}
      </ScrollContainer>
    </div>
  )
}

export default HorizontalPersonRow
