
const logInToApi = (login) => {
  return  fetch(
    'https://side-project-vetfolio-manager.vercel.app/login',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login),
    })
    .then((response) =>  response.json())
    .then(data => {
      return data;
   });
}

const sendSignUpToApi = (registry) =>{
    return  fetch("https://side-project-vetfolio-manager.vercel.app/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registry),
    })

    .then((response) =>  response.json())
    .then(data => {
      return data;
   });
  }

  const sendLogOutToApi = (token) => {
    return fetch('https://side-project-vetfolio-manager.vercel.app/logout', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      }
    })
      .then((response) => response.json())
      .then(data => {
        return data;
     });
     
  }

  const objToExport = {
  
    sendSignUpToApi : sendSignUpToApi ,
    sendLogOutToApi:  sendLogOutToApi,
    logInToApi: logInToApi
  };
  

  export default objToExport;