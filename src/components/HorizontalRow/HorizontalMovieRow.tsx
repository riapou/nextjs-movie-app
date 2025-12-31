'use client'

import './HorizontalRow.scss'
import { MovieCardData as Movie } from '@/types/movie'
import MovieCard from '../UI/card/MoveCard'
import { getImageUrl } from '@/lib/utils/get-image-url'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { API_ROUTES } from '@/config/api_routes'
import { RowHeader } from '../UI/row/RowHeader'
import { ScrollContainer } from '../UI/row/ScrollContainer'

interface HorizontalMovieRowProps {
  title: string
  movies: Movie[]
  showAllLink?: string
}

const HorizontalMovieRow = ({
  title,
  movies,
  showAllLink,
}: HorizontalMovieRowProps) => {
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
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title || movie.name}
            rating={movie.vote_average}
            poster={
              getImageUrl({ path: movie.poster_path }) ||
              API_ROUTES.FALLBACK_POSTER
            }
            media_type={movie.media_type}
          />
        ))}
      </ScrollContainer>
    </div>
  )
}

export default HorizontalMovieRow
