import Header from './Header';
import '../styles/App.scss';
import HeroDesc from './HeroDesc';
import { Routes, Route } from 'react-router';
import SignIn from './SignIn';
import { useNavigate } from 'react-router-dom';

import NewCase from './NewCase';
import ListCases from './ListCases';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
import Login from './Login';
import DetailListUser from './DetailListUser';
import LoginBtn from './LoginBtn';

import apiUser from '../services/api-user';
import Footer from './Footer';

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useState(ls.set('isDark') || preference);
  // const [newUser, setNewUser] = useState({});

  // const [cases, setCases] = useState({});
  const [publicU, setPublicU] = useState(false);
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(ls.get('userData',null));
  const [username, setUsername] = useState(ls.get('username', ''));
  const [idVet, setIdVet] = useState(ls.get('idVet', ''));
  const [message, setMessage] = useState('');
  const [loginBtn, setLoginBtn] = useState('');
  const [publicList, setPublicList] = useState([]);
  const [hiddenClass, setHiddenClass] = useState('hidden');
  const [hiddenClassSign, setHiddenClassSign] = useState('hidden');
  
  const navigate = useNavigate();

  // const login1 = {
  //   nameLogin: '',
  //   password: '',
  //   id: 0,
  // }

  const emptyUser = {
    firstName: '',
    lastName: '',
    hashed_password: '',
    email: '',
    city: '',
    country: '',
    public: false,
  };

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    document.body.className = isDark;
  }, [isDark]);

  const handleLogin = (token, name, id, publicU) => {
    setToken(token);
    localStorage.setItem('token', token);
    setUsername(name);
    localStorage.setItem('username', username);
    setIdVet(id);
  };

  const sendSignUpToApi = (registry) => {
    apiUser.sendSignUpToApi(registry).then((response) => {
      if (response.success === true) {
        setHiddenClassSign('');
        setMessage(
          'Registro realizado correctamente. Ahora puedes iniciar sesión con tu nombre de usuario y contraseña.'
        );
        setUsername(response.nameVet);
        setIdVet(response.id);
        setLoginBtn(<LoginBtn />);
      } else {
        setMessage('No te puedes registrar. Revisa tus datos.');
        setHiddenClassSign('');
      }
    });
  };

  // const logOut = (token) => {
  //   apiUser.sendLogOutToApi(token).then((response)=>{
  //     if (response.success === true) {
  //       setToken('');
  //       ls.remove('token');
  //       ls.remove('idVet');
  //       ls.remove('login');
  //       ls.remove('username');
  //       navigate('/');
  //     } else {
  //       console.log('no se ha podido cerrar sesion')
  //     }
      
  //   })
  // }

  return (
    <div className={`body ${isDark ? 'dark' : 'light'}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isDark={isDark} setIsDark={setIsDark} />
              <HeroDesc token={token} setToken={setToken}   setUsername={setUsername}
              setIdVet = {setIdVet} />
            </>
          }
        />
        <Route
          path="/signIn"
          element={
            <SignIn
              sendSignUpToApi={sendSignUpToApi}
              publicU={publicU}
              setPublicU={setPublicU}
              isDark={isDark}
              setIsDark={setIsDark}
              loginBtn={loginBtn}
              message={message}
              hiddenClass={hiddenClassSign}
            />
          }
        />
        <Route
          path="/logIn"
          element={
            <Login
              handleLogin={handleLogin}
              isDark={isDark}
              setIsDark={setIsDark}
              hiddenClass={hiddenClass}
              setHiddenClass={setHiddenClass}
              setToken={setToken}
            />
          }
        />
        <Route
          path="/listUser"
          element={
            <DetailListUser
              token={token}
              setToken={setToken}
              idVet={idVet}
              username={username}
              isDark={isDark}
              setIsDark={setIsDark}
              setUsername={setUsername}
              setIdVet = {setIdVet}
              userData={userData}
              setUserData={setUserData}
           
            />
          }
        />
        <Route
          path="/newCase"
          element={
            <NewCase
              idVet={idVet}
              publicU={publicU}
              isDark={isDark}
              setIsDark={setIsDark}
            />
          }
        />
        <Route
          path="/publicList"
          element={
            <ListCases
              idVet={idVet}
              publicList={publicList}
              isDark={isDark}
              setIsDark={setIsDark}
              setUsername={setUsername}
              setIdVet = {setIdVet}
         
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
