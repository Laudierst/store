// CSS do component de slidsMenu

import styled from "styled-components"

export const Coontainer = styled.div`
  //background-image: linear-gradient(#03EBEB, #000000);
  //background-image: linear-gradient(#03EBEB, #001414);
  background: transparent;
  width: 100%;

  @media(max-width: 768px) {
    height: 100px;
  }

  & .carousel {
    //border: solid 1px;
    width: 60%;
    display: flex;
    margin: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    text-decoration-line: none;

    @media (max-width: 923px) {
      width: 100%;
      display: flex;
      margin: auto;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    & .item {
      background-color: white;
      margin: auto;
      display: flex;
      padding: 10px;
      width: 60px;
      height: 7vh;
      border-radius: 50px;
      flex: none;
      cursor: pointer;
      color: aqua;
      margin-top: 5px;
      text-decoration-line: none;

      
      &:hover {
        background-color: darkgray;
      }

      & .image {
        & img {
          width: 50px;
          height: 6vh;
          object-fit: cover;
          border-radius: 60px;
          margin-left: -5px;
          margin-top: -4px;
        }
        @media (max-width: 768px) {
          & img {
            width: 50px;
            height: 6vh;
            object-fit: cover;
            border-radius: 60px;
            margin-left: -5px;
            margin-top: -6px;
          }
        }
      }
    }

    & .info {
      margin-top: 16px;
      width: 100%;
      margin: auto;
      text-align: center;
      
      & span {
        text-decoration: none;
        color: white;
        text-align: center;
      }

      & .name {
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        padding: 5px;
        text-decoration: none;
        color: #000000;

        @media (max-width: 923px){
          font-size: 10px;
          margin-left: 10px;
          text-align: center;
        }
      }

      @media (max-width: 923px){
        text-align: center;
        width: 110%;
        margin: auto;
        display: flex;
      }

    }
  }

  & .buttons1 {
    left: 0;
    position: absolute;
    width: 2%;
    height: 170px;
    /*background-color:rgba(255, 255, 255, 0);*/
    /*background-color: green;*/
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    /*overflow: hidden;*/
    cursor: pointer;
    opacity: 1;
    margin-left: 0%;
    margin-top: -40px;

    @media (max-width: 10200px){
      margin-top: -44px;
    }

    @media (max-width: 968px){
      opacity: 0;
      margin-top: -44px;
      display: none;
    }
    
}

& .buttons2 {
  right: 0;
  position: absolute;
  width: -2%;
  height: 170px;
  background-color:rgba(255, 255, 255, 0);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  /*overflow: hidden;*/
  cursor: pointer;
  opacity: 1;
  margin-top: -105px;

  @media (max-width: 10200px){
      margin-top: -94px;
    }

  @media (max-width: 968px){
    opacity: 1;
    margin-top: -86px;
    display: none;
  }
}

& button {
  border: none;
  background: transparent;
} 
`
export const DivContainerHederFixo = styled.div`
  position: fixed;
`