'use client'
import { useMovieCredits } from '@/hooks/queries/persons'
import { useMovieDetails } from '@/hooks/queries/movies'
import MovieDetails from './MovieDetails'
import { MovieDetails as MovieDetailsType } from '@/types/movie'

export default function App({ id }: { id: number }) {
  const { data: movie, isLoading: loading } = useMovieDetails(id)
  const { data: credits, isLoading: creditsLoading } = useMovieCredits(id)

  const isLoading = loading || creditsLoading
  const movieData = movie as MovieDetailsType
  const creditsData = credits!

  if (isLoading || !movieData) {
    return <div>not found</div>
  }

  return (
    <MovieDetails movie={movieData} loading={isLoading} credits={creditsData} />
  )
}
