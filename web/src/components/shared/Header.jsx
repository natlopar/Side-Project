import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import { Toggle } from './Toggle';
import { useState } from 'react';
import logo from '../../images/logoVET.png';
import MenuNav from './MenuNav';
import PropTypes from "prop-types";


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
        <img src={logo} alt="logo Vetfolio" className="header__image heartbeat" role="navigation" />
      </Link>
      <div className="header__style">
        <Toggle
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

Header.propTypes = {
  isDark: PropTypes.bool, 
  setIsDark: PropTypes.func, 
}

export default Header;