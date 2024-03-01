import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import '../styles/header.scss'


function DropMenu() {
  return (
    <Dropdown >
      <Dropdown.Toggle id="dropdown-autoclose-true">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu className="header__style--menu">
        <Dropdown.Item > <Link to={"/logIn"} className='link'>Inicia Sesión</Link> </Dropdown.Item>
        <Dropdown.Item > <Link to={"/signIn"} className='link'>Regístrate</Link> </Dropdown.Item>
        <Dropdown.Item > <Link to={"/publicList"} className='link'>Explora</Link> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropMenu;