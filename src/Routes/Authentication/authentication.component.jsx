import { useContext, useEffect } from "react";
import SignUpForm from "../../Components/Sign-Up-Form/sign-up-form.component";
import SignInForm from "../../Components/Sign-In-Form/sign-in-form.component";
import { UserContext } from "../../Contexts/user.context";

import {
  AuthenticationForms_Container,
  Authentication_UserSigned_Container,
  UserIcon,
} from "./authentication.styles";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!currentUser && (
        <AuthenticationForms_Container>
          <SignInForm />
          <SignUpForm />
        </AuthenticationForms_Container>
      )}
      {currentUser && (
        <Authentication_UserSigned_Container>
          <UserIcon />
          <h1>Welcome,</h1>
          <h2>{currentUser.email}</h2>
        </Authentication_UserSigned_Container>
      )}
    </>
  );
};

export default Authentication;
