import { useParams } from 'react-router-dom';
import apiCase from '../../services/api-case';
import '../../styles/newCase.scss';
import ls from '../../services/localStorage';
import HeaderPages from '../shared/HeaderPages';
import Scroll from '../shared/Scroll';
import FormNewCase from './FormNewCase';
import BtnUpdateCase from './BtnUpdateCase';
import { useEffect } from 'react';

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
}) {
  const { id } = useParams();
  const idCase = parseInt(id);
  const animalData = privateList.find((one) => one.idCase === parseInt(id));
  useEffect(() => {
    ls.set('animal', animalData);
  }, [animalData]);

  const handleSubmitUpdate = async () => {
    await apiCase.updateCase(updateData, idCase).then((data) => {
      if (data.success) {
        setMessageCase('El caso ha sido modificado correctamente.');
        setHiddenClassCase('');
      } else {
        setMessageCase('Error al modificar tu caso. Ha habido un problema con el servidor, inténtalo más tarde por favor.');
        setHiddenClassCase('');
      }
    });
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

        <p className={`${hiddenClassCase} user__msg`}>{messageCase}</p>
      </div>
    </>
  );
}

export default UpdateCase;
