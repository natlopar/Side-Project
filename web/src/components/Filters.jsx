import React from 'react'
import Filter from './Filter'

function Filters() {
  return (
    <div>
        <div >         
            <label htmlFor="name" className='sectionList__label'>Busca por nombre</label>
                 <Filter/>
                 
        </div>

    <label htmlFor="name" className='sectionList__label'>Busca por raza</label>
    <div><Filter/></div>
    <label htmlFor="name" className='sectionList__label'>Busca por diagnóstico</label>
    <div><Filter/></div>
    </div>

  )
}

export default Filters