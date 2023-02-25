import { useState, useRef } from 'react'

export default function RefVsStateCounter() {
	const [count, setCount] = useState(0)
	let countRef = useRef(0)

	function stateCount() {
		setCount(count + 1)
		console.log(count)
	}

	function refCount() {
		countRef.current = countRef.current + 1
		console.log(countRef.current)
	}

	return (
		<>
			<button onClick={stateCount}>State Count : {count}</button>
			<button onClick={refCount}>Ref Count : {countRef.current}</button>
		</>
	)
}
