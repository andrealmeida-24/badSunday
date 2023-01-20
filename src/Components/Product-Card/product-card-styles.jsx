import styled from "styled-components";

export const ProductCardComponent_Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    height: 350px;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ProductCardComponent_CardInfo = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductCardComponent_CardInfo_NamePrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0;
    font-size: 0.75em;
    font-weight: 700;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 0.85em;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1em;
    }
  }

  span {
    font-size: 0.75em;
    margin-top: 2px;
    font-weight: 400;
    letter-spacing: 1px;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 0.85em;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1em;
    }
  }
`;

export const ProductCardComponent_Card_AddToCart = styled.div`
  display: flex;
  font-size: 1.25em;
  font-weight: 700;
  cursor: pointer;

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    font-size: 1.5em;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.75em;
  }
`;
