import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context.jsx'

const Navbar = () => {
  const{state,dispatch}=useGlobalStates()

  return (
    <nav className={state.theme}>
      <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button className='setThemeButton' onClick={() => {
        state.theme==='dark'? dispatch({type: 'light'}): dispatch({type: 'dark'})
      }}>
      Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar