import React, { useState } from 'react'

const Anagram = () => {
	const [userWord, setUserWord] = useState('')
	const [anagrams, setAnagrams] = useState([])

	const createAnagrams = (word) => {
		console.log('mix it up!', word)
		// create permutations
		let results = []
		setAnagrams(results)
	}
	const showAnagrams = (word) => {
		if (word === '') return <li>Nag a ram!</li>
	}
	return (
		<div>
			<h1>Anagram-a-tron!</h1>
			<input
				onChange={(event) => {
					setUserWord(event.target.value)
				}}
				placeholder='word to mix up'
			/>
			<button
				onClick={() => {
					createAnagrams(userWord)
				}}
			>
				Anagram-a-tron it!
			</button>
			<ul>{showAnagrams()}</ul>
		</div>
	)
}

export default Anagram
