
import '../../styles/list.scss';
import Welcome from '../shared/Welcome';
import { useEffect, useState } from 'react';
import apiCase from '../../services/api-case';
import LogOut from '../user/LogOut';
import Scroll from '../shared/Scroll';
import ls from '../../services/localStorage';
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
setPublicList, setIsLoading}) {
  
  // const [userData, setUserData] = useState(null);
  const [listCases, setListCases] = useState({ patients: [] });

  useEffect(() => {
    setIsLoading(true);
    apiCase.getPublicCases()
    .then(data => {
      if (data.success) {
        setIsLoading(false)
        setListCases(data); 
        setPublicList(data.patients);
        ls.set('public', data.patients);
      } else {
        setIsLoading(false)
        console.error('Error al obtener los datos. Comprueba que tu conexión es correcta.');
      }
    })
    .catch(error => {
      setIsLoading(false)
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
  idVet: PropTypes.any,
}


export default ListCases;
