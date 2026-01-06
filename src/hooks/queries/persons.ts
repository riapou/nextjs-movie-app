import { API_ROUTES } from '@/config/api_routes'
import { fetcher } from '@/lib/api/fetcher'
import { APIsResponse } from '@/types/api-response'
import { MovieCreditsResponse, PersonCardData } from '@/types/person'
import { useQuery } from '@tanstack/react-query'

export const useTrendPerson = () => {
  return useQuery<APIsResponse<PersonCardData>>({
    queryKey: ['trend', 'person'],
    queryFn: () =>
      fetcher<APIsResponse<PersonCardData>>(API_ROUTES.trending.person),
    staleTime: 5 * 60 * 1000,
  })
}

export const useMovieCredits = (movieId: number) => {
  return useQuery<MovieCreditsResponse>({
    queryKey: ['movie', movieId, 'credits'],
    queryFn: () =>
      fetcher<MovieCreditsResponse>(API_ROUTES.movies.credits(movieId)),
    enabled: !!movieId,
    staleTime: 10 * 60 * 1000,
  })
}
