import { useRef } from 'react'
export default function RefCounter() {
	let ref = useRef(0)

	function handleClick() {
		ref.current = ref.current + 1
		alert('You click ' + ref.current + ' times!')
	}

	return <button onClick={handleClick}>Ref!</button>
}
