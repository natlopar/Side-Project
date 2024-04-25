import '../../styles/list.scss';
import { useParams } from 'react-router-dom';
import dog from '../../images/perro perfil.jpg';
import cat from '../../images/raya.jpg';
import Scroll from '../shared/Scroll';
import PropTypes from "prop-types";


function DetailUserCase({ list }) {
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
        <div className='listPet__block'>
          <h6 className="listPet__text nameClient  ">Raza</h6>
          <p className="listPet__desc">{data.breed ?  data.breed : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text nameClient  ">Género</h6>
          <p className="listPet__desc">{data.gender ? data.gender : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Año de nacimiento</h6>
          <p className="listPet__desc">{data.birthday ? data.birthday : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Cuadro clínico</h6>
          <p className="listPet__desc">{data.clinical ? data.clinical : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Exploración</h6>
          <p className="listPet__desc">{data.exploration ? data.exploration : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Pruebas diagnósticas</h6>
          <p className="listPet__desc">{data.tests ? data.tests : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Resultados</h6>
          <p className="listPet__desc">{data.results ? data.results : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Tratamiento</h6>
          <p className="listPet__desc">{data.treatment ? data.treatment : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Evolución</h6>
          <p className="listPet__desc">{data.evolution ? data.evolution : 'Sin datos'}</p>
        </div>
        <div className='listPet__block'>
          <h6 className="listPet__text ">Diagnóstico</h6>
          <p className="listPet__desc">{data.results ? data.results: 'Sin datos'}</p>
        </div>
    
      </article>
      </>
   
  );
}

DetailUserCase.propTypes = {
  list: PropTypes.array, 
  idVet: PropTypes.any
}

export default DetailUserCase;
