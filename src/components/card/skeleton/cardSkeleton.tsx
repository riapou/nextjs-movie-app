import './card-skeleton.css'

const CardSkeleton = () => {
  return (
    <div className={`flex flex-col items-center gap-2`}>
      {/* Image skeleton */}
      <div className="card-image-skeleton">
        <div className="card-image-placeholder"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="w-full flex items-center justify-between px-2!">
        <div className="skeleton-text skeleton-title"></div>
      </div>
    </div>
  )
}

export default CardSkeleton