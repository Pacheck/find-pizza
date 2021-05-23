import React from "react";

import CustomForm from "../CustomForm";

import { SignInContainer } from "./styled";

const SignIn = () => {
  return (
    <SignInContainer>
      <CustomForm SignUp />
    </SignInContainer>
  );
};

export default SignIn;
