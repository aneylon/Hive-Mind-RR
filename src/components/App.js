import React from 'react'
import Home from './Home'
import About from './About'
import ToDo from './ToDo/ToDo'
import NotFound from './NotFound'
import { Game } from './TicTacToe'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Navigation from './Navigation'
import Posts from './Posts/Posts'
import Tools from './Tools/Tools'
import Signup from './Signup'
import Signin from './Signin'

const App = () => {
	const { user } = useAuthContext()

	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={user ? <Home /> : <Navigate to='/Signin' />} />
				<Route index element={<Home />} />
				<Route path='/About' element={<About />} />
				<Route path='/ToDo' element={<ToDo />} />
				<Route path='/Posts' element={<Posts />} />
				<Route path='/Game' element={<Game />} />
				<Route path='/Tools' element={<Tools />} />
				<Route
					path='/Signup'
					element={!user ? <Signup /> : <Navigate to='/' />}
				/>
				<Route
					path='/Signin'
					element={!user ? <Signin /> : <Navigate to='/' />}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
