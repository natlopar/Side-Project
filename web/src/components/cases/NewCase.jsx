import '../../styles/newCase.scss';
import apiCase from '../../services/api-case';
import HeaderPages from '../shared/HeaderPages';
import Scroll from '../shared/Scroll';
import PropTypes from 'prop-types';
import FormNewCase from './FormNewCase';
import BtnCreateNewCase from './BtnCreateNewCase';
import BtnList from './BtnList';
import BtnCancelForm from './BtnCancelForm';
import { useNavigate } from 'react-router-dom';

function NewCase({
  isDark,
  setIsDark,
  animal,
  setAnimal,
  publicAnimal,
  setPublicAnimal,
  messageCase,
  setMessageCase,
  hiddenClassCase,
  setHiddenClassCase, 
  setIdCase, 
  dataAnimal, 
  handleResetMessage, updateData, setUpdateData, resetUpdateData
}) {
    
  const navigate = useNavigate();
  const handleSubmitNew = async () => {
    await apiCase.createCase(animal).then(data => {
        if (data.success) {
          // const idCase = data.caseName.insertId;
          setMessageCase('Caso añadido correctamente a tu historial.');
          setHiddenClassCase('');
          // setIdCase(idCase);
        } else {
          setMessageCase(
            'No se pudo añadir tu caso. Revisa que todos los campos estén completos'
          );
          setHiddenClassCase('');
        }
      });
      await setAnimal(animal);
  };

 
  const handleCancel = (ev) => {
    ev.preventDefault();
    setAnimal(dataAnimal);
    setUpdateData(dataAnimal)
    navigate('/listUser');
  };


  return (
    <>
      <Scroll />
      <HeaderPages isDark={isDark} setIsDark={setIsDark} />
      <div className="case">
        <h3 className="case__title">
          <i className="case__title--icon fa-solid fa-paw"></i>  Crea tu caso
        </h3>
        <FormNewCase
          setPublicAnimal={setPublicAnimal}
          setAnimal={setAnimal}
          handleSubmitNew={handleSubmitNew}
          animal={animal}
          publicAnimal={publicAnimal}
          handleResetMessage= {handleResetMessage}
          dataAnimal={dataAnimal}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
        <BtnCreateNewCase handleSubmitNew={handleSubmitNew}/>
        <BtnCancelForm handleCancel={handleCancel}/>
        <BtnList handleResetMessage= {handleResetMessage} resetUpdateData={resetUpdateData} setAnimal={setAnimal} dataAnimal={dataAnimal} setUpdateData={setUpdateData}/>

        <p className={`${hiddenClassCase} user__msg`}>{messageCase}</p>
      </div>
    </>
  );
}

NewCase.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  idVet: PropTypes.any,
};
export default NewCase;
