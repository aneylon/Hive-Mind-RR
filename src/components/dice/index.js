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
	const [diceToAdd, setDiceToAdd] = useState('')
	const [diceToAddModifier, setDiceToAddModifier] = useState('')

	let addDiceToRoll = (dice, modifier) => {
		dice = parseInt(dice)
		modifier = parseInt(modifier)
		if (dice > 0) {
			setDiceToRoll(diceToRoll.concat({ dice, modifier }))
			setDiceToAdd('')
			setDiceToAddModifier('')
		}
	}

	let rollDice = () => {
		let rolledDice = getResults(diceToRoll)
		setResults(rolledDice)
		setTotal(getTotal(rolledDice))
	}

	let getResults = (dice) => {
		let results = []
		dice.forEach((die) => {
			results.push(getRandomNumber(die.dice) + die.modifier)
		})
		return results
	}

	let showResults = (resultsToShow) => {
		if (resultsToShow.length > 0) {
			return resultsToShow.length
		} else {
			return ''
		}
	}

	let getRandomNumber = (maxValue) => {
		return Math.floor(Math.random() * maxValue) + 1
	}

	let getTotal = (rolledDice) => {
		return 42
	}

	let showDiceToRoll = () => {
		if (diceToRoll.length <= 0) return <span>Add some dice!</span>
		else {
			return <span>{diceToRoll.length}</span>
		}
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
						value={diceToAdd}
					/>
					<TextField
						id='add-dice-modifier'
						label='Dice Modifier'
						variant='standard'
						type='number'
						onChange={(event) => {
							setDiceToAddModifier(event.target.value)
						}}
						value={diceToAddModifier}
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
					<Typography>Dice to roll : {showDiceToRoll()}</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={() => rollDice()} variant='contained'>
						Roll em
					</Button>
				</CardActions>
				<CardContent>
					<Typography>Results: {showResults(results)}</Typography>
					<Typography>Total: {total}</Typography>
				</CardContent>
			</Card>
		</div>
	)
}

export default Dice
