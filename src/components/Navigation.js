import React from 'react'
import { Link } from 'react-router-dom'
import { useSignout } from '../hooks/useSignout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navigation = () => {
	const { signout } = useSignout()
	const { user } = useAuthContext()

	const handleSignout = () => {
		signout()
	}
	return (
		<div>
			<nav>
				<div>Hive Mind</div>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/About'>About</Link>
					</li>
					<li>
						<Link to='/ToDo'>Todo</Link>
					</li>
					<li>
						<Link to='/Posts'>Posts</Link>
					</li>
					<li>
						<Link to='/Game'>Game</Link>
					</li>
					<li>
						<Link to='/Tools'>Tools</Link>
					</li>
					{!user && (
						<>
							<li>
								<Link to='/Signup'>Signup</Link>
							</li>
							<li>
								<Link to='/Signin'>Signin</Link>
							</li>
						</>
					)}
					{user && (
						<li>
							<span>{user.email}</span>
							<button onClick={handleSignout}>Signout</button>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}

export default Navigation
