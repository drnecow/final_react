import React from 'react';
import './MainPage.css';
import './common_components/CommonStyles.css';
import Header from './common_components/Header';
import Footer from './common_components/Footer';
import MovieCardWrapper from './MovieCardWrapper';
import MovieSearchBlock from './MovieSearchBlock';

function MainPage() {
  let thumbnail_link = "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/H2O_Just_Add_Water.png/375px-H2O_Just_Add_Water.png";

  let cards = []

  for (let i = 0; i < 9; i++)
    cards.push( {
      'thumbnail_link': thumbnail_link,
      'is_series': true,
      'title': 'H20: Just Add Water',
      'release_year': 2006,
      'country': 'Australia',
      'main_genre': 'Teen drama'
    } );

  return (
    <div className='background'>
      <div className='main-content'>
        <Header />
        <MovieSearchBlock />
        <MovieCardWrapper cardsToDisplay={ cards } />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
