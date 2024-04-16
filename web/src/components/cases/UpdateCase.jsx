import '../../styles/newCase.scss';


function UpdateCase() {

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    fetch("https://vetfolio-manager.onrender.com/newcase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(animal),
    })

    .then((response) =>  response.json())
    .then((data)=>{
      if (data.success) {
        setMessage(
          "Caso añadido correctamente a tu historial."
        );
        setHiddenClass('');
     
      } else {
        setMessage("No se pudo añadir tu caso. Revisa que todos los campos estén completos");
        setHiddenClass('');
      }
    })
   
  };
  
  return (
    <div>UpdateCase</div>
  )
}

export default UpdateCase