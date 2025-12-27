'use client'
import { HeroSliderMovie } from '@/types/movie'
import { HeroSliderTV } from '@/types/tv'
import { useTrendMovies } from '../lib/fetcher'
import HeroSlider from '@/components/HeroSlider/movieSlider'
import { MovieSkeleton } from '@/components/HeroSlider/MovieSkeleton/MovieCardSkeleton'

export default function Home() {
  const { data, isLoading, isError } = useTrendMovies() as {
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
