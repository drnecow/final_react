import React from 'react';
import { Link } from 'react-router-dom';
import './MovieInfo.css';
import VideoPlayer from './VideoPlayer';


function MovieInfo({ movie }) {
    return (
        <div className='movie-info-container'>
            <div className='movie-header bold'>{ movie['title'] }</div>
            <div className='block-body'>
                <div className='left-section'>
                    <img className='thumbnail' src={ movie['thumbnail_link'] }/>
                </div>
                <div className='right-section'>
                    <label className='info-item'><span className='bold'>Ratings: </span> { movie['ratings'] }</label>
                    <label className='info-item'><span className='bold'>Release date: </span> { movie['release_date'] }</label>
                    <label className='info-item'><span className='bold'>Country: </span> { movie['country'] }</label>
                    <label className='info-item'><span className='bold'>Age rating: </span> { movie['age_rating'] }</label>
                    <label className='info-item'><span className='bold'>Creators: </span>
                        { movie['creators'].map((creator, i) => 
                            <label><Link to={`/people/${creator['id']}`}>
                                    { creator['name'] }
                                </Link>{ `${i === movie['creators'].length - 1 ? '' : ', '}` }</label>) }
                    </label>
                    <label className='info-item'><span className='bold'>Actors: </span>
                        { movie['actors'].map((actor, i) => 
                            <label><Link to={`/people/${actor['id']}`}>
                                    { actor['name'] }
                                </Link>{ `${i === movie['actors'].length - 1 ? '' : ', '}` }</label>) }
                    </label>
                </div>
            </div>
            <div className='description'>
                { movie['description'] }
            </div>

            <VideoPlayer episodes={ movie['episodes'] } />
        </div>
    );
}

export default MovieInfo;