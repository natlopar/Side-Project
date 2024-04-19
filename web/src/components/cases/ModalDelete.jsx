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
      <Modal.Body>
        <h4>¿Estás seguro de querer eliminar este registro?</h4>
        <p>
          Si eliges 'Eliminar' se borrarán de manera irreversible los datos asociados a este caso.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancelar</Button>
        <Button variant="danger" onClick={props.onHide}>Eliminar</Button>
      </Modal.Footer>
    </Modal>
  </>
);
}


export default ModalDelete