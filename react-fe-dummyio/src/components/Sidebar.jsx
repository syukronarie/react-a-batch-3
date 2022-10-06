import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1 className='heading'>Sidebar</h1>
      <nav className='nav-list'>
        <h3>Users</h3>
        <ul>
            <li>
                <NavLink
                    to="/user"
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }
                >
                    All Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/user/create"
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }
                >
                    Add Users
                </NavLink>
            </li>
        </ul>
        <h3>Post</h3>
        <ul>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }
                >
                    All Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }
                >
                    All Users
                </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
