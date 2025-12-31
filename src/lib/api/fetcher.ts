import { API_ROUTES } from '@/config/api_routes'

const API_KEY = API_ROUTES.api_key
const DEFAULT_LANG = API_ROUTES.default_lang

// تایپ درست برای پارامترها
type QueryParams = Record<string, string | number | boolean>

const buildUrl = (path: string, params: QueryParams = {}) => {
  const query = new URLSearchParams([
    ['api_key', API_KEY || ''],
    ['language', DEFAULT_LANG],
    ...Object.entries(params).map(([k, v]) => [k, String(v)]),
  ])

  console.log(`${API_ROUTES.base_url}${path}?${query.toString()}`)
  return `${API_ROUTES.base_url}${path}?${query.toString()}`
}

export const fetcher = async <T>(
  path: string,
  params: QueryParams = {}
): Promise<T> => {
  try {
    const url = buildUrl(path, params)
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`)
    }

    return (await res.json()) as T
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}




