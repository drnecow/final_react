import React from 'react';
import './MovieCardWrapper.css';
import MovieCard from './MovieCard';

function MovieCardWrapper( {cardsToDisplay} ) {
  return (
    <div className='cards-wrap'>
        { 
            cardsToDisplay.map((card, i) =>
                <MovieCard key={i} card={ card } />)
        }
    </div>
  )
}

export default MovieCardWrapper;