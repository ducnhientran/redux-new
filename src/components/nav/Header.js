import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	return (
		<div className="topnav">
			<NavLink to="/"> Home</NavLink>
			<NavLink to="/photos">Photo</NavLink>			
			<NavLink to="/todos">Todos</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/user">Users</NavLink>
		</div>
	)
}
export default Header
