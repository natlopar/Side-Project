import PropTypes from "prop-types";

function FilterBreed({casesOptionBreed, handleChange}) {
  return (
   
<div className="input">
      <label htmlFor="breed" className="input__label">
        Busca por raza:{' '}
      </label>
      <input
        type="text"
        id="breed"
        placeholder=""
        className="input__input"
        value={casesOptionBreed}
        onChange={handleChange}
      />
  </div>
  );
}

FilterBreed.propTypes = {
  casesOptionBreed: PropTypes.string, 
  handleChange: PropTypes.func
}

export default FilterBreed;
