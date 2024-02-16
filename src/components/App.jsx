
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

const handleUser =(value)=>{
  setUser(value);
}

  return (
    <div className= "body light">
    
    <Routes>
      <Route path="/" element={<><Header/> <Hero/></>}/>
      <Route path="/newUser" element={<CreateUser handleUser={handleUser}/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/welcomeList" element={<Welcome/>}/>
      <Route path="/newCase" element={<NewCase/>}/>
      <Route path="/list" element={<ListCases/>}/>
    </Routes>
    </div>
  )
}

export default App