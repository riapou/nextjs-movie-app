export interface PersonBase {
  id: number
  name: string
  media_type?: 'person'
}
export interface PersonDetails extends PersonBase {
  biography: string
  birthday: string
  deathday: string
  known_for_department: string
  vote_average: number
  place_of_birth: string
  profile_path: string
}

export type PersonCardData = Pick<
  PersonDetails,
  'id' | 'name' | 'profile_path' | 'media_type' | 'vote_average'
>
