import styled from "styled-components";

export const CoontainerSlids = styled.div`
  width: 100%;
  height: 100px;
  //margin-top: 100px;

  & h4 {
    text-align: center;
    font-weight: bold;
    margin-top: -15px;
    color: #000000;
    text-shadow: 0 2px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
    0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
  }


  & .carouselSlids {
    width: 100%;
    margin: auto;
    display: flex;
    scroll-behavior: smooth;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    & div {
      width: 220px;
      height: 230px;
      display: inline-block;
      margin-left: 10px;
      margin-top: 20px;
      text-align: center;
      font-weight: bold;
      flex: none;

      @media screen and(max-width: 923px) {
        
      }

      &:hover {
        opacity: 0.8;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.582);
        color: #000000;
        font-weight: bold;
        font-size: 0.8rem;
        text-align: center;
        border: solid 0.1px;
      }

      & img {
        width: 100%;
        height: 30vh;
        border-radius: 8px;
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

    &::-webkit-scrollbar {
      display: none;
    }

    & .item {
      background-color: white;
      margin: 10px;
      padding: 10px;
      width: 300px;
      height: 42vh;
      flex: none;
      cursor: pointer;

      & .image {
        & img {
          width: 100%;
          height: 40vh;
          object-fit: cover;
          margin: auto;
          display: flex;
        }
      }
    }

    & .info {
      margin-top: 16px;

      & .name {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        color: #000000;
      }

      & h5 {
        color: #000000;
        display: inline-block;
        font-weight: bold;
      }
    }

    & a {
        text-decoration: none;
        border: solid 1px;
        margin: 5px;
        color: darkolivegreen;
        padding: 5px;
      }

    & .oldPrice {
      font-size: 1.3rem;
      text-decoration: line-through;
      flex-grow: 1;
      color: red;
      opacity: 0.7;
      padding: 3px;
      margin: 5px;
    }
  }
  
}

  & .buttons1 {
    left: 0;
    position: absolute;
    width: 20%;
    height: 170px;
    background-color:rgba(255, 255, 255, 0);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    /*overflow: hidden;*/
    cursor: pointer;
    opacity: 1;
    margin-left: 0%;
    margin-top: -20px;
    color: whitesmoke;

   @media (max-width: 768px){
     opacity: 0;
     width: 40px;
   }
}

& .buttons2 {
  right: 0;
  position: absolute;
  width: 20%;
  height: 170px;
  background-color:rgba(255, 255, 255, 0);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  /*overflow: hidden;*/
  cursor: pointer;
  opacity: 1;
  margin-right: 0%;
  margin-top: -270px;
  color: whitesmoke;

  @media (max-width: 768px){
     opacity: 0;
     width: 40px;
     margin-top: 240px;
   }
  }

  & button {
    border: none;
    background: transparent
  }

  @media(max-width: 923px) {
    width: 25%;
    border: solid 1px;
    
    & img {
      width: 100%;
      height: 10vh;
      border-radius: 8px;
    }

    & .cartao {
      font-size: 4vw;
    }

    & .p {
      font-size: 4vw;
      margin: auto;
    }

  }

`
