import React, { useState, FC } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar'
import './App.css';

import Home from './pages/home'

const App: FC = () => {

  const [cinemaStair, setCinemaStair] = useState<any>({ currentURL: '/' })
  
  return (
    <>
      <NavBar currentURL={cinemaStair.currentURL} setAppState={setCinemaStair} /> 
        
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
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