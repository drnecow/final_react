import React from 'react';
import './common_components/CommonStyles.css';
import Header from './common_components/Header';
import Footer from './common_components/Footer';
import MovieCardWrapper from './MovieCardWrapper';
import MovieSearchBlock from './MovieSearchBlock';
import Image1 from './image.jpg';
import Image2 from './logo512.png';
import Paginator from './common_components/Paginator';

function MainPage() { // argument — { cards }, which is processed data from server
  let cards = []

  for (let i = 0; i < 9; i++)
    cards.push( {
      'id': 1,
      'thumbnail_link': Image1,
      'is_series': true,
      'title': 'H20: Just Add Water',
      'release_year': 2006,
      'country': 'Australia',
      'main_genre': 'Teen drama'
    } );
  
  for (let i = 0; i < 64; i++)
    cards.push( {
      'id': 2,
      'thumbnail_link': Image2,
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
