import LoginBtn from "../user/LoginBtn"
import Scroll from "../shared/Scroll"



function NoFilter() {
  return (
    <>
   <Scroll/>
    <div className="sectionList loading">
      <span>
        <i className="fa-solid fa-spinner"></i>
      </span>
      <p>No hay casos registrados con esos criterios de búsqueda</p>
   
    </div>
 
  </>
  )
}

export default NoFilter