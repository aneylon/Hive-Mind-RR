import {
	Button,
	Card,
	CardActions,
	CardContent,
	TextField,
	Typography,
} from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Dice = () => {
	const [diceToRoll, setDiceToRoll] = useState([])
	const [results, setResults] = useState([])
	const [total, setTotal] = useState(0)
	const [diceToAdd, setDiceToAdd] = useState(0)
	const [diceToAddModifier, setDiceToAddModifier] = useState(0)

	let addDiceToRoll = (dice, modifier) => {
		console.log('add dice', dice, modifier)
		setDiceToRoll(diceToRoll.concat({ dice, modifier }))
	}

	let rollDice = () => {
		console.log('Roll em!')
		console.log(diceToRoll)
		// create array of results
		// set total
	}

	return (
		<div>
			<Card>
				<CardContent>
					<Typography>Lets Roll!</Typography>
					<TextField
						id='add-dice-input'
						label='Dice Value'
						variant='standard'
						type='number'
						onChange={(event) => setDiceToAdd(event.target.value)}
					/>
					<TextField
						id='add-dice-modifier'
						label='Dice Modifier'
						variant='standard'
						type='number'
						onChange={(event) => {
							setDiceToAddModifier(event.target.value)
						}}
					/>
				</CardContent>
				<CardActions>
					<Button
						variant='contained'
						onClick={() => addDiceToRoll(diceToAdd, diceToAddModifier)}
					>
						Add Dice
					</Button>
				</CardActions>
				<CardContent>
					<Typography>Dice to roll :</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={() => rollDice()} variant='contained'>
						Roll em
					</Button>
				</CardActions>
				<CardContent>
					<Typography>Results: ###</Typography>
					<Typography>Total: {total}</Typography>
				</CardContent>
			</Card>
		</div>
	)
}

export default Dice
