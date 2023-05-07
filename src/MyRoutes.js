import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter2 from './Counter2'
import Main from './Main'
import Cartpage from './pages/Cartpage'
import Home from './pages/Home'
import PostDetail from './PostDetail'

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/:id' element={<PostDetail />} />
                    <Route path='/count' element={<Counter2/>}/>
                    <Route path='/cart' element={<Cartpage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes