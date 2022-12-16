import SignUpForm from "../../Components/Sign-Up-Form/sign-up-form.component";
import SignInForm from "../../Components/Sign-In-Form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
