import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Currency from './pages/Currency';
import Converter from './pages/Converter';
import Header from './components/Header.jsx'

function App() {
  return (        
    <div>
      <Header/>
      <h1 className='subtitle'>Value Converter</h1>
      <Routes>
        <Route path='/' element={<Converter/>}/>
        <Route path='/currency' element={<Currency/>}/>
      </Routes>
    </div>
  );
}

export default App;
