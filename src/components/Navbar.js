import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className = 'navlinks'>
        
        <NavLink exact activeClassName = "active_class" to = '/'> 
        About Us </NavLink>
        <NavLink exact activeClassName = "active_class"  to = '/contact'> 
        Contact Us </NavLink>
        <NavLink exact activeClassName = "active_class"  to = '/blogs'> 
        Blogs </NavLink>
        <NavLink exact activeClassName = "active_class"  to = '/createpost'> 
        Create your posts </NavLink> 
        <NavLink exact activeClassName = "active_class"  to = '/login'> 
        Login </NavLink> 



        </div>
    )
}

export default Navbar
