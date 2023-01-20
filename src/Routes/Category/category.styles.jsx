import styled from "styled-components";

export const CategoryComponent_Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 0em 0.75em 2em 0.75em;

  h1 {
    font-size: 29px;
    text-transform: uppercase;
    color: black;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
  }
`;

export const CategoryComponent_Products_Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.75em;
  row-gap: 2.5em;

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 3.5em;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 4em;
  }
`;
