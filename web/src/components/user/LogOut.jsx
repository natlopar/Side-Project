import { useNavigate } from 'react-router-dom';
import ls from '../../services/localStorage';
import PropTypes from "prop-types";
import '../../styles/createCase.scss';
import ModalMessageDelete from '../cases/ModalMessageDelete';
import { useState } from 'react';

function LogOut({ token, setToken, setUsername, setIdVet, setList, setPrivateList, setIsDeleted }) {
  const navigate = useNavigate();
  // const [smShow, setSmShow] = useState(false);
  // const [messageLog, setMessageLog] = useState('');
  // const [titleLog, setTitleLog] = useState ('')
  // const [hiddenLog, setHiddenLog] = 'hidden';

  const handleLogOut = async (e) => {
    e.preventDefault();
    if (token !== '') {
     await fetch('https://side-project-vetfolio-manager.vercel.app/logout', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          token && setToken('');
          setUsername('');
          setIdVet('');
          ls.remove('token');
          ls.remove('idVet');
          ls.remove('login');
          // ls.remove('username');
          ls.set('userData', null);
          ls.remove('list');
          navigate('/');
          setList(null);
          setPrivateList([]);
          // setMessageLog('Tu sesión ha sido cerrada.');
          // setTitleLog('Hasta pronto');
         
        });
    } else {
      setUsername('');
      navigate('/');
      setIdVet('');
      ls.remove('idVet');
      ls.remove('login');
      // ls.remove('username');
      ls.set('userData', null);
      ls.remove('list');
      // setMessageLog('No tienes iniciada la sesión');
      // setHiddenLog('');
    }

  };

  return (
    <>
      <button className="create__btn btn hover desc__subtitles" onClick={handleLogOut} aria-label='Cerrar sesión'>
        Cerrar sesión
      </button>
      {/* <p className={`${hiddenLog}user__msg`}>{messageLog}</p> */}
      {/* <ModalMessageDelete smShow={smShow} setSmShow={setSmShow} messageDelete={messageLog} titleDelete={titleLog} setIsDeleted={setIsDeleted}/> */}

    </>
  );
}


LogOut.propTypes = {
  token: PropTypes.string, 
  setUsername: PropTypes.func,
  setIdVet: PropTypes.func,
  setList: PropTypes.func,
  setPrivateList: PropTypes.func,
  setToken: PropTypes.func
}

export default LogOut;
