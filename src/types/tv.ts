export interface TVBase {
  id: number
  name: string
  media_type?: 'tv'
}
export interface TVDetails extends TVBase {
  poster_path: string
  backdrop_path: string
  overview: string
  genres: { id: number; name: string }[]
  vote_average: number
  status: string
  first_air_date: string
  last_air_date: string
  vote_count: number
  production_countries: { iso_3166_1: string; name: string }
  number_of_seasons: number
}

export type TVCardData = Pick<
  TVDetails,
  'id' | 'name' | 'poster_path' | 'media_type' | 'vote_average'
>
export type HeroSliderTV = Pick<
  TVDetails,
  'id' | 'name' | 'backdrop_path' | 'media_type'
>
