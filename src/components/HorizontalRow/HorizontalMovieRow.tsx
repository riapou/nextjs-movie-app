import HorizontalRowBase from './_internal/HorizontalRowBase'
import MovieCard from '../card/MoveCard'
import { MediaBase } from '@/types/media'
import { getImageUrl } from '@/lib/utils/get-image-url'

interface Props {
  title: string
  movies: MediaBase[]
  showAllLink?: string
  isLoding: boolean
}

const HorizontalMovieRow = ({
  title,
  movies,
  showAllLink,
  isLoding,
}: Props) => {
  return (
    <HorizontalRowBase
      title={title}
      items={movies}
      isLoading={isLoding}
      showAllLink={showAllLink}
      renderItem={(movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={
            movie.media_type === 'movie'
              ? movie.title || 'na'
              : movie.name || 'na'
          }
          rating={movie.vote_average}
          poster={getImageUrl({ path: movie.poster_path })}
          media_type={movie.media_type}
        />
      )}
    />
  )
}

export default HorizontalMovieRow
