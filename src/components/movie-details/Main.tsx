'use client'
import { useMovieCredits } from '@/hooks/queries/persons'
import { useMovieDetails, useMovieReviews, useRecommendationMovies } from '@/hooks/queries/movies'
import MovieDetails from './MovieDetails'
import { MovieDetails as MovieDetailsType } from '@/types/movie'
import { normalizeDataList } from '@/lib/utils/normalize-data'

export default function App({ id }: { id: number }) {
  const { data: movie, isLoading: loading } = useMovieDetails(id)
  const { data: credits, isLoading: creditsLoading } = useMovieCredits(id)
  const { data: similarMovies } = useRecommendationMovies(id)
  const similarMoviesData = similarMovies?.results
    ? normalizeDataList(similarMovies.results, 'movie')
    : []

  const { data: reviewsData } = useMovieReviews(id)
  const reviews = reviewsData?.results || []

  

  const isLoading = loading || creditsLoading
  const movieData = movie as MovieDetailsType
  const creditsData = credits!
  


  if (isLoading || !movieData) {
    return <div>not found</div>
  }

  return (
    <MovieDetails movie={movieData} loading={isLoading} credits={creditsData} recommendationMovies={similarMoviesData} reviews={reviews} />
  )
}
