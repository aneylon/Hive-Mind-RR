import React from 'react'
import BugReport from '../BugReport/BugReport'
import Dice from './dice/dice'
import EnforcerNameGenerator from './name-generator/enforcer-name-generator'
import Anagram from './Anagram/Anagram'
import ColorScheme from './colorScheme/ColorScheme'
import Matcher from './Matcher/Matcher'
import RandomNameGenerator from './name-generator/random-name-generator'

const Tools = () => {
	return (
		<div>
			<h1>Tools</h1>
			<RandomNameGenerator />
			{/* <Matcher /> */}
			{/* <ColorScheme /> */}
			{/* <BugReport /> */}
			{/* <Anagram /> */}
			{/* <EnforcerNameGenerator /> */}
			{/* <Dice /> */}
		</div>
	)
}

export default Tools
