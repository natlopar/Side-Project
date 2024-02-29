import React from 'react';
import '../styles/list.scss';
import { Link } from 'react-router-dom';

function UserCases({ data }) {
  return (
    <>
      <li className="listPet cardClient borderTog btn">
        <div className="listPet__title userPicture">
          {data.specie === 'canina' ? (
            <i className="fa-solid fa-dog iconPet"></i>
          ) : (
            <i className="fa-solid fa-cat iconPet"></i>
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
        <div className="listPet__btn ">
          <Link to={'/'} className="icontool link_rev btn ">
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
        </div>
      </li>
    </>
  );
}

export default UserCases;
