import React from 'react'

function BtnCreateNewCase({handleSubmitNew}) {

const handleSubmit =(e) =>{
        e.preventDefault()
        handleSubmitNew()
    }
  return (
    <input
    type="submit"
    value="Crear"
    className=" create__btn  btn hover"
    onClick={handleSubmit}
  />
  )
}

export default BtnCreateNewCase