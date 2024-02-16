
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
// import ls from '../services/localStorage'




function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  
  const [user, setUser] = useState({});
  const [login, setLogin] = useState({});
  
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
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
const handleUser =(data)=>{
  setUser(data);
}

const handleLogin =(data)=>{
  setLogin(data);
  setUser(user1);//aqui vincularía el idUsuario con idLogin para cargar sus datos en List.
}
const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

  return (
    <div className={`body ${theme}`}>
    
    <Routes>
      <Route path="/" element={<><Header toggleTheme={toggleTheme} /> <Hero/></>}/>
      <Route path="/newUser" element={<CreateUser handleUser={handleUser}/>}/>
      <Route path="/user" element={<User handleLogin={handleLogin}/>}/>
      <Route path="/welcomeList" element={<Welcome user={user}/>}/>
      <Route path="/newCase" element={<NewCase/>}/>
      <Route path="/list" element={<ListCases user={user}/>}/>
    </Routes>
    </div>
  )
}

export default App