

const getPublicCases= () => {
  return fetch ("http://localhost:4000/getPublic")
    .then(response => response.json())
    .then(data=>
          data)
}

const objToExport = {
getPublicCases: getPublicCases
};


export default objToExport;