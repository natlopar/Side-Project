import { useNavigate } from 'react-router-dom';
import ls from '../services/localStorage';

function LogOut({ token, setToken, setUsername, setIdVet }) {
  const navigate = useNavigate();
  const [messageLog, setMessageLog] = '';
  const [hiddenLog, setHiddenLog] = 'hidden';

  const handleLogOut = (e) => {
    e.preventDefault();
    if (token !== '') {
      fetch('https://vetfolio-manager.onrender.com/logout', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setToken('');
          setUsername('');
          setIdVet('');
          ls.remove('token');
          ls.remove('idVet');
          ls.remove('login');
          ls.remove('username');
          ls.set('userData', null);
          ls.remove('list');
          navigate('/');
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
      <button className="create__btn btn hover" onClick={handleLogOut}>
        Cerrar sesión
      </button>
      <p className={`${hiddenLog}user__msg`}>{messageLog}</p>
    </>
  );
}

export default LogOut;
