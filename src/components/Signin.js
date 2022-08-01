import React, { useState } from 'react'

const Signin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		console.log(email, password)
	}

	return (
		<form className='signin' onSubmit={handleSubmit}>
			<h3>Sign In</h3>
			<label>Email:</label>
			<input
				type='email'
				onChange={(event) => {
					setEmail(event.target.value)
				}}
			/>
			<label>Password:</label>
			<input
				type='password'
				onChange={(event) => {
					setPassword(event.target.value)
				}}
			/>
			<button>Sign In</button>
		</form>
	)
}

export default Signin
