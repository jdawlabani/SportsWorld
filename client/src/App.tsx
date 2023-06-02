import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1 className="Title">SportsWorld</h1>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
