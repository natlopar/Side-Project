import { Link } from "react-router-dom"
import HeaderPages from "./HeaderPages"


function NewCase() {
  return (
    <>
 
        <HeaderPages/>
        <div className="user">
        <div className="case">
        <form className="case__form">
            <div className="case__form--inputs">
          <label htmlFor="" >
            {' '}
            Nombre{' '}
          </label>
          <input type="text" ></input>
          </div>

<div>
          <label htmlFor="" >
            {' '}
            Especie{' '}
          </label>
          <input type="text" ></input>
          </div>

          <div>
          <label htmlFor="" >
            {' '}
            Raza{' '}
          </label>
          <input type="text" ></input>
          </div>

          <div>
          <label htmlFor="" >
            {' '}
            Nacimiento{' '}
          </label>
          <input type="date" ></input>

          </div>

          <div>
          <label htmlFor="" >
            {' '}
            Cuadro clínico{' '}
          </label>
          <input type="text" ></input>
          </div>

          <div>
          <label htmlFor="" >
            {' '}
            Duración cuadro{' '}
          </label>
          <input type="text" ></input>
          </div>

          <div>
          <label htmlFor="" >
            {' '}
            Exploración fisica{' '}
          </label>
          <textarea name="" id="" cols="23" rows="3"></textarea>
          </div>

          <div>
          <label htmlFor="" >
            {' '}
            Pruebas realizadas{' '}
          </label>
          <textarea name="" id="" cols="23" rows="3"></textarea>
          </div>
        <div className='case__form--check'>
          <input
            type="checkbox"
            name="public"
            id="public"
          
          />
          <label  htmlFor="public">
            Indica si quieres hacer público este caso.
          </label>
          </div>
          <button className="case__form--submit">Siguiente</button>

          {/* <p className="case__form--text">
           
          </p> */}
          <Link to={"/"}>
          <input type="submit" value="Crear" className='case__form--submit'/>
          </Link>
        </form>
        </div>
        
    </div>
    </>

  )
}

export default NewCase