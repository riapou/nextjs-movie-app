import React from 'react'
import './MoveCard.css'
import { Star } from 'lucide-react'
import { formatName } from '@/lib/utils/format-name'
import Link from 'next/link'

type MovieCardProps = {
  id: number
  title: string
  poster: string
  rating: number
  media_type: string
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster,
  rating,
  media_type = 'movie',
}) => {
  return (
    <Link
      href={`/${media_type}/${id}`}
      className='flex flex-col items-center gap-2'
    >
      <div className='movie-card '>
        <img
          src={poster}
          alt={title || 'movie-poster'}
          className='movie-poster'
        />
      </div>
      <div className='w-full flex items-center justify-between p-2! '>
        <h3 className='font-bold text-lg'>{formatName(title, 17)}</h3>
        <span className='font-bold flex items-center gap-1'>
          {rating.toFixed(1)}
          <Star fill='yellow' color='yellow' size={16} />
        </span>
      </div>
    </Link>
  )
}

export default MovieCard
