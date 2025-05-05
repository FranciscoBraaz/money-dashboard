import Modal from "react-modal";
import { Loader } from "lucide-react";

// Assets
import closeImg from "../../assets/close.svg";

// Styles
import "./index.scss";

interface ConfirmModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  isLoading?: boolean;
  onRequestClose: () => void;
  handleConfirm: () => void;
}

function ConfirmModal({
  title,
  description,
  isOpen,
  onRequestClose,
  isLoading,
  handleConfirm,
}: ConfirmModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <section className="confirm-modal">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="confirm-modal__buttons">
          <button type="button" disabled={isLoading} onClick={onRequestClose}>
            Cancelar
          </button>
          <button type="button" disabled={isLoading} onClick={handleConfirm}>
            {isLoading ? <Loader /> : "Confirmar"}
          </button>
        </div>
      </section>
    </Modal>
  );
}

export default ConfirmModal;
