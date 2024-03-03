
import '../styles/logOut.scss';

import { useEffect, useState } from 'react';
import UserCases from './UserCases';
import CreateCase from './CreateCase';
import LogOut from './LogOut';
import '../styles/list.scss';
import Welcome from './Welcome';
import Filters from './Filters';
import ls from '../services/localStorage'
import { Link } from 'react-router-dom';
import LoginBtn from './LoginBtn';

function DetailListUser({
  token,
  setToken,
  idVet,
  username,
  isDark,
  setIsDark,
  setUsername, setIdVet, 
  setPrivateList

}) {

  const [list, setList] = useState(ls.get('list', null));


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://vetfolio-manager.onrender.com/listUser`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
              id: idVet,
            },
          }
        );
        const userData = await response.json();
        if (userData.success) {
          setList(userData.patients);
          setPrivateList(userData.patients);
          ls.set('list', userData.patients);
        } else {
          console.error('Error al obtener los datos del usuario');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };
    fetchData();
  }, [token, idVet]);

  if (!list) {
    return (
      <>
    
        <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
        <div className="sectionList loading">
          <span>
            <i className="fa-solid fa-spinner"></i>
          </span>
          <p>Cargando...</p>
          <p>¿Has iniciado sesión?</p>
          <LoginBtn/>
        </div>
     
      </>
    );
  }

  const caseSection = list.map((data) => (
    <li key={data.idCase} >
      <Link to={`/case/${data.idCase}`} className='link'>
      <UserCases data={data} idVet={idVet} />
      </Link>
    </li>
  ))

  return (
    <>
      <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
      <div className="logout">
        <LogOut token={token} setToken={setToken} 
        setIdVet={setIdVet} setUsername={setUsername}/>
      </div>

      {list.length > 0 ? (
        <>
          <h2 className="sectionList__title">Este es tu historial de casos</h2>
          <div className='sectionList__filters'>
          <Filters/>
          </div>
     
        </>
      ) : (
        <h2 className="sectionList__title">
          Todavía no tienes ningún caso registrado
        </h2>
      )}

      <section className="sectionList">
        <ul className="sectionList__ul">{caseSection}</ul>
      </section>
      <CreateCase />
    </>
  );
}

export default DetailListUser;
