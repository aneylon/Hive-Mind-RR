import React from 'react'

const AddToDo = () => {
  return (
    <div>
      <input
        placeholder='Add a ToDo item.'/>
      <button
        onClick={console.log('adding todo!')}>
        Add ToDo
      </button>
    </div>
  )
}

export default AddToDo