import '../styles/filters.scss';
import FilterBreed from './FilterBreed';

import FilterClinical from './FilterClinical';
import FilterName from './FilterName';

function Filters({
  handleCasesOptions,
  casesOptionName,
  casesOptionBreed,
  casesOptionClinic,
}) {

  const handleChange =(e)=>{
    e.preventDefault();
    handleCasesOptions({
      value: e.target.value,
      key: e.target.id
    });
  }
  return (
   <form className='form'>
      <FilterName handleCasesOptions={handleCasesOptions} casesOptionName={casesOptionName} handleChange={handleChange}/>
      <FilterBreed handleCasesOptions={handleCasesOptions} casesOptionBreed={casesOptionBreed} handleChange={handleChange}/>
      <FilterClinical handleCasesOptions={handleCasesOptions} casesOptionClinic={casesOptionClinic} handleChange={handleChange}/>
    </form>
  );
}

export default Filters;
