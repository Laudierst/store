import styled from "styled-components";

export const ProductRelacionados = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  margin: auto;
  margin-top: 50px;

  @media (max-width: 923px) {
    width: 96%;
  }

  & h4 {
    font-weight: bold;
      margin-top: -15px;
      color: #000000;
      text-shadow: 0 2px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
      0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
  }

  & section {
    width: 100%;

    & h2 {
      font-weight: bold;
      margin-top: -15px;
      color: #000000;
      text-shadow: 0 2px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
      0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 1px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 30px 30px rgba(0, 0, 0, 0.15);
    }

    & div {
      width: 220px;
      height: 230px;
      display: inline-block;
      margin-left: 10px;
      margin-top: 20px;
      text-align: center;
      font-weight: bold;

      &:hover {
        opacity: 0.8;
        border-radius: 10px;
        box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.582);
        color: #000000;
        font-weight: bold;
        font-size: 0.8rem;
        text-align: center;
      }

      & img {
        width: 100%;
        height: 30vh;
        border-radius: 1px;
        margin-bottom: 5px;
      }

      & h5 {
        width: 100%;
        color: #000000;
        font-weight: bold;
        font-size: 1.2rem;
        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 2; // Quantidade de linhas
        -webkit-box-orient: vertical; 
      }

      & h3 {
        color: #000000;
        font-weight: bold;
        text-align: center;
      }

      & span {
        width: 80%;
        margin: auto;
        display: flex;
        text-align: center;
        color: rgba(10, 10, 10, 0.687);

        & p {
          font-size: 1vw;
          margin-left: -15px;
          //color: #00FF00;
        }

      &:haver {
        opacity: 0;
      }
    }
    
    & .oldPrice {
      font-size: 0.9rem;
      text-decoration: line-through;
      flex-grow: 1;
      color: gray;
      opacity: 1;

      
    }

    & .frete {
      font-size: 1.5rem;
      color: #00A650;
    }

    & .cartImg {
      width: 50px;
      height: 50px;
      flex-grow: 1;
      color: #000000;
      opacity: 0.7;
      padding: 3px;
    }

    & .oldPricereal {
      font-size: 1.8rem;
      flex-grow: 1;
      font-weight: initial;
      color: #000000;
      opacity: 0.7;
      padding: 3px;
    }

    & button {
      background-color: rgba(0, 255, 255, 0.39); /*#00FF00*/
      width: 90%;
      margin: auto;
      display: block;
      padding: 8px;
      border-radius: 6px;
      border: none;
      font-size: 16px;
      font-weight: bolder;
      
      &:hover {
        background-color: aqua;
      }

    }
    
    @media (max-width: 923px) {
      width: 30%;
      margin: 5px;

      & h5 {
        font-size: 0.9rem;
      }

      & .oldPricereal {
        font-size: 1.2rem;
        flex-grow: 1;
        color: #000000;
        opacity: 0.7;
        padding: 3px;
        
      }

      & .frete {
        font-size: 3vw;
        color: #00A650;
      }

      & .cartImg {
        width: 30px;
        height: 30px;
        flex-grow: 1;
        color: #000000;
        opacity: 0.7;
        padding: 3px;
  
      }

      & b {
        font-size: 3.5vw;
        text-align: center;
      }

      & .cartao {
        font-size: 2.3vw;
      }

      & .p {
        margin-top: -5px;
        font-size: 1.8vw;
        margin-bottom: 2px;
        margin-left: 5px;
        text-align: center;
      }
      
      & img {
        width: 100%;
        height: 60%;
        border-radius: 10px;
        margin-bottom: 2px;

        
      }      

      & h3 {
        margin-top: 0px;
        color: #000000;
        font-weight: bold;
        text-align: center;
        font-size: 5vw;
      }

      & span {
        width: 80%;
        margin: auto;
        display: flex;
        text-align: center;
        color: rgba(10, 10, 10, 0.687);
        font-size: 2vw;
      }

      & p {
       margin-left: 15px;
      }

      & button {
        background-color: aqua; /*#00FF00*/
        width: 100%;
        margin: auto;
        display: block;
        padding: 8px;
        border-radius: 6px;
        border: none;
        font-size:3vw;
        font-weight: bolder;
        
        &:hover {
          background-color: #00FF00;
        }
        }
      }
    }
  }
`