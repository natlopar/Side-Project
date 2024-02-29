

const getPublicCases= () => {
  return fetch ("https://vetfolio-manager.onrender.com/getPublic")
    .then(response => response.json())
    .then(data=>
          data)
}

const objToExport = {
getPublicCases: getPublicCases
};


export default objToExport;