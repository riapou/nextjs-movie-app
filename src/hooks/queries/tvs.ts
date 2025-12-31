import { API_ROUTES } from "@/config/api_routes"
import { fetcher } from "@/lib/api/fetcher"
import { APIsResponse } from "@/types/api-response"
import { MovieCardData } from "@/types/movie"
import { useQuery } from "@tanstack/react-query"

export const usePopularTVs = () => {
  return useQuery<APIsResponse<MovieCardData>>({
    queryKey: ['tvs', 'popular'],
    queryFn: () => fetcher<APIsResponse<MovieCardData>>(API_ROUTES.tv.popular),
    staleTime: 5 * 60 * 1000,
  })
}
export const useOnTheAirTVs = () => {
  return useQuery<APIsResponse<MovieCardData>>({
    queryKey: ['tvs', 'onTheAir'],
    queryFn: () =>
      fetcher<APIsResponse<MovieCardData>>(API_ROUTES.tv.on_the_air),
    staleTime: 5 * 60 * 1000,
  })
}
