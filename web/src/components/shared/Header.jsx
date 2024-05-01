import '../../styles/header.scss';
import { Link } from 'react-router-dom';
import { Toggle } from './Toggle';
import { useState } from 'react';
import logo from '../../images/logoVET.png';
import MenuNav from './MenuNav';
import PropTypes from 'prop-types';

function Header({
  isDark,
  setIsDark,
  token,
  setToken,
  setUsername,
  setIdVet,
  setList,
  setPrivateList,
  smShow, 
  messageLog, 
  titleLog, 
  isLogOut, 
  setMessageLog, 
  setTitleLog, 
  setIsLogOut, 
  setSmShow, 
  isLogIn, setIsLogIn
}) {
  const [dropMenu, setDropMenu] = useState(false);
  const [moveMenu, setMoveMenu] = useState('');

  const handleMenu = (e) => {
    e.preventDefault();
    setMoveMenu('dropMenu');
    setDropMenu(!dropMenu);
  };

  return (
    <header className="header dark">
      <Link to={'/'} hrefLang='top'>
        <img
          src={logo}
          alt="logo Vetfolio"
          className="header__image heartbeat"
          role="navigation"
        />
      </Link>
      <div className="header__style">
        <Toggle isDark={isDark} handleChange={() => setIsDark(!isDark)} />
        <button
          className={`${moveMenu} header__menu`}
          onClick={handleMenu}
          aria-label="Menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

     
      {dropMenu ? (
          <MenuNav
            token={token}
            setToken={setToken}
            setUsername={setUsername}
            setIdVet={setIdVet}
            setList={setList}
            setPrivateList={setPrivateList}
            smShow={smShow}
            messageLog= {messageLog}
            titleLog= {titleLog}
            isLogOut= {isLogOut} 
            setMessageLog={setMessageLog}
            setTitleLog={setTitleLog}
            setIsLogOut={setIsLogOut}
            setSmShow={setSmShow}
            isLogIn={isLogIn}
            setIsLogIn={setIsLogIn}
          />
        ) : null}
         </div>
    </header>
  );
}

Header.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
};

export default Header;
