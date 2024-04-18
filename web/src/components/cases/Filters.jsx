import '../../styles/filters.scss';
import FilterBreed from './FilterBreed';
import FilterClinical from './FilterClinical';
import FilterName from './FilterName';
import PropTypes from "prop-types";
import ResetFilter from './ResetFilter';

function Filters({
  handleCasesOptions,
  casesOptionName,
  casesOptionBreed,
  casesOptionClinic,
  setCasesOptionBreed, 
  setCasesOptionClinic, 
  setCasesOptionName
}) {

  const handleChange =(e)=>{
    handleCasesOptions({
      value: e.target.value,
      key: e.target.id
    });
  }
  return (
    <>
   <form className='filters' >
    <div className='filters__form'>
      <FilterName  casesOptionName={casesOptionName} handleChange={handleChange}/>
      <FilterBreed  casesOptionBreed={casesOptionBreed} handleChange={handleChange}/>
      <FilterClinical casesOptionClinic={casesOptionClinic} handleChange={handleChange}/>
    </div>
      <ResetFilter setCasesOptionBreed={setCasesOptionBreed} setCasesOptionName={setCasesOptionName} setCasesOptionClinic={setCasesOptionClinic}/>
    </form>
  
    </>
  )
}

Filters.propTypes = {
  casesOptionName: PropTypes.string, 
  casesOptionBreed: PropTypes.string, 
  casesOptionClinic: PropTypes.string, 
  handleCasesOptions: PropTypes.func,
  setCasesOptionBreed: PropTypes.func, 
  setCasesOptionClinic: PropTypes.func, 
  setCasesOptionName: PropTypes.func
}

export default Filters;
