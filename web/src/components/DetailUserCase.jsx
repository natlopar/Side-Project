import { useParams } from 'react-router-dom';
import '../styles/list.scss';
import { Link } from 'react-router-dom';
import dog from '../images/perro perfil.jpg';
import cat from '../images/raya.jpg';
import Scroll from './Scroll';
import PropTypes from "prop-types";


function DetailUserCase({ list, idVet }) {
  const { id } = useParams();
  const data = list.find((one) => one.idCase === parseInt(id));

  return (
    <>
      <Scroll/>
      <article className="listPet borderTog btn">
        <div className="listPet__title userPicture">
          {data.specie === 'canina' ? (
            <img src={dog} alt="foto perro" className="listPet__title--img" />
          ) : (
            <img src={cat} alt="foto gato" className="listPet__title--img" />
          )}
          <h5 className="listPet__title--name ">{data.name}</h5>
        </div>
        <div>
          <h6 className="listPet__text nameClient  ">Raza</h6>
          <p className="listPet__desc">{data.breed}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Año de nacimiento</h6>
          <p className="listPet__desc">{data.birthday}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Cuadro clínico</h6>
          <p className="listPet__desc">{data.clinical}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Exploración</h6>
          <p className="listPet__desc">{data.exploration}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Pruebas diagnósticas</h6>
          <p className="listPet__desc">{data.tests}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Resultados</h6>
          <p className="listPet__desc">{data.results}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Tratamiento</h6>
          <p className="listPet__desc">{data.treatment}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Evolución</h6>
          <p className="listPet__desc">{data.evolution}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Diagnóstico</h6>
          <p className="listPet__desc">{data.results}</p>
        </div>
        <div className="listPet__btn ">
          {data.fk_Vet === idVet ? (
            <>
              <Link to={'/'} className="icontool link_rev ">
                <span className="tooltip">Revisar</span>
                <span>
                  <i className=" fa-solid fa-book-medical"></i>
                </span>
              </Link>
              <Link to={'/'} className="icontool  link_rev">
                <span className="tooltip">Modificar</span>
                <span>
                  {' '}
                  <i className="fa-solid fa-file-pen"></i>
                </span>
              </Link>
              <Link to={'/'} className="icontool link_rev">
                <span className="tooltip">Eliminar</span>
                <span>
                  <i className=" fa-solid fa-trash"></i>
                </span>
              </Link>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </article>
      </>
   
  );
}

DetailUserCase.propTypes = {
  list: PropTypes.array, 
  idVet: PropTypes.number
}

export default DetailUserCase;
