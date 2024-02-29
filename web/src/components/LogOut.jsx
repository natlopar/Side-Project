
import { useNavigate } from 'react-router-dom';
import ls from '../services/localStorage'

function LogOut({ token, setToken }) {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/logout', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        token = '';
        setToken('');
        ls.remove('token');
        ls.remove('login');
        ls.remove('username');
        console.log({ data: data });
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
