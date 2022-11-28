const RandomNameGenerator = () => {
	return (
		<div>
			<form>
				<input type='number' placeholder='Number of parts' />
				<input type='number' placeholder='Minimum letters' />
				<input type='number' placeholder='Maximum letters' />
				<input type='number' placeholder='Number to generate' />
				<input type='submit' />
			</form>
			<div>
				<p>Generate some names!</p>
			</div>
		</div>
	)
}
export default RandomNameGenerator
