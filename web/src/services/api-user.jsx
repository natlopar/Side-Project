
const API_RENDER = 'https://vetfolio-manager.onrender.com';
const API_VERCEL = 'https://side-project-vetfolio-manager.vercel.app';


const logInToApi = (login) => {
  return  fetch(
    `${API_RENDER}/login`,
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
    return  fetch(`${API_RENDER}/signin`, {
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
    return fetch(`${API_RENDER}/logout`, {
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