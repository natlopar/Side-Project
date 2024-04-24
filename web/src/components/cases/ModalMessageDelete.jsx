
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



function ModalMessageDelete({smShow, setSmShow, messageDelete, titleDelete, setIsDeleted}) {

   
const handleCloseMessage = (ev) =>{
    ev.preventDefault();
    setIsDeleted(true);
}

  return (
    <Modal
    size="sm"
    show={smShow}
    onHide={() => setSmShow(false)}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton onClick={handleCloseMessage}>
      <Modal.Title id="example-modal-sizes-title-sm">
        {titleDelete}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body  className="h5">{messageDelete}</Modal.Body>
  </Modal>
  )
}

export default ModalMessageDelete;