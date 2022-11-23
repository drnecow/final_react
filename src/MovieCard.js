import React from 'react'
import './MovieCard.css';

function MovieCard( { card } ) {
  return (
    <div className='card-body'>
        <img className='card-image' src={ card['thumbnail_link'] } />
        <div className={`series-or-film ${ card['is_series'] ? 'red' : 'blue'}`}>
            {card['is_series'] ? "Series" : "Film"}
        </div>
        <div className='card-text-wrap'>
            <a className='card-link card-text-item' href='#'>{ card['title'] }</a>
            <div className='card-plaintext card-text-item'>{ card['release_year'] }, { card['country'] }, { card['main_genre'] }</div>
        </div>
    </div>
  )
}

export default MovieCard;