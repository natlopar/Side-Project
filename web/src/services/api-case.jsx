

const getPublicCases= () => {
  return fetch ("https://vetfolio-manager.onrender.com/getPublic")
    .then(response => response.json())
    .then(data=>
          data)
}

const getFilterCase = (params) => {
  return fetch(`http://vetfolio-manager.onrender.com/case?name=${params.name}&breed=${params.breed}&clinical=${params.clinic}`, {
    method: 'GET',    
    withCredentials: true,    
    crossorigin: true,    
    mode: 'no-cors',  

  }
  )
  .then(response => response.json())
  .then(data => {
     return data;
  });
};


const objToExport = {
getPublicCases: getPublicCases,
getFilterCase: getFilterCase
};


export default objToExport;