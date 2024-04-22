import React from 'react'

function BtnCancelForm({handleCancel}) {
  return (
    <input
    className=" btn hover create__btn "
    type="button"
    value="Cancelar"
    onClick={handleCancel}
  />
  )
}

export default BtnCancelForm