import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import NFL from  './Components/NFL'

function App() {
  return (
    <div className="App">
      <h1 className="Title">SportsWorld</h1>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path='/nfl' element = {<NFL />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
