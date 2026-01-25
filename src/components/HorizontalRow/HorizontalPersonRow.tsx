import HorizontalRowBase from './_internal/HorizontalRowBase'
import PersonCard from '../card/PersonCard'
import { PersonCardData as Person } from '@/types/person'
import { getImageUrl } from '@/lib/utils/get-image-url'

interface Props {
  title: string
  persons: Person[]
  showAllLink?: string
  isLoding: boolean
}

const HorizontalPersonRow = ({
  title,
  persons,
  showAllLink,
  isLoding,
}: Props) => {
  return (
    <HorizontalRowBase
      title={title}
      items={persons}
      isLoading={isLoding}
      showAllLink={showAllLink}
      renderItem={(person) => (
        <PersonCard
          key={person.id}
          id={person.id}
          name={person.name}
          profile={getImageUrl({ path: person.profile_path })}
          media_type={person.media_type}
        />
      )}
    />
  )
}

export default HorizontalPersonRow
