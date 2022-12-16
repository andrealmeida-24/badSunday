import { useState } from "react";
import FormInput from "../Form-Input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../Utilities/Firebase/firebase.utils";
import Button from "../Button/button.component";
import { getAuth } from "firebase/auth";
import "./sign-in-form.styles.scss";

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
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
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
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
