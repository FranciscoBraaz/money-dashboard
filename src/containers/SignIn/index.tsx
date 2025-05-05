import { Layout, Form } from "antd";

// Custom hooks
import { useSignIn } from "./hooks/useSignIn";

// Components
import { FormWrapper } from "../../components/FormWrapper";
import { FormInput } from "../../components/FormInput";

// Styles
import "./index.scss";

function SignIn() {
  const { isLoading, handleSignIn } = useSignIn();

  return (
    <Layout>
      <Layout.Content className="sign-in">
        <FormWrapper
          title="Entrar na plataforma"
          description="Não tem uma conta?"
          link={{ text: "Cadastre-se gratuitamente", to: "/cadastro" }}
          formId="sign-in"
          buttonText="Entrar na plataforma"
          isLoading={isLoading}
        >
          <Form
            id="sign-in"
            initialValues={{ email: "", passowrd: "" }}
            onFinish={handleSignIn}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira seu email",
                },
              ]}
            >
              <FormInput label="Email" placeholder="Seu email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua senha",
                },
              ]}
            >
              <FormInput
                label="Senha"
                placeholder="Seu senha"
                type="password"
              />
            </Form.Item>
          </Form>
        </FormWrapper>
      </Layout.Content>
    </Layout>
  );
}

export default SignIn;
