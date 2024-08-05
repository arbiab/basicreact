import React,{useState} from 'react'
import './user.scss'
const Popup = () => {
   const [popUp,setPopUp] = useState(false)
   const showPopUp = ()=> {
    setPopUp(!popUp)
   }
   const closePopUp = ()=> {
     setPopUp(false)
   }
  return (
    <div className='popup'>
        {popUp ? <div className='backdrop' onClick={closePopUp}>  </div> : null }
        <button type='button' onClick={showPopUp}>Show Popup</button>
        {popUp ? <div className='card' style={{display: popUp ? 'block' : 'none'}}>
            <h1>Popup</h1>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            
      </div> : null}
      </div>
  
  )
}

export default Popup
