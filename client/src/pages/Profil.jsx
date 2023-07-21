import React from 'react'
import Log from '../components/Log/Log'

const Profil = () => {
  return (
    <div className="profilpage">
      <div className="log-container">
        <Log/>
        <div className="image-container">
          <img src='C:\Users\axelp\Desktop\WCS\checkpoint_4\client\public\img\log.svg' alt='logo-form'/>
        </div>
      </div>
    </div>
  )
}

export default Profil