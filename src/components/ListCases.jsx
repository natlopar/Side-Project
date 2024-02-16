import CreateCase from "./CreateCase";
import HeaderPages from "./HeaderPages";
import TitleWelcome from "./TitleWelcome";


function ListCases({user}) {
  return (
    <>
    <HeaderPages/> 
    <div className="user">
    <TitleWelcome user={user}/>
    <h4 className="user__message">
    Este es tu historial de casos
  </h4>
  <section className="section">
  <ul className="list">
    <li className="list__pet selected">
        <h5 className="list__pet--title ">Mafalda</h5>
        <p>Bulldog francés</p>
        <p>Pancreatitis</p>
    </li>
    <li className="list__pet">
        <h5 className="list__pet--title">Raya</h5>
        <p>Común</p>
        <p>Pielonefritis</p>
    </li>
    <li className="list__pet">
        <h5 className="list__pet--title">Puchino</h5>
        <p>Común</p>
        <p>Linfoma</p>
    </li>
    <li className="list__pet">
        <h5 className="list__pet--title">Negu</h5>
        <p>Cane Corso</p>
        <p>Cuerpo extraño intestinal</p>
    </li>

  </ul>
  </section>
  </div>
  <CreateCase/>

  </>

  )
}

export default ListCases