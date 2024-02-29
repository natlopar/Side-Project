import React from 'react';
import '../styles/logOut.scss';

import { useEffect, useState } from 'react';
import UserCases from './UserCases';
import CreateCase from './CreateCase';
import LogOut from './LogOut';
import '../styles/list.scss';
import Welcome from './Welcome';

function DetailListUser({
  token,
  setToken,
  idVet,
  username,
  isDark,
  setIsDark,
}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza una solicitud para obtener los datos del usuario enviando el token
        const response = await fetch(`http://localhost:4000/listUser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
            id: idVet,
          },
        });
        const userData = await response.json();
        if (userData.success) {
          setUserData(userData);
        } else {
          console.error('Error al obtener los datos del usuario');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };
    fetchData();
  }, [token, idVet]);

  if (!userData) {
    return (
      <>
        <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
        <div className='sectionList'><i className="fa-solid fa-spinner"></i>Cargando...</div>
      </>
    );
  }

  return (
    <>
      <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
         <div className="logout"><LogOut token={token} setToken={setToken} /></div>
         
      {userData.patients.length>0 ? (  <h2 className="sectionList__title">Este es tu historial de casos</h2>) :
        (<h2 className="sectionList__title">
          Todavía no tienes ningún caso registrado
        </h2>
      )}
{/* <div className='sectionList'> */}
      {/* <section className="sectionList"> */}
        {userData.patients.map((data, i) => (
          <ul key={i} className="sectionList__ul">
            <UserCases data={data} />
          </ul>
        ))}
      {/* </section> */}
      <div className="sectionList__create">
        {' '}
        <CreateCase />
      </div>
      {/* </div> */}
    </>
  );
}

export default DetailListUser;
