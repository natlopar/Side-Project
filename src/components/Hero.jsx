
import heroVet from '../images/heroVet.jpg'
import hero2 from '../images/hero2.webp'



function Hero() {
  return (
    <section className="hero">
    <h1 className="hero__title">Vetfolio Manager</h1>
    <section className="hero__section">
      <article className="heroArticle">
      <img src={heroVet} alt="imagen Veterinaria" className="heroArticle__img"/>
      <div className="heroArticle__titles">
        <h2 className="heroArticle__titles--h2">De Patas a Datos:</h2>
        <h3 className="heroArticle__titles--h3">
          Un Archivo Digital para Veterinarios Apasionados
        </h3>
      </div>
      <i className="fa-solid fa-stethoscope heroArticle__icon"></i>
      </article>
  
    <article className="heroArticle">
      <img src={hero2} alt="imagen Veterinaria" className="heroArticle__img2"/>
      <div className="heroArticle__titles">
        <h2 className="heroArticle__titles--h2">Crea, Registra, Comparte:</h2>
        <h3 className="heroArticle__titles--h3">La App que Transforma Experiencias Veterinarias</h3>
      </div>
      <i className="fa-solid fa-cloud heroArticle__icon"></i>
    </article>
    
    </section>
    {/* <!-- <i className="fa-solid fa-cat"></i>
    <i className="fa-solid fa-dog"></i> -->
    <!-- <i className="fa-solid fa-wand-magic-sparkles hero__icon"></i> -->
    <!-- <i className="fa-regular fa-trash-can"></i>
    <i className="fa-solid fa-pencil"></i>
    <i className="fa-solid fa-file-pen"></i> --> */}
  </section>
  )
}

export default Hero