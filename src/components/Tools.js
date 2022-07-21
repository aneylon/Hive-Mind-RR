import React from 'react'
import BugReport from './BugReport/BugReport'
import Dice from './dice'
import EnforcerNameGenerator from './name-generator/enforcer-name-generator'
import Anagram from './Tools/Anagram/Anagram'
import ColorScheme from './Tools/colorScheme/ColorScheme'

const Tools = () => {
	return (
		<div>
			<h1>Tools</h1>
			<ColorScheme />
			{/* <BugReport /> */}
			{/* <Anagram /> */}
			{/* <EnforcerNameGenerator /> */}
			{/* <Dice /> */}
		</div>
	)
}

export default Tools
