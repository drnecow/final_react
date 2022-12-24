import React, { useState } from 'react';
import './VideoPlayer.css';


function VideoPlayer({ episodes }) {
    const [currentEpisode, setCurrentEpisode] = useState(episodes[0]);

    const handleChange = event => {
        const selectedEpisode = episodes.find(
          episode => episode['name'] === event.target.value
        );
        setCurrentEpisode(selectedEpisode);
    };


    return (
        <div className='video-player-wrapper'>
            <select className='episode-options' onChange={ handleChange } value={ currentEpisode.name }>
                { episodes.map( episode => (
                    <option key={ episode['name'] } value={ episode['name'] }>
                        { episode['name'] }
                    </option>
                )) }
            </select>
            <video className='video-player' src={ currentEpisode.source } controls />
        </div>
  )
}

export default VideoPlayer;