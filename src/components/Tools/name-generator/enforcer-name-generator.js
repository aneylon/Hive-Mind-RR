import {
	Button,
	Card,
	CardActions,
	CardContent,
	TextField,
	Typography,
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { CasinoOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	title: {
		textDecoration: 'underline',
		marginBottom: '1rem',
	},
	inputField: {
		marginTop: '1rem',
		marginBottom: '1rem',
		display: 'block',
	},
	btn: {
		fontSize: '1.25rem',
		color: 'gold',
		backgroundColor: 'grey',
		'&:hover': {
			color: 'goldenrod',
			backgroundColor: 'dimgrey',
		},
	},
})

const EnforcerNameGenerator = () => {
	const classes = useStyles()
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const [numberOfNames, setNumberOfNames] = useState('')
	const [generatedNames, setGeneratedNames] = useState([])

	useEffect(() => {
		generateNames()
	}, [])

	const generateNames = (numberToGenerate = 3) => {
		if (numberToGenerate <= 0) numberToGenerate = 1
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
		<Card>
			<CardContent>
				<Typography className={classes.title} variant='h3' component='h2'>
					Enforcer Name Generator
				</Typography>
			</CardContent>
			<CardActions>
				<form>
					<TextField
						className={classes.inputField}
						onChange={(event) => {
							setNumberOfNames(event.target.value)
						}}
						variant='standard'
						label='Number to create'
						type='number'
					/>
					<br />
					<Button
						className={classes.btn}
						variant='contained'
						onClick={() => {
							generateNames(numberOfNames)
						}}
						startIcon={<CasinoOutlined />}
						endIcon={<CasinoOutlined />}
					>
						Generate names
					</Button>
				</form>
			</CardActions>
			<CardContent>
				<ul>
					{generatedNames.map((name, index) => {
						return <li key={index}>{name}</li>
					})}
				</ul>
			</CardContent>
		</Card>
	)
}

export default EnforcerNameGenerator
