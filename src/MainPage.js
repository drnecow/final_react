import React from 'react';
import './MainPage.css';
import './common_components/CommonStyles.css';
import Header from './common_components/Header';
import Footer from './common_components/Footer';
import MovieCardWrapper from './MovieCardWrapper';
import MovieSearchBlock from './MovieSearchBlock';
import Image from './image.jpg';
import Paginator from './common_components/Paginator';

function MainPage() {
  let cards = []

  for (let i = 0; i < 9; i++)
    cards.push( {
      'thumbnail_link': Image,
      'is_series': true,
      'title': 'H20: Just Add Water',
      'release_year': 2006,
      'country': 'Australia',
      'main_genre': 'Teen drama'
    } );
  
  for (let i = 0; i < 194; i++)
    cards.push( {
      'thumbnail_link': Image,
      'is_series': false,
      'title': 'Another Movie',
      'release_year': 2022,
     'country': 'Kazakhstan',
      'main_genre': 'Detective'
    } );

  const [cardsOnPage, setCardsOnPage] = React.useState(cards.slice(0, Math.min(9, cards.length)));

  function changeCardsOnPage(pageNumber) {
    setCardsOnPage(cards.slice(pageNumber * 9 - 9, Math.min(pageNumber * 9, cards.length)));
  }

  return (
    <div className='background'>
      <div className='main-content'>
        <Header />
        <MovieSearchBlock />
        <MovieCardWrapper cardsToDisplay={ cardsOnPage } />
        <Paginator numPages = { Math.ceil(cards.length / 9) } updateFunc = { changeCardsOnPage } />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
