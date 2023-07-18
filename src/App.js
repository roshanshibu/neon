import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth'
import MainRoutes from './MainRoutes';


function App() {
  return (
    <>
        <div className="App">
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='*' element={<MainRoutes />} /> 
          </Routes>
        </div>
    </>
  );
}

export default App;
