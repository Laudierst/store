// CSS do component de slidsMenu

import styled from "styled-components"

export const Coontainer = styled.div`
  background: yellow;
  width: 100%;

  @media(max-width: 768px) {
    height: 100px;
  }

  & .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 150px;
    text-decoration-line: none;

    @media (max-width: 768px) {
      margin-left: 0px;
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
          margin-top: -7px;
          width: 125%;
          height: 6vh;
          object-fit: cover;
          border-radius: 40px;
          margin-left: -5px;
        }
        @media (max-width: 768px) {
          & img {
            width: 100%;
            height: 6.3vh;
            object-fit: cover;
            margin: auto;
            display: flex;
            border-radius: 40px;
            margin-top: -9px;
          }
        }
      }
    }

    & .info {
      margin-top: 16px;
      width: 100%;
      margin: auto;
      display: flex;
      
      & span {
        text-decoration: none;
        color: #000000;
      }

      & .name {
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        padding: 5px;
        text-decoration: none;

        @media (max-width: 1768px) {
          font-size: 0.8vw;
        }

        @media (max-width: 768px){
          font-size: 8px;
          margin-left: 10px;
          margin-top: 7px;
        }
      }

      @media (max-width: 768px){
        margin-top: -10px;
        width: 110%;
      }

    }
  }

  & .buttons1 {
    left: 0;
    position: absolute;
    width: 6%;
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
    margin-top: -40px;

    @media (max-width: 768px){
      opacity: 0;
      margin-top: -44px;
      margin-left: -10px;
    }
    
}

& .buttons2 {
  right: 0;
  position: absolute;
  width: 5%;
  height: 170px;
  background-color:rgba(255, 255, 255, 0);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  /*overflow: hidden;*/
  cursor: pointer;
  opacity: 1;
  margin-right: 0.3%;
  margin-top: -92px;
  
  @media (max-width: 768px){
    opacity: 0;
    margin-top: -104px;
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