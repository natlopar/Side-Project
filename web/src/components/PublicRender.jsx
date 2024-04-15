import { Link } from 'react-router-dom';
import UserCases from './UserCases';

function PublicRender({ listCases, idVet }) {
  return (
    <ul className="sectionList">
      {listCases.patients.map((data) => (
        <li key={data.idCase} className="sectionList__ul">
          <Link to={`/publicCase/${data.idCase}`} className="link">
            <UserCases data={data} idVet={idVet} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PublicRender;
