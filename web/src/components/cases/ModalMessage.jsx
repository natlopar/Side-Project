
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';



function ModalMessage({smShow, setSmShow, message, title, setIsDeleted}) {

   
const handleCloseMessage = (ev) =>{
    ev.preventDefault();
    setIsDeleted(true);
}

  return (
    <Modal
    size="sm"
    show={smShow}
    dialogClassName="modal-90w"
    onHide={() => setSmShow(false)}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton onClick={handleCloseMessage}>
      <Modal.Title id="example-modal-sizes-title-sm">
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body  className="h5">{message}</Modal.Body>
  </Modal>
  )
}


ModalMessage.propTypes = {
  setIsDeleted: PropTypes.func,
  smShow: PropTypes.bool,
  setSmShow: PropTypes.func, 
  message: PropTypes.string,
  title: PropTypes.string
}
export default ModalMessage;