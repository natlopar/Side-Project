import React from 'react'
import { Link } from 'react-router-dom'

function BtnList() {
  return (
    <Link to={"/listUser"} className='link'>
    <button className='create__btn btn hover'>Historial</button>
    </Link>
  )
}

export default BtnList