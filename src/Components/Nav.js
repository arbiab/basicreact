import React from 'react'
import { Link } from 'react-router-dom'
import { FaApple } from "react-icons/fa";
import {MdKeyboardArrowDown} from 'react-icons/md'
import './Nav.scss'
import ProductsMegeMenu from './ProductsMegaMenu';
import { IoTriangle } from "react-icons/io5";

const Nav = () => {
  return (
    <div className='nav'>
           
        <Link to='/' className='title'><FaApple /> Title  </Link>
   
      <div className='links'>
        <div className='nav-link'>
            <Link to='/' className='inner-link'>Products <MdKeyboardArrowDown /></Link>
            <IoTriangle className='arrow'/>
            <ProductsMegeMenu />
        </div>
        <div className='nav-link'>
            <Link to='/'className='inner-link'>Blog </Link>
        </div>
        <div className='nav-link'>
            <Link to='/'className='inner-link'>About Us</Link>
        </div>
        <div className='nav-link'>
            <Link to='/'className='inner-link'>Support</Link>
        </div>
      </div>
      <div className='auth'>
          <Link to='/'>Log In</Link>
          <Link to='/' className='signup'>Sign Up</Link>
      </div>
           
      
    </div>

  )
}

export default Nav
