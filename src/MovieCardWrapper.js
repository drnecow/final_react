import React from 'react';
import './MovieCardWrapper.css';
import MovieCard from './MovieCard';

function MovieCardWrapper( {cardsToDisplay} ) {
  return (
    <div className='cards-wrap'>
        { 
            cardsToDisplay.map((card, i) =>
                (<MovieCard key={i} thumbnail_link={ card['thumbnail_link'] }
                    is_series = { card['is_series'] }
                    title={ card['title'] } 
                    release_year={ card['release_year'] } 
                    country={ card['country'] }
                    main_genre={ card['main_genre'] } />))
        }
    </div>
  )
}

export default MovieCardWrapper;