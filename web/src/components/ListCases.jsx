
import '../styles/list.scss';
import Welcome from './Welcome';
import UserCases from './UserCases';
import { useEffect, useState } from 'react';
import apiCase from '../services/api-case';
import ls from '../services/localStorage'


function ListCases({ isDark, setIsDark, idVet }) {
  
  // const [userData, setUserData] = useState(null);
  const [listCases, setListCases] = useState({ patients: [] });

  useEffect(() => {
    apiCase.getPublicCases()
    .then(data => {
      if (data.success) {
        setListCases(data); 
      } else {
        console.error('Error al obtener los datos del usuario');
      }
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
  //   .then (response => {
  // return response.json()})
  //   .then (data => {
  //     console.log(data)
  //     if (data.success) {
  //      return setListCases(data);
  //     } else {
  //       return console.error('Error al obtener los datos del usuario');
  //     }
  //   })
     

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:4000/getPublic')
    //     const data = await response.json();
    //     if (data.success) {
    //       setListCases(data);
    //       console.log(data);
    //     } else {
    //       console.error('Error al obtener los datos del usuario');
    //     }
    //   } catch (error) {
    //     console.error('Error al obtener los datos del usuario:', error);
    //   }
    // };
    // fetchData();
  }, []);

  
  return (
    <>
      <Welcome isDark={isDark} setIsDark={setIsDark} />
      <h2 className="sectionList__title">
        Consulta los casos publicados por otr@s veterinari@s
      </h2>
      <section className="sectionList">
        {listCases.patients.map((data, i) => (
          <ul key={i} className="sectionList__ul">
            <UserCases data={data} idVet={idVet}/>
          </ul>
        ))}
      </section>
    </>
  );
}

export default ListCases;
