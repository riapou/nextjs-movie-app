import { API_ROUTES } from '@/config/api_routes'
import { fetcher } from '@/lib/api/fetcher'
import { APIsResponse } from '@/types/api-response'
import { MediaBase } from '@/types/media'
import { useQuery } from '@tanstack/react-query'

export const useTrendAll = () => {
  return useQuery<APIsResponse<MediaBase>>({
    queryKey: ['trend', 'all'],
    queryFn: () =>
      fetcher<APIsResponse<MediaBase>>(
        API_ROUTES.trending.all
      ),
    staleTime: 5 * 60 * 1000,
  })
}
