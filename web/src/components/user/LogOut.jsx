import { useNavigate } from 'react-router-dom';
import ls from '../../services/localStorage';
import PropTypes from "prop-types";

function LogOut({ token, setToken, setUsername, setIdVet, setList, setPrivateList }) {
  const navigate = useNavigate();
  const [messageLog, setMessageLog] = '';
  const [hiddenLog, setHiddenLog] = 'hidden';

  const handleLogOut = (e) => {
    e.preventDefault();
    if (token !== '') {
      fetch('https://side-project-vetfolio-manager.vercel.app/logout', {
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
          ls.remove('username');
          ls.set('userData', null);
          ls.remove('list');
          navigate('/');
          setList(null);
          setPrivateList([]);
         
        });
    } else {
      setUsername('');
      navigate('/');
      setIdVet('');
      ls.remove('idVet');
      ls.remove('login');
      ls.remove('username');
      ls.set('userData', null);
      ls.remove('list');
      // setMessageLog('No tienes iniciada la sesión');
      // setHiddenLog('');
    }

  };

  return (
    <>
      <button className="create__btn btn hover" onClick={handleLogOut} aria-label='Cerrar sesión'>
        Cerrar sesión
      </button>
      <p className={`${hiddenLog}user__msg`}>{messageLog}</p>
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
