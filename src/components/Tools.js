import React from 'react'
import Dice from './dice'
import EnforcerNameGenerator from './name-generator/enforcer-name-generator'
import Anagram from './Tools/Anagram/Anagram'

const Tools = () => {
	return (
		<div>
			<h1>Tools</h1>
			<Anagram />
			<EnforcerNameGenerator />
			{/* <Dice /> */}
		</div>
	)
}

export default Tools
