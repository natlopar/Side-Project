import '../../styles/newCase.scss';
import HeaderPages from '../shared/HeaderPages';
import Scroll from '../shared/Scroll';
import FormNewCase from './FormNewCase';


function UpdateCase({isDark, setIsDark, setPublicAnimal, publicAnimal,setHiddenClassCase, hiddenClassCase, setAnimal, animal, messageCase, setMessageCase }) {

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
        setMessageCase(
          "Caso añadido correctamente a tu historial."
        );
        setHiddenClassCase('');
     
      } else {
        setMessageCase("No se pudo añadir tu caso. Revisa que todos los campos estén completos");
        setHiddenClassCase('');
      }
    })
   
  };
  
  return (
    <>
    <Scroll/>
      <HeaderPages isDark={isDark} setIsDark={setIsDark} />
      <div className="case">
        <h3 className="case__title"><i className="case__title--icon fa-solid fa-paw"></i>Crea tu caso</h3>
        <FormNewCase    
          setPublicAnimal={setPublicAnimal}
          setAnimal={setAnimal}
          handleSubmit={handleSubmit}
          animal={animal}
          publicAnimal={publicAnimal}/>
       
        <p className={`${hiddenClassCase} user__msg`}>{messageCase}</p>

      </div>
    </>
  )
}

export default UpdateCase