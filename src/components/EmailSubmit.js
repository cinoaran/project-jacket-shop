import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EmailSubmit = ({ toggle, show }) => {
  return (
    <Modal
      centered
      isOpen={show}
      toggle={toggle}
      //className={this.props.className}
    >
      <ModalHeader className="bg-dark text-white justify-content-center">
        Email is Send
      </ModalHeader>
      <ModalBody>
        Thank you for your Message we'll contact you soon as possible!
      </ModalBody>
      <ModalFooter>
        <Button className="btn btn-success btn-block" onClick={toggle}>
          OK
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EmailSubmit;