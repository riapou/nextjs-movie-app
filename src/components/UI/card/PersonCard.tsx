'use client'

import Card from '@/components/UI/card/card'
import { formatName } from '@/lib/utils/format-name'

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
  media_type = 'person',
}: PersonCardProps) => {
  const formattedName = formatName(name, 17)

  return (
    <Card
      href={`/person/${id}`}
      image={profile}
      alt={formattedName}
      title={formattedName}
      className="person-card"
    />
  )
}

export default PersonCard
