'use client'

import Card from '@/components/UI/card/card'
import { formatName } from '@/lib/utils/format-name'

const FALLBACK_PROFILE =
  'https://i.pinimg.com/736x/01/4e/f2/014ef2f860e8e56b27d4a3267e0a193a.jpg'

type PersonCardProps = {
  id: number
  name: string
  profile?: string
  media_type?: 'person'
}

const PersonCard = ({
  id,
  name,
  profile,
  media_type = 'person',
}: PersonCardProps) => {
  const formattedName = formatName(name, 17)

  return (
    <Card
      href={`/${media_type}/${id}`}
      image={profile || FALLBACK_PROFILE}
      alt={formattedName}
      title={formattedName}
      className="person-card"
    />
  )
}

export default PersonCard
