import { Link, useNavigate } from "react-router-dom";
import ls from '../../services/localStorage';

function MenuNav({token, setToken, setUsername, setIdVet, setList, setPrivateList}) {


  const navigate = useNavigate();
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
          ls.remove('username')
          ls.remove('token');
          ls.remove('idVet');
          ls.remove('login');
          ls.set('userData', null);
          ls.remove('list');
          
          ls.remove('private')
          navigate('/');
         
        });
    } else {
      setUsername('');
      setIdVet('');
      ls.remove('username')
      navigate('/');
      ls.remove('idVet');
      ls.remove('login');
      ls.set('userData', null);
      ls.remove('list');
      ls.remove('private');

    }

  };
  return (
    
    <ul className="header__style--menu"  role="navigation">
    <Link to={"/logIn"} className='link'><li>Inicia Sesión</li></Link> 
    <Link to={"/signIn"} className="link"><li>Regístrate</li></Link> 
    <Link to={"/publicList"} className="link"><li>Casos públicos</li></Link>
    <Link to={"/listUser"} className="link"><li>Mi historial</li></Link>
    <li onClick={handleLogOut}>Cerrar sesión</li>
   </ul>
  )
}

export default MenuNav