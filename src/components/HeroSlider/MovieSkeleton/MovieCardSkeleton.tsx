// MovieSkeleton.tsx
import React from 'react';
import './MovieSkeleton.scss';

interface MovieSkeletonProps {
  className?: string;
}

export const MovieSkeleton: React.FC<MovieSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`movie-skeleton ${className}`}>
      <div className="skeleton-overlay">
        <div className="skeleton-content">
          {/* Title skeleton */}
          <div className="skeleton-title" />
          
          {/* Text lines skeleton */}
          <div className="skeleton-text" />
          <div className="skeleton-text" />
          
          {/* Buttons skeleton */}
          <div className="skeleton-buttons">
            <div className="skeleton-button" />
            <div className="skeleton-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Optional: Variant with different content structure
export const MovieSkeletonCompact: React.FC<MovieSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`movie-skeleton ${className}`}>
      <div className="skeleton-overlay">
        <div className="skeleton-content">
          <div className="skeleton-title" />
          <div className="skeleton-text" />
        </div>
      </div>
    </div>
  );
};