import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextCopied = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  left: 30%;
  right: 30%;

  padding: 5px 0;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.05);
  font-size: 0.75em;
  font-weight: 500;

  animation: fadeIn 350ms ease-in both;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    left: 20%;
    right: auto;
    padding: 5px 20px;
  }
`;

export const PaymentFormContainer = styled.div`
  margin: 2em auto;
  width: 100%;
  align-items: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin-top: 10%;
  }

  .card {
    padding: 12px 6px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 54px;
    width: 100%;
    background: white;
    box-sizing: border-box;
    border-radius: 6px 6px 0 0;
  }
`;

export const PaymentFormButton = styled.button`
  padding: 12px 6px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  max-height: 54px;
  font-size: 1em;
  width: 100%;
  background: #5433ff;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  border-radius: 0 0 6px 6px;

  :hover {
    filter: contrast(115%);
  }
`;

export const PaymentFormTestInfo = styled.div`
  margin-top: 1em;
  width: 100%;
  align-self: center;
  font-weight: 400;

  h1 {
    font-size: 1.4em;
  }

  p,
  ul {
    font-size: 0.85em;
  }

  li {
    margin: 5px 0;
  }

  table {
    font-size: 0.75em;
    margin: 2em auto;
    margin-left: 0;
    border-spacing: 10px;
    background-color: rgba(229, 228, 225, 0.3);
    border-radius: 7px;

    @media screen and (min-width: 768px) {
      padding: 0.5em 2em;
    }

    #title {
      font-size: 1em;
      font-weight: 700;
    }

    #number {
      width: 50%;
    }

    #description {
      width: auto;
    }

    #icon,
    #icon_active {
      margin-left: 5px;
      cursor: pointer;
    }

    #icon {
      color: rgba(0, 0, 0, 0.5);

      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  a {
    text-decoration: none;
    color: #5433ff;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Payment = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: black;

  h1 {
    font-size: 0.75em;
    font-weight: 500;
    margin-bottom: 0;
  }

  p {
    margin-top: 10px;
    font-size: 0.55em;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
`;
