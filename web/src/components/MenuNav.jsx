import { Link } from "react-router-dom";

function MenuNav() {
  return (
    
    <ul className="header__style--menu">
    <Link to={"/logIn"} className='link'><li>Inicia Sesión</li></Link> 
    <Link to={"/signIn"} className="link"><li>Regístrate</li></Link> 
    <Link to={"/publicList"} className="link"><li>Explora</li></Link>
   </ul>
  )
}

export default MenuNav