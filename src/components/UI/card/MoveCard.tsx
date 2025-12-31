// components/cards/MovieCard.tsx
'use client'

import { Star } from 'lucide-react'
import { formatName } from '@/lib/utils/format-name'
// import './MoveCard.css'
import Card from '@/components/UI/card/card'

type MovieCardProps = {
  id: number
  title: string
  poster: string
  rating: number
  media_type: 'movie' | 'tv'
}

const MovieCard = ({
  id,
  title,
  poster,
  rating,
  media_type,
}: MovieCardProps) => {
  const formattedTitle = formatName(title, 17)

  return (
    <Card
      href={`/${media_type}/${id}`}
      image={poster}
      alt={formattedTitle}
      title={formattedTitle}
      className='movie-card'
    >
      <span className='font-bold flex items-center gap-1'>
        {rating.toFixed(1)}
        <Star fill='yellow' color='yellow' size={16} />
      </span>
    </Card>
  )
}

export default MovieCard
