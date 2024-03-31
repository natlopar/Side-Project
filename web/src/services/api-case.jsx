

const getPublicCases= () => {
  return fetch ("https://vetfolio-manager.onrender.com/getPublic")
    .then(response => response.json())
    .then(data=>
          data)
}

const getFilterCase = (params) => {
  return fetch(`http://localhost:4000/case?name=${params.name}&breed=${params.breed}&clinical=${params.clinical}`)
  .then(response => response.json())
  .then(data => {
     return data;
  });
};

const getPrivateCases = ({token, idVet}) => {
 return fetch(`https://vetfolio-manager.onrender.com/listUser`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
          id: idVet,
        },
      }
    )
    .then (response => response.json())
    .then(data => {
      return data;
    })
   
};




const objToExport = {
getPrivateCases: getPrivateCases,
getPublicCases: getPublicCases,
getFilterCase: getFilterCase
};


export default objToExport;