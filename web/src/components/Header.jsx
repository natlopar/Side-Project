import { Link } from 'react-router-dom';
import logo from '../images/logoVET.png';
import { Toggle } from './Toggle';
import MenuNav from './MenuNav';
import '../styles/header.scss';
import { useState } from 'react';


function Header({ isDark, setIsDark }) {

const [dropMenu, setDropMenu] = useState(false);
const [moveMenu, setMoveMenu] = useState('');



const handleMenu = (e)=> {
  e.preventDefault();
  setMoveMenu('dropMenu');
  setDropMenu(!dropMenu);

}

  return (
    <header className="header dark">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="header__image heartbeat" />
      </Link>
      <div className="header__style">
        <Toggle
          className="header__style--light"
          isDark={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <button  className={`${moveMenu} header__menu`}  onClick={handleMenu} aria-label='Menu'><i className= "fa-solid fa-bars"></i></button>
        {dropMenu ? <MenuNav /> : <div></div> }
      {/* <DropMenu/> */}
      </div>
    </header>

  );
}

export default Header;
