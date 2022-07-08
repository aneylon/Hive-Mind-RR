import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../redux/actions/actions'

class AddToDo extends React.Component {
	constructor(props) {
		super(props)
		this.state = { input: '' }
	}

	updateInput = (input) => {
		this.setState({ input })
	}

	handleAddTodo = () => {
		this.props.addToDo(this.state.input)
		this.setState({ input: '' })
	}

	render() {
		return (
			<div>
				<input
					placeholder='Add a ToDo item.'
					onChange={(e) => this.updateInput(e.target.value)}
					value={this.state.input}
				/>
				<button className='add-todo' onClick={this.handleAddTodo}>
					Add ToDo
				</button>
			</div>
		)
	}
}

export default connect(null, { addToDo })(AddToDo)
