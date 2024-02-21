
import Header from "./Header"
import '../styles/App.scss'
import Hero from "./Hero"
import { Routes, Route } from "react-router"
import CreateUser from "./CreateUser"
import User from "./User"
import Welcome from "./Welcome"
import NewCase from "./NewCase"
import ListCases from "./ListCases";
import { useState, useEffect } from "react";
import NewCase2 from "./NewCase2"
// import ls from '../services/localStorage'




function App() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState( localStorage.getItem('isDark') || preference);
  // const [theme, setTheme] = useState(
  //   localStorage.getItem('theme') || 'light'
  // );
  // const [toDark, setToDark] = useState( localStorage.getItem('toDark') || 'hidden')
  
  const [user, setUser] = useState({});
  const [login, setLogin] = useState({});
  const [case, setCase] = useState ({});
  
  const login1 = {
    nameLogin: '',
    password: '',
    id: 0,
  }

  const user1 = {
    idUser: 0, 
    firstName: 'Anacleta', 
    lastName: 'Ariel', 
    city: 'Paraná', 
    country: 'Argentina', 
    public: false,
  }

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    document.body.className = isDark;
  }, [isDark]);


const handleUser =(data)=>{
  setUser(data);
}

const handleLogin =(data)=>{
  setLogin(data);
  setUser(user1);//aqui vincularía el idUsuario con idLogin para cargar sus datos en List.
}

const handleCase =(data)=>{
  setCase(data);
}


  return (
    <div className={`body ${isDark ? "dark" : "light"}`}>
    
    <Routes>
      <Route path="/" element={<><Header 
      isDark={isDark} setIsDark={setIsDark} /> <Hero/></>}/>
      <Route path="/newUser" element={<CreateUser handleUser={handleUser} isDark={isDark} setIsDark={setIsDark}/>}/>
      <Route path="/user" element={<User handleLogin={handleLogin} isDark={isDark} setIsDark={setIsDark}/>}/>
      <Route path="/welcomeList" element={<Welcome user={user} isDark={isDark} setIsDark={setIsDark} />}/>
      <Route path="/newCase" element={<NewCase handleCase={handleCase} isDark={isDark} setIsDark={setIsDark}/>} />
      <Route path="/newCase2" element={<NewCase2 handleCase={handleCase} isDark={isDark} setIsDark={setIsDark}/>} />
      <Route path="/list" element={<ListCases user={user} isDark={isDark} setIsDark={setIsDark}/>}/>
    </Routes>
    </div>
  )
}

export default App