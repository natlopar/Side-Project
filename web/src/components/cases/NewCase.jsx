import '../../styles/newCase.scss';
import { useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import HeaderPages from '../shared/HeaderPages';
import BtnList from './BtnList';
import Scroll from '../shared/Scroll';
import PropTypes from "prop-types";
import FormNewCase from './FormNewCase';


function NewCase({ isDark, setIsDark, idVet}) {
  const [publicA, setPublicA] = useState (false)
  const [message, setMessage] = useState("");
  const [hiddenClass, setHiddenClass] = useState('hidden');
  const [animal, setAnimal] = useState({
    name: "",
    specie: "Selecciona una especie",
    breed: "",
    birthday: "",
    clinical: "",
    exploration : "", 
    tests: "", 
    results: "", 
    treatment: "",
    evolution: "", 
    comments: "", 
    public: 0, 
    fk_Vet: idVet,
  });

  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleInput = (ev) => {
    ev.preventDefault();
    const { id, value, checked} = ev.target;
  if (id === 'public') {
      setPublicA(checked);
      setAnimal({ ...animal, [id]: checked ? 1 : 0 });
    } else {
      setAnimal({ ...animal, [id]: checked ? 1 : value });
    }
  };

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
  
  const handleCancel = (ev) => {
    ev.preventDefault();
    setAnimal({});
    navigate("/listUser");
  };

  return (
    <>
    <Scroll/>
      <HeaderPages isDark={isDark} setIsDark={setIsDark} />
      <div className="case">
        <h3 className="case__title"><i className="case__title--icon fa-solid fa-paw"></i>Crea tu caso</h3>
        <FormNewCase handleCancel={handleCancel} handleInput={handleInput} handleSubmit={handleSubmit} animal={animal} publicA={publicA}/>
       
        <p className={`${hiddenClass} user__msg`}>{message}</p>

      </div>
    </>
  );
}

NewCase.propTypes = {
  isDark: PropTypes.bool, 
  setIsDark: PropTypes.func, 
  idVet: PropTypes.any
}
export default NewCase;
