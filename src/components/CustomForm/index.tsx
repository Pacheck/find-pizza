import { ChangeEvent, SyntheticEvent, useState } from "react";

import { useHistory } from "react-router-dom";

import {
  signInWithGoogle,
  auth,
  createUserProfileDocument,
} from "../../firebase/utils";

import {
  FormContainer,
  Input,
  UserIcon,
  SubmitButton,
  ActionsContainer,
  InputContainer,
  IconContainer,
  Container,
  Text,
} from "./styles";

import { FormProps, UserData } from "./types";

const INITIAL_STATE = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CustomForm = ({ SignUp }: FormProps) => {
  const [data, setData] = useState<UserData>(INITIAL_STATE);
  const [message, setMessage] = useState(
    SignUp ? "Already have an account?" : "Click here to create an account"
  );

  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = data;

    if (SignUp && password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    if (SignUp) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });

        // setData(INITIAL_STATE); Can't performe react update cuz the component was unmounted
      } catch (error) {
        console.error(error);
      }
    } else {
      const { email, password } = data;

      try {
        await auth.signInWithEmailAndPassword(email, password);
        // setData(INITIAL_STATE);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(data);
  };

  const loginWithGoogle = async () => {
    const result = await signInWithGoogle();
    console.log(result);
  };

  const handleNavigateUser = () => {
    const route = SignUp ? "/user" : "/user/sign-in";
    history.push(route);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <IconContainer>
          <UserIcon />
        </IconContainer>
        <InputContainer>
          {SignUp && (
            <Input
              name="displayName"
              placeholder="Name"
              type="text"
              onChange={handleChange}
              defaultValue={data.displayName}
            />
          )}
          <Input
            name="email"
            placeholder="Email"
            type="text"
            onChange={handleChange}
            defaultValue={data.email}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            defaultValue={data.password}
          />
          {SignUp && (
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              onChange={handleChange}
              defaultValue={data.confirmPassword}
            />
          )}
        </InputContainer>
        <ActionsContainer>
          {SignUp ? (
            <SubmitButton type="submit">Sign up</SubmitButton>
          ) : (
            <>
              <SubmitButton>Sign in</SubmitButton>{" "}
              <SubmitButton isGoogleSign onClick={loginWithGoogle}>
                Sign in with Google
              </SubmitButton>
            </>
          )}
        </ActionsContainer>
      </FormContainer>
      <Text onClick={handleNavigateUser}>{message}</Text>
    </Container>
  );
};

export default CustomForm;
