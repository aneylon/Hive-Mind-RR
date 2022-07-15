import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

const EnforcerNameGenerator = () => {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const [numberOfNames, setNumberOfNames] = useState('')
	const [generatedNames, setGeneratedNames] = useState([])

	useEffect(() => {
		generateNames()
	}, [])

	const generateNames = (numberToGenerate = 3) => {
		console.log(`generating : ${numberToGenerate}`)
		let names = []
		for (let i = 0; i < numberToGenerate; i++) {
			names.push(makeEnforcerName())
		}
		setGeneratedNames(names)
	}

	const makeEnforcerName = () => {
		let letter = letters[randomNumber(0, letters.length)]
		let numbers = `${randomNumber(0, 9)}`
		numbers += `${randomNumber(0, 9)}`
		numbers += `${randomNumber(0, 9)}`
		return `${letter}-${numbers}`
	}

	const randomNumber = (min = 0, max = 1) => {
		let random = Math.floor(Math.random() * max + min)
		return random
	}

	const showGeneratedNames = (namesToShow) => {
		console.log(namesToShow)
	}

	return (
		<Container>
			<Typography variant='h6' component='h2'>
				Enforcer Name Generator
			</Typography>
			<form>
				<TextField
					onChange={(event) => {
						setNumberOfNames(event.target.value)
					}}
					variant='standard'
					label='Number of names'
					type='number'
				/>
				<br />
				<Button
					variant='contained'
					onClick={() => {
						generateNames(numberOfNames)
					}}
				>
					Generate names
				</Button>
			</form>
			<ul>
				{generatedNames.map((name, index) => {
					return <li key={index}>{name}</li>
				})}
			</ul>
		</Container>
	)
}

export default EnforcerNameGenerator
