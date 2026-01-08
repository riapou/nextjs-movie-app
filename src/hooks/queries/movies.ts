import { API_ROUTES } from '@/config/api_routes'
import { fetcher } from '@/lib/api/fetcher'
import { APIsResponse } from '@/types/api-response'
import { MovieCardData, MovieDetails } from '@/types/movie'
import { useQuery } from '@tanstack/react-query'

export const useUpcomingMovies = () => {
  return useQuery<APIsResponse<MovieCardData>>({
    queryKey: ['movies', 'upcoming'],
    queryFn: () =>
      fetcher<APIsResponse<MovieCardData>>(API_ROUTES.movies.upcoming),
    staleTime: 5 * 60 * 1000,
  })
}
export const usePopularMovies = () => {
  return useQuery<APIsResponse<MovieCardData>>({
    queryKey: ['movies', 'popular'],
    queryFn: () =>
      fetcher<APIsResponse<MovieCardData>>(API_ROUTES.movies.popular),
    staleTime: 5 * 60 * 1000,
  })
}
export const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails>({
    queryKey: ['movies', movieId],
    queryFn: () => fetcher<MovieDetails>(API_ROUTES.movies.details(movieId)),
    enabled: !!movieId,
    staleTime: 5 * 60 * 1000,
  })
}
export const useRecommendationMovies = (movieId: number) => {
  return useQuery<APIsResponse<MovieCardData>>({
    queryKey: ['movies','recommendations', movieId],
    queryFn: () =>
      fetcher<APIsResponse<MovieCardData>>(API_ROUTES.movies.recommendations(movieId)),
    enabled: !!movieId,
    staleTime: 5 * 60 * 1000,
  })
}

export interface Review{
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
export const useMovieReviews = (movieId: number) => {
  return useQuery<APIsResponse<Review>>({
    queryKey: ['movies','Review', movieId],
    queryFn: () =>
      fetcher<APIsResponse<Review>>(API_ROUTES.movies.reviews(movieId)),
    enabled: !!movieId,
    staleTime: 5 * 60 * 1000,
  })
}
