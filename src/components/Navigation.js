import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav>
        <div>Hive Mind</div>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/About'>
              About
            </Link>
          </li>
          <li>
            <Link to='/ToDo'>
              Todo
            </Link>
          </li>
          <li>
            <Link to='/Posts'>
              Posts
            </Link>
          </li>
          <li>
            <Link to='/Game'>
              Game
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
