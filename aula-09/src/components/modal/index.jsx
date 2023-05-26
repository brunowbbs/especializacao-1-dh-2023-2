import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ModalCustom({ isLoading, children, ...props }) {
  return (
    <Modal style={customStyles} isOpen={isLoading} {...props}>
      {children}
    </Modal>
  );
}
