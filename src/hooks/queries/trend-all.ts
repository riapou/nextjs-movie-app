import { API_ROUTES } from '@/config/api_routes'
import { fetcher } from '@/lib/api/fetcher'
import { APIsResponse } from '@/types/api-response'
import { MovieCardData } from '@/types/movie'
import { TVCardData } from '@/types/tv'
import { useQuery } from '@tanstack/react-query'

export const useTrendAll = () => {
  return useQuery<APIsResponse<MovieCardData | TVCardData>>({
    queryKey: ['trend', 'all'],
    queryFn: () =>
      fetcher<APIsResponse<MovieCardData | TVCardData>>(
        API_ROUTES.trending.all
      ),
    staleTime: 5 * 60 * 1000,
  })
}
