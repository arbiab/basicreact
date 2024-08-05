import React from 'react'
import { Link } from 'react-router-dom'
import {NavData} from './NavData'
const ProductsMegaMenu = () => {
  return (
    <div className='nav-megamenu'>
      {NavData.map((props)=>{
        return(
            <div className='menu-link'>
              <Link to={props.to}>
                <div className='icons'>
                   {props.icons}
                </div>
                <div className='block'>
                    <h6>{props.title}</h6>
                    <p>{props.description}</p>
                </div>
              </Link>
              </div>  
        )
      })}
    </div>
  )
}

export default ProductsMegaMenu
