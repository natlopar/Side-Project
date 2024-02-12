import Header from "./Header"

function CreateUser() {
  return (
    <div className="container">
    <Header/>
    <h3 className="heroArticle__titles--h3">Bienvenid@!!</h3>
    <h4>Rellena aquí tus datos para empezar a crear tu historial de casos</h4>
    <form>
        <label htmlFor=""> Nombre
            <input type="text"></input>
        </label>
        <label htmlFor=""> Apellidos
            <input type="text"></input>
        </label>
        <label htmlFor=""> Provincia
            <input type="text"></input>
        </label>
        <label htmlFor=""> País
            <input type="text"></input>
        </label>
        <label>Indica si quieres que tus casos sean públicos en esta web</label>
        <input type="checkbox" name="" id="" />
    </form>
    </div>
  )
}

export default CreateUser