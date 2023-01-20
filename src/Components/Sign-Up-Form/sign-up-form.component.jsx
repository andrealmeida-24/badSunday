import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../Utilities/Firebase/firebase.utils";
import FormInput from "../Form-Input/form-input.component";
import Button from "../Button/button.component";

import {
  FormContainer_SignUp,
  FormContainer_SignUp_Title,
  FormContainer_SignUp_Subtitle,
} from "./sign-up-form.styles";

const defaultFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [FormState, setFormState] = useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = FormState;

  const resetFormFields = () => {
    setFormState(defaultFormState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (FormState.password !== FormState.confirmPassword)
      alert("Passwords not mactching!");

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if ((err.code = "auth/email-already-in-use")) {
        alert("Cannot create user! Email already in use!");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...FormState, [name]: value });
  };

  return (
    <FormContainer_SignUp>
      <FormContainer_SignUp_Title>
        Don't have an account?
      </FormContainer_SignUp_Title>
      <FormContainer_SignUp_Subtitle>
        Sign Up with your Email and Password
      </FormContainer_SignUp_Subtitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </FormContainer_SignUp>
  );
};

export default SignUpForm;
