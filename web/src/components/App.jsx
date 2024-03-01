
import Header from "./Header"
import '../styles/App.scss'
import HeroDesc from "./HeroDesc"
import { Routes, Route } from "react-router"
import SignIn from "./SignIn"

import NewCase from "./NewCase"
import ListCases from "./ListCases";
import { useState, useEffect } from "react";
import ls from '../services/localStorage'
import Login from "./Login"
import DetailListUser from "./DetailListUser"
import LoginBtn from './LoginBtn'



import apiUser from '../services/api-user';
import Footer from "./Footer"






function App() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(ls.set('isDark') || preference);
// const [newUser, setNewUser] = useState({});

  // const [cases, setCases] = useState({});
  const [publicU, setPublicU] = useState (false)
  const [token, setToken] = useState ('');
  
  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState('');
  const [idVet, setIdVet] = useState(0);
  const [message, setMessage] = useState("");
  const [loginBtn, setLoginBtn] = useState ("");
  const [publicList, setPublicList] = useState ([]);
  const [hiddenClass, setHiddenClass] = useState('hidden');



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
  }

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    document.body.className = isDark;
  }, [isDark]);

  const handleLogin = (token, name, id, publicU) => {
    setToken(token);
    localStorage.setItem("token", token);
    setUsername(name);
    localStorage.setItem("username", username);
    setIdVet(id);
  };

const sendSignUpToApi =(registry) => {
  apiUser.sendSignUpToApi(registry)
  .then (response =>{
    if (response.success === true) {
      setHiddenClass('');
      setMessage("Registro realizado correctamente. Ahora puedes iniciar sesión con tu nombre de usuario y contraseña.")
      setUsername(response.nameVet);
      setIdVet(response.id);
      setLoginBtn(<LoginBtn/>);

      // router.redirect('/');
    }else {
      setMessage("No te puedes registrar. Revisa tus datos.");
      setHiddenClass('');
    }
 
  })
  
}

  return (
    <div className={`body ${isDark ? 'dark' : 'light'}`}>
    
    <Routes>
      <Route path="/" element={
      <> 
      <Header isDark={isDark} setIsDark={setIsDark} /> 
      <HeroDesc token={token} setToken={setToken}/>
      
       </>}/>
      <Route path="/signIn" element={<SignIn sendSignUpToApi= {sendSignUpToApi} publicU={publicU} setPublicU={setPublicU} isDark={isDark} setIsDark={setIsDark} loginBtn={loginBtn} message={message} hiddenClass={hiddenClass}/>}/>
      <Route path="/logIn" element={<Login handleLogin={handleLogin} isDark={isDark} setIsDark={setIsDark} />}/>
      <Route path="/listUser" 
      element={ 
    
      <DetailListUser token={token} setToken={setToken} idVet={idVet} username={username} isDark={isDark} setIsDark={setIsDark}/>
    }/>
      <Route path="/newCase" element={<NewCase idVet={idVet} publicU={publicU} isDark={isDark} setIsDark={setIsDark} />}  />
      <Route path="/publicList" element={<ListCases idVet={idVet} publicList={publicList}  isDark={isDark} setIsDark={setIsDark}/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App