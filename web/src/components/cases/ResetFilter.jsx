import PropTypes from "prop-types";
import '../../styles/filters.scss';

function ResetFilter({setCasesOptionName,setCasesOptionBreed, setCasesOptionClinic }) {

 const handleReset =(e)=>{
    e.preventDefault();
    setCasesOptionBreed('');
    setCasesOptionClinic('');
    setCasesOptionName('');


 }

  return (
    <div className="filters__reset">
         <button className="create__btn btn filters__reset--btn" aria-label='Borrar filtros' onClick={handleReset}>Borrar filtros</button>
    </div>
  )
}

ResetFilter.propTypes = {
  setCasesOptionBreed: PropTypes.func, 
  setCasesOptionClinic: PropTypes.func, 
  setCasesOptionName: PropTypes.func
}

export default ResetFilter