import Header from './Header';
import '../styles/App.scss';
import HeroDesc from './HeroDesc';
import { Routes, Route } from 'react-router';
import SignIn from './SignIn';
import BtnList from './BtnList';
import NewCase from './NewCase';
import ListCases from './ListCases';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
import Login from './Login';
import DetailListUser from './DetailListUser';
import LoginBtn from './LoginBtn';
import DetailUserCase from './DetailUserCase';
import apiUser from '../services/api-user';
import apiCase from '../services/api-case';
import Footer from './Footer';
import BtnListPublic from './BtnListPublic';
import HeaderPages from './HeaderPages';
import Contact from './Contact';
import NoFilter from './NoFilter';

function App() {
  const [isDark, setIsDark] = useState(ls.get('isDark', ''));
  const [publicU, setPublicU] = useState(false);
  const [token, setToken] = useState(ls.get('token',''));
  const [username, setUsername] = useState(ls.get('username', ''));
  const [idVet, setIdVet] = useState(ls.get('idVet', 0));
  const [message, setMessage] = useState('');
  const [loginBtn, setLoginBtn] = useState('');
  const [publicList, setPublicList] = useState(ls.get('list', []));
  const [hiddenClass, setHiddenClass] = useState('hidden');
  const [hiddenClassSign, setHiddenClassSign] = useState('hidden');
  const [privateList, setPrivateList] = useState([]);
  const [casesOptionName, setCasesOptionName] = useState('');
  const [casesOptionBreed, setCasesOptionBreed] = useState('');
  const [casesOptionClinic, setCasesOptionClinic] = useState('');
  const [contact, setContact] = useState({ name: '', comments: '' });
  const [msgContact, setmsgContact] = useState('');
  const [list, setList] = useState(null);


  // const emptyUser = {
  //   firstName: '',
  //   lastName: '',
  //   hashed_password: '',
  //   email: '',
  //   city: '',
  //   country: '',
  //   public: false,
  // };

  useEffect(() => {
    const params = {
      name: casesOptionName,
      breed: casesOptionBreed,
      clinic: casesOptionClinic
    };
    apiCase.getFilterCase(params, token, idVet).then(data => {
        if (data.success){
          setList(data.patients);
        } else {
          console.error('Error al obtener los datos. Comprueba que tu conexión es correcta.');
        }
      })

  }, [casesOptionName, casesOptionBreed, casesOptionClinic]);
  
  const handleCasesOptions = data => {
    if (data.key === 'name'){
      setCasesOptionName(data.value);
    } else if (data.key === 'breed') {
      setCasesOptionBreed(data.value);
    } else if (data.key === 'clinical'){
      setCasesOptionClinic(data.value);
    }
  };


  useEffect(() => {
    ls.set('isDark', isDark);
    document.body.className = isDark;
  }, [isDark]);

  const handleLogin = (token, name, id) => {
    setToken(token);
    ls.set('token', token);
    setUsername(name);
    ls.set('username', username);
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

  const handleContact = () => {
    fetch('https://vetfolio-manager.onrender.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setmsgContact('Comentario enviado');
          return data;
        } else {
          setmsgContact('No se ha podido enviar el comentario');
          return data;
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
              <HeroDesc
                token={token}
                setToken={setToken}
                setUsername={setUsername}
                setIdVet={setIdVet}
              />
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
              setIdVet={setIdVet}
              setPrivateList={setPrivateList}
              handleCasesOptions={handleCasesOptions}
              casesOptionName={casesOptionName}
              casesOptionBreed={casesOptionBreed}
              casesOptionClinic={casesOptionClinic}
              list={list}
              setList={setList}
              privateList={privateList}
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
              setPublicList={setPublicList}
              isDark={isDark}
              setIsDark={setIsDark}
              setUsername={setUsername}
              setIdVet={setIdVet}
            />
          }
        />
        <Route
          path="/case/:id"
          element={
            <>
              <section className="user">
                <Header isDark={isDark} setIsDark={setIsDark} />
                <DetailUserCase list={privateList} />
                <BtnList />
              </section>
            </>
          }
        />
        <Route
          path="/publicCase/:id"
          element={
            <>
              <section className="user">
                <Header isDark={isDark} setIsDark={setIsDark} />
                <DetailUserCase list={publicList} idVet={idVet} />
                <BtnListPublic />
              </section>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <HeaderPages isDark={isDark} setIsDark={setIsDark} />
              <Contact
                handleContact={handleContact}
                contact={contact}
                setContact={setContact}
                msgContact={msgContact}
              />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
