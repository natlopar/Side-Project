import { useNavigate, useParams } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import apiCase from '../../services/api-case';
import '../../styles/newCase.scss';
import ls from '../../services/localStorage';
import HeaderPages from '../shared/HeaderPages';
import Scroll from '../shared/Scroll';
import FormNewCase from './FormNewCase';
import BtnUpdateCase from './BtnUpdateCase';
import { useEffect } from 'react';
import BtnList from './BtnList';
import BtnCancelForm from './BtnCancelForm';

function UpdateCase({
  isDark,
  setIsDark,
  dataAnimal,
  updateData,
  setUpdateData,
  handleResetMessage,
  setPublicAnimal,
  publicAnimal,
  setHiddenClassCase,
  hiddenClassCase,
  setAnimal,
  messageCase,
  setMessageCase,
  privateList,
  resetUpdateData,
  setIsLoading, isLoading
}) {

  const navigate = useNavigate();
  const { id } = useParams();
  const idCase = parseInt(id);
  const animalData = privateList.find((one) => one.idCase === parseInt(id));
  useEffect(() => {
    ls.set('animal', animalData);
  }, [animalData]);

  const handleSubmitUpdate = async () => {
    setIsLoading(true)
    await apiCase.updateCase(updateData, idCase).then((data) => {
     
      if (data.success) {
        setIsLoading(false)
        setMessageCase('El caso ha sido modificado correctamente.');
        setHiddenClassCase('');
      } else {
        setIsLoading(false)
        setMessageCase('Error al modificar tu caso. Ha habido un problema con el servidor, inténtalo más tarde por favor.');
        setHiddenClassCase('');
      }
    });
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
          <i className="case__title--icon fa-solid fa-paw"></i> Modifica tu caso
        </h3>

        <FormNewCase
          setPublicAnimal={setPublicAnimal}
          setAnimal={setAnimal}
          idCase={idCase}
          dataAnimal={dataAnimal}
          // handleSubmit={handleSubmit}
          animal={animalData}
          publicAnimal={publicAnimal}
          handleResetMessage={handleResetMessage}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />

        <BtnUpdateCase handleSubmitUpdate={handleSubmitUpdate} />
        <BtnCancelForm handleCancel={handleCancel}/>
        <BtnList handleResetMessage= {handleResetMessage} resetUpdateData={resetUpdateData} setAnimal={setAnimal} dataAnimal={dataAnimal} setUpdateData={setUpdateData}/>
        <p className={`${hiddenClassCase} user__msg`}>{messageCase}</p>
      </div>
      {isLoading? (<div className="spinner flex justify-content-center">
            <ProgressSpinner /> </div>) : null}
    </>
  );
}

export default UpdateCase;
