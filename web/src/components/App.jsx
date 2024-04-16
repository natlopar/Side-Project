import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import '../styles/App.scss';
import apiUser from '../services/api-user';
import ls from '../services/localStorage';
import Header from './shared/Header';
import HeroDesc from './shared/HeroDesc';
import SignIn from './user/SignIn';
import BtnList from './cases/BtnList';
import NewCase from './cases/NewCase';
import ListCases from './cases/ListCases';
import Login from './user/Login';
import DetailListUser from './cases/DetailListUser';
import LoginBtn from './user/LoginBtn';
import DetailUserCase from './cases/DetailUserCase';
import Footer from './shared/Footer';
import BtnListPublic from './cases/BtnListPublic';
import HeaderPages from './shared/HeaderPages';
import Contact from './shared/Contact';
import UpdateCase from './cases/UpdateCase'


function App() {
  const [isDark, setIsDark] = useState(ls.get('isDark', true));
  const [publicSign, setPublicSign] = useState(false);
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
  
  const [idCase, setIdCase] = useState(null);
  const [publicAnimal, setPublicAnimal] = useState (false)
  const [messageCase, setMessageCase] = useState("");
  const [hiddenClassCase, setHiddenClassCase] = useState('hidden');
  const [animal, setAnimal] = useState({
    name: "",
    specie: "Selecciona una especie",
    breed: "",
    birthday: "",
    clinical: "",
    exploration : "", 
    tests: "", 
    results: "", 
    treatment: "",
    evolution: "", 
    comments: "", 
    public: 0, 
    fk_Vet: idVet,
  });

  
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
      if (response.success) {
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
    fetch('https://side-project-vetfolio-manager.vercel.app/contact', {
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
                setList={setList}
                setPrivateList={setPrivateList}
              />
            </>
          }
        />
        <Route
          path="/signIn"
          element={
            <SignIn
              sendSignUpToApi={sendSignUpToApi}
              publicSign={publicSign}
              setPublicSign={setPublicSign}
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
              setList={setList}
              privateList={privateList}
            />
          }
        />
        <Route
          path="/newCase"
          element={
            <NewCase
              publicSign={publicSign}
              isDark={isDark}
              setIsDark={setIsDark}
              animal = {animal}
              setAnimal = {setAnimal}
              publicAnimal = {publicAnimal}
              setPublicAnimal = { setPublicAnimal }
              messageCase = {messageCase}
              setMessageCase = {setMessageCase}
              hiddenClassCase = { hiddenClassCase}
              setHiddenClassCase = {setHiddenClassCase}
              setIdCase={setIdCase}
            />
          }
        />
        <Route path='/updateCase' element= { <UpdateCase />}/>
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
