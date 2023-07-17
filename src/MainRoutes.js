import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './Feed/Feed'
function MainRoutes() {
    return (
        <>
            <p>Navbar</p>
            <Routes>
                {/* <Route path='/' element={<Dashboard />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/chorus' element={<Chorus />} />
                        <Route path='/library' element={<Library />} />
                        <Route path='/bio/:artistId' element={<Bio />} />
                        <Route path="/*" element={<ErrorPage />} /> */}
                <Route path='/feed' element={<Feed />} />
            </Routes>
        </>
    )
}

export default MainRoutes