import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth'
import MainRoutes from './MainRoutes';

export const JwtContext = React.createContext()

function App() {
  const [Jwt, setJwt] = useState(null)
  return (
    <>
      <JwtContext.Provider value={{Jwt, setJwt}}>
        <div className="App">
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='*' element={<MainRoutes />} /> 
          </Routes>
        </div>
      </JwtContext.Provider>
    </>
  );
}

export default App;
