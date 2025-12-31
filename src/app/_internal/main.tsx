'use client'
import React from 'react'
import HorizontalMovieRow from '@/components/HorizontalRow/HorizontalMovieRow'

import HorizontalPersonRow from '@/components/HorizontalRow/HorizontalPersonRow'
import { useUpcomingMovies, usePopularMovies } from '@/hooks/queries/movies'
import { useTrendPerson } from '@/hooks/queries/persons'
import { useTrendAll } from '@/hooks/queries/trend-all'
import { usePopularTVs, useOnTheAirTVs } from '@/hooks/queries/tvs'
import { normalizeDataList } from '@/lib/utils/normalize-data'

const Main: React.FC = () => {
  const { data } = useTrendAll()
  const trendingMovies = data?.results || []

  const { data: upcomingData } = useUpcomingMovies()
  const upcomingMovies = upcomingData?.results
    ? normalizeDataList(upcomingData.results, 'movie')
    : []

  const { data: popularMoviesData } = usePopularMovies()
  const popularMovies = popularMoviesData?.results
    ? normalizeDataList(popularMoviesData.results, 'movie')
    : []

  const { data: popularTVsData } = usePopularTVs()
  const popularTVs = popularTVsData?.results
    ? normalizeDataList(popularTVsData.results, 'tv')
    : []

  const { data: unTheAirTVsData } = useOnTheAirTVs()
  const unTheAirTVs = unTheAirTVsData?.results
    ? normalizeDataList(unTheAirTVsData.results, 'tv')
    : []

  const { data: personData } = useTrendPerson()
  const persons = personData?.results
    ? normalizeDataList(personData.results, 'person')
    : []

  return (
    <div className='app'>
      <main className='main-content'>
        <HorizontalMovieRow
          title='Trend Movies'
          movies={trendingMovies}
          showAllLink='/movies/trends'
        />
        <HorizontalMovieRow
          title='Upcoming Movies'
          movies={upcomingMovies}
          showAllLink='/movies/uncomingMovies'
        />
        <HorizontalMovieRow
          title='Popular Movies'
          movies={popularMovies}
          showAllLink='/movies/uncomingMovies'
        />
        <HorizontalMovieRow
          title='Popular TVs'
          movies={popularTVs}
          showAllLink='/movies/uncomingMovies'
        />
        <HorizontalMovieRow
          title='On The Air TVs'
          movies={unTheAirTVs}
          showAllLink='/movies/uncomingMovies'
        />
        <HorizontalPersonRow
          title='ternd persons'
          persons={persons}
          showAllLink={`/trend-persons`}
        />
      </main>
    </div>
  )
}

export default Main
