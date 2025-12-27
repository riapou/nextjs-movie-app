// lib/utils/get-image-url.ts
import { API_ROUTES } from '@/config/api_routes'
import { ImageSize } from '@/types/image-size'

interface GetImageUrlParams {
  path?: string | null
  size?: ImageSize
}

export const getImageUrl = ({
  path,
  size = 'original',
}: GetImageUrlParams): string | null => {
  if (!path) return null

  return `${API_ROUTES.image_base_url}${API_ROUTES.images.sizes[size]}${path}`
}
