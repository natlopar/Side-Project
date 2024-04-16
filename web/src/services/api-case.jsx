

const getPublicCases= () => {
  return fetch ("https://side-project-vetfolio-manager.vercel.app/getPublic")
    .then(response => response.json())
    .then(data=>
          data)
}

const getFilterCase = (params, token, idVet) => {
  return fetch(`https://side-project-vetfolio-manager.vercel.app/case?name=${params.name}&breed=${params.breed}&clinical=${params.clinic}`, 
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

const createCase = (animal) => {
  return fetch('https://side-project-vetfolio-manager.vercel.app/newCase', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(animal),
  })
    .then(response => response.json())
    .then(data => {
      return data
    } )
};


const updateCase = (updatedAnimal, idCase) => {
  return  fetch(`https://side-project-vetfolio-manager.vercel.app/updateCase?idCase=${idCase}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedAnimal)
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
createCase: createCase
};


export default objToExport;