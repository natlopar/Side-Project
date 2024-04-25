import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import apiCase from '../../services/api-case';
import ModalMessage from './ModalMessage';
import PropTypes from "prop-types";
import { useState } from 'react';

function ModalDelete(props) {
  const [smShow, setSmShow] = useState(false);
  const [message, setMessage] = useState('')
  const [title, setTitle] = useState ('')
  const {show, onHide, idDelete, setIdDelete, setModalShow, setIsDeleted, isLoading, setIsLoading} = props

  const handleClickDelete = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    await apiCase.deleteCase(idDelete)
    .then((data) => {
      setModalShow(false);
      if (data.success) {
        setIsLoading(false);
        setIdDelete(null);
        setTitle('✅')
        setMessage('El caso seleccionado ha sido eliminado')
      } else {
        setIsLoading(false);
        setTitle('❗')
        setMessage('Ha habido un error en la operación. Por favor, inténtalo de nuevo más tarde')
      }
      setSmShow(true);
      
     
    });

   
  };

  return (
    <>
      <Modal
       {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Eliminar este caso
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" bg-success-subtle border border-success-subtle rounded-3">
          <h3>¿Estás seguro de querer eliminar este registro?</h3>
          <p className="h5">
            Si eliges `Eliminar` se borrarán de manera irreversible los datos
            asociados a este caso.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} variant="success" className="btn-lg">
            Cancelar
          </Button>
          <Button
            variant="danger"
            className="btn-lg"
            onClick={handleClickDelete}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
     {smShow && <ModalMessage smShow={smShow} setSmShow={setSmShow} message={message} title={title} setIsDeleted={setIsDeleted}/>}
     {isLoading ? (
        <div className="spinner flex justify-content-center">
          <ProgressSpinner />
        </div>
      ) : null}
   
    </>
  )
}


ModalDelete.propTypes = {
  setIsLoading: PropTypes.func,
  idDelete: PropTypes.number,
  setIdDelete: PropTypes.func,
  setModalShow: PropTypes.func,
  isLoading: PropTypes.bool, 
  onHide: PropTypes.func,
  setIsDeleted: PropTypes.func, 
  show: PropTypes.bool,
}
export default ModalDelete;
