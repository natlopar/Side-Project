import HeaderPages from './HeaderPages';

function CreateUser() {
  return (
    <>
      <HeaderPages />
      <div className="user">
        <h3 className="user__title">Bienvenid@!!</h3>
        <h4 className="user__subtitle">
          Rellena aquí tus datos para empezar a crear tu historial de casos
        </h4>
        <form className="user__form">
          <label htmlFor="" className="user__form--label">
            {' '}
            Nombre{' '}
          </label>
          <input type="text" className="user__form--input"></input>

          <label htmlFor="" className="user__form--label">
            {' '}
            Apellidos{' '}
          </label>
          <input type="text" className="user__form--input"></input>

          <label htmlFor="" className="user__form--label">
            {' '}
            Provincia{' '}
          </label>
          <input type="text" className="user__form--input"></input>

          <label htmlFor="" className="user__form--label">
            {' '}
            País{' '}
          </label>
          <input type="text" className="user__form--input"></input>
        <div className='user__form--check'>
          <input
            type="checkbox"
            name="public"
            id="public"
          
          />
          <label className="user__form--label" htmlFor="public">
            Indica si quieres que tus casos sean públicos en esta web
          </label>
          </div>

          <p className="user__form--text">
            En caso de que no quieras publicar ahora todos tus casos, podrás publicar
            cada uno más adelante {' '}
          </p>
          <input type="submit" value="Aceptar" className='user__form--submit'/>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
