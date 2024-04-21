import '../../styles/list.scss';
import { Link } from 'react-router-dom';
import dog from '../../images/perro perfil.jpg'
import cat from '../../images/raya.jpg'
import PropTypes from "prop-types";
import ModalDelete from './ModalDelete';
import React from 'react';

function UserCases({ data , idVet}) {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <article className="listPet borderTog btn">
        <div className="listPet__title userPicture">
          {data.specie === 'canina' ? (
            // <i className="fa-solid fa-dog iconPet"></i>
            <img src={dog} alt="foto perro" className='listPet__title--img' />
          ) : (
            // <i className="fa-solid fa-cat iconPet"></i>
            <img src={cat} alt="foto gato" className='listPet__title--img' />
          )}
          <h5 className="listPet__title--name ">{data.name}</h5>
        </div>
        <div>
          <h6 className="listPet__text nameClient  ">Raza</h6>
          <p className="listPet__desc">{data.breed}</p>
        </div>
        <div>
          <h6 className="listPet__text ">Cuadro clínico</h6>
          <p className="listPet__desc">{data.clinical}</p>
        </div>
        {/* <h6></h6>
        <p className="listPet__text">{data.breed}</p> */}
        <div>
          <h6 className="listPet__text ">Diagnóstico</h6>
          <p className="listPet__desc">{data.results}</p>
        </div>
        <nav className="listPet__btn ">
          {data.fk_Vet === idVet ? <Link to={`/case/${data.idCase}`} className='link'>
          <div className="icontool link_rev ">
            <span className="tooltip">Revisar</span>
            <span>
              <i className=" fa-solid fa-book-medical"></i>
            </span>
          </div>
        </Link> : <Link to={`/publicCase/${data.idCase}`} className='link'>
          <div className="icontool link_rev ">
            <span className="tooltip">Revisar</span>
            <span>
              <i className=" fa-solid fa-book-medical"></i>
            </span>
          </div>
        </Link> }
        
         {data.fk_Vet === idVet ? ( <Link to={`/updateCase/${data.idCase}`} className="link"><div className="icontool  link_rev">
            <span className="tooltip">Modificar</span>
            <span>
              {' '}
              <i className="fa-solid fa-file-pen"></i>
            </span>
          </div>
          </Link>) : <span></span>}
          { data.fk_Vet === idVet ?  <div className="icontool link_rev">
            <span className="tooltip">Eliminar</span>
            <a onClick={() => setModalShow(true)}>
              <i className=" fa-solid fa-trash"></i>
            </a>
            <ModalDelete show={modalShow} onHide={()=> {setModalShow(false)}}/>
          </div> : <span></span>}
        </nav>
      </article>
    </> 
  );
}


UserCases.propTypes = {
  idVet: PropTypes.number,
  data: PropTypes.shape({
    specie: PropTypes.string,
    name: PropTypes.string,
    breed: PropTypes.string,
    clinical: PropTypes.string,
    results: PropTypes.string,
    fk_Vet: PropTypes.number,
    idCase: PropTypes.number
  })
}


export default UserCases;
