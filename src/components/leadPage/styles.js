import styled from "styled-components";

export const ConatinerMain = styled.div`
  margin-top: 7%;
  width: 100vw;
  display: none;

  & .divImg {
    width: 300px;
  }

  & .div1 {
    width: 70px;
    margin-left: -67%;
    margin-top: 2px;
    

    & img {
      width: 80px;
      height: 7vh;
    }

    @media (max-width: 968px) {
      width: 40px;
      margin-left: 30%;
      
      & img {
        width: 40px;
        margin-top: 2px;
      }

    }

    @media (max-width: 768px) {
      width: 40px;
      margin-left: 30%;
      
      & img {
        width: 40px;
        margin-top: 2px;
      }

    }
    
  }

  & .div2 {
    width: 80%;
    display: flex;
    margin: auto;

    & .imfM {
      width: 50%;
      margin-left: 12px;
    }

    & .formatImg {
      height: 80vh;
    }

    & img {
      width: 50%;
    }

    @media (max-width: 1350px) {
      & .formatImg {
        height: 40vh;
        margin-bottom: 10%;
      }
    }

    @media (max-width: 768px) {
      width: 90%;
      margin-left: 0%;
      margin-top: 30px;
      
      & img {
        width: 80%;
        display: flex;
        margin: auto;
      }

      & .formatImg {
        width: 100vw;
        height: 30vh;
        margin-left: 50px;
      }
      
      & h4 {
        font-size: 2vw;
      }
    }
  }

  & .div3 {
    margin-top: -2px;
    margin-left: -3px;
    width: 80px;
    position: absolute;

    & img {
      width: 100%;
      border: solid 1px;

      &:hover {
        border-color: aqua;
      }
    }

    @media (max-width: 1350px) {
      & img {
        width: 40px;
      }
    }

    @media (max-width: 971px) {
      width: 8%;

      & img {
        width: 40px;
      }
    }

    @media (max-width: 850px) {

      & img {
        width: 40px;
      }
    }

    @media (max-width: 680px) {

      & img {
        width: 40px;
      }
    }

    @media (max-width: 280px) {
    
      & img {
        width: 10px;
        font-size: 10px;
      }
    }
    
  }

  @media (max-width: 768px) {
    display: block;
  }

`

