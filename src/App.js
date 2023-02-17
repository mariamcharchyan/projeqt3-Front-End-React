import './App.css';
import Header from './Header/Header';
import Shop from './Header/Header-komponents/Shop';
import Aboute from './Header/Header-komponents/Aboute';
import Home from './Header/Header-komponents/Home';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main/Main';





function App() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
        <Header count={count} />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Main handleButtonClick={handleButtonClick}/>}/>
          <Route path='/aboute' element={<Aboute />}/>
        </Routes>
    </div>
  );
}

export default App;
