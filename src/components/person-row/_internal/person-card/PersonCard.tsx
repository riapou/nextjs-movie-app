import React from 'react'
import './PersonCard.css'
import { Star } from 'lucide-react'
import { formatName } from '@/lib/utils/format-name'
import Link from 'next/link'

type PersonCardProps = {
  id: number
  name: string
  profile: string
  media_type: string
}

const PersonCard: React.FC<PersonCardProps> = ({
  id,
  name,
  profile,
  media_type = 'person',
}) => {
  return (
    <Link
      href={`/${media_type}/${id}`}
      className='flex flex-col items-center gap-2'
    >
      <div className='person-card'>
        <img
          src={profile|| 'https://i.pinimg.com/736x/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg'}
          alt={name || 'person-profile'}
          className='person-profile'
        />
      </div>
      <h3 className='font-bold text-lg'>{formatName(name, 17)}</h3>
    </Link>
  )
}

export default PersonCard
