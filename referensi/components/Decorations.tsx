import React from 'react';

export const Sparkle: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 0L14.595 9.405L24 12L14.595 14.595L12 24L9.405 14.595L0 12L9.405 9.405L12 0Z"
      fill="currentColor"
    />
  </svg>
);

export const Squiggle: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 50 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M2 5C8 -2 12 12 18 5C24 -2 28 12 34 5C40 -2 44 12 48 5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const BlobShape1: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.3C60.4,45.7,49.9,54.9,38.1,62.8C26.3,70.7,13.1,77.3,-0.6,78.3C-14.3,79.4,-28.6,74.8,-41.2,67.2C-53.8,59.6,-64.7,49,-72.5,36.5C-80.3,24,-85,9.7,-83.4,-4C-81.8,-17.7,-73.9,-30.8,-63.9,-41.3C-53.9,-51.8,-41.8,-59.7,-29.4,-67.9C-17,-76.1,-4.3,-84.6,4.9,-93.1L14.1,-101.6" transform="translate(100 100)" />
  </svg>
);

export const BlobShape2: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="currentColor" d="M38.1,-63.7C49.8,-59.3,60.1,-50.8,68.7,-40.4C77.3,-30,84.2,-17.6,83.9,-5.3C83.5,7,75.9,19.2,67.2,30.3C58.5,41.4,48.7,51.4,37.6,58.8C26.5,66.2,14.1,71.1,1.1,69.2C-11.9,67.3,-25.5,58.6,-38.6,50C-51.7,41.4,-64.3,32.9,-70.7,21.3C-77.1,9.7,-77.3,-5,-72.5,-18.2C-67.7,-31.4,-57.9,-43.1,-46.9,-47.8C-35.9,-52.5,-23.7,-50.2,-12.3,-50.7C-0.9,-51.2,11.3,-54.5,26.4,-68.1" transform="translate(100 100)" />
  </svg>
);

export const DoodleUnderline: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9C20 3 40 3 60 5C80 7 100 9 117 3" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
)