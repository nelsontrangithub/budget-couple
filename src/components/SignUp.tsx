import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { useBudgetContext } from "./provider/BudgetContextProvider";
import { LabelledInput } from "./shared/LabelledInput";
import { theme } from "../constants/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;
  padding: 2rem;
  border: 2px solid ${theme.colors.violet.dark};

  > * {
    margin-top: 1rem;
  }
`;

const Header = styled.h1`
  align-content: center;
  color: ${theme.colors.violet.dark};
  font-weight: 700;
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SignUpButton = styled.button`
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: ${theme.colors.violet.dark};
  color: white;
  text-decoration: capitalize;
  margin-left: 10px;
  width: 50%;

  &:disabled {
    background-color: grey;
  }
`;

const CancelButton = styled.button`
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: ${theme.colors.violet.dark};
  color: white;
  text-decoration: capitalize;
  width: 50%;

  &:disabled {
    background-color: grey;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: 700;
  font-size: 0.7rem;
`;

interface Props {
  closeModal: () => void;
}

export const SignUp = forwardRef<HTMLInputElement, Props>(({ closeModal }, ref) => {
  const { login } = useBudgetContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const onLogin = async () => {
    const isSuccess = await login({
      email,
      password,
    });
    if (isSuccess) closeModal();
    else setIsError(true);
  };

  return (
    <Container ref={ref}>
      <Header>Create a new account</Header>
      <LabelledInput
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email address"
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      <LabelledInput
        id="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <LabelledInput
        id="confirmPassword"
        type="confirmPassword"
        label="Confirm Password"
        placeholder="Please confirm your password"
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      {isError && (
        <ErrorMessage>Something went wrong, please re-enter your credentials</ErrorMessage>
      )}
      <ButtonContainer>
        <CancelButton onClick={closeModal}>Cancel</CancelButton>
        <SignUpButton onClick={onLogin}>Sign Up</SignUpButton>
      </ButtonContainer>
    </Container>
  );
});
