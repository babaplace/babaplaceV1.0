import React from "react";
import { RegisterForm } from "./RegisterForm";
import AuthSocial from "../AuthSocial";

type Props = {};

const AuthPage = (props: Props) => {
  return (
    <div>
      <RegisterForm>
        <AuthSocial />
      </RegisterForm>
    </div>
  );
};

export default AuthPage;
