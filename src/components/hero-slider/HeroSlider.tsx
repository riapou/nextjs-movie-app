// HeroSlider.jsx
import Link from 'next/link'
import './HeroSlider.scss';
import { HeroSliderMovie } from '@/types/movie'
import { HeroSliderTV } from '@/types/tv'

import { getImageUrl } from '@/lib/utils/get-image-url'
import { useHeroSlider } from '@/hooks/useHeroSlider'
import { formatName } from '@/lib/utils/format-name'
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  slides: (HeroSliderTV | HeroSliderMovie)[]
  autoplay?: boolean
  autoplayInterval?: number
  showNavigation?: boolean
  showDots?: boolean
  infinite?: boolean
  transitionSpeed?: number
  pauseOnHover?: boolean
}

const HeroSlider = ({
  slides = [],
  autoplay = true,
  autoplayInterval = 5000,
  showNavigation = true,
  infinite = true,
  transitionSpeed = 500,
  pauseOnHover = true,
}: HeroSliderProps) => {
  const { sliderRef, current, next, prev, pause, resume } = useHeroSlider({
    total: slides.length,
    autoplay,
    interval: autoplayInterval,
    infinite,
  })
  const totalSlides = slides.length

  if (totalSlides === 0) {
    return (
      <div className='hero-slider'>
        <div className='slider-empty'>
          <p>No slides to display</p>
        </div>
      </div>
    )
  }
  return (
    <div
      className='hero-slider'
      onMouseEnter={() => pauseOnHover && pause()}
      onMouseLeave={() => pauseOnHover && resume()}
    >
      {/* Slides Container */}
      <div className='slides-container' ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={`${slide.id}-${slide.media_type}`}
            className={`slide ${index === current ? 'active' : ''}`}
            style={{
              transition: `opacity ${transitionSpeed}ms ease-in-out`,
              backgroundImage: `url(${getImageUrl({
                path: slide.backdrop_path as string,
              })})`,
            }}
          >
            <div className='slide-overlay'>
              <div className='slide-content'>
                <Link href={`/${slide.media_type}/${slide.id}`}>
                  <h1 className='slide-title'>
                    {formatName(
                      slide.media_type === 'movie'
                        ? (slide as HeroSliderMovie).title
                        : (slide as HeroSliderTV).name,
                      17
                    )}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && totalSlides > 1 && (
        <>
          <ChevronLeft  strokeWidth={3} className='slider-nav prev' onClick={prev}/>
          <ChevronRight strokeWidth={3}  className='slider-nav next' onClick={next}/>

        </>
      )}

      {/* Slide Counter */}
      <div className='slide-counter'>
        {current + 1} / {totalSlides}
      </div>
    </div>
  )
}

export default HeroSlider
