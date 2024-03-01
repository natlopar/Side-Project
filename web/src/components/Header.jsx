import { Link } from 'react-router-dom';
import logo from '../images/logoVET.png';
import { Toggle } from './Toggle';
import MenuNav from './MenuNav';
import '../styles/header.scss';
import DropMenu from './DropMenu';


function Header({ isDark, setIsDark }) {
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
      <MenuNav />
      {/* <DropMenu/> */}
      </div>
    </header>

  );
}

export default Header;
