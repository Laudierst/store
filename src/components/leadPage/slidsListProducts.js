import styled from "styled-components"

export const CoontainerSlids = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(to bottom, yellow);
  margin-top: -40px;

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
      padding: 5px;
      width: 400px;
      height: 46vh;
      flex: none;
      cursor: pointer;

      & .image {
        & img {
          width: 380px;
          height: 42vh;
          border-radius: 6px;
          //object-fit: cover;
        }
      }
      @media (max-width: 768px) {
        width: 200px;
        height: 40vh;

        & .image {
          & img {
            width: 190px;
            height: 40vh;
            object-fit: cover;
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
        /*border: solid 1px;*/
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
    right: 0;
    bottom: 0;
    top: 195%;
    position: absolute;
    width: 60px;
    height: 170px;
    background-color:rgba(255, 255, 255, 0);
    z-index: 99;
    //display: flex;
    align-items: center;
    justify-content: center;
    /*overflow: hidden;*/
    cursor: pointer;
    opacity: 1;
    margin-left: -1%;
    margin-top: 162px;

    @media (max-width: 1650px) {
      top: 306%;
    }

    @media (max-width: 968px){
      width: 30%;
      height: 170px;
      color: whitesmoke;
      display: none;
    }
}

& .buttons2 {
  right: 0;
  top: 316%;
  position: absolute;
  width: 60px;
  height: 170px;
  background-color:rgba(255, 255, 255, 0);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  /*overflow: hidden;*/
  cursor: pointer;
  opacity: 1;
  margin-left: 100%;
  margin-top: -1000px;

  @media (max-width: 1650px) {
    top: 456%;
  }

  @media (max-width: 1150px) {
    top: 122%;
  }  

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