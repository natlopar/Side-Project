import { Link } from "react-router-dom"

function HeroDesc() {
  return (
    <div>
        <h3 className="heroArticle__titles--h3 tracking-in-expand">Crea tu propia base de datos con tus casos más relevantes</h3>
        <h3 className="heroArticle__titles--h3 tracking-in-expand">Consúltalo  cuando lo necesites</h3>
        <h3 className="heroArticle__titles--h3 tracking-in-expand">Comparte con tus colegas para poder acceder a otros historiales publicados</h3>
        <Link to={"/newUser"} className="link">
        <h2 className="heroArticle__titles--h2 pointer">Crea tu cuenta aquí</h2>
        </Link>

        </div>
  )
}

export default HeroDesc