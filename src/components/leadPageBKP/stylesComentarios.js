import styled from "styled-components";

export const ContainerComentario = styled.div`
  margin-top:60px;
  padding: 5px;

  & .btnButtonModalImageComentario {
    border: none;
  }

  & h1 {
    color: #222222;
    text-align: center;
    font-size: 3vw;
    margin-bottom: 1px;
    display: inline-block;

    @media(max-width: 923px) {
      font-size: 5vw;
      margin-bottom: 0px;
    }
  }

  & .imgName {
    margin-top: -3%;
    width: 50px;
    height: 50px;
    border-radius: 80px;
    display: inline-block;
    border: solid 1px;

    @media (max-width: 768px) {
      width: 10%;
      font-size: 2.5vw;
      
    }
  }

  & h5 {
    font-size: 1.2vw;
    font-weight: bold;
    display: inline-block;
    margin-left: 5px;

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  & p {
    font-size: 1.2vw;
    display: inline-block;

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  & .imgList {
    width: 90px;
    height: 90px;
    margin: 3px;
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 70px;
      height: 80px;
      margin: 3px;
      border-radius: 8px;
    }

    &:hover {
      border: solid 0.5px;
    }
  }

  & .btnButtonModal {
      margin-left: 70%;
      padding: 8px;
      background: aqua;
      outline: none;
      border: none;
      border-radius: 6px;
      font-weight: bold;

      &:hover {
        background: yellow;
        box-shadow: 0 0 0 0.3px black;
      }

      @media (max-width: 768px) {
        font-size: 2.6vw;
      }
    }
  

  @media (max-width: 923px) {
    padding: 5px;

    & .btnButtonModal {
      padding: 8px;
      margin-left: 150px;
      background: aqua;
      outline: none;
      border: none;
      border-radius: 6px;
      font-weight: bold;

      &:hover {
        background: #00FF00;
        box-shadow: 0 0 0 0.px black;
        padding: 12px;
      }

      @media (max-width: 768px) {
        font-size: 2.6vw;
      }
    }
  }

  @media (max-width: 768px) {
  }
  
`

export const ConatinerImageSlids = styled.div`
  background: transparent;
`
