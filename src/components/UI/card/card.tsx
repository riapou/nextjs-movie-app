// components/cards/BaseCard.tsx
import Link from 'next/link'
import React from 'react'
import './card.css'

type CardProps = {
  href: string
  image: string
  alt: string
  title: string
  children?: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({
  href,
  image,
  alt,
  title,
  children,
  className = '',
}) => {
  return (
    <Link href={href} className={`flex flex-col items-center gap-2 `}>
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="card-image"
        />
      </div>
      <div className="w-full flex items-center justify-between px-2!">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
      </div>
    </Link>
  )
}

export default Card
