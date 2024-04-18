import '../../styles/header.scss';
import { Toggle } from './Toggle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logoVET.png';
import MenuNav from './MenuNav';
import PropTypes from "prop-types";




function HeaderPages({isDark, setIsDark}) {

const [dropMenu, setDropMenu] = useState(false);
const [moveMenu, setMoveMenu] = useState('');

const handleMenu = (e)=> {
  e.preventDefault();
  setMoveMenu('dropMenu');
  setDropMenu(!dropMenu);

}
  return (
    <header className="header dark">
      <Link to={"/"}>
      <img
        src={logo}
        alt="logo"
        className="header__image heartbeat"
      />
      </Link>
      <h1 className="header__title">Vetfolio Manager</h1>
      <div className="header__style">
      <Toggle isDark={isDark} handleChange={() => setIsDark(!isDark)} />


      <button  className={`${moveMenu} header__menu `}  onClick={handleMenu} aria-label='Menu'><i className= "fa-solid fa-bars"></i></button>
        {dropMenu ? <MenuNav /> : <div></div> }
      </div>
    </header>
  );
}

HeaderPages.propTypes = {
  isDark: PropTypes.bool, 
  setIsDark: PropTypes.func, 
}

export default HeaderPages;
