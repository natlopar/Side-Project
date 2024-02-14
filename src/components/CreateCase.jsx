import { Link } from "react-router-dom";

function CreateCase() {
  return (
    <div className="user">
      <h4 className="user__message">Crea aquí tu caso</h4>
      <Link to={'/newCase'}>
        <button>Comenzar</button>
      </Link>
    </div>
  );
}

export default CreateCase;
