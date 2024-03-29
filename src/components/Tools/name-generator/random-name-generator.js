import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const RandomNameGenerator = () => {
	const [names, setNames] = useState([])
	const { register, handleSubmit, reset, setFocus } = useForm()
	const letters = 'abcdefghijklmnopqrstuvwxyz'

	const GenerateNames = (data) => {
		console.log(data)
		let newNames = []
		for (let i = 0; i < data.numberToGenerate; i++) {
			let newName = []
			for (let j = 0; j < data.numberOfParts; j++) {
				let nameLength = RandomBetween(data.minimumLetters, data.maximumLetters)
				let name = ''
				for (let k = 0; k < nameLength; k++) {
					name += letters[RandomBetween(0, letters.length)]
				}
				newName.push(name)
			}
			newNames.push(newName.join(' '))
		}
		console.log(newNames)
		setNames(newNames)

		setFocus('numberOfParts', { shouldSelect: true })
		reset()
	}

	const RandomBetween = (min, max) => {
		max = Number(max)
		min = Number(min)
		let randomNumber = Math.floor(Math.random() * max)
		return randomNumber + min
	}

	useEffect((setFocus) => {
		setFocus('numberOfParts')
	}, [])

	return (
		<div>
			<form onSubmit={handleSubmit(GenerateNames)}>
				<input
					type='number'
					placeholder='Number of parts'
					{...register('numberOfParts', { required: true })}
				/>
				<input
					type='number'
					placeholder='Minimum letters'
					{...register('minimumLetters', { required: true })}
				/>
				<input
					type='number'
					placeholder='Maximum letters'
					{...register('maximumLetters', { required: true })}
				/>
				<input
					type='number'
					placeholder='Number to generate'
					{...register('numberToGenerate', { required: true })}
				/>
				<input type='submit' />
			</form>
			<div>
				<p>Generate some names!</p>
				<p>Names : {names.length}</p>
			</div>
		</div>
	)
}
export default RandomNameGenerator
