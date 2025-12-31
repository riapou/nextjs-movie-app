'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import './MovieDetails.css'

// Types
interface MovieDetails {
  id: number
  title: string
  originalTitle: string
  posterUrl: string
  backdropUrl: string
  rating: number
  voteCount: number
  releaseDate: string
  runtime: number
  genres: string[]
  overview: string
  director: string
  cast: CastMember[]
  similarMovies: SimilarMovie[]
  trailerUrl: string
}

interface CastMember {
  id: number
  name: string
  character: string
  profileUrl: string
}

interface SimilarMovie {
  id: number
  title: string
  posterUrl: string
  rating: number
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [movie, setMovie] = useState<MovieDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [showTrailer, setShowTrailer] = useState(false)

  // Sample data
  useEffect(() => {
    // In a real project, this would be an API call
    const fetchMovieDetails = async () => {
      setLoading(true)

      // Sample data for demonstration
      const sampleMovie: MovieDetails = {
        id: 1,
        title: 'The Godfather',
        originalTitle: 'The Godfather',
        posterUrl:
          'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
        backdropUrl:
          'https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
        rating: 9.2,
        voteCount: 1845,
        releaseDate: '1972-03-14',
        runtime: 175,
        genres: ['Drama', 'Crime'],
        overview:
          'The story of the Corleone family, one of the five mafia families in New York in the 1940s. When Don Vito Corleone, the head of the family, is targeted for assassination, his youngest son Michael, who had been reluctant to join the family business, steps in to take revenge and take control of the family business.',
        director: 'Francis Ford Coppola',
        cast: [
          {
            id: 1,
            name: 'Marlon Brando',
            character: 'Don Vito Corleone',
            profileUrl:
              'https://image.tmdb.org/t/p/w200/e2uQoKztYtOQqekXg8nqkAqJqKX.jpg',
          },
          {
            id: 2,
            name: 'Al Pacino',
            character: 'Michael Corleone',
            profileUrl:
              'https://image.tmdb.org/t/p/w200/2dGBb1Y62pDvqRkL6o6X2bNi2So.jpg',
          },
          {
            id: 3,
            name: 'Robert Duvall',
            character: 'Tom Hagen',
            profileUrl:
              'https://image.tmdb.org/t/p/w200/fOscaVWkFhZhqk4r2a8CLB1QnV6.jpg',
          },
          {
            id: 4,
            name: 'Diane Keaton',
            character: 'Kay Adams',
            profileUrl:
              'https://image.tmdb.org/t/p/w200/6W8oDuVGh1RSCb6WrQfB0MKUZiE.jpg',
          },
          {
            id: 5,
            name: 'James Caan',
            character: 'Sonny Corleone',
            profileUrl:
              'https://image.tmdb.org/t/p/w200/oU7ybeuHYQqo6FpDAobqBsWn8tG.jpg',
          },
          {
            id: 6,
            name: 'John Cazale',
            character: 'Fredo Corleone',
            profileUrl:
              'https://image.tmdb.org/t/p/w200/5xqICnKqL2v5LEcpq2nF0vKVWKv.jpg',
          },
        ],
        similarMovies: [
          {
            id: 2,
            title: 'The Godfather: Part II',
            posterUrl:
              'https://image.tmdb.org/t/p/w500/3bh1jUoWqvQXvLopVs2kZg2N1S5.jpg',
            rating: 9.0,
          },
          {
            id: 3,
            title: 'Goodfellas',
            posterUrl:
              'https://image.tmdb.org/t/p/w500/6yDg2eKZgGMmxhqgGVvPzC5L4hV.jpg',
            rating: 8.7,
          },
          {
            id: 4,
            title: 'The Shawshank Redemption',
            posterUrl:
              'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            rating: 9.3,
          },
          {
            id: 5,
            title: 'Scarface',
            posterUrl:
              'https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg',
            rating: 8.3,
          },
        ],
        trailerUrl: 'https://www.youtube.com/embed/sY1S34973zA',
      }

      setTimeout(() => {
        setMovie(sampleMovie)
        setLoading(false)
      }, 800)
    }

    fetchMovieDetails()
  }, [id])

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
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(139, 0, 0, 0.3)), url(${movie.backdropUrl})`,
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
                  src={movie.posterUrl}
                  alt={movie.title}
                  className='movie-poster'
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
                  <h2 className='movie-original-title'>
                    {movie.originalTitle}
                  </h2>
                </div>

                <div className='movie-meta'>
                  <div className='meta-item'>
                    <span className='meta-label'>Rating</span>
                    <div className='rating-display'>
                      <div className='rating-stars-large'>
                        {renderRatingStars(movie.rating)}
                      </div>
                      <div className='rating-score-large'>
                        <span className='score'>{movie.rating.toFixed(1)}</span>
                        <span className='score-out-of'>/10</span>
                        <span className='vote-count'>
                          ({movie.voteCount} votes)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='meta-item'>
                    <span className='meta-label'>Release Date</span>
                    <span className='meta-value'>
                      {formatDate(movie.releaseDate)}
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
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='meta-item'>
                    <span className='meta-label'>Director</span>
                    <span className='meta-value director'>
                      {movie.director}
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
                <h3>Synopsis</h3>
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
                <h3>Cast</h3>
                <div className='cast-grid'>
                  {movie.cast.map((person) => (
                    <div key={person.id} className='cast-card'>
                      <div className='cast-photo'>
                        <img
                          src={person.profileUrl}
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
                      <span className='crew-name'>{movie.director}</span>
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
                <h3>Similar Movies</h3>
                <div className='similar-movies-grid'>
                  {movie.similarMovies.map((similarMovie) => (
                    <Link
                      to={`/movie/${similarMovie.id}`}
                      key={similarMovie.id}
                      className='similar-movie-card'
                    >
                      <div className='similar-poster'>
                        <img
                          src={similarMovie.posterUrl}
                          alt={similarMovie.title}
                        />
                        <div className='similar-rating'>
                          {similarMovie.rating.toFixed(1)}
                        </div>
                      </div>
                      <h4 className='similar-title'>{similarMovie.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className='reviews-section'>
                <h3>Reviews</h3>
                <div className='reviews-list'>
                  <div className='review-card'>
                    <div className='review-header'>
                      <div className='reviewer'>
                        <img
                          src='https://image.tmdb.org/t/p/w200/9mdAohLsDu36WaXV2N3SQ388bvz.jpg'
                          alt='Reviewer'
                          className='reviewer-avatar'
                        />
                        <div className='reviewer-info'>
                          <h4>Roger Ebert</h4>
                          <span className='review-date'>March 24, 1972</span>
                        </div>
                      </div>
                      <div className='review-rating'>
                        {renderRatingStars(9.5)}
                      </div>
                    </div>
                    <p className='review-text'>
                      The Godfather is one of the few films that lives up to its
                      reputation. It's a dark, complex epic that masterfully
                      tells the story of a mafia family. Marlon Brando's
                      performance alone makes this film worth watching.
                    </p>
                  </div>

                  <div className='review-card'>
                    <div className='review-header'>
                      <div className='reviewer'>
                        <img
                          src='https://image.tmdb.org/t/p/w200/8I37rZL3P9yZ1bW2KbMEWOED1vJ.jpg'
                          alt='Reviewer'
                          className='reviewer-avatar'
                        />
                        <div className='reviewer-info'>
                          <h4>Peter Travers</h4>
                          <span className='review-date'>March 15, 1972</span>
                        </div>
                      </div>
                      <div className='review-rating'>
                        {renderRatingStars(9.0)}
                      </div>
                    </div>
                    <p className='review-text'>
                      Francis Ford Coppola has created a masterpiece that time
                      has not diminished. The Godfather is not just a crime
                      film, but a deep study of power, family, and sacrifice.
                      The cinematography, music, and performances are all at
                      their peak.
                    </p>
                  </div>
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
              <button
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
              ></iframe>
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
