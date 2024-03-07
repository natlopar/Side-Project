import { Link } from 'react-router-dom';
import '../styles/heroDesc.scss';
import dog from '../images/perro.jpg';
import cat from '../images/cat.jpg';
import heroVet from '../images/heroVet.jpg';
import hero2 from '../images/hero2.webp';
import LogOut from './LogOut';
import '../styles/logOut.scss'
import Scroll from './Scroll';

function HeroDesc({token, setToken, setIdVet, setUsername}) {
  return (
    <section className="hero desc">
      <Scroll/>
      <h1 className="hero__title">Vetfolio Manager</h1>
      {/* <div className="desc"> */}
      <div className="container">
        <section className="hero__section">
          <article className="heroArticle">
            <img
              src={hero2}
              alt="imagen Veterinaria"
              className="heroArticle__img2"
            />
            <img className="hero__section--img" src={dog} alt="" />
            <div className="heroArticle__titles btn">
              <h2 className="heroArticle__titles--h2">De Patas a Datos:</h2>
              <h3 className="heroArticle__titles--h3">
                Crea tu propia base de datos con tus casos más relevantes
              </h3>
            </div>
            {/* <img className="hero__section--img" src={dog} alt="" /> */}
          </article>
        </section>
        <section className="hero__info">
          <h3 className="desc__titles tracking-in-expand">
            Consúltalo cuando lo necesites
          </h3>

          <i className="fa-solid fa-stethoscope heroArticle__icon link"></i>
          <h3 className="desc__titles tracking-in-expand">
            Comparte y accede a otros casos publicados
          </h3>
          <i className="fa-solid fa-cloud heroArticle__icon link"></i>
        </section>
        <section className="hero__section">
          <article className="heroArticle">
          <img className="hero__section--img" src={cat} alt="" />
            <img
              src={heroVet}
              alt="imagen Veterinaria"
              className="heroArticle__img"
            />
            <div className="heroArticle__titles btn">
              <h2 className="heroArticle__titles--h2">
                Crea, Registra, Comparte:
              </h2>
              <h3 className="heroArticle__titles--h3">
                Un Archivo Digital para Veterinarios Apasionados
              </h3>
            </div>
      
          </article>
        </section>
      </div>
      <div className='aside'>
        <Link to={'/signIn'} className="link">
        <button className="aside__subtitles hover btn" aria-label='Regístrate'>Regístrate</button>
        </Link>
        <Link to={'/logIn'} className="link">
        <button className="aside__subtitles hover btn" aria-label='Inicia sesión'>Inicia sesión</button>
        </Link>
        <div >
        <LogOut token={token} setToken={setToken} setIdVet={setIdVet} setUsername={setUsername}/></div>
 
      </div>

    </section>
  );
}

export default HeroDesc;
