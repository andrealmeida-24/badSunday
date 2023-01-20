import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarComponent = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

export const NavbarComponent_Logo = styled(Link)`
  text-decoration: none;
  font-family: "Pirata One", cursive;
  color: white;
  margin-left: 1em;
  letter-spacing: 5px;
  font-size: 1.2em;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    font-size: 2em;
  }
`;

export const NavbarComponent_LinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1em;
`;

export const NavbarComponent_Link = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 0.6em;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1em;
  }

  @media screen and (min-width: 767px) {
    font-size: 0.8em;
  }
`;
