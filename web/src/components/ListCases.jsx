
import '../styles/list.scss';
import Welcome from './Welcome';
import UserCases from './UserCases';
import { useEffect, useState } from 'react';
import apiCase from '../services/api-case';
import LogOut from './LogOut';


function ListCases({ 
  isDark, 
  setIsDark, 
  idVet, 
  token, 
  setToken,  
  setUsername, 
  setIdVet,
  setUserData}) {
  
  // const [userData, setUserData] = useState(null);
  const [listCases, setListCases] = useState({ patients: [] });

  useEffect(() => {
    apiCase.getPublicCases()
    .then(data => {
      if (data.success) {
        setListCases(data); 
      } else {
        console.error('Error al obtener los datos del usuario');
      }
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
  }, []);

  
  return (
    <>
      <Welcome isDark={isDark} setIsDark={setIsDark} />
      <h2 className="sectionList__title">
        Consulta los casos publicados por otr@s veterinari@s
      </h2>
      <div className='sectionList__logOut'>
        <LogOut token={token} setToken={setToken} setIdVet={setIdVet} setUsername={setUsername} setUserData={setUserData}/></div>
      <section className="sectionList">
        {listCases.patients.map((data, i) => (
          <ul key={i} className="sectionList__ul">
            <UserCases data={data} idVet={idVet}/>
          </ul>
        ))}
      </section>
    </>
  );
}

export default ListCases;
