import React, { useState, useEffect, FC } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar'
import './App.css';

import MovieArray from "./data.json";

import Home from './pages/home'

const App: FC = () => {

  const [cinemaStair, setCinemaStair] = useState<any>({
    currentURL: '/',
    movies: {
      Featured : { title: 'loading', CoverImage: null },
      TendingNow : []
    },
  })

  useEffect(() => {
    // @ts-ignore
    const localCinemaFilter : any = JSON.parse(localStorage.getItem("movies"));

    if(localCinemaFilter) {
      const featuredFilmById = [MovieArray.Featured, ...MovieArray.TendingNow].filter((film:any) => film.Id === localCinemaFilter.slice(0, 1)[0])[0];
      const filmById = localCinemaFilter.slice(1, localCinemaFilter.length).map((id:any) => [MovieArray.Featured, ...MovieArray.TendingNow].filter((film:any) => film.Id === id)[0]);
      const notViewd = [MovieArray.Featured, ...MovieArray.TendingNow].filter((film:any) => !localCinemaFilter.includes(film.Id));

      setCinemaStair((prevState:any) => ({
        ...prevState,
        movies: { Featured: featuredFilmById, TendingNow: [ ...filmById, ...notViewd ] }
      }));
    } else {
      MovieArray.TendingNow.sort((a:any, b:any) => b.ReleaseYear - a.ReleaseYear);
      setCinemaStair((prevState:any) => ({ ...prevState, movies: MovieArray }));
    }

  },[])

  return (
    <>
      <NavBar currentURL={cinemaStair.currentURL} setAppState={setCinemaStair} /> 
        
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home movies={cinemaStair.movies} setAppState={setCinemaStair} />} />
          <Route path="/search" element={<h1>search</h1>} />
          <Route path="/tvshow" element={<h1>tvShow</h1>} />
          <Route path="/movies" element={<h1>movies</h1>} />
          <Route path="/genres" element={<h1>genres</h1>} />
          <Route path="/watchlater" element={<h1>watchlater</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;