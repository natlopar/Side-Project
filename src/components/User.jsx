import { Link } from 'react-router-dom';
import HeaderPages from './HeaderPages';

function User() {
  return (
    <>
      <HeaderPages />

      <div className="user ">
        <h3 className="user__title">Inicia sesión</h3>

        <form className="user__form">
          <label htmlFor="" className="user__form--label">
            {' '}
            Nombre de usuario{' '}
          </label>
          <input type="text" className="user__form--input"></input>

          <label htmlFor="password"> Contraseña </label>
          <input
            type="password"
            name=""
            id="password"
            className="user__form--input"
          />
          <Link to={"/list"}>
          <input type="submit" value="Aceptar" className="user__form--submit" />
          </Link>
        </form>
      </div>
    </>
  );
}

export default User;
