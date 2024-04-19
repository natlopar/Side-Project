import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function ModalDelete(props) {

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
        <p className='h5' >
          Si eliges 'Eliminar' se borrarán de manera irreversible los datos asociados a este caso.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='success' className='btn-lg'>Cancelar</Button>
        <Button variant="danger" className='btn-lg' onClick={props.onHide}>Eliminar</Button>
      </Modal.Footer>
    </Modal>
  </>
);
}


export default ModalDelete