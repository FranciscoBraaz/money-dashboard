import Modal from "react-modal";
import { Form } from "antd";
import { Loader } from "lucide-react";

// Assets
import closeImg from "../../assets/close.svg";

// Utils
import { onlyNumbers } from "../../utils";

// Components
import { FormInput } from "../FormInput";

// Styles
import "./index.scss";

interface TransferModalProps {
  isOpen: boolean;
  isLoading?: boolean;
  onRequestClose: () => void;
  handleTransfer: ({
    amount,
    accountNumber,
  }: {
    amount: number;
    accountNumber: string;
  }) => void;
}

Modal.setAppElement("#root");

function TransferModal({
  isOpen,
  isLoading,
  onRequestClose,
  handleTransfer,
}: TransferModalProps) {
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

      <section className="transfer-modal">
        <h2>Transferir dinheiro</h2>
        <Form
          id="transfer-modal"
          initialValues={{ amount: "", accountNumber: "" }}
          onFinish={handleTransfer}
        >
          <Form.Item
            name="accountNumber"
            normalize={(value) => onlyNumbers(value)}
            rules={[
              {
                required: true,
                message: "O número da conta é obrigatório",
              },
            ]}
          >
            <FormInput label="Número da conta" placeholder="Número da conta" />
          </Form.Item>
          <Form.Item
            name="amount"
            normalize={(value) => onlyNumbers(value)}
            rules={[
              {
                required: true,
                message: "O valor é obrigatório",
              },
            ]}
          >
            <FormInput label="Valor" placeholder="Valor da transferência" />
          </Form.Item>
        </Form>

        <button type="submit" form="transfer-modal" disabled={isLoading}>
          {isLoading ? <Loader /> : "Transferir"}
        </button>
      </section>
    </Modal>
  );
}

export default TransferModal;
