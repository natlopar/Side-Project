import PropTypes from "prop-types";

function FilterClinical({ casesOptionClinic, handleChange}) {
  return (
    <div className="input">
    <label htmlFor="clinical" className="input__label">
      Busca por cuadro clínico:{' '}
    </label>
    <input
      type="text"
      id="clinical"
      placeholder=""
      className="input__input"
      value={casesOptionClinic}
      onChange={handleChange}
    />
</div>
  );
}

FilterClinical.propTypes = {
  casesOptionClinic: PropTypes.string, 
  handleChange: PropTypes.func
}

export default FilterClinical;
