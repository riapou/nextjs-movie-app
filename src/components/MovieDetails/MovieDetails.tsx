'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './MovieDetails.scss'
import { MovieDetails as movie, MovieCardData } from '@/types/movie'
import { MovieCreditsResponse } from '@/types/person'
import { getImageUrl } from '@/lib/utils/get-image-url'
import MovieCard from '../UI/card/MoveCard'
import { Review } from '@/hooks/queries/movies'

// Types
// interface MovieDetails {
//   id: number
//   title: string
//   originalTitle: string
//   posterUrl: string
//   backdropUrl: string
//   rating: number
//   voteCount: number
//   releaseDate: string
//   runtime: number
//   genres: string[]
//   overview: string
//   director: string
//   cast: CastMember[]
//   similarMovies: SimilarMovie[]
//   trailerUrl: string
// }

// interface SimilarMovie {
//   id: number
//   title: string
//   posterUrl: string
//   rating: number
// }

const MovieDetails: React.FC<{
  movie: movie
  loading: boolean
  credits: MovieCreditsResponse
  recommendationMovies: MovieCardData[]
  reviews: Review[]
}> = ({ movie, loading, credits, recommendationMovies, reviews }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [showTrailer, setShowTrailer] = useState(false)

  // Function to render rating stars
  const renderRatingStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating / 2)
    const hasHalfStar = rating % 2 >= 1

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className='star full'>
          ★
        </span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key='half' className='star half'>
          ★
        </span>
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className='star empty'>
          ★
        </span>
      )
    }

    return stars
  }

  // Function to format runtime
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  if (loading) {
    return (
      <div className='loading-container'>
        <div className='loading-spinner'></div>
        <p>Loading movie details...</p>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className='error-container'>
        <h2>Movie not found</h2>
        <Link href='/' className='back-link'>
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className='movie-details-page'>
      {/* Header with backdrop image */}
      <div
        className='movie-backdrop'
        style={{
          backgroundImage: ` url(${getImageUrl({
            path: movie.backdrop_path,
          })})`,
        }}
      >
        <div className='backdrop-overlay'>
          <div className='container'>
            <Link href='/' className='back-button'>
              ← Back to Movies
            </Link>

            <div className='movie-header'>
              <div className='poster-container'>
                <img
                  src={
                    getImageUrl({ path: movie.poster_path }) ||
                    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                  }
                  alt={movie.title}
                  className='movie-poster'
                  loading='lazy'
                />
                <div className='poster-overlay'>
                  <button
                    className='play-trailer-btn'
                    onClick={() => setShowTrailer(true)}
                  >
                    ▶ Play Trailer
                  </button>
                </div>
              </div>

              <div className='movie-header-info'>
                <div className='movie-title-section'>
                  <h1 className='movie-title'>{movie.title}</h1>
                  <h2 className='movie-original-title'>originalTitle</h2>
                </div>

                <div className='movie-meta'>
                  <div className='meta-item'>
                    <span className='meta-label'>Rating</span>
                    <div className='rating-display'>
                      <div className='rating-stars-large'>
                        {renderRatingStars(movie.vote_average)}
                      </div>
                      <div className='rating-score-large'>
                        <span className='score'>
                          {movie.vote_average.toFixed(1)}
                        </span>
                        <span className='score-out-of'>/10</span>
                        <span className='vote-count'>
                          ({movie.vote_count} votes)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='meta-item'>
                    <span className='meta-label'>Release Date</span>
                    <span className='meta-value'>
                      {formatDate(movie.release_date)}
                    </span>
                  </div>

                  <div className='meta-item'>
                    <span className='meta-label'>Runtime</span>
                    <span className='meta-value'>
                      {formatRuntime(movie.runtime)}
                    </span>
                  </div>

                  <div className='meta-item'>
                    <span className='meta-label'>Genres</span>
                    <div className='genres'>
                      {movie.genres.map((genre, index) => (
                        <span key={index} className='genre-tag'>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='meta-item'>
                    <span className='meta-label'>Director</span>
                    <span className='meta-value director'>
                      {
                        credits.crew.find((member) => member.job === 'Director')
                          ?.name
                      }
                    </span>
                  </div>
                </div>

                <div className='action-buttons'>
                  <button className='action-btn watch-btn'>▶ Watch Now</button>
                  <button className='action-btn favorite-btn'>
                    ♥ Add to Favorites
                  </button>
                  <button className='action-btn share-btn'>🔗 Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='movie-content'>
        <div className='container'>
          {/* Tabs */}
          <div className='tabs'>
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab ${activeTab === 'cast' ? 'active' : ''}`}
              onClick={() => setActiveTab('cast')}
            >
              Cast & Crew
            </button>
            <button
              className={`tab ${activeTab === 'similar' ? 'active' : ''}`}
              onClick={() => setActiveTab('similar')}
            >
              Similar Movies
            </button>
            <button
              className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>

          {/* Tab content */}
          <div className='tab-content'>
            {activeTab === 'overview' && (
              <div className='overview-section'>
                <h3 className='tab-title'>Synopsis</h3>
                <p className='overview-text'>{movie.overview}</p>

                <div className='facts-section'>
                  <h4>Interesting Facts</h4>
                  <ul className='facts-list'>
                    <li>
                      The Godfather won 3 Academy Awards including Best Picture
                    </li>
                    <li>
                      Marlon Brando won the Oscar for Best Actor for his role in
                      this film
                    </li>
                    <li>
                      The film was selected for preservation in the U.S.
                      National Film Registry in 1990
                    </li>
                    <li>
                      The famous horse head scene was inspired by a real event
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'cast' && (
              <div className='cast-section'>
                <h3 className='tab-title'>Cast</h3>
                <div className='cast-grid'>
                  {credits.cast.map((person) => (
                    <div key={person.id} className='cast-card'>
                      <div className='cast-photo'>
                        <img
                          src={getImageUrl({ path: person.profile_path }) || ''}
                          alt={person.name}
                          onError={(e) => {
                            e.currentTarget.src =
                              'https://via.placeholder.com/150x225/8B0000/FFFFFF?text=No+Image'
                          }}
                        />
                      </div>
                      <div className='cast-info'>
                        <h4 className='cast-name'>{person.name}</h4>
                        <p className='cast-character'>{person.character}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='crew-section'>
                  <h4>Production Crew</h4>
                  <div className='crew-list'>
                    <div className='crew-item'>
                      <span className='crew-role'>Director</span>
                      <span className='crew-name'>
                        {
                          credits.crew.find(
                            (member) => member.job === 'Director'
                          )?.name
                        }
                      </span>
                    </div>
                    <div className='crew-item'>
                      <span className='crew-role'>Producer</span>
                      <span className='crew-name'>Albert S. Ruddy</span>
                    </div>
                    <div className='crew-item'>
                      <span className='crew-role'>Screenplay</span>
                      <span className='crew-name'>
                        Mario Puzo, Francis Ford Coppola
                      </span>
                    </div>
                    <div className='crew-item'>
                      <span className='crew-role'>Music</span>
                      <span className='crew-name'>Nino Rota</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'similar' && (
              <div className='similar-movies-section'>
                <h3 className='tab-title'>Similar Movies</h3>
                <div className='similar-movies-grid'>
                  {recommendationMovies.map((similarMovie) => (
                    <MovieCard
                      key={similarMovie.id}
                      id={similarMovie.id}
                      title={similarMovie.title}
                      poster={
                        getImageUrl({ path: similarMovie.poster_path }) || ''
                      }
                      rating={similarMovie.vote_average}
                      media_type={similarMovie.media_type!}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className='reviews-section'>
                <h3 className='tab-title'>Reviews</h3>
                <div className='reviews-list'>
                  {reviews.map((review) => (
                    <div key={review.id} className='review-card'>
                      <div className='review-header'>
                        <div className='reviewer'>
                          <img
                            src={getImageUrl({
                              path: review.author_details.avatar_path,
                            })}
                            alt='Reviewer'
                            className='reviewer-avatar'
                          />
                          <div className='reviewer-info'>
                            <h4>{review.author}</h4>
                            <span className='review-date'>{review.created_at}</span>
                          </div>
                        </div>
                        <div className='review-rating'>
                          {renderRatingStars(review.author_details.rating)}
                        </div>
                      </div>
                      <p className='review-text'>
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>

                <button className='load-more-reviews'>Load More Reviews</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className='trailer-modal' onClick={() => setShowTrailer(false)}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-header'>
              <h3>{movie.title} Trailer</h3>
              {/* <button
                className='close-modal'
                onClick={() => setShowTrailer(false)}
              >
                ✕
              </button>
            </div>
            <div className='video-container'>
              <iframe
                width='100%'
                height='500'
                src={movie.trailerUrl}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className='movie-footer'>
        <div className='container'>
          <p>© 2024 CineTech. All rights reserved.</p>
          <div className='footer-links'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Use</a>
            <a href='#'>Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MovieDetails
