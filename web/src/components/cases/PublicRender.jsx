import UserCases from './UserCases';

function PublicRender({ listCases, idVet }) {
  return (
    <ul className="sectionList">
      {listCases.patients.map((data) => (
        <li key={data.idCase} className="sectionList__ul">
          
            <UserCases data={data} idVet={idVet} />
   
        </li>
      ))}
    </ul>
  );
}

export default PublicRender;
