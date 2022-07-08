import React from 'react'
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem'

import { getTodosByVisibilityFilter } from '../../redux/actions/selectors'

const ToDoList = ({ todos }) => (
	<ul className='todo-list'>
		{todos && todos.length
			? todos.map((todo, index) => {
					return <ToDoItem key={`todo-${todo.id}`} todo={todo} />
			  })
			: 'Nothing To Do!'}
	</ul>
)

const mapStateToProps = (state) => {
	const { visibilityFilter } = state
	const todos = getTodosByVisibilityFilter(state, visibilityFilter)
	return { todos }
}

export default connect(mapStateToProps)(ToDoList)
