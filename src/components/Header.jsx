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
          isDark={isDark}
          handleChange={() => setIsDark(!isDark)}
        />

        <nav className="header__style--nav">
          <MenuNav />
        </nav>
      </div>
    </header>
  );
}

export default Header;
