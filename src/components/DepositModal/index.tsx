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

interface DepositModalProps {
  isOpen: boolean;
  isLoading?: boolean;
  onRequestClose: () => void;
  handleDeposit: ({ amount }: { amount: number }) => void;
}

Modal.setAppElement("#root");

function DepositModal({
  isOpen,
  isLoading,
  onRequestClose,
  handleDeposit,
}: DepositModalProps) {
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

      <section className="deposit-modal">
        <h2>Depositar dinheiro</h2>
        <Form
          id="deposit"
          initialValues={{ amount: "" }}
          onFinish={handleDeposit}
        >
          <Form.Item
            name="amount"
            normalize={(value) => onlyNumbers(value)}
            rules={[
              {
                required: true,
                message: "Valor",
              },
            ]}
          >
            <FormInput label="Valor" placeholder="Valor do depósito" />
          </Form.Item>
        </Form>

        <button type="submit" form="deposit">
          {isLoading ? <Loader /> : "Depositar"}
        </button>
      </section>
    </Modal>
  );
}

export default DepositModal;
