export interface MediaBase {
  id: number
  poster_path: string | null
  title?: string
  name?: string
  vote_average: number
  media_type: 'movie'|'tv'
}
