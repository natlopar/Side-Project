import React from 'react';
import '../styles/logOut.scss';

import { useEffect, useState } from 'react';
import UserCases from './UserCases';
import CreateCase from './CreateCase';
import LogOut from './LogOut';
import '../styles/list.scss';
import Welcome from './Welcome';
import Filters from './Filters';

function DetailListUser({
  token,
  setToken,
  idVet,
  username,
  isDark,
  setIsDark,
  setUsername, setIdVet, userData, setUserData

}) {


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza una solicitud para obtener los datos del usuario enviando el token
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
        <div className="sectionList loading">
          <span>
            <i className="fa-solid fa-spinner"></i>
          </span>
          <p>Cargando...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
      <div className="logout">
        <LogOut token={token} setToken={setToken} 
        setIdVet={setIdVet} setUsername={setUsername} setUserData={setUserData}/>
      </div>

      {userData.patients.length > 0 ? (
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
        {userData.patients.map((data, i) => (
          <ul key={i} className="sectionList__ul">
            <UserCases data={data} idVet={idVet} />
          </ul>
        ))}
      </section>
      <CreateCase />
    </>
  );
}

export default DetailListUser;
