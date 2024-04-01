

function FilterName({handleCasesOptions, casesOptionName, handleChange}) {
 


  return (

<form className="input">
      <label htmlFor="name" className="input__label">
        Busca por nombre:{' '}
      </label>
      <input
        type="text"
        id="name"
        placeholder=""
        className="input__input"
        value={casesOptionName}
        onChange={handleChange}
      />
  </form>
  )
}
   

export default FilterName