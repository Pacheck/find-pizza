import React from "react";

import { LoginContainer } from "./styles";

import CustomForm from "../CustomForm";

const LogIn = () => {
  console.log("log in page");
  return (
    <LoginContainer>
      <CustomForm />
    </LoginContainer>
  );
};

export default LogIn;
