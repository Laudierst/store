import styled from "styled-components";

export const ProductProd = styled.div`
  width: 100%;
  background: transparent;
  display: inline-block;

  & section {
    width: 100%;
    
    & div {
      width: 200px;
      height: 300px;
      display: inline-block;
      margin-left: 10px;
      margin-top: 25px;

      & img {
        width: 100%;
        height: 25vh;
        border-radius: 8px;
      }

    & h5 {
      width: 100%;
      color: #000000;
      font-weight: bold;
      font-size: 13px;
    }

    & h3 {
      color: #000000;
      font-weight: bold;
      text-align: center;
    }

    & span {
      width: 60%;
      margin: auto;
      display: flex;
      text-align: center;
      color: rgba(10, 10, 10, 0.687);
    }

    & button {
      background-color: aqua; /*#00FF00*/
      width: 90%;
      margin: auto;
      display: block;
      padding: 8px;
      border-radius: 6px;
      border: none;
      font-size: 16px;
      font-weight: bolder;
      
      &:hover {
        background-color: #00FF00;
      }

    }
    @media (max-width: 768px) {
      width: 100%;

      & img {
        width: 100%;
        height: 28vh;
        border-radius: 8px;
      }
    }
  }
  }
`
export const LoadingPage1 = styled.div`
 position: absolute;
  top: 30%;
  left: 45%;
`
export const LoadingPage = styled.div`
  width: 20%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`