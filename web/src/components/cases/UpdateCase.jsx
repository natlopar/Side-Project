import { useParams } from 'react-router-dom';
import '../../styles/newCase.scss';
import ls from '../../services/localStorage';
import HeaderPages from '../shared/HeaderPages';
import Scroll from '../shared/Scroll';
import FormNewCase from './FormNewCase';
import BtnUpdateCase from './BtnUpdateCase';
import { useEffect } from 'react';


function UpdateCase({isDark, setIsDark, handleResetMessage, setPublicAnimal, publicAnimal,setHiddenClassCase, hiddenClassCase, setAnimal, messageCase, setMessageCase , privateList }) {


  const { id } = useParams();
  const idCase = parseInt(id);
  const animalData = privateList.find((one) => one.idCase === parseInt(id));
  useEffect (() => {
    ls.set('animal', animalData);
  }, [animalData])

  const handleSubmitUpdate = async () => {
    
    fetch(`https://side-project-vetfolio-manager.vercel.app/updateCase?idCase=${idCase}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(animal)
    })
    .then((response) =>  response.json())
    .then(data => {
      return data
   });
  }
    // fetch("https://vetfolio-manager.onrender.com/newcase", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(animal),
    // })

    // .then((response) =>  response.json())
    // .then((data)=>{
    //   if (data.success) {
    //     setMessageCase(
    //       "Caso añadido correctamente a tu historial."
    //     );
    //     setHiddenClassCase('');
     
    //   } else {
    //     setMessageCase("No se pudo añadir tu caso. Revisa que todos los campos estén completos");
    //     setHiddenClassCase('');
    //   }
    // })
   
  // };
  
  return (
    <>
    <Scroll/>
      <HeaderPages isDark={isDark} setIsDark={setIsDark} />
      <div className="case">
        <h3 className="case__title"><i className="case__title--icon fa-solid fa-paw"></i>  Modifica tu caso</h3>
        
        <FormNewCase    
          setPublicAnimal={setPublicAnimal}
          setAnimal={setAnimal}
          idCase = {idCase}
          // handleSubmit={handleSubmit}
          animal={animalData}
          publicAnimal={publicAnimal}
          handleResetMessage={handleResetMessage}/>
          <BtnUpdateCase handleSubmitUpdate={handleSubmitUpdate}/>
       
        <p className={`${hiddenClassCase} user__msg`}>{messageCase}</p>
      </div>
    </>
  )
}

export default UpdateCase