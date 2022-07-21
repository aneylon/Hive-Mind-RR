import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

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
		console.log('make them colors', numberToGenerate)
		let colors = []
		for (let i = 0; i < numberToGenerate; i++) {
			colors.push(generateRandomRGBColor())
		}
		setColors(colors)
	}

	const showColors = (colorsToShow) => {
		console.log(colorsToShow)
		if (colorsToShow.length <= 0)
			return <li>Pick a number of colors to generate</li>
		else {
			return colorsToShow.map((color, index) => {
				console.log(color)
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
			<h1>Generate Colors</h1>
			<input
				placeholder='Number of colors to generate'
				type='number'
				onChange={(event) => setNumberOfColors(event.target.value)}
				value={numberOfColors}
			/>
			<button
				onClick={() => {
					generateColors(numberOfColors)
				}}
			>
				Generate Colors
			</button>
			<ul>{showColors(colors)}</ul>
		</div>
	)
}

export default ColorScheme
