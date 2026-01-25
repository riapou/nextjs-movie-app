'use client'

import { formatName } from '@/lib/utils/format-name'
import Card from './_internal/card'

type PersonCardProps = {
  id: number
  name: string
  profile: string
  media_type?: 'person'
}

const PersonCard = ({
  id,
  name,
  profile,
}: PersonCardProps) => {
  const formattedName = formatName(name, 17)

  return (
    <Card
      href={`/person/${id}`}
      image={profile}
      alt={formattedName}
      title={formattedName}
      className='person-card'
    />
  )
}

export default PersonCard
