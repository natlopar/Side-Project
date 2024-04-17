import { useForm } from 'react-hook-form';
import BtnList from './BtnList';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ls from '../../services/localStorage';


function FormNewCase({
  animal,
  setAnimal,
  publicAnimal,
  setPublicAnimal,
  handleResetMessage,
  
}) {

  const [updateData, setUpdateData] = useState({})
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleInput = (ev) => {
    ev.preventDefault();
    const { id, value, checked } = ev.target;
    if (id === 'public') {
      setPublicAnimal(checked);
      setUpdateData({ ...updateData, [id]: checked ? 1 : 0 });
      setAnimal({...animal, [id]: checked ? 1 : 0 })
     
    } else {
      setAnimal({ ...animal, [id]: checked ? 1 : value });
      setUpdateData({ ...updateData, [id]: checked ? 1 : value });
      
    }
    // if (id === 'public') {
    //   setPublicAnimal(checked);
    // }
    // setAnimal(prevAnimal => ({
    //   ...prevAnimal,
    //   [id]: checked ? 1 : value
    // }));

   
  };


  const handleCancel = (ev) => {
    ev.preventDefault();
    setAnimal({});
    setUpdateData({})
    navigate('/listUser');
  };
 
  // const handleSubmit = (ev) => {//el fetch da error
  //   ev.preventDefault();//tenría que ejecutar un fetch u otro en fx de si estoy modificanto o creando un caso; crear una variable?
  //   fetch(`https://side-project-vetfolio-manager.vercel.app/updateCase?idCase=${idCase}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(animal)
  //   })
  //   .then((response) =>  response.json())
  //   .then(data => {
  //     console.log(data);
  //     return data
  //  });
  // }

//  useEffect(()=> {
  
//   setUpdateData(ls.get('animal', {}));

//  }, [])
  
const resetUpdateData = () => {
  setUpdateData({})
}
  return (   ///al cambiar de input se me vuelven a cambiar los valores
    <form className="case__form" >
      <label htmlFor="" className="case__form--label">
        {' '}
        Nombre{' '}
      </label>
      <input
        type="text"
        className="case__form--input"
        id="name"
        // autoComplete="name"
        required
        placeholder={animal?.name}
        value={updateData.name}//no me recoge el valor del input para hacer el fetch
        onInput={handleInput}
        {...register('name', { required: true, maxLength: 20 })}
        aria-invalid={errors.name ? 'true' : 'false'}
      ></input>
      {errors.name?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}

      <label htmlFor="specie" className="case__form--label">
        {' '}
        Especie{' '}
      </label>
      <select
        name="specie"
        className="case__form--input"
        autoComplete="specie"
        required
        id="specie"
        placeholder={animal.specie}
        value={updateData.specie}
        onInput={handleInput}
        {...register('specie', { required: true })}
        aria-invalid={errors.specie ? 'true' : 'false'}
      >
        <option value={'Selecciona una especie'} disabled>
          Selecciona una especie
        </option>
        <option value="canina">Canina</option>
        <option value="felina">Felina</option>
      </select>
      {errors.specie?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes elegir una especie
        </p>
      )}
      <label htmlFor="breed" className="case__form--label">
        {' '}
        Raza{' '}
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="breed"
        required
        id="breed"
        placeholder={animal.breed}
        value={updateData.breed}
        onInput={handleInput}
        {...register('breed', { required: true, maxLength: 20 })}
        aria-invalid={errors.breed ? 'true' : 'false'}
      ></input>
      {errors.breed?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}
      <label htmlFor="birthday" className="case__form--label">
        {' '}
        Año nacimiento{' '}
      </label>
      <input
        type="number"
        className="case__form--input"
        required
        id="birthday"
        value={animal.birthday}
        onInput={handleInput}
        {...register('birthday', { required: true, maxLength: 20 })}
        aria-invalid={errors.birthday ? 'true' : 'false'}
      ></input>
      {errors.birthday?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}
      <label htmlFor="clinical" className="case__form--label">
        {' '}
        Cuadro clínico{' '}
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="clinical"
        required
        id="clinical"
        value={animal.clinical}
        onInput={handleInput}
        {...register('clinical', { required: true, maxLength: 20 })}
        aria-invalid={errors.clinical ? 'true' : 'false'}
      ></input>
      {errors.clinical?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}

      <label htmlFor="exploration" className="case__form--label">
        {' '}
        Exploración física
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="exploration"
        required
        id="exploration"
        value={animal.exploration}
        onInput={handleInput}
        {...register('exploration', { required: true, maxLength: 20 })}
        aria-invalid={errors.exploration ? 'true' : 'false'}
      ></input>
      {errors.exploration?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}

      <label htmlFor="tests" className="case__form--label">
        Pruebas realizadas
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="tests"
        required
        id="tests"
        value={animal.tests}
        onInput={handleInput}
        {...register('tests', { required: true, maxLength: 20 })}
        aria-invalid={errors.test ? 'true' : 'false'}
      ></input>
      {errors.tests?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}
      <label htmlFor="results" className="case__form--label">
        {' '}
        Resultados / Diagnóstico diferencial{' '}
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="results"
        required
        id="results"
        value={animal.results}
        onInput={handleInput}
        {...register('results', { required: true, maxLength: 20 })}
        aria-invalid={errors.results ? 'true' : 'false'}
      ></input>
      {errors.results?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}

      <label htmlFor="treatment" className="case__form--label">
        {' '}
        Tratamiento{' '}
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="treatment"
        required
        id="treatment"
        value={animal.treatment}
        onInput={handleInput}
        {...register('treatment', { required: true, maxLength: 20 })}
        aria-invalid={errors.treatment ? 'true' : 'false'}
      ></input>
      {errors.treatment?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}

      <label htmlFor="evolution" className="case__form--label">
        {' '}
        Evolución{' '}
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="evolution"
        required
        id="evolution"
        value={animal.evolution}
        onInput={handleInput}
        {...register('evolution', { required: true, maxLength: 20 })}
        aria-invalid={errors.evolution ? 'true' : 'false'}
      ></input>
      {errors.evolution?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}

      <label htmlFor="comments" className="case__form--label">
        {' '}
        Comentarios{' '}
      </label>
      <input
        type="text"
        className="case__form--input"
        autoComplete="comments"
        required
        id="comments"
        value={animal.comments}
        onInput={handleInput}
        {...register('comments', { required: true, maxLength: 20 })}
        aria-invalid={errors.comments ? 'true' : 'false'}
      ></input>
      {errors.comments?.type === 'required' && (
        <p role="alert" className="case__form--validation">
          Debes rellenar este campo
        </p>
      )}
      <div className="case__form--check">
        <input
          type="checkbox"
          name="public"
          id="public"
          checked={publicAnimal}
          onChange={handleInput}
        />
        <label htmlFor="public">
          Indica si quieres hacer público este caso.
        </label>
      </div>
      <div className="case__form--buttons">
        {/* <input
          type="submit"
          value="Crear"
          className=" create__btn  btn hover"
        /> */}
       
        

        {/* crear un componente para los botones para poder añadirlos desde new case o desde update case; en update tendria que ser modificar caso el que ejecute submit */}
        <input
          className=" btn hover create__btn "
          type="button"
          value="Cancelar"
          onClick={handleCancel}
        />
        <BtnList handleResetMessage= {handleResetMessage} resetUpdateData={resetUpdateData} setAnimal={setAnimal}/>
      </div>
    </form>
  );
}

export default FormNewCase;
