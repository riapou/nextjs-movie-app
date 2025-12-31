'use client'

import './HorizontalMovieRow.scss'
import { MovieCardData as Movie } from '@/types/movie'
import MovieCard from './_internal/MoveCard'
import { getImageUrl } from '@/lib/utils/get-image-url'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { RowHeader } from './_internal/RowHeader'
import { ScrollContainer } from './_internal/ScrollContainer'

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
    <div className='horizontal-movie-row'>
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
              poster={getImageUrl({ path: movie.poster_path })}
              media_type={movie.media_type}
            />
        ))}
      </ScrollContainer>
    </div>
  )
}

export default HorizontalMovieRow
