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
import BtnListPublic from './BtnListPublic';
import DetailListUser from './DetailListUser';
import ErrorPage from '../shared/ErrorPage';


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
  setIsLoading,
  isLoading,
  idVet,
  animal,
  token,
  setToken,

  username,

  setUsername,
  setIdVet,
  setPrivateList,
  handleCasesOptions,
  casesOptionName,
  casesOptionBreed,
  casesOptionClinic,
  setCasesOptionBreed,
  setCasesOptionClinic,
  setCasesOptionName,
  setList,

  isDeleted,
  setIsDeleted,
  smShow, 
  messageLog, 
  titleLog, 
  isLogOut, 
  setMessageLog, 
  setTitleLog, 
  setIsLogOut, 
  setSmShow, 
  isLogIn,
  setIsLogIn
}) {
  const navigate = useNavigate();

  const { id } = useParams();
  const idCase = parseInt(id);
  const animalData = privateList.find((one) => one.idCase === parseInt(id));
 
  useEffect(() => {
    ls.set('animal', animalData);
  }, [animalData]);

  const handleSubmitUpdate = async () => {
    setIsLoading(true);
    await apiCase.updateCase(updateData, idCase).then((data) => {
      if (data.success) {
        setIsLoading(false);
        setMessageCase('El caso ha sido modificado correctamente.');
        setHiddenClassCase('');
      } else {
        setIsLoading(false);
        setMessageCase(
          'Error al modificar tu caso. Ha habido un problema con el servidor, inténtalo más tarde por favor.'
        );
        setHiddenClassCase('');
      }
    });
  };

  const handleCancel = (ev) => {
    ev.preventDefault();
    setAnimal(dataAnimal);
    setUpdateData(dataAnimal);
    navigate('/listUser');
  };

  return (
    <>
      <Scroll />
      <HeaderPages   isLogIn={isLogIn} setIsLogin={setIsLogIn}   smShow={smShow}
        messageLog={messageLog}
        titleLog={titleLog}
        isLogOut={isLogOut}
        setMessageLog={setMessageLog}
        setTitleLog={setTitleLog}
        setIsLogOut={setIsLogOut}
        setSmShow={setSmShow}  username={username}  isDark={isDark} setIsDark={setIsDark}   token={token} setToken={setToken} setUsername={setUsername} setIdVet={setIdVet} setList={setList} setPrivateList={setPrivateList} />
  
      {animalData ? (
        <div className="case">
          <h3 className="case__title">
            <i className="case__title--icon fa-solid fa-paw"></i> Modifica tu caso
          </h3>
          <FormNewCase
            setPublicAnimal={setPublicAnimal}
            setAnimal={setAnimal}
            idCase={idCase}
            dataAnimal={dataAnimal}
            animal={animalData}
            publicAnimal={publicAnimal}
            handleResetMessage={handleResetMessage}
            updateData={updateData}
            setUpdateData={setUpdateData}
          />
          <BtnUpdateCase handleSubmitUpdate={handleSubmitUpdate} />
          <BtnCancelForm handleCancel={handleCancel} />
          <BtnList
            handleResetMessage={handleResetMessage}
            resetUpdateData={resetUpdateData}
            setAnimal={setAnimal}
            dataAnimal={dataAnimal}
            setUpdateData={setUpdateData}
          />
          <BtnListPublic />
          <p className={`${hiddenClassCase} user__msg`}>{messageCase}</p>
        </div>
      ) : (
        <ErrorPage/>
      )}
  
      {isLoading && (
        <div className="spinner flex justify-content-center">
          <ProgressSpinner />
        </div>
      )}
    </>
  );
}

export default UpdateCase;
