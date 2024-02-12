
import Header from "./Header"
import '../styles/App.scss'
import Hero from "./Hero"
import { Routes, Route } from "react-router"
import CreateUser from "./CreateUser"
import User from "./User"




function App() {
  return (
    <div className= "body light">
      <Header/>
    
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/newUser" element={<CreateUser/>}/>
      <Route path="/user" element={<User/>}/>
    </Routes>
    </div>
  )
}

export default App