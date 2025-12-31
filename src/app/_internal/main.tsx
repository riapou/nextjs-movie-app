'use client'
import React from 'react'
import HorizontalMovieRow from '@/components/movie-row/HorizontalMovieRow'
import {
  useOnTheAirTVs,
  usePopularMovies,
  usePopularTVs,
  useTrendAll,
  useTrendPerson,
  useUnComingMovies,
} from '@/lib/fetcher'
import HorizontalPersonRow from '@/components/person-row/HorizontalPersonRow'

const Main: React.FC = () => {
  const { data } = useTrendAll()
  const trendingMovies = data?.results || []

  const { data: upcomingData } = useUnComingMovies()
  const uncomingMovies = upcomingData?.results || []

  const { data: popularMoviesData } = usePopularMovies()
  const popularMovies = popularMoviesData?.results || []

  const { data: popularTVsData } = usePopularTVs()
  const popularTVs = popularTVsData?.results || []

  const { data: unTheAirTVsData } = useOnTheAirTVs()
  const unTheAirTVs = unTheAirTVsData?.results || []

  const { data: personData } = useTrendPerson()
  const persons = personData?.results || []

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
          movies={uncomingMovies}
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
