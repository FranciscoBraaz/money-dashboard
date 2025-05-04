import { Flex, Form, Layout } from "antd";
import { FormWrapper } from "../../components/FormWrapper";
import { FormInput } from "../../components/FormInput";

// Custom hooks
import { useSignUp } from "./hooks/useSignUp";

// Styles
import "./index.scss";

const requiredRules = [
  {
    required: true,
    message: "Campo obrigatório",
  },
];
const passwordRules = [
  ...requiredRules,
  {
    min: 8,
    message: "A senha deve ter pelo menos 8 caracteres",
  },
];

export function SignUp() {
  const { isLoading, handleCreateAccount } = useSignUp();

  return (
    <Layout className="sign-up">
      <Layout.Content className="sign-up__content">
        <FormWrapper
          title="Cadastre-se"
          description="Já possui uma conta?"
          link={{ text: "Entrar na plataforma", to: "/login" }}
          formId="sign-up"
          buttonText="Criar conta"
          hasBackButton
          hasLogo={false}
          maxWidth={949}
          isLoading={isLoading}
        >
          <Form id="sign-up" onFinish={handleCreateAccount}>
            <Form.Item name="name" rules={requiredRules}>
              <FormInput label="Nome" placeholder="Seu nome" />
            </Form.Item>
            <Form.Item name="email" rules={requiredRules}>
              <FormInput label="Email" placeholder="Seu email" />
            </Form.Item>
            <Flex gap={16} className="sign-up__flex-container">
              <Form.Item name="password" rules={passwordRules}>
                <FormInput
                  label="Nova senha"
                  placeholder="Crie uma nova senha"
                  type="password"
                />
              </Form.Item>
              <Form.Item
                name="password_confirmation"
                rules={[
                  ...passwordRules,
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("As senhas não coincidem")
                      );
                    },
                  }),
                ]}
              >
                <FormInput
                  label="Confirmar nova senha"
                  placeholder="Repita a nova senha"
                  type="password"
                />
              </Form.Item>
            </Flex>
          </Form>
        </FormWrapper>
      </Layout.Content>
    </Layout>
  );
}
