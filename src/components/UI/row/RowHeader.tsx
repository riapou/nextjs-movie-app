import Link from 'next/link'

interface RowHeaderProps {
  title: string
  showAllLink?: string
}

export const RowHeader = ({ title, showAllLink }: RowHeaderProps) => {
  return (
    <div className='row-header'>
      <h2 className='row-title'>{title}</h2>

      {showAllLink && (
        <Link href={showAllLink} className='show-all-btn'>
          View All <span className='arrow'>→</span>
        </Link>
      )}
    </div>
  )
}
