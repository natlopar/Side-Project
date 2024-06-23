
const API_RENDER = 'https://vetfolio-manager.onrender.com';
const API_VERCEL = 'https://side-project-vetfolio-manager.vercel.app';

const getPublicCases= () => {
  return fetch (`${API_RENDER}/getPublic`)
    .then(response => response.json())
    .then(data=>
          data)
}

const getFilterCase = (params, token, idVet) => {
  return fetch(`${API_RENDER}/case?name=${params.name}&breed=${params.breed}&clinical=${params.clinic}`, 
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
      id: idVet,
    },
  })
  .then(response => response.json())
  .then(data => {
     return data;
  });
};

const deleteCase = (idCase) => {
  return fetch(`${API_RENDER}/listUser?id=${idCase}`, 
  {method: 'DELETE'}
)
.then(response => response.json())
.then(data => {
  return data;
})
}


const createCase = (animal) => {
  return fetch(`${API_RENDER}/newCase`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(animal),
  })
    .then(response => response.json())
    .then(data => {
      return data
    } )
};


const updateCase = (updateData, idCase) => {
  return fetch(`${API_RENDER}/updateCase/${idCase}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData)
      })
      .then((response) =>  response.json())
      .then(data => {
      return data
   });
}


const objToExport = {
getPublicCases: getPublicCases,
getFilterCase: getFilterCase, 
updateCase: updateCase,
createCase: createCase, 
deleteCase: deleteCase
};


export default objToExport;