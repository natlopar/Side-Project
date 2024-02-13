import { Link } from "react-router-dom"

function HeroDesc() {
  return (
    <div className="desc">
        <h3 className="desc__titles tracking-in-expand">Crea tu propia base de datos con tus casos más relevantes</h3>
        <h3 className="desc__titles tracking-in-expand">Consúltalo  cuando lo necesites</h3>
        <h3 className="desc__titles tracking-in-expand">Comparte con tus colegas para poder acceder a otros historiales publicados</h3>
        <Link to={"/newUser"} className="link">
        <h2 className="desc__subtitles pointer">Crea tu cuenta aquí</h2>
        </Link>

    </div>
  )
}

export default HeroDesc