import React from "react";
import { LoginForm } from "./LoginForm";
import AuthSocial from "../AuthSocial";

const LoginPage = () => {
  return (
    <div>
      <LoginForm>
        <AuthSocial />
      </LoginForm>
    </div>
  );
};

export default LoginPage;
