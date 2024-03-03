import '../styles/filters.scss';

import Filter from './Filter'

function Filters({handleCasesOptions, casesOptionName}) {


  return (
    <div>
        {/* <div >         
            <label htmlFor="name" className='sectionList__label'>Busca por nombre</label>
                 <Filter/>
                 
        </div>

    <label htmlFor="name" className='sectionList__label'>Busca por raza</label>
    <div><Filter/></div>
    <label htmlFor="name" className='sectionList__label'>Busca por diagnóstico</label> */}
    <div><Filter handleCasesOptions={handleCasesOptions}
              casesOptionName={casesOptionName}/></div>
    </div>

  )
}

export default Filters