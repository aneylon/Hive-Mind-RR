import React, { useState } from 'react'

const ColorScheme = () => {
	const [colors, setColors] = useState([])
	const [numberOfColors, setNumberOfColors] = useState('')

	const generateColors = (numberToGenerate) => {
		console.log('make them colors', numberToGenerate)
	}

	const showColors = (colorsToShow) => {
		if (colorsToShow.length <= 0)
			return <li>Pick a number of colors to generate</li>
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
