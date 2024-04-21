import UserCases from './UserCases';

import { Carousel } from 'primereact/carousel';
        

function PublicRender({ listCases, idVet }) {
  return (
    <ul className="sectionList">
      {listCases.patients.map((data) => (
        <li key={data.idCase} className="sectionList__ul">
            <UserCases data={data} idVet={idVet} listCases={listCases}/>
        </li>
      ))}
    </ul>
  );
}

export default PublicRender;
