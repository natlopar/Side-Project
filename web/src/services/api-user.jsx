

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

  // const sendLogOutToApi = (token) => {
  //   fetch('https://vetfolio-manager.onrender.com/logout', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': token,
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then(data => {
  //       console.log(data)
  //       return data;
  //    });
     
  // }

  const objToExport = {
  
    sendSignUpToApi : sendSignUpToApi ,
    // sendLogOutToApi:  sendLogOutToApi
  };
  

  export default objToExport;