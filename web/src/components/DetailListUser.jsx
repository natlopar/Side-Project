
import '../styles/logOut.scss';
import { useEffect } from 'react';
import UserCases from './UserCases';
import CreateCase from './CreateCase';
import LogOut from './LogOut';
import '../styles/list.scss';
import Welcome from './Welcome';
import Filters from './Filters';
import { Link } from 'react-router-dom';
import LoginBtn from './LoginBtn';
import Scroll from './Scroll';
import NoFilter from './NoFilter';

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
  list, 
  privateList, 
  casesOptionBreed,
  casesOptionClinic
}) {

 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://vetfolio-manager.onrender.com/listUser',
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
          setPrivateList(userData.patients);
        } else {
          console.error('Error al obtener los datos del usuario');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };
    fetchData();
  }, [token, idVet, setPrivateList]);

  if (!token) {
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
    );
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
  
  // const filterSection = () => {
  //   if(list && list.length > 0 ){
  //     renderCases(list)
  //   } else if (list.length === 0) {
  //     <NoFilter/>
  //   } else if (list === null){
  //     renderCases(privateList)
  //   }
    
  //   }

const filterSection = list && list.length > 0 ? renderCases(list) : <NoFilter/> 

  return (
    <>
    
      <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
      <Scroll/>
      <div className="logout">
        <LogOut token={token} setToken={setToken} 
        setIdVet={setIdVet} setUsername={setUsername}/>
      </div>

      {privateList.length > 0 ? (
        <>
          <h2 className="sectionList__title">Este es tu historial de casos</h2>
          <div className='sectionList__filters'>
          <Filters handleCasesOptions={handleCasesOptions}
              casesOptionName={casesOptionName} casesOptionBreed={casesOptionBreed} casesOptionClinic={casesOptionClinic} />
          </div>

          <ul className="sectionList">{filterSection}</ul>

        </>
      ) : (
        <h2 className="sectionList__title">
          Todavía no tienes ningún caso registrado
        </h2>
      )}

        
        
     
      <CreateCase />
    </>
  );
}

export default DetailListUser;
