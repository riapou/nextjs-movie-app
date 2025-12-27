export const API_ROUTES = {
  base_url: 'https://api.themoviedb.org/3',
  image_base_url: 'https://image.tmdb.org/t/p',
  api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  default_lang: 'en-US',

  trending: {
    day: '/trending/all/day',
    week: '/trending/all/week',
  },

  movies: {
    popular: '/movie/popular',
    top_rated: '/movie/top_rated',
    now_playing: '/movie/now_playing',
    upcoming: '/movie/upcoming',
    details: (id: number | string) => `/movie/${id}`,
    credits: (id: number | string) => `/movie/${id}/credits`,
    videos: (id: number | string) => `/movie/${id}/videos`,
    images: (id: number | string) => `/movie/${id}/images`,
    similar: (id: number | string) => `/movie/${id}/similar`,
  },

  tv: {
    popular: '/tv/popular',
    top_rated: '/tv/top_rated',
    on_the_air: '/tv/on_the_air',
    details: (id: number | string) => `/tv/${id}`,
    credits: (id: number | string) => `/tv/${id}/credits`,
    videos: (id: number | string) => `/tv/${id}/videos`,
    images: (id: number | string) => `/tv/${id}/images`,
    similar: (id: number | string) => `/tv/${id}/similar`,
  },

  search: {
    multi: '/search/multi',
    movie: '/search/movie',
    tv: '/search/tv',
    people: '/search/person',
  },

  genres: {
    movie: '/genre/movie/list',
    tv: '/genre/tv/list',
  },

  people: {
    details: (id: number | string) => `/person/${id}`,
    combined_credits: (id: number | string) => `/person/${id}/combined_credits`,
  },

  find_images: {
    person: (id: number | string) => `/person/${id}/images`,
    movie: (id: number | string) => `/movie/${id}/images`,
    tv: (id: number | string) => `/tv/${id}/images`,
  },

  images: {
    base: 'https://image.tmdb.org/t/p',
    sizes: {
      poster_small: '/w185',
      poster_med: '/w342',
      poster_large: '/w780',
      backdrop_small: '/w300',
      backdrop_med: '/w780',
      backdrop_large: '/w1280',
      original: '/original',
    },
  },
} as const
