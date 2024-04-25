import { useNavigate } from 'react-router-dom';
import ls from '../../services/localStorage';
import PropTypes from 'prop-types';
import '../../styles/createCase.scss';
import ModalMessage from '../cases/ModalMessage';
import { useState } from 'react';
import apiUser from '../../services/api-user';
import BtnLogOut from './BtnLogOut';

function LogOut({
  token,
  setToken,
  setUsername,
  setIdVet,
  setList,
  setPrivateList,
  smShow, 
  messageLog, 
  titleLog, 
  isLogOut, 
  setMessageLog, 
  setTitleLog, 
  setIsLogOut, 
  setSmShow
}) {
  const navigate = useNavigate();


  const logOutSuccess = () => {
    token && setToken('');
    setUsername('');
    setIdVet('');
    ls.remove('token');
    ls.remove('idVet');
    ls.remove('login');
    ls.set('userData', null);
    ls.remove('list');
    navigate('/');
    setList(null);
    setPrivateList([]);
    setMessageLog('Tu sesión ha sido cerrada ✅');
    setTitleLog('Hasta pronto');
    setIsLogOut(true);
    setSmShow(true);
  };

  const failedLogOut = () => {
    setUsername('');
    navigate('/');
    setIdVet('');
    ls.remove('idVet');
    ls.remove('login');
    ls.set('userData', null);
    ls.remove('list');
    setMessageLog('No tienes iniciada la sesión');
    setTitleLog('❗');
    setIsLogOut(true);
    setSmShow(true);
  };
  const handleLogOut = async (e) => {
    e.preventDefault();
    if (token !== '') {
      await apiUser.sendLogOutToApi(token).then((data) => {
        if (data.success) {
          logOutSuccess();
        } else {
          failedLogOut();
        }
      });
    }
  };

  return (
    <>
  <BtnLogOut handleLogOut={handleLogOut} />

      {isLogOut ? (
        <ModalMessage
          smShow={smShow}
          setSmShow={setSmShow}
          message={messageLog}
          title={titleLog}
          setIsDeleted={setIsLogOut}
        />
      ) : null}
    </>
  );
}

LogOut.propTypes = {
  token: PropTypes.string,
  setUsername: PropTypes.func,
  setIdVet: PropTypes.func,
  setList: PropTypes.func,
  setPrivateList: PropTypes.func,
  setToken: PropTypes.func,
  smShow: PropTypes.bool, 
  messageLog: PropTypes.string,
  titleLog: PropTypes.string, 
  isLogOut:PropTypes.bool, 
  setMessageLog:PropTypes.func,
  setTitleLog: PropTypes.func,
  setIsLogOut: PropTypes.func,
  setSmShow: PropTypes.func,
};

export default LogOut;
