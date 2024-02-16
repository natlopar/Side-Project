
import Header from "./Header"
import '../styles/App.scss'
import Hero from "./Hero"
import { Routes, Route } from "react-router"
import CreateUser from "./CreateUser"
import User from "./User"
import Welcome from "./Welcome"
import NewCase from "./NewCase"
import ListCases from "./ListCases";
import { useState } from "react";




function App() {


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


const handleUser =(data)=>{
  setUser(data);
}

const handleLogin =(data)=>{
  setLogin(data);
  setUser(user1);//aqui vincularía el idUsuario con idLogin para cargar sus datos en List.
}


  return (
    <div className= "body light">
    
    <Routes>
      <Route path="/" element={<><Header/> <Hero/></>}/>
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