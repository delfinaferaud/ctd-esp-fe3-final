import React from 'react'
import dh from '../assets/DH.png'
import facebook from '../assets/ico-facebook.png'
import instagram from '../assets/ico-instagram.png'
import whatsapp from '../assets/ico-whatsapp.png'
import { useGlobalStates } from './utils/global.context.jsx'

const Footer= () => {

  const{state}=useGlobalStates()
  return (
    <footer className={state.theme}>
        <div className='flex'>
        <p>Powered by</p>
        <img src={dh} alt='DH-logo' />
        </div>
        <div className='logos'>
          <img src={facebook} alt="logoFb" />
          <img src={instagram} alt="logoIg" />
          <img src={whatsapp} alt="logoWpp" />
        </div>
    </footer>
  )
}

export default Footer;