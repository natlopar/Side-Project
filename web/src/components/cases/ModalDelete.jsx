import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiCase from '../../services/api-case';
import ModalMessageDelete from './ModalMessageDelete';
import { useState } from 'react';

function ModalDelete(props) {
  const [smShow, setSmShow] = useState(false);
  const [messageDelete, setMessageDelete] = useState('')
  const [titleDelete, setTitleDelete] = useState ('')

  const handleClickDelete = async (e) => {
    e.preventDefault();
    await apiCase.deleteCase(props.idDelete).then((data) => {
      props.setModalShow(false);
      
      if (data.success) {
        props.setIdDelete(null);
        setTitleDelete('✅')
        setMessageDelete('El caso seleccionado ha sido eliminado')
      } else {
        setTitleDelete('❗')
        setMessageDelete('Ha habido un error en la operación. Por favor, inténtalo de nuevo más tarde')
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
          <Button onClick={props.onHide} variant="success" className="btn-lg">
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
     {smShow && <ModalMessageDelete smShow={smShow} setSmShow={setSmShow} messageDelete={messageDelete} titleDelete={titleDelete} setIsDeleted={props.setIsDeleted}/>}
    </>
  )
}

export default ModalDelete;
