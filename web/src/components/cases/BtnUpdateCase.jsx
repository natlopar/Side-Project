import React from 'react'
import UpdateCase from './UpdateCase'

function BtnUpdateCase({ handleSubmitUpdate}) {
 

const handleUpdate =(e) =>{
    e.preventDefault()
    handleSubmitUpdate()
}

  return (
    <input
    type="submit"
    value="Modificar"
    className=" create__btn  btn hover"
    onClick={handleUpdate}
    
  />
  )
}

export default BtnUpdateCase