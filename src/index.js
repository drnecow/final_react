import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import MainPage from './MainPage';
import MoviePage from './MoviePage';
import PersonInfoPage from './PersonInfoPage';
import Page404 from './Page404';


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element= {<MainPage />} />
            <Route path='/main_page' element= {<MainPage />} />
            <Route path='/movies/:movie_id' element={<MoviePage />} />
            <Route path='/people/:person_id' element={<PersonInfoPage />} />
            <Route path='/*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);