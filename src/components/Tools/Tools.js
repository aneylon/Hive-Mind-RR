import React from 'react'
import BugReport from '../BugReport/BugReport'
import Dice from './dice/dice'
import EnforcerNameGenerator from './name-generator/enforcer-name-generator'
import Anagram from './Anagram/Anagram'
import ColorScheme from './colorScheme/ColorScheme'

const Tools = () => {
	return (
		<div>
			<h1>Tools</h1>
			<ColorScheme />
			{/* <BugReport /> */}
			{/* <Anagram /> */}
			<EnforcerNameGenerator />
			<Dice />
		</div>
	)
}

export default Tools
