
import '../styles/list.scss';
import Welcome from './Welcome';
import UserCases from './UserCases';
import { useEffect, useState } from 'react';
import apiCase from '../services/api-case';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';
import Scroll from './Scroll';
import ls from '../services/localStorage';
import PropTypes from "prop-types";
import PublicRender from './PublicRender';


function ListCases({ 
  isDark, 
  setIsDark, 
  idVet, 
  token, 
  setToken,  
  setUsername, 
  setIdVet,
setPublicList}) {
  
  // const [userData, setUserData] = useState(null);
  const [listCases, setListCases] = useState({ patients: [] });

  useEffect(() => {
    apiCase.getPublicCases()
    .then(data => {
      if (data.success) {
        setListCases(data); 
        setPublicList(data.patients);
        ls.set('public', data.patients);
      } else {
        console.error('Error al obtener los datos. Comprueba que tu conexión es correcta.');
      }
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
  }, [setPublicList]);

  
  return (
    <>
      <Welcome isDark={isDark} setIsDark={setIsDark} />
      <Scroll/>
      <h2 className="sectionList__title">
        Consulta los casos publicados por otr@s veterinari@s
      </h2>
      <div className='sectionList__logOut'>
        <LogOut token={token} setToken={setToken} setIdVet={setIdVet} setUsername={setUsername}/></div>
         <PublicRender idVet={idVet} listCases={listCases} />
    </>
  );
}

ListCases.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func,
  setUsername: PropTypes.func,
  setIdVet: PropTypes.func, 
  setPublicList: PropTypes.func, 
  setList: PropTypes.array, 
  isDark: PropTypes.bool, 
  setIsDark: PropTypes.func,
  idVet: PropTypes.number,
}


export default ListCases;
