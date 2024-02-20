import { Link } from "react-router-dom";

function MenuNav() {
  return (
    
    <ul className="header__style--menu">
    <Link to={"/user"} className='link'><li>Iniciar Sesión</li></Link> 
     <li>Cómo funciona</li>
     <li>Explorar</li>
   </ul>
  )
}

export default MenuNav