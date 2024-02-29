

const sendSignUpToApi = (registry) =>{
    return  fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registry),
    })

    .then((response) =>  response.json())
    .then(data => {
      return data;
   });
  }

  const objToExport = {
    // sendLoginToApi: sendLoginToApi,
    sendSignUpToApi : sendSignUpToApi ,
    // sendProfileToApi: sendProfileToApi,
    // getProfileFromApi: getProfileFromApi,
    // getUserMoviesFromApi: getUserMoviesFromApi
  };
  

  export default objToExport;