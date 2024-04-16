import { Link } from "react-router-dom";

function MenuNav() {
  return (
    
    <ul className="header__style--menu"  role="navigation">
    <Link to={"/logIn"} className='link'><li>Inicia Sesión</li></Link> 
    <Link to={"/signIn"} className="link"><li>Regístrate</li></Link> 
    <Link to={"/publicList"} className="link"><li>Casos públicos</li></Link>
    <Link to={"/listUser"} className="link"><li>Mi historial</li></Link>
   </ul>
  )
}

export default MenuNav