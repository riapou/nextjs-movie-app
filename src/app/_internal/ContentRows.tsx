'use client'

import HorizontalMovieRow from '@/components/horizontal-row/HorizontalMovieRow'
import HorizontalPersonRow from '@/components/horizontal-row/HorizontalPersonRow'
import { useUpcomingMovies, usePopularMovies } from '@/hooks/queries/movies'
import { useTrendPerson } from '@/hooks/queries/persons'
import { useTrendAll } from '@/hooks/queries/trend-all'
import { usePopularTVs, useOnTheAirTVs } from '@/hooks/queries/tvs'
import { normalizeDataList } from '@/lib/utils/normalize-data'

// Type definitions
interface RowConfig {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  showAllLink: string
  isLoading: boolean
  type: 'movie' | 'tv' | 'person'
  component: 'movie' | 'person'
}

// Custom hook for data management
const useRowData = () => {
  const trendAll = useTrendAll()
  const upcomingMovies = useUpcomingMovies()
  const popularMovies = usePopularMovies()
  const popularTVs = usePopularTVs()
  const onTheAirTVs = useOnTheAirTVs()
  const trendPersons = useTrendPerson()

  const rows: RowConfig[] = [
    {
      title: 'Trend Movies',
      data: trendAll.data?.results ?? [],
      showAllLink: '/movies/trends',
      isLoading: trendAll.isLoading,
      type: 'movie',
      component: 'movie',
    },
    {
      title: 'Upcoming Movies',
      data: upcomingMovies.data?.results ?? [],
      showAllLink: '/movies/upcoming',
      isLoading: upcomingMovies.isLoading,
      type: 'movie',
      component: 'movie',
    },
    {
      title: 'Popular Movies',
      data: popularMovies.data?.results ?? [],
      showAllLink: '/movies/popular',
      isLoading: popularMovies.isLoading,
      type: 'movie',
      component: 'movie',
    },
    {
      title: 'Popular TVs',
      data: popularTVs.data?.results ?? [],
      showAllLink: '/tv/popular',
      isLoading: popularTVs.isLoading,
      type: 'tv',
      component: 'movie',
    },
    {
      title: 'On The Air TVs',
      data: onTheAirTVs.data?.results ?? [],
      showAllLink: '/tv/on-the-air',
      isLoading: onTheAirTVs.isLoading,
      type: 'tv',
      component: 'movie',
    },
    {
      title: 'Trend Persons',
      data: trendPersons.data?.results?? [],
      showAllLink: '/trend-persons',
      isLoading: trendPersons.isLoading,
      type: 'person',
      component: 'person',
    },
  ]

  return rows
}

// Row component renderer
const RowRenderer = ({ config }: { config: RowConfig }) => {
  const getNormalizedData = () => {
    if (config.type === 'person') {
      return normalizeDataList(config.data, 'person')
    }
    return normalizeDataList(config.data, config.type)
  }

  if (config.component === 'movie') {
    return (
      <HorizontalMovieRow
        key={config.title}
        title={config.title}
        movies={getNormalizedData()}
        showAllLink={config.showAllLink}
        isLoding={config.isLoading}
      />
    )
  }

  return (
    <HorizontalPersonRow
      key={config.title}
      title={config.title}
      persons={getNormalizedData()}
      showAllLink={config.showAllLink}
      isLoding={config.isLoading}
    />
  )
}

const ContentRows = () => {
  const rows = useRowData()

  return (
    <div className='app'>
      <main className='main-content'>
        {rows.map((row) => (
          <RowRenderer key={row.title} config={row} />
        ))}
      </main>
    </div>
  )
}

export default ContentRows
