import React from 'react';
import { useParams } from 'react-router-dom';
import './PersonInfoPage.css';
import './common_components/CommonStyles.css';
import Header from './common_components/Header';
import Footer from './common_components/Footer';
import Image from './image.jpg';

function PersonInfoPage() {

  const { person_id } = useParams();
  // fetch data of a person with person_id

  // "person" object is fetched data that is processed properly

  const person = {
    'first_name': 'Phoebe',
    'last_name': 'Tonkin',
    'photo': "https://flxt.tmsimg.com/assets/516329_v9_bb.jpg",
    'professions': ['Actress'],
    'date_of_birth': '12th July 1989',
    'place_of_birth': 'Sydney, Australia',
    'is_dead': false
  };

  return (
      <div className='background'>
        <div className='main-content'>
          <Header />
          <div className='person-info-wrap'>
              <div className='left-block'>
                  <h2>{ person['first_name'] } { person['last_name'] }</h2>
                  <img src={ person['photo'] } className='person-info-image' />
              </div>
              <div className='right-block'>
                  <label className='person-info-text'><span className='bold'>Career: </span> { 
                      person['professions'].map((profession, i) => 
                          <span>{`${profession}${(i === person['professions'].length - 1) ? '': ', '}` }</span>)
                  } </label>
                  <label>
                      <span className='bold'>Date of birth: </span> {person['date_of_birth']}
                  </label>
                  <label>
                      <span className='bold'>Birth place: </span> {person['place_of_birth']}
                  </label>
                  { person['is_dead'] && <label>
                      <span className='bold'>Date of death: </span> {person['date_of_death']}
                  </label> }
              </div>
          </div>
          <Footer />
        </div>
      </div>
  )
}

export default PersonInfoPage;