import Header from "./Header";


function User() {
  return (
    <div className="container">
    <Header/>
  
   
    <h3 className="heroArticle__titles--h3">Inicia sesión</h3>
    {/* <h4>Rellena aquí tus datos para empezar a crear tu historial de casos</h4> */}
    <form>
        <label htmlFor=""> Nombre de usuario
            <input type="text"></input>
        </label>
        <label htmlFor="password"> Contraseña
            <input type="password" name="" id="password" />
        </label>
        <input type="submit" value="Aceptar" />
    </form>
    </div>
  )
}

export default User;