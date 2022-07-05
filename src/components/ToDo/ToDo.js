import React from 'react'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import ToDoFilters from './ToDoFilters'

const ToDo = () => {
  return (
    <div>
      <h1>Todo list</h1>
      <AddToDo />
      <ToDoList />
      <ToDoFilters />
    </div>
  )
}

export default ToDo