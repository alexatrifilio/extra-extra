import { FC } from "react";
import { Layout } from "../../Components";
import { useAuth } from "../../hooks/useAuth";
import { LoginPayload } from "../../types";
import { LoginForm } from "./Form";

const Login: FC = () => {
  const handleSubmit = (formData: LoginPayload) => {
    login(formData);
  };

  const { login } = useAuth();

  return (
    <Layout page="login" hideNav>
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export { Login };
