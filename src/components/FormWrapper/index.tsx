import React from "react";
import { Button, Flex, Typography } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const { Title, Text } = Typography;

// Components
import { FormButton } from "../FormButton";

// Styles
import "./index.scss";

type LinkProps = {
  text: string;
  to: string;
};

interface FormWrapperProps {
  title: string;
  description: string;
  link?: LinkProps;
  formId: string;
  buttonText: string;
  hasBackButton?: boolean;
  hasLogo?: boolean;
  maxWidth?: number;
  isLoading?: boolean;
  children: React.ReactNode;
}

export function FormWrapper({
  title,
  description,
  link,
  formId,
  buttonText,
  hasBackButton = false,
  maxWidth = 704,
  isLoading = false,
  children,
}: FormWrapperProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <Flex
      className="form-wrapper"
      vertical
      gap={40}
      style={{ maxWidth: maxWidth ?? 704 }}
    >
      <header>
        <Flex vertical>
          {hasBackButton && (
            <Button
              className="form-wrapper__go-back"
              type="text"
              icon={<ArrowLeft />}
              iconPosition="start"
              onClick={goBack}
            >
              Voltar
            </Button>
          )}
          <Title>{title}</Title>
          {link ? (
            <Text>
              {description} <NavLink to={link.to}>{link.text}</NavLink>
            </Text>
          ) : (
            <Text>{description}</Text>
          )}
        </Flex>
      </header>
      <main>{children}</main>
      <footer>
        <FormButton text={buttonText} formId={formId} isLoading={isLoading} />
      </footer>
    </Flex>
  );
}
