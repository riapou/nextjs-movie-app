import { ChevronsLeft, ChevronsRight } from "lucide-react"

type ArrowProps = {
  onClick: () => void
}

export const LeftArrow = ({ onClick }: ArrowProps) => {
  return (
    <div className='scroll-overlay left-overlay'>
      <button
        className='overlay-scroll-btn left-btn'
        onClick={onClick}
        aria-label='Scroll left'
      >
        <ChevronsLeft size={35} strokeWidth={3} />
      </button>
    </div>
  )
}

export const RightArrow = ({ onClick }: ArrowProps) => {
  return (
    <div className='scroll-overlay right-overlay'>
      <button
        className='overlay-scroll-btn right-btn'
        onClick={onClick}
        aria-label='Scroll right'
      >
        <ChevronsRight size={35} strokeWidth={3} />
      </button>
    </div>
  )
}
