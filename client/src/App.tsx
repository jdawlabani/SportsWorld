import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import NFL from  './Components/NFL'
import NBA from './Components/NBA';
import NHL from './Components/NHL';
import MLB from './Components/MLB';

function App() {
  return (
    <div className="App">
      <h1 className="Title">SportsWorld</h1>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path='/NFL' element = {<NFL />}></Route>
        <Route path='/NBA' element = {<NBA />}></Route>
        <Route path='/NHL' element = {<NHL />}></Route>
        <Route path='/MLB' element = {<MLB />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
