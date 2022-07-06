import React from 'react'
import Home from './Home'
import About from './About'
import ToDo from './ToDo/ToDo'
import NotFound from './NotFound'
import { Game } from './TicTacToe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Posts from './Posts/Posts'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ToDo' element={<ToDo />} />
        <Route path='/Posts' element={<Posts/>} />
        <Route path='/Game' element={<Game />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
