import { Link } from "react-router-dom"
import HeaderPages from "./HeaderPages"


function Welcome() {
  return (
    <>
    <HeaderPages/>
    <div className="user">
    <h3 className="user__title">Bienvenid@ nombreDeUsuaria</h3>
        <h4 className="user__message">
          Todavía no tienes casos registrados en tu historial
        </h4>
        <h4 className="user__message">
         Crea aquí tu caso
        </h4>
        <Link to={"/newCase"}>
        <button>Comenzar</button>
        </Link>

    </div>
    </>

  )
}

export default Welcome