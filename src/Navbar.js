import React from 'react';
import './style.css';

const aperturelogo = <img src="./images/aperture.svg"className="aperture"></img>

export default function NavBar(){
  return(
    <nav className='navbar'>
      {aperturelogo}
      <h1>Manuel Colusso</h1>
      <h2>Bienvenido</h2>
    </nav>
  )
}




