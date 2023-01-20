import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewComponent_Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 0em 0.75em 2em 0.75em;
`;

export const CategoryPreview_Title_Link = styled(Link)`
  font-size: 28px;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
  border: 1px solid black;
  background-color: black;
  padding: 2px 5px;
`;

export const CategoryPreview_Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.75em;
  row-gap: 2.5em;

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    row-gap: 3.5em;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
