import '../../styles/createCase.scss'
import { Link } from "react-router-dom";

function CreateCase() {
  return (
    <div className="create">
      <h4 className="create__title">Crea aquí tu caso</h4>
      <i className="fa-solid fa-file-medical create__icon"></i>
      <Link to={'/newCase'} className="link">
        <button className="create__btn btn hover" aria-label='Comenzar'>Comenzar</button>
      </Link>
    </div>
  );
}

export default CreateCase;
