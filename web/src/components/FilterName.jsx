

function FilterName({ casesOptionName, handleChange}) {
 


  return (

<div className="input">
      <label htmlFor="name" className="input__label">
        `Busca por nombre:{' '}
      </label>
      <input
        type="text"
        id="name"
        placeholder=""
        className="input__input"
        value={casesOptionName}
        onChange={handleChange}
      />
  </div>
  )
}
   

export default FilterName