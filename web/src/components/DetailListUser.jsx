
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
import Scroll from './Scroll';

function DetailListUser({
  token,
  setToken,
  idVet,
  username,
  isDark,
  setIsDark,
  setUsername,
  setIdVet, 
  setPrivateList, 
  handleCasesOptions, 
  casesOptionName,
  // list,
   privateList, 
  casesOptionBreed,
  casesOptionClinic, 
  getPrivateCasesFromApi, 
  filter
}) {




  if (!privateList && filter === false) {
    return (
      <>
        <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
       <Scroll/>
        <div className="sectionList loading">
          <span>
            <i className="fa-solid fa-spinner"></i>
          </span>
          <p>Cargando...</p>
          <p>¿Has iniciado sesión?</p>
          <LoginBtn/>
        </div>
     
      </>
    )
  } else if (!privateList && filter === true) {
    return (
      <>
        <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
       <Scroll/>
        <div className="sectionList loading">
          <span>
            <i className="fa-solid fa-spinner"></i>
          </span>
          <p>No hay casos con esa búsqueda</p>
        
          <LoginBtn/>
        </div>
     
      </>
    )
  }
  const renderCases = (dataList) => {
    return dataList.map(data => (
      <li key={data.idCase} className="sectionList__ul">
        <Link to={`/case/${data.idCase}`} className='link'>
          <UserCases data={data} idVet={idVet} />
        </Link>
      </li>
    ));
  };
  
  // const caseSection = list && list.length > 0 ? renderCases(list) : renderCases(privateList);
  const caseSection = renderCases(privateList);
  
  


  return (
    <>
    
      <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
      <Scroll/>
      <div className="logout">
        <LogOut token={token} setToken={setToken} 
        setIdVet={setIdVet} setUsername={setUsername}/>
      </div>

      {privateList.length > 0  ? (
        <>
          <h2 className="sectionList__title">Este es tu historial de casos</h2>
          <div className='sectionList__filters'>
          <Filters handleCasesOptions={handleCasesOptions}
              casesOptionName={casesOptionName} casesOptionBreed={casesOptionBreed} casesOptionClinic={casesOptionClinic} />
          </div>
     
        </>
      ) : (
        <h2 className="sectionList__title">
          Todavía no tienes ningún caso registrado
        </h2>
      )}

      
        <ul className="sectionList">{caseSection}</ul>
     
      <CreateCase />
    </>
  );
}

export default DetailListUser;
