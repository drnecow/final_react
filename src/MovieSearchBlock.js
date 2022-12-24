import React from 'react';
import './MovieSearchBlock.css';

function MovieSearchBlock() {
  return (
    <div className='search-wrap'>
        <label className='search-item'>Search movie:&ensp; 
            <input type='text' placeholder='Enter movie name'/>
        </label>
        <button className='search-item'>Search movie</button>
    </div>
  )
}

export default MovieSearchBlock;