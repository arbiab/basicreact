import React from 'react'
import {Link} from 'react-router-dom?'
import './footer.scss'
import { FooterData } from './Data'

const footer = () => {
  return (
    <div className='footer'>
      {FooterData.map((props)=>{
       return(
        <div className='col'> 
        <h6>{props.category}</h6>
        <div className='links'>
        {props.links.map((p)=>{
            return(
                <Link key={p.to} to={p.to}>{p.link}</Link>
            )
        })}
        </div>
        </div>
       )
      })}
    </div>
  )
}

export default footer
