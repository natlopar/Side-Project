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
import PropTypes from "prop-types";

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
  privateList, 
  casesOptionBreed,
  casesOptionClinic, 
  setList, 
  setCasesOptionBreed, 
  setCasesOptionClinic, 
  setCasesOptionName
 
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

  const renderFilteredCases = () => {
    let filteredData = privateList;
    if (casesOptionName !== '') {
      filteredData = filteredData.filter(data => data.name.toLowerCase() === casesOptionName);
    }
    if (casesOptionBreed !== '') {
      filteredData = filteredData.filter(data => data.breed.toLowerCase().includes(casesOptionBreed));
    }
    if (casesOptionClinic !== '') {
      filteredData = filteredData.filter(data => data.clinical.toLowerCase().includes(casesOptionClinic));
    }
    return filteredData.length === 0 ? <NoFilter/> :

     filteredData.map(data => (
      <li key={data.idCase} className="sectionList__ul">
        <Link to={`/case/${data.idCase}`} className='link'>
          <UserCases data={data} idVet={idVet} />
        </Link>
      </li>
    ));
  };

  return (
    <>
      <Welcome username={username} isDark={isDark} setIsDark={setIsDark} />
 
      <div className="logout">
        <LogOut token={token} setToken={setToken} 
        setIdVet={setIdVet} setUsername={setUsername} setList={setList} setPrivateList={setPrivateList}/>
      </div>

      {privateList.length > 0 ? (
        <>
          <h2 className="sectionList__title">Este es tu historial de casos</h2>
          <div className='sectionList__filters'>
            <Filters handleCasesOptions={handleCasesOptions}
              casesOptionName={casesOptionName} casesOptionBreed={casesOptionBreed} casesOptionClinic={casesOptionClinic} setCasesOptionBreed={setCasesOptionBreed} setCasesOptionClinic={setCasesOptionClinic} setCasesOptionName={setCasesOptionName} />
          </div>

          <ul className="sectionList">
            {renderFilteredCases()}
          </ul>
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

DetailListUser.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func,
  idVet: PropTypes.number,
  username: PropTypes.string,
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  setUsername: PropTypes.func,
  setIdVet: PropTypes.func, 
  setPrivateList: PropTypes.func, 
  handleCasesOptions: PropTypes.func, 
  casesOptionName: PropTypes.string,
  privateList: PropTypes.array, 
  casesOptionBreed: PropTypes.string,
  casesOptionClinic: PropTypes.string, 
  setList: PropTypes.func, 
  setCasesOptionBreed: PropTypes.func, 
  setCasesOptionClinic: PropTypes.func, 
  setCasesOptionName: PropTypes.func
 
}

export default DetailListUser;


