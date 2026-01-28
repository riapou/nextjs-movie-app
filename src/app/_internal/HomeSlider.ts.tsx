'use client'
import { HeroSliderMovie } from '@/types/movie'
import { HeroSliderTV } from '@/types/tv'

import { useTrendAll } from '@/hooks/queries/trend-all'
import HeroSlider from '@/components/hero-slider/HeroSlider'
import { HeroSkeleton } from '@/components/hero-slider/hero-skeleton/HeroSkeleton'

export default function HomeSlider() {
  const { data, isLoading, isError } = useTrendAll() as {
    data?: { results: (HeroSliderMovie | HeroSliderTV)[] }
    isLoading: boolean
    isError: boolean
  }
  


  const movies = data?.results ?? []

  return (
    <div className='slider'>
      {isLoading ? <HeroSkeleton /> : <HeroSlider slides={movies} />}
    </div>
  )
}
