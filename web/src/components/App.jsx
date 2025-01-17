import React, { Suspense } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/App.scss';
import apiUser from '../services/api-user';
import ls from '../services/localStorage';
import Header from './shared/Header';
import HeroDesc from './shared/HeroDesc';
import SignIn from './user/SignIn';
import BtnList from './cases/BtnList';
import NewCase from './cases/NewCase';
import Login from './user/Login';
import LoginBtn from './user/LoginBtn';
import DetailUserCase from './cases/DetailUserCase';
import Footer from './shared/Footer';
import BtnListPublic from './cases/BtnListPublic';
import HeaderPages from './shared/HeaderPages';
import Contact from './shared/Contact';
import UpdateCase from './cases/UpdateCase';
import NotFound from './shared/NotFound';


const DetailListUser = React.lazy(() => import('./cases/DetailListUser'));
const ListCases = React.lazy(() => import('./cases/ListCases'));

function App() {
  const [idVet, setIdVet] = useState(ls.get('idVet', null));
  const dataAnimal = {
    name: '',
    specie: 'Selecciona una especie',
    breed: '',
    gender: 'Selecciona un género',
    birthday: '',
    clinical: '',
    exploration: '',
    tests: '',
    results: '',
    treatment: '',
    evolution: '',
    comments: '',
    public: 0,
    fk_Vet: idVet,
  };
  const [isDark, setIsDark] = useState(ls.get('isDark', true));
  const [publicSign, setPublicSign] = useState(false);
  const [token, setToken] = useState(ls.get('token', ''));
  const [username, setUsername] = useState(ls.get('username', ''));

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

  const [publicAnimal, setPublicAnimal] = useState(false);
  const [messageCase, setMessageCase] = useState('');
  const [hiddenClassCase, setHiddenClassCase] = useState('hidden');
  const [animal, setAnimal] = useState(ls.get('animal', dataAnimal));
  const [updateData, setUpdateData] = useState(dataAnimal);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [smShow, setSmShow] = useState(false);
  const [messageLog, setMessageLog] = useState('');
  const [titleLog, setTitleLog] = useState('');
  const [isLogOut, setIsLogOut] = useState(false);
  const [isLogIn, setIsLogIn] = useState(ls.get('isLogin', false));

  const API_VERCEL = 'https://side-project-vetfolio-manager.vercel.app';
  const API_RENDER = 'https://vetfolio-manager.onrender.com';

  useEffect(() => {
    ls.set('animal', animal);
  }, [animal]);

  const handleCasesOptions = (data) => {
    if (data.key === 'name') {
      setCasesOptionName(data.value);
    } else if (data.key === 'breed') {
      setCasesOptionBreed(data.value);
    } else if (data.key === 'clinical') {
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
    setIdVet(id);
    setIsLogIn(true);
    ls.set('isLogin', true);
  };

  const handleResetMessage = () => {
    setMessageCase('');
    setHiddenClassCase('hidden');
  };

  const resetUpdateData = () => {
    setUpdateData(dataAnimal);
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
        const msg = response.msg;
        (msg === 'Usuario ya registrado' ? setMessage('No se ha podido realizar el registro. Usuario ya registrado.') : setMessage('No se ha podido realizar el registro. Revisa que el email y la contraseña sean correctos.'))
        setHiddenClassSign('');
      }
    });
  };

  const handleContact = () => {
    fetch(`${API_RENDER}/contact`, {
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

 
  return (
    <div className={`body ${isDark ? 'dark' : 'light'}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                isDark={isDark}
                setIsDark={setIsDark}
                token={token}
                setToken={setToken}
                setUsername={setUsername}
                setIdVet={setIdVet}
                setList={setList}
                setPrivateList={setPrivateList}
                smShow={smShow}
                messageLog= {messageLog}
                titleLog= {titleLog}
                isLogOut= {isLogOut} 
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                isLogIn={isLogIn}
                setIsLogIn={setIsLogIn}
              />
              <HeroDesc
                token={token}
                setToken={setToken}
                setUsername={setUsername}
                setIdVet={setIdVet}
                setList={setList}
                setPrivateList={setPrivateList}
                setIsDeleted={setIsDeleted}
                smShow={smShow}
                messageLog= {messageLog}
                titleLog= {titleLog}
                isLogOut= {isLogOut} 
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                setIsLogIn={setIsLogIn}
                isLogIn={isLogIn}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/signIn"
          element={
            <>
              <SignIn
                sendSignUpToApi={sendSignUpToApi}
                publicSign={publicSign}
                setPublicSign={setPublicSign}
                isDark={isDark}
                setIsDark={setIsDark}
                loginBtn={loginBtn}
                message={message}
                hiddenClass={hiddenClassSign}
                setToken={setToken}
                token={token}
                setIdVet={setIdVet}
                setUsername={setUsername}
                setList={setList}
                setPrivateList={setPrivateList}
                smShow={smShow}
                messageLog= {messageLog}
                titleLog= {titleLog}
                isLogOut= {isLogOut} 
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                setMessage={setMessage}
                setHiddenClassSign={setHiddenClassSign}
                isLogIn={isLogIn}
                setIsLogIn={setIsLogIn}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/logIn"
          element={
            <>
              <Login
                handleLogin={handleLogin}
                isDark={isDark}
                setIsDark={setIsDark}
                hiddenClass={hiddenClass}
                setHiddenClass={setHiddenClass}
                setToken={setToken}
                token={token}
                setIdVet={setIdVet}
                setUsername={setUsername}
                setList={setList}
                setPrivateList={setPrivateList}
                smShow={smShow}
                messageLog= {messageLog}
                titleLog= {titleLog}
                isLogOut= {isLogOut} 
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                isLogIn={isLogIn}
                setIsLogIn={setIsLogIn}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/listUser"
          element={
            <Suspense
              fallback={
                isLoading ? (
                  <div className="spinner flex justify-content-center">
                    <ProgressSpinner />
                  </div>
                ) : null
              }
            >
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
                setCasesOptionBreed={setCasesOptionBreed}
                setCasesOptionClinic={setCasesOptionClinic}
                setCasesOptionName={setCasesOptionName}
                setList={setList}
                privateList={privateList}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
                smShow={smShow}
                messageLog= {messageLog}
                titleLog= {titleLog}
                isLogOut= {isLogOut} 
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                setAnimal={setAnimal}
                dataAnimal={dataAnimal}
                isLogIn={isLogIn}
               setIsLogIn={setIsLogIn}
              />
              <Footer />
            </Suspense>
          }
        />

        <Route
          path="/newCase"
          element={
            <>
              <NewCase
                handleResetMessage={handleResetMessage}
                publicSign={publicSign}
                isDark={isDark}
                setIsDark={setIsDark}
                animal={animal}
                setAnimal={setAnimal}
                publicAnimal={publicAnimal}
                setPublicAnimal={setPublicAnimal}
                messageCase={messageCase}
                setMessageCase={setMessageCase}
                hiddenClassCase={hiddenClassCase}
                setHiddenClassCase={setHiddenClassCase}
                dataAnimal={dataAnimal}
                updateData={updateData}
                setUpdateData={setUpdateData}
                resetUpdateData={resetUpdateData}
                setToken={setToken}
                token={token}
                setIdVet={setIdVet}
                setUsername={setUsername}
                setList={setList}
                setPrivateList={setPrivateList}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                smShow={smShow}
            messageLog= {messageLog}
            titleLog= {titleLog}
            isLogOut= {isLogOut} 
            setMessageLog={setMessageLog}
            setTitleLog={setTitleLog}
            setIsLogOut={setIsLogOut}
            setSmShow={setSmShow} 
            isLogIn={isLogIn}
            setIsLogIn={setIsLogIn}
              />
              <Footer />
            </>
          }
        />
      
       <Route
          path="/updateCase/:id"
          element={
            <Suspense fallback={ isLoading ? (
              <div className="spinner flex justify-content-center">
                <ProgressSpinner />
              </div>
            ) : null}>
              <UpdateCase
                dataAnimal={dataAnimal}
                handleResetMessage={handleResetMessage}
                isDark={isDark}
                setIsDark={setIsDark}
                setPublicAnimal={setPublicAnimal}
                publicAnimal={publicAnimal}
                setHiddenClassCase={setHiddenClassCase}
                hiddenClassCase={hiddenClassCase}
                setAnimal={setAnimal}
                animal={animal}
                messageCase={messageCase}
                setMessageCase={setMessageCase}
                privateList={privateList}
                updateData={updateData}
                setUpdateData={setUpdateData}
                resetUpdateData={resetUpdateData}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                idVet={idVet}
                setToken={setToken}
                token={token}
                setIdVet={setIdVet}
                setUsername={setUsername}
                setList={setList}
                setPrivateList={setPrivateList}
                smShow={smShow}
                messageLog={messageLog}
                titleLog={titleLog}
                isLogOut={isLogOut}
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                isLogIn={isLogIn}
                setIsLogIn={setIsLogIn}
              />
              <Footer />
            </Suspense>
          }
        />
        <Route
          path="/publicList"
          element={
            <Suspense fallback={ isLoading ? (
              <div className="spinner flex justify-content-center">
                <ProgressSpinner />
              </div>
            ) : null}>
              <ListCases
                idVet={idVet}
                publicList={publicList}
                setPublicList={setPublicList}
                isDark={isDark}
                setIsDark={setIsDark}
                setUsername={setUsername}
                setIdVet={setIdVet}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                setToken={setToken}
                token={token}
                setList={setList}
                setPrivateList={setPrivateList}
                username={username}
                     smShow={smShow}
                messageLog= {messageLog}
                titleLog= {titleLog}
                isLogOut= {isLogOut} 
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                isLogIn={isLogIn}
                setIsLogIn={setIsLogIn}
                setIsDeleted={setIsDeleted}
            
              />
              <Footer />
            </Suspense>
          }
        />
        <Route
          path="/case/:id"
          element={
            <>
              <section className="user">
                <Header
                  isDark={isDark}
                  setIsDark={setIsDark}
                  token={token}
                  setToken={setToken}
                  setUsername={setUsername}
                  setIdVet={setIdVet}
                  setList={setList}
                  setPrivateList={setPrivateList}
                  smShow={smShow}
                  messageLog= {messageLog}
                  titleLog= {titleLog}
                  isLogOut= {isLogOut} 
                  setMessageLog={setMessageLog}
                  setTitleLog={setTitleLog}
                  setIsLogOut={setIsLogOut}
                  setSmShow={setSmShow}
                  isLogIn={isLogIn}
                  setIsLogIn={setIsLogIn}
               
                />
                <DetailUserCase list={privateList} isLogIn={isLogIn} />
                <BtnList
                  handleResetMessage={handleResetMessage}
                  resetUpdateData={resetUpdateData}
                  setAnimal={setAnimal}
                  dataAnimal={dataAnimal}
                  setUpdateData={setUpdateData}
                />
                <BtnListPublic />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/publicCase/:id"
          element={
            <>
              <section className="user">
                <Header
                  isDark={isDark}
                  setIsDark={setIsDark}
                  token={token}
                  setToken={setToken}
                  setUsername={setUsername}
                  setIdVet={setIdVet}
                  setList={setList}
                  setPrivateList={setPrivateList}
                  smShow={smShow}
                  messageLog= {messageLog}
                  titleLog= {titleLog}
                  isLogOut= {isLogOut} 
                  setMessageLog={setMessageLog}
                  setTitleLog={setTitleLog}
                  setIsLogOut={setIsLogOut}
                  setSmShow={setSmShow}
                  isLogIn={isLogIn}
                  setIsLogIn={setIsLogIn}
                />
                <DetailUserCase list={publicList} idVet={idVet} />
                <BtnList />
                <BtnListPublic />
              </section>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <HeaderPages
                isDark={isDark}
                setIsDark={setIsDark}
                token={token}
                setToken={setToken}
                setUsername={setUsername}
                setIdVet={setIdVet}
                setList={setList}
                setPrivateList={setPrivateList}
                smShow={smShow}
                messageLog= {messageLog}
                titleLog= {titleLog}
                isLogOut= {isLogOut} 
                setMessageLog={setMessageLog}
                setTitleLog={setTitleLog}
                setIsLogOut={setIsLogOut}
                setSmShow={setSmShow}
                isLogIn={isLogIn}
                setIsLogIn={setIsLogIn}
            
              />
              <Contact
                handleContact={handleContact}
                contact={contact}
                setContact={setContact}
                msgContact={msgContact}
              />
              <Footer />
            </>
          }
        />
           <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
