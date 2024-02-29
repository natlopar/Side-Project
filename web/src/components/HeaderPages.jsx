import { Link } from 'react-router-dom';
import logo from '../images/logoVET.png';
import { Toggle } from './Toggle';
import MenuNav from './MenuNav';
import '../styles/header.scss'



function HeaderPages({isDark, setIsDark}) {
  return (
    <header className="header dark">
      <Link to={"/"}>
      <img
        src={logo}
        alt="logo"
        className="header__image heartbeat"
      />
      </Link>
      {/* <h1 className="header__title">Vetfolio Manager</h1> */}
      <div className="header__style">
      <Toggle isDark={isDark} handleChange={() => setIsDark(!isDark)} />


        <nav className="header__style--nav">
        <MenuNav/>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPages;
