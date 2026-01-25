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
}: GetImageUrlParams): string => {
  if (!path) return 'https://as2.ftcdn.net/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.webp'

  return `${API_ROUTES.image_base_url}${API_ROUTES.images.sizes[size]}${path}`
}
