import React from 'react';
import './PersonInfoPage.css';
import './common_components/CommonStyles.css';
import Header from './common_components/Header';
import Footer from './common_components/Footer';
import Image from './image.jpg';

function PersonInfoPage({ person }) {
  return (
    <div className='background'>
      <div className='main-content'>
        <Header />
        <div className='person-info-wrap'>
            <div className='left-block'>
                <h2>{ person['first_name'] } { person['last_name'] }</h2>
                <img src={ Image } className='person-info-image' />
            </div>
            <div className='right-block'>
                <label className='person-info-text'><span className='bold'>Career: </span> { 
                    person['professions'].map((profession, i) => 
                        <span>{`${profession}${(i == person['professions'].length - 1) ? '': ', '}` }</span>)
                } </label>
                <label>
                    <span className='bold'>Date of birth: </span> {person['date_of_birth']}
                </label>
                <label>
                    <span className='bold'>Birth place: </span> {person['place_of_birth']}
                </label>
                <label>
                    <span className='bold'>Date of death: </span> {person['date_of_death']}
                </label>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PersonInfoPage;