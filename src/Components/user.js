import React from 'react'
import { Data } from './Data'
import './user.scss'
import Item from './Item'

const user = () => {
  return (
    <div className='user'>
    {Data.map((d,i)=>{
         return (
             <Item key={i} {...d}/>           
         )
    })}
    </div>
  )
}

export default user
