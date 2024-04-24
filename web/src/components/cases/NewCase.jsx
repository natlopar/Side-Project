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
import { ProgressSpinner } from 'primereact/progressspinner';

function NewCase({
  username,
  isDark, 
  setIsDark, 
  idVet, 
  token, 
  setToken,  
  setUsername, 
  setIdVet,
setPublicList, setIsLoading, isLoading, setList,setPrivateList,

 
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
    setIsLoading(true)
    await apiCase.createCase(animal).then(data => {
        if (data.success) {
          setIsLoading(false)
          setMessageCase('Caso añadido correctamente a tu historial.');
          setHiddenClassCase('');
          // setIdCase(idCase);
        } else {
          setIsLoading(false)
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
      <HeaderPages  username={username}  isDark={isDark} setIsDark={setIsDark}   token={token} setToken={setToken} setUsername={setUsername} setIdVet={setIdVet} setList={setList} setPrivateList={setPrivateList} />
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
      {isLoading ? (
        <div className="spinner flex justify-content-center">
          <ProgressSpinner />{' '}
        </div>
      ) : null}
    </>
  );
}

NewCase.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  idVet: PropTypes.any,
};
export default NewCase;
