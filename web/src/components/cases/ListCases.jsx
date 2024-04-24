import '../../styles/list.scss';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Welcome from '../shared/Welcome';
import { useEffect, useState } from 'react';
import apiCase from '../../services/api-case';
import LogOut from '../user/LogOut';
import Scroll from '../shared/Scroll';
import ls from '../../services/localStorage';
import PropTypes from 'prop-types';
import PublicRender from './PublicRender';

function ListCases({
  isDark,
  setIsDark,
  idVet,
  token,
  setToken,
  setUsername,
  setIdVet,
  setPublicList,
  setIsLoading,
  isLoading,
  setList,
  setPrivateList,
  username
}) {
  // const [userData, setUserData] = useState(null);
  const [listCases, setListCases] = useState({ patients: [] });

  useEffect(() => {
    setIsLoading(true);
    apiCase
      .getPublicCases()
      .then((data) => {
        if (data.success) {
          setIsLoading(false);
          setListCases(data);
          setPublicList(data.patients);
          ls.set('public', data.patients);
        } else {
          setIsLoading(false);
          console.error(
            'Error al obtener los datos. Comprueba que tu conexión es correcta.'
          );
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error al obtener los datos:', error);
      });
  }, [setPublicList]);

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
      />
      <Scroll />
      <h2 className="sectionList__title">
        Consulta los casos publicados por otr@s veterinari@s
      </h2>
      <div className="sectionList__logOut">
        <LogOut
          token={token}
          setToken={setToken}
          setIdVet={setIdVet}
          setUsername={setUsername}
        />
      </div>
      {isLoading ? (
        <div className="spinner flex justify-content-center">
          <ProgressSpinner />{' '}
        </div>
      ) : null}
      <PublicRender idVet={idVet} listCases={listCases} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </>
  );
}

ListCases.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func,
  setUsername: PropTypes.func,
  setIdVet: PropTypes.func,
  setPublicList: PropTypes.func,
  setList: PropTypes.func,
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  idVet: PropTypes.any,
};

export default ListCases;
