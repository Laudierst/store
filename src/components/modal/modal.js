import styled from "styled-components";

export const ConatinerModal = styled.div`
  
  & div {

    & .btnEnviar {
      width: 100%;
      background: aqua;
      padding: 10px;
      border-radius: 8px;
      font-weight: bold;
      outline: none;
      border: none;

      &:hover {
        background: #00FF00;
        box-shadow: 0 0 0 0.px black;
        padding: 12px;
      }
    }

    & ul {

      & h5 {
        text-align: center;
        font-weight: bold;
        font-size: 1.2vw;
        margin-left: -50px;

        @media (max-width: 923px){
          font-size: 4.5vw;
          margin-left: -80px;
        }
      }
       
      & .liImageName {
        margin: auto;
        display: flex;
        width: 100%;
      }

      & li {
        width: 100%;
        list-style-type: none;
        font-weight: bold;
        font-size: 1.1vw;
        margin-left: -5px;

        & input {
          width: 100%;
          margin-top: 10px;
          border-radius: 6px;
          border: none;
          outline: none;

          &:focus {
            outline: none;
            background: #A9B6B6;
          }
        }

        & textarea {
          width: 100%;
          margin-top: 10px;
          border-radius: 6px;
          border: none;
          outline: none;

           &:focus {
            outline: none;
            background: #A9B6B6;
          }
        }

        @media (max-width: 923px){
          font-size: 4.5vw;
        }

      }
    }
    & .imageName {
      display: inline-block;
      margin: 2px;

      & h5 {
        text-align: center;
        font-weight: bold;
        font-size: 1.2vw;

        @media (max-width: 923px){
          font-size: 4.5vw;
        }
      }
    }
   
  }
`

export const ConatinerModalImageSlids = styled.div`
  background: transparent;
`

export const CFontainerImageProduct = styled.div`
  margin-top: 10px;
  margin: auto;
  
  & h5 {
    font-size: vw;
    width: 100%;
  }
 
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`
export const CoontainerSlids = styled.div`
  width: 20%;
  background: transparent;
  margin-top: -20px;

  @media screen and (max-width: 768px) {
    margin-top: -40px;
  }

  & .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-top: 40px;

    &::-webkit-scrollbar {
      display: none;
    }

    & .item {
      width: 100%;
      background-color: transparent;
      margin: 10px;
      padding: 10px;
      width: 400px;
      height: 42vh;
      flex: none;
      cursor: pointer;

      & .image {
        & img {
          width: 100%;
          height: 40vh;
          object-fit: cover;
        }
      }
      @media (max-width: 768px) {
        width: 110px;
        height: 20vh;

        & .image {
          & img {
            width: 128px;
            height: 18vh;
            object-fit: cover;
            margin-left: -20px;
          }
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
    margin-top: 1px;

   @media (max-width: 768px){
    margin-top: -40px;
    width: 30%;
    height: 170px;
    color: whitesmoke;
    display: none;
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
  margin-top: -178px;

  @media (max-width: 768px) {
    margin-top: -130px;
    width: 35%;
    height: 170px;
    color: whitesmoke;
    display: none;
  }
}

& button {
  border: none;
  background: transparent
}
`