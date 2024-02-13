import HeaderPages from './HeaderPages'

function CreateUser() {
  return (
    <>

    <HeaderPages/>
    <div className="user">
    <h3 className="user__title">Bienvenid@!!</h3>
    <h4 className="user__subtitle">Rellena aquí tus datos para empezar a crear tu historial de casos</h4>
    <form className="user__form">
        <label htmlFor="" className="user__form--label"> Nombre
            <input type="text" className="user__form--input"></input>
        </label>
        <label htmlFor="" className="user__form--label"> Apellidos
            <input type="text" className="user__form--input"></input>
        </label>
        <label htmlFor="" className="user__form--label"> Provincia
            <input type="text" className="user__form--input"></input>
        </label>
        <label htmlFor="" className="user__form--label"> País
            <input type="text" className="user__form--input"></input>
        </label>
        <label className="user__form--label" htmlFor="public">Indica si quieres que tus casos sean públicos en esta web</label>
        <input type="checkbox" name="public" id="public" className="user__form--input"/>
        <p className="user__form--text">En caso de que no quieras publicar todos tus casos, podrás publicar alguno en el momento de crearlo </p>
        <label htmlFor="submit" className="user__form--label">Aceptar</label>
        <input type="submit" />
    </form>

    </div>
    </>
  )
}

export default CreateUser