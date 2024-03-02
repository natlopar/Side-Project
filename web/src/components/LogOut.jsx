
import { useNavigate } from 'react-router-dom';
import ls from '../services/localStorage'

function LogOut({ token, setToken, setUsername, setIdVet, setUserData}) {
  const navigate = useNavigate();
 
 
  const handleLogOut = (e) => {
    e.preventDefault();
    fetch('https://vetfolio-manager.onrender.com/logout', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        token = '';
        setToken('');
        setUsername('');
        setIdVet('');
        ls.remove('token');
        ls.remove('idVet');
        ls.remove('login');
        ls.remove('username');
        ls.set('userData',null);
        navigate('/');
      });
  };


  return (

      <button className="create__btn btn hover" onClick={handleLogOut}>
        Cerrar sesión
      </button>
 
  );
}

export default LogOut;
