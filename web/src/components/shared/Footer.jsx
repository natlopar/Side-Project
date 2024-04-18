import '../../styles/footer.scss'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    
    <footer className="footer">
      <div>
      <p className="footer__text">Natalia López Ariel &copy; 2024</p>

      </div>
<div>
<Link to={'/contact'}className="footer__text link">Contacto</Link>
    <a href="https://github.com/natlopar"><i className="fa-brands fa-github-alt footer__icon"></i></a>
    <a href="https://www.linkedin.com/in/natalialopezariel/"><i className="fa-brands fa-linkedin footer__icon"></i></a>

</div>
  
    </footer>
  )
}

export default Footer