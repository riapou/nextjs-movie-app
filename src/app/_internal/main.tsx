'use client'

import HorizontalMovieRow from '@/components/horizontalRow/HorizontalMovieRow'
import HorizontalPersonRow from '@/components/horizontalRow/HorizontalPersonRow'

import { useUpcomingMovies, usePopularMovies } from '@/hooks/queries/movies'
import { useTrendPerson } from '@/hooks/queries/persons'
import { useTrendAll } from '@/hooks/queries/trend-all'
import { usePopularTVs, useOnTheAirTVs } from '@/hooks/queries/tvs'

import { normalizeDataList } from '@/lib/utils/normalize-data'

const Main = () => {
  const trendAll = useTrendAll()
  const upcomingMovies = useUpcomingMovies()
  const popularMovies = usePopularMovies()
  const popularTVs = usePopularTVs()
  const onTheAirTVs = useOnTheAirTVs()
  const trendPersons = useTrendPerson()

  return (
    <div className='app'>
      <main className='main-content'>
        <HorizontalMovieRow
          title='Trend Movies'
          movies={trendAll.data?.results ?? []}
          showAllLink='/movies/trends'
          isLoding={trendAll.isLoading}
        />

        <HorizontalMovieRow
          title='Upcoming Movies'
          movies={normalizeDataList(
            upcomingMovies.data?.results ?? [],
            'movie'
          )}
          showAllLink='/movies/upcoming'
          isLoding={upcomingMovies.isLoading}
        />

        <HorizontalMovieRow
          title='Popular Movies'
          movies={normalizeDataList(popularMovies.data?.results ?? [], 'movie')}
          showAllLink='/movies/popular'
          isLoding={popularMovies.isLoading}
        />

        <HorizontalMovieRow
          title='Popular TVs'
          movies={normalizeDataList(popularTVs.data?.results ?? [], 'tv')}
          showAllLink='/tv/popular'
          isLoding={popularTVs.isLoading}
        />

        <HorizontalMovieRow
          title='On The Air TVs'
          movies={normalizeDataList(onTheAirTVs.data?.results ?? [], 'tv')}
          showAllLink='/tv/on-the-air'
          isLoding={onTheAirTVs.isLoading}
        />

        <HorizontalPersonRow
          title='Trend Persons'
          persons={normalizeDataList(
            trendPersons.data?.results ?? [],
            'person'
          )}
          showAllLink='/trend-persons'
          isLoding={trendPersons.isLoading}
        />
      </main>
    </div>
  )
}

export default Main
