import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const AuthenticationForms_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1em;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    padding: 1em 15%;
  }
`;

export const Authentication_UserSigned_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 10em 1em;

  @media screen and (min-width: 1024px) {
    padding: 10em 15%;
  }

  h1 {
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 0;
  }

  h2 {
    font-size: 1em;
    font-weight: 600;
  }
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 3em;
`;
