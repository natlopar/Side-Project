import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='spinner'>
    <Link to={'/'} className='link error__back'><i className="fa-solid fa-arrow-left"></i> Volver a la página inicial</Link>
    <h1 className='error'>❌404 - Not Found❌</h1>

    <p className='user__subtitle'>La página que estás buscando no se encontró.</p>
 
  </div>
  )
}

export default NotFound