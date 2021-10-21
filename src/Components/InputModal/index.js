import React, { useState } from "react";
import Modal from "react-animated-modal";

const InputModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal
        visible={visible}
        closemodal={() => setVisible(false)}
        type="fadeIn"
      >
        Some text or JSX inside modal goes here...
      </Modal>
      <div onClick={() => this.setState({ showModal: true })}>Open Modal</div>
    </>
  );
};

export default InputModal;
