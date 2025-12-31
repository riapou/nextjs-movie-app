import { API_ROUTES } from "@/config/api_routes"
import { fetcher } from "@/lib/api/fetcher"
import { APIsResponse } from "@/types/api-response"
import { MovieCardData } from "@/types/movie"
import { useQuery } from "@tanstack/react-query"

export const useTrendAll = () => {
  return useQuery<APIsResponse<MovieCardData>>({
    queryKey: ['trend', 'all'],
    queryFn: () =>
      fetcher<APIsResponse<MovieCardData>>(API_ROUTES.trending.all),
    staleTime: 5 * 60 * 1000,
  })
}