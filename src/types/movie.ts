export interface MovieBase {
  id: number
  title: string
  media_type: 'movie'
}
export interface MovieDetails extends MovieBase {
  poster_path: string
  backdrop_path: string
  overview: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
    media_type: 'collection'
  }
  genres: []
  vote_average: number
  status: string
  release_date: string
  vote_count: number
  production_countries: { iso_3166_1: string; name: string }
}

export type MovieCardData = Pick<
  MovieDetails,
  'id' | 'title' | 'poster_path' | 'media_type' | 'vote_average'
>
export type HeroSliderMovie = Pick<
  MovieDetails,
  'id' | 'title' | 'backdrop_path' | 'media_type'
>
