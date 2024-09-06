import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  margin-bottom: 15px;

  p {
    color: #222222;
  }

  svg {
    color: #222222;
  }
`;

export const CartItemImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 80px;
  width: 80px;
  margin-top: -30px;
  font-size: 2vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  margin-left: 20px;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
  }

  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    font-size: 2.3vw;
    margin-left: 20px;
    flex: 1;

    p:nth-child(1) {
      font-weight: 600;
      margin-bottom: 5px;
    }

    p:nth-child(2) {
      font-weight: 500;
    }   
  }
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  b {
    color: black;
  }

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const RemoveButton = styled.div`
  margin-right: 15px;
  margin-top: -75px;
  background-color: red;
  border-radius: 5px;
  padding: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
