import logo from '../images/logo.jpeg'



function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="logo"
        className="header__image heartbeat"
      />

      <div className="header__style">
        <div className="header__style--dark  hidden">
          <div className="header__style--text">
            <span>dark </span>
          </div>
          <div className="header__style--btns">
            <i className="fa-solid fa-toggle-on header__style--dark"></i>
          </div>
        </div>
        <div className="header__style--light">
          <span className="header__style--text">light</span>
          <i className="fa-solid fa-toggle-off header__style--light"></i>
        </div>

        <nav className="header__style--nav">
          <a href="" className="header__style--navIcon">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
          <ul className="header__style--menu">
            <li>Iniciar Sesión</li>
            <li>Cómo funciona</li>
            <li>Explorar</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
