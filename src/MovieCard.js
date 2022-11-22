import React from 'react'
import './MovieCard.css';

function MovieCard( {thumbnail_link, is_series, title, release_year, country, main_genre} ) {
  return (
    <div className='card-body'>
        <img className='card-image' src={thumbnail_link} />
        <div className={`series-or-film ${is_series ? 'red' : 'blue'}`}>
            {is_series ? "Series" : "Film"}
        </div>
        <div className='card-text-wrap'>
            <a className='card-link card-text-item' href='#'>{title}</a>
            <div className='card-plaintext card-text-item'>{release_year}, {country}, {main_genre}</div>
        </div>
    </div>
  )
}

export default MovieCard;