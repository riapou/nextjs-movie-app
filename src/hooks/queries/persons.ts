import { API_ROUTES } from "@/config/api_routes"
import { fetcher } from "@/lib/api/fetcher"
import { APIsResponse } from "@/types/api-response"
import { PersonCardData } from "@/types/person"
import { useQuery } from "@tanstack/react-query"

export const useTrendPerson = () => {
  return useQuery<APIsResponse<PersonCardData>>({
    queryKey: ['trend', 'person'],
    queryFn: () =>
      fetcher<APIsResponse<PersonCardData>>(API_ROUTES.trending.person),
    staleTime: 5 * 60 * 1000,
  })
}