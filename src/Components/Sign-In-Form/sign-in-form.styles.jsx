import styled from "styled-components";

export const FormContainer_SignIn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  @media screen and (min-width: 767px) {
    margin-bottom: 0em;
  }
`;
export const FormContainer_SignIn_Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
`;

export const FormContainer_SignIn_Subtitle = styled.p`
  font-size: 0.8em;
  font-weight: 400;
  margin-top: 0;
`;

export const FormContainer_SignIn_BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
