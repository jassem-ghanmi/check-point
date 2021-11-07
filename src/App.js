import React from 'react';
import {BrowserRouter , Link, Routes , Route } from 'react-router-dom'
import Home from './components/home'
import Moviedata from './components/movieData';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to='/'>
      Home
      </Link>
      
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route path='/:id' element={<Moviedata/>} />            
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
