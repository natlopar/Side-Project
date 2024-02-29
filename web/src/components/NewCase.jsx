import { useState } from 'react';
import HeaderPages from './HeaderPages';
import { Link, useNavigate,} from 'react-router-dom';
import '../styles/newCase.scss';
import { useForm } from 'react-hook-form';
import BtnList from './BtnList';

function NewCase({ isDark, setIsDark, publicU , idVet}) {
  const [publicA, setPublicA] = useState (false)
  const [message, setMessage] = useState("");
  const [animal, setAnimal] = useState({
    name: "",
    specie: "",
    breed: "",
    birthday: "",
    clinical: "",
    exploration : "", 
    tests: "", 
    results: "", 
    treatment: "",
    evolution: "", 
    comments: "", 
    public: 0, 
    fk_Vet: idVet,
  });

  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleInput = (ev) => {
    ev.preventDefault();
    const { id, value, checked} = ev.target;
  if (id === 'public') {
      setPublicA(checked);
      setAnimal({ ...animal, [id]: checked ? 1 : 0 });
    } else {
      setAnimal({ ...animal, [id]: checked ? 1 : value });
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    fetch("http://localhost:4000/newcase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(animal),
    })

    .then((response) =>  response.json())
    .then((data)=>{
      if (data.success) {
        setMessage(
          "Caso añadido correctamente a tu historial."
        );
     
      } else {
        setMessage("No se pudo añadir tu caso. Revisa que todos los campos estén completos");
      }
    })
   
  };
  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter' && event.target.value.trim() === '') {
  //     event.preventDefault();
  //   }
  // };

  const handleCancel = (ev) => {
    ev.preventDefault();
    setAnimal({});
    navigate("/");
  };

  return (
    <>
      <HeaderPages isDark={isDark} setIsDark={setIsDark} />
      <div className="case">
        <h3 className="case__title">Crea tu caso</h3><i className="fa-solid fa-paw"></i>
        <form className="case__form" onSubmit={handleSubmit}>
          <label htmlFor="" className="case__form--label">
            {' '}
            Nombre{' '}
          </label>
          <input
            type="text"
            className="case__form--input"
            id= "name"
            // autoComplete="name"
            required
            value={animal.name}
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
          <select name="specie"
            className="case__form--input"
            autoComplete="specie"
            required
            id="specie"
            value={animal.specie}
            onInput={handleInput}
            {...register('specie', { required: true})}
            aria-invalid={errors.specie ? 'true' : 'false'}>
            <option  disabled defaultValue="">Selecciona una especie</option>
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
            value={animal.breed}
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
            id='tests'
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
            id='results'
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
            id='treatment'
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
            id='evolution'
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
            id='comments'
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
            checked= {publicA}
            onChange={handleInput}
            
            />
            <label htmlFor="public">
              Indica si quieres hacer público este caso.
            </label>
          </div>

        
          {/* <button className="case__form--submit">Siguiente</button> */}
            <div className="case__form--buttons">
            
          <input type="submit" value="Crear" className="case__form--submit create__btn  btn hover" />
          <input
            className="case__form--submit btn hover create__btn "
            type="button"
            value="Cancelar"
            onClick={handleCancel}
          />
         <BtnList/>
            </div>
            
        </form>
   
        <p className='user__msg'>{message}</p>

      </div>
    </>
  );
}

export default NewCase;
