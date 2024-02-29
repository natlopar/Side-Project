import { Link } from 'react-router-dom';
import '../styles/heroDesc.scss';
import dog from '../images/perro.jpg';
import cat from '../images/cat.jpg';
import heroVet from '../images/heroVet.jpg';
import hero2 from '../images/hero2.webp';


function HeroDesc() {
  return (
    <section className="hero">
      <h1 className="hero__title">Vetfolio Manager</h1>
        <div className="desc">
        <h3 className="desc__titles tracking-in-expand">
          Consúltalo cuando lo necesites
        </h3>
        
        <i className="fa-solid fa-stethoscope heroArticle__icon link"></i>
        <h3 className="desc__titles tracking-in-expand">
          Comparte con tus colegas para poder acceder a otros historiales
          publicados
        </h3>
           <i className="fa-solid fa-cloud heroArticle__icon link"></i>
    
        <section className="hero__section">
            <img className="hero__section--img" src={cat} alt="" />
            <article className="heroArticle">
              <img
                src={hero2}
                alt="imagen Veterinaria"
                className="heroArticle__img2"
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
          <section className="hero__section">
          <img className="hero__section--img" src={dog} alt="" />
            <article className="heroArticle">
              <img
                src={heroVet}
                alt="imagen Veterinaria"
                className="heroArticle__img"
              />
              <div className="heroArticle__titles btn">
                <h2 className="heroArticle__titles--h2">De Patas a Datos:</h2>
                <h3 className="heroArticle__titles--h3">
                  Crea tu propia base de datos con tus casos más relevantes
                </h3>
              </div>
            </article>
          </section>
          <Link to={'/signIn'} className="link">
          <button className="desc__subtitles hover btn">Regístrate</button>
        </Link>
        <Link to={'/logIn'} className="link">
          <button className="desc__subtitles hover btn">Inicia sesión</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroDesc;
