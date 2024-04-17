import React from 'react'

function BtnUpdateCase({  handleSubmitUpdate}) {
 

const handleSumbit =(e) =>{
    e.preventDefault()
    handleSubmitUpdate()
}

  return (
    <input
    type="submit"
    value="Modificar"
    className=" create__btn  btn hover"
    onClick={handleSumbit}
    
  />
  )
}

export default BtnUpdateCase