export const ContainerDesc = styled.div`

& .efctButton {
    padding: 3px;
    border-radius: 5px;
    margin-top: -15px;

    & button {
      &:hover {
        box-shadow: 0 0 0 3px white;
      }
    }
}
& .btnButton {
  margin-bottom: 30px;

  & button {
    &:hover {
      box-shadow: 0 0 0 2px gray;
    }
  }

  & p {
    margin-bottom: -1px;
  }
}

@media (max-width: 1750px) {
  position: inherit;
  margin-top: 10%;
}

@media (max-width: 1550px) {
  position: inherit;
  margin-top: -12%;
}

@media (max-width: 1350px) {
  position: inherit;
  margin-top: 10%;
}

@media (max-width: 1150px) {
  position: inherit;
  margin-top: 14%;
}

@media (max-width: 950px) {
  position: inherit;
  margin-top: 15%;
}

@media (max-width: 768px) {
  width: 95%;
  margin: auto;
  position: inherit;
  margin-top: 2%;
  font-size: 3vw;
}

& .divdesc {
  width: 16%;
  margin: auto;  
  margin-top: -41%;
  margin-left: 52%;
  font-size: 1vw;

  & .Favorit {
    display: none;
    opacity: 1;
    cursor: pointer;

    & .addFavorit {
      position: absolute;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .removeFavorit {
      position: absolute;
      color: red;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .compartilhar {
      position: absolute;
      margin-top: 50px;
      margin-left: 200px;
      font-size: 1.5vw;
    }

    &:hover {
      opacity: 1;
    }

  }

  @media (max-width: 1750px) {
    position: inherit;
    margin-top: -47.5%;

    & .Favorit {
    opacity: 1;

    & .addFavorit {
      position: absolute;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .removeFavorit {
      position: absolute;
      color: red;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .compartilhar {
      position: absolute;
      margin-top: 50px;
      margin-left: 180px;
      font-size: 1.5vw;
    }

    &:hover {
      opacity: 1;
    }

  }
  }

  @media (max-width: 1550px) {
    position: inherit;
    margin-top: -52%;

    & .Favorit {
    opacity: 1;

    & .addFavorit {
      position: absolute;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .removeFavorit {
      position: absolute;
      color: red;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .compartilhar {
      position: absolute;
      margin-top: 50px;
      margin-left: 160px;
      font-size: 1.5vw;
    }

    &:hover {
      opacity: 1;
    }

  }
  }

  @media (max-width: 1350px) {
    position: inherit;
    margin-top: -40%;

    & .Favorit {
    opacity: 1;

    & .addFavorit {
      position: absolute;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .removeFavorit {
      position: absolute;
      color: red;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .compartilhar {
      position: absolute;
      margin-top: 50px;
      margin-left: 130px;
      font-size: 1.5vw;
    }

    &:hover {
      opacity: 1;
    }

  }
  }

  @media (max-width: 1150px) {
    position: inherit;
    margin-top: -49%;

    & .Favorit {
    opacity: 1;

    & .addFavorit {
      position: absolute;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .removeFavorit {
      position: absolute;
      color: red;
      margin-top: 50px;
       font-size: 1.5vw;
    }

    & .compartilhar {
      position: absolute;
      margin-top: 50px;
      margin-left: 110px;
      font-size: 1.5vw;
    }

    &:hover {
      opacity: 1;
    }

  }
  }

  @media (max-width: 950px) {
    position: inherit;
    margin-top: -56%;

      & .Favorit {
      opacity: 1;

      & .addFavorit {
        position: absolute;
        margin-top: -260px;
        font-size: 3vw;
      }

      & .removeFavorit {
        position: absolute;
        color: red;
        margin-top: -260px;
        font-size: 3vw;
      }

      & .compartilhar {
        position: absolute;
        margin-left: 300px;
        margin-top: -260px;
        font-size: 3vw;
      }

      &:hover {
        opacity: 1;
      }

    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    position: inherit;
    font-size: 3vw;

    & .Favorit {
      opacity: 1;

      & .addFavorit {
        position: absolute;
        margin-top: -40px;
        font-size: 5vw;
      }

      & .removeFavorit {
        position: absolute;
        color: red;
        margin-top: -400px;
        font-size: 5vw;
      }

      & .compartilhar {
        position: absolute;
        margin-left: 25px;
        margin-top: -400px;
        font-size: 5vw;
      }

      &:hover {
        opacity: 1;
      }

    }
  }

  & .h4 {
      width: 15px;
    }

  & h5 {
    font-size: 1vw;
  }

  & h4 {
    font-size: 1vw;
  }

  & h1 {
    font-weight: bold;
    font-size: 2vw;
    
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    position: inherit;
    font-size: 3vw;

    & h5 {
      font-size: 5vw;
    }

    & h4 {
      font-size: 5vw;
    }

    & h1 {
      font-size: 8vw;
    }
  }

  & button {
    margin: 2px;
    border: none;
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: #FDD201;
      box-shadow: 0 0 0 0.3px black;
    }
  }
}

& .divdescSecudare2 {
  width: 13%;
  margin: auto;
  margin-top: -34.3%;
  margin-left: 70%;
  font-size: 1vw;

  @media (max-width: 1750px) {
    position: inherit;
    margin-top: -36%;
  }

  @media (max-width: 1550px) {
    position: inherit;
    margin-top: -26.5%;
  }

  @media (max-width: 1350px) {
    position: inherit;
    margin-top: -35%;
  }

  @media (max-width: 1150px) {
    position: inherit;
    margin-top: -38%;
  }

  @media (max-width: 923px) {
    position: inherit;
    margin-top: -45%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    position: inherit;
    font-size: 3vw;
  }

  & button {
    background-color: aqua;
    width: 80%;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    margin: 3px;
    padding: 5px;

    &:hover {
      background-color: #00FF00;
    }
  }
}
`
export const ContainerSobre = styled.div`
  width: 50%;
  margin-left: 10%;
  margin-top: 5%;

  & p {
    text-align: justify;
    font-size: 1.5vw;
  }

  @media (max-width: 1768px) {
    width: 80%;
    margin-top: 1%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10%;

    & h4 {
      font-size: 5vw;
      font-weight: bold;
    }

    & p {
      text-align: justify;
      font-size: 2.8vw;
  
    }

  }
`

export const ProductOfertas = styled.div`
  width: 90%;
  margin: auto;
  display: flex;

  & div {
    display: inline-block;
    width: 300px;
    height: 200px;
    margin: 3px;
    margin-top: 15px;

    & h3 {
      font-size: 0.8vw;
    }

    & p {
      font-weight: bold;
    }
    
    & button {
      background-color: aqua;
      width: 100%;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      margin: 3px;
      padding: 5px;

      &:hover {
        background-color: #00FF00;
      }
    }
    
    & img {
      width: 100%;
      height: 30vh;
    }

    @media (max-width: 768px) {

      display: inline-block;
      width: 100px;
      height: 200px;
      margin: 3px;
      margin-top: 15px;

      & button {
        font-size: 2.8vw;
      }
    
      & img {
        width: 100%;
        height: 18vh;
      }
    }
  }
`

//Slids de Ofertas

export const CoontainerTeste = styled.div`
  width: 100%;
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


  & .carousel {
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

        @media(max-width: 923px) {
          width: 95%;
          
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


`

export const CarouselProduct = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  margin-top: 10px;
`

