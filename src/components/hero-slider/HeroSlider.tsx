'use client'
import { HeroSliderMovie } from '@/types/movie'
import { HeroSliderTV } from '@/types/tv'
import HeroSlider from './_internal/movieSlider'
import { MovieSkeleton } from './_internal/MovieSkeleton/MovieCardSkeleton'
import { useTrendAll } from '@/hooks/queries/trend-all'

export default function Home() {
  const { data, isLoading, isError } = useTrendAll() as {
    data?: { results: (HeroSliderMovie | HeroSliderTV)[] }
    isLoading: boolean
    isError: boolean
  }
  


  const movies = data?.results ?? []

  return (
    <div className='slider'>
      {isLoading ? <MovieSkeleton /> : <HeroSlider slides={movies} />}
    </div>
  )
}
