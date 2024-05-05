import '../../styles/logOut.scss';
import '../../styles/list.scss';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ls from '../../services/localStorage';
import { useEffect } from 'react';
import apiCase from '../../services/api-case';
import UserCases from './UserCases';
import CreateCase from './CreateCase';

import Welcome from '../shared/Welcome';
import Filters from './Filters';
import LoginBtn from '../user/LoginBtn';
import Scroll from '../shared/Scroll';
import NoFilter from './NoFilter';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  setCasesOptionName,
  setIsLoading,
  isLoading,
  isDeleted,
  setIsDeleted,
  smShow,
  messageLog,
  titleLog,
  isLogOut,
  setMessageLog,
  setTitleLog,
  setIsLogOut,
  setSmShow,
  setAnimal,
  dataAnimal,
  isLogIn,
  setIsLogIn,
}) {
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsDeleted(false);
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
        setIsLoading(false);
        const userData = await response.json();
        if (userData.success) {
          setPrivateList(userData.patients);
          setAnimal(dataAnimal);
          ls.set('private', userData.patients);
        } else {
          console.error('Error al obtener los datos del usuario');
        }
      } catch (error) {
        setIsLoading(false);
        console.error(
          'Error al obtener los datos del usuario, comprueba que has iniciado sesión correctamente',
          error
        );
      }
    };
    fetchData();
  }, [idVet, setIsLoading, setPrivateList, token, isDeleted, setIsDeleted]);

  useEffect(() => {
    const params = {
      name: casesOptionName,
      breed: casesOptionBreed,
      clinic: casesOptionClinic,
    };
    apiCase.getFilterCase(params, token, idVet).then((data) => {
      if (data.success) {
        setList(data.patients);
      } else {
        console.error(
          'Error al obtener los datos. Comprueba que tu conexión es correcta.'
        );
      }
    });
  }, [casesOptionName, casesOptionBreed, casesOptionClinic]);

  if (!token || !username) {
    return (
      <>
        <Welcome
           username={username}
          isDark={isDark}
          setIsDark={setIsDark}
          token={token}
          setToken={setToken}
          setUsername={setUsername}
          setIdVet={setIdVet}
          setList={setList}
          setPrivateList={setPrivateList}
          smShow={smShow}
          messageLog={messageLog}
          titleLog={titleLog}
          isLogOut={isLogOut}
          setMessageLog={setMessageLog}
          setTitleLog={setTitleLog}
          setIsLogOut={setIsLogOut}
          setSmShow={setSmShow}
          isLogIn={isLogIn}
          setIsLogIn={setIsLogIn}
        />
        <Scroll />
        <div className="sectionList loading">
          <p>Cargando...</p>
          <ProgressSpinner />
          <p>¿Has iniciado sesión?</p>
          <LoginBtn />
        </div>
      </>
    );
  }

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .normalize('NFD') // Normalizar caracteres a forma de descomposición
      .replace(/[\u0300-\u036f]/g, ''); // Eliminar caracteres diacríticos
  };

  const renderFilteredCases = () => {
    let filteredData = privateList;
    if (casesOptionName !== '') {
      filteredData = filteredData.filter((data) =>
        normalizeString(data.name).includes(normalizeString(casesOptionName))
      );
    }
    if (casesOptionBreed !== '') {
      filteredData = filteredData.filter((data) =>
        normalizeString(data.breed).includes(normalizeString(casesOptionBreed))
      );
    }
    if (casesOptionClinic !== '') {
      filteredData = filteredData.filter((data) =>
        normalizeString(data.clinical).includes(
          normalizeString(casesOptionClinic)
        )
      );
    }
    return filteredData.length === 0 ? (
      <NoFilter />
    ) : (
      filteredData.map((data) => (
        <li key={data.idCase} className="sectionList__ul">
          <UserCases
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            data={data}
            idVet={idVet}
            setIsDeleted={setIsDeleted}
          />
        </li>
      ))
    );
  };

  return (
    <>
      <Welcome
        username={username}
        isDark={isDark}
        setIsDark={setIsDark}
        token={token}
        setToken={setToken}
        setUsername={setUsername}
        setIdVet={setIdVet}
        setList={setList}
        setPrivateList={setPrivateList}
        smShow={smShow}
        messageLog={messageLog}
        titleLog={titleLog}
        isLogOut={isLogOut}
        setMessageLog={setMessageLog}
        setTitleLog={setTitleLog}
        setIsLogOut={setIsLogOut}
        setSmShow={setSmShow}
        isLogIn={isLogIn}
        setIsLogIn={setIsLogIn}
      />

      <div className="logout">
        <Link to={'/newCase'} className="link">
          <button className="create__btn btn hover" aria-label="Comenzar">
            Crear caso
          </button>
        </Link>
      </div>

      {isLoading ? (
        <div className="spinner flex justify-content-center">
          <ProgressSpinner />{' '}
        </div>
      ) : null}

      {privateList.length > 0 ? (
        <>
          <h2 className="sectionList__title">Este es tu historial de casos</h2>
          <div className="sectionList__filters">
            <Filters
              handleCasesOptions={handleCasesOptions}
              casesOptionName={casesOptionName}
              casesOptionBreed={casesOptionBreed}
              casesOptionClinic={casesOptionClinic}
              setCasesOptionBreed={setCasesOptionBreed}
              setCasesOptionClinic={setCasesOptionClinic}
              setCasesOptionName={setCasesOptionName}
            />
          </div>

          <ul className="sectionList">{renderFilteredCases()}</ul>
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
  idVet: PropTypes.any,
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
  setCasesOptionName: PropTypes.func,
};

export default DetailListUser;
