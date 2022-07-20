import React from 'react'

const BugReport = () => {
	const sendBugReport = () => {
		console.log(process.env.REACT_APP_API_URL)
	}
	return (
		<div>
			<h1>Report a bug!</h1>
			<input placeholder='Bug to report' />
			<button onClick={() => sendBugReport()}>Report</button>
		</div>
	)
}

export default BugReport
