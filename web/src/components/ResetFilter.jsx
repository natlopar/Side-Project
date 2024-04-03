import PropTypes from "prop-types";

function ResetFilter({setCasesOptionName,setCasesOptionBreed, setCasesOptionClinic }) {

 const handleReset =(e)=>{
    e.preventDefault();
    setCasesOptionBreed('');
    setCasesOptionClinic('');
    setCasesOptionName('');


 }

  return (
    <div>
         <button className="create__btn btn hover" aria-label='Borrar filtros' onClick={handleReset}>Borrar filtros</button>
    </div>
  )
}

export default ResetFilter