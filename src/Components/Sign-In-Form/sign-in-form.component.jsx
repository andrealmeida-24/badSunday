import { useState } from "react";
import FormInput from "../Form-Input/form-input.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../Utilities/Firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component";

import {
  FormContainer_SignIn,
  FormContainer_SignIn_Title,
  FormContainer_SignIn_Subtitle,
  FormContainer_SignIn_BtnsContainer,
} from "./sign-in-form.styles";

const defaultFormState = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [FormState, setFormState] = useState(defaultFormState);
  const { email, password } = FormState;

  const resetFormFields = () => {
    setFormState(defaultFormState);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect Password!");
          resetFormFields();
          break;

        case "auth/user-not-found":
          alert("No user found with this email!");
          resetFormFields();
          break;

        default:
          console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...FormState, [name]: value });
  };

  return (
    <FormContainer_SignIn>
      <FormContainer_SignIn_Title>
        I already have an account
      </FormContainer_SignIn_Title>
      <FormContainer_SignIn_Subtitle>
        Sign In with your email and password
      </FormContainer_SignIn_Subtitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormContainer_SignIn_BtnsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign-In
          </Button>
        </FormContainer_SignIn_BtnsContainer>
      </form>
    </FormContainer_SignIn>
  );
};

export default SignInForm;
