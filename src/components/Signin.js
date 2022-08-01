import React, { useState } from 'react'
import { useSignin } from '../hooks/useSignin'

const Signin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signin, error, isLoading } = useSignin()

	const handleSubmit = async (event) => {
		event.preventDefault()
		await signin(email, password)
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
			<button disabled={isLoading}>Sign In</button>
			{error && <div className='error'>{error}</div>}
		</form>
	)
}

export default Signin
