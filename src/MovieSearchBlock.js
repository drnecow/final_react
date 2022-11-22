import React from 'react';
import './MovieSearchBlock.css';

function MovieSearchBlock() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className='search-wrap'>
        <label className='search-item'>Search movie:&ensp; 
            <input type='text' placeholder='Enter movie name'/>
        </label>
        <button className='search-item' onClick={() => setExpanded(!expanded)}>{`Expanded search filters ${expanded? '↑' : '↓'}`}</button>

        {expanded && (<div className='search-item'>
            Expanded search filters will be here
        </div>)}
    </div>
  )
}

export default MovieSearchBlock;