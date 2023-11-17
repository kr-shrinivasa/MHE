import Modal from 'react-bootstrap/Modal';
import ContactForm from "./ContactForm"

function Example(props) {

  return (
    <>
      
      <Modal show={props.isOpenModal} onHide={props.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;