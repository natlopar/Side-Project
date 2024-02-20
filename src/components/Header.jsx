import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';
import { Toggle } from './Toggle';
import MenuNav from './MenuNav';

function Header({ isDark, setIsDark }) {

 
  return (
    <header className="header">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="header__image heartbeat" />
      </Link>
      <div className="header__style">
       
          <Toggle
            className="header__style--light"
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
          />
          {/* <div className={`header__style--dark ${toDark}`}>
            <span className="header__style--text">dark </span>
            <i className="fa-solid fa-toggle-on header__style--dark"></i>
        </div>
        <div className='header__style--light'>
          <span className="header__style--text">light</span>
          <button onClick={toggleTheme}>  <i className="fa-solid fa-toggle-off header__style--light"></i></button>
        </div> */}
   
        <nav className="header__style--nav">
          {/* <i className="fa-solid fa-ellipsis-vertical link header__style--navIcon" onClick={()=> <MenuNav/>}>
            {' '}
          </i> */}
          <MenuNav/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
