import React, { useState } from 'react'
import './LoginPopUP.css'
import { assets } from '../../assets/assets'

const LoginPopUP = () => {

    const [currState, setCurrState] = useState()

  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
      </form>
    </div>
  )
}

export default LoginPopUP
