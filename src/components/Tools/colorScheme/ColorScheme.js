import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	swatch: {
		height: '150px',
		width: '150px',
		display: 'inline-block',
	},
})

const ColorScheme = () => {
	const classes = useStyles()
	const [colors, setColors] = useState([])
	const [numberOfColors, setNumberOfColors] = useState('')

	const generateColors = (numberToGenerate) => {
		let colors = []
		for (let i = 0; i < numberToGenerate; i++) {
			colors.push(generateRandomRGBColor())
		}
		setColors(colors)
	}

	const showColors = (colorsToShow) => {
		if (colorsToShow.length <= 0)
			return <li>Pick a number of colors to generate</li>
		else {
			return colorsToShow.map((color, index) => {
				return (
					<li
						className={classes.swatch}
						style={{ backgroundColor: color }}
						key={index}
					>
						{color}
					</li>
				)
			})
		}
	}

	const generateRandomRGBColor = () => {
		return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`
	}

	const randomNumber = (max) => {
		return Math.floor(Math.random() * max + 1)
	}

	return (
		<div>
			<Card>
				<CardContent>
					<Typography variant='h3'>Generate Colors</Typography>
					<TextField
						variant='standard'
						// placeholder='# of colors to generate'
						label='Number to generate'
						type='number'
						onChange={(event) => setNumberOfColors(event.target.value)}
						value={numberOfColors}
					/>
				</CardContent>
				<CardActions>
					<Button
						variant='contained'
						onClick={() => {
							generateColors(numberOfColors)
						}}
					>
						Generate Colors
					</Button>
				</CardActions>
				<CardContent>
					<ul>{showColors(colors)}</ul>
				</CardContent>
			</Card>
		</div>
	)
}

export default ColorScheme
