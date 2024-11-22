import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  margin-top: 15%;
  background-color: #001414;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  & .a-img {
    width: 50px;
    height: 10;
    border-radius: 10px;
    margin: 5px;

    @media screen and (max-width: 768px) {
      width: 30px;
      margin: 0px;
    }
  }

  & .t {
    text-decoration: none;
  }

  & .a {
      position: absolute;
      margin-top: 20px;
      margin-left: 500px;
      font-weight: bold;
      background-color: white;
      padding: 5px;
      border-radius: 6px;
      text-decoration: none;

      &:hover {
        background-color: aqua;
        color: green;
      }
    }
  
  @media (max-width: 1550px) {
    & .a {
      position: absolute;
      margin-top: 20px;
      margin-left: 350px;
      font-weight: bold;
      background-color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }

  @media (max-width: 1350px) {
    & .a {
      position: absolute;
      margin-top: 20px;
      margin-left: 300px;
      font-weight: bold;
      background-color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }

  @media (max-width: 1150px) {
    & .a {
      position: absolute;
      margin-top: 10px;
      margin-left: 240px;
      font-weight: bold;
      background-color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    width: 100%;

    & .a {
      position: absolute;
      margin-top: -43px;
      margin-left: 90px;
      font-weight: bold;
      background-color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }


  & h2 {
    font-weight: bold;
    font-size: 2.5vw;
    text-shadow: 0 5px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
      0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    position: absolute;
    //margin-left: 100px;
    margin-top: -25px;
    margin: auto;
    color: white;

    @media (max-width: 768px) {
      margin-left: 25px;
      margin-top: 0px;
      font-size: 8vw;
    }
  }

  & span {
    
    margin-top: -35px;
    margin-left: 50.2%;
    font-weight: bold;
    font-size: 20px;
    color: aqua;

    @media (max-width: 1368px) {
      width: 80%;
      margin-left: 550px;
      margin-top: -35px;
      font-size: 20px;

    }

    @media (max-width: 1068px) {
      width: 80%;
      margin-left: 380px;
      margin-top: -35px;
      font-size: 15px;

    }

    @media (max-width: 868px) {
      width: 80%;
      margin-left: 280px;
      margin-top: -25px;
      font-size: 15px;

    }

    @media (max-width: 768px) {
      width: 80%;
      margin-left: 10px;
      margin-top: 75px;
      font-size: 15px;

    }
  }

  & form {
    width: 50%;
    margin-left: 53%;
    border: none;

    @media (max-width: 768px) {
        & h5 {
          text-align: center;
          margin-top: -75px;
          font-size: 11px;
        }
      }

    & input {
      width: 250px;
      background-color: white;
      border-radius: 8px;
      border: none;
      padding: 10px;
      margin: 5px;

      @media (max-width: 768px) {
        width: 100%;
        background-color: white;
        border-radius: 8px;
        border: none;
        padding: 10px;
        margin: 2px;

        & h5 {
          margin: auto;
          display: flex;
        }
      }

    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 150px;
      margin-left: 0%;
    }

    & .btnInput {
      background-color: aqua;
      padding: 10px;
      border: none;
      width: 80px;
      text-align: center;
      border-radius: 8px;

      &:hover {
        background-color: aquamarine; /*teal*/
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-left: 4px;
      }
    }

    & textarea {
      border-radius: 6px;
    }
    
  }
`;

export const ContainerFooter2 = styled.div`
  width: 100%;
  background-color: #001414;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  border: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: -50px;
    padding: 40px;
  }

  & .links {
    text-decoration: none;
    color: #eee;

    &:hover{
      color: #7fffd4;
    }

    @media screen and (max-width: 768px) {
     font-size: 10px;
    }
  }

  & .imgSeg {

    & img {
      margin-top: -50px;
      width: 100%;
      height: 17vh;

      @media screen and (max-width: 768px) {
        margin-top: 12px;
        width: 100%;
        height: 5vh;
      }
    }
  }

  & div {
    width: 400px;
    
    & img {
      width: 10%;
      height: 4vh;
      margin: 1px;
      margin-top: 1px;
    }

    & .img {
      width: 50%;
      height: 8vh;
    }

    @media screen and (max-width: 923px) {
      margin-left: 20px;

      & h3 {
        font-size: 15px;
      }

      & h4 {
        font-size: 11px;
      }

      & img {
        width: 15px;
        height: 2vh;
        margin: 1px;
        margin-top: 1px;
      }

      & .img {
        width: 120%;
        height: 5vh;
      }
    }
  }
`;

export const ContainerFooter1 = styled.div`
  width: 100%;
  background-color: #001414;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  & .social {
    width: 60%;
    
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 25px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: -50px;
    padding: 40px;
    
    & div {
      font-size: 2.5vw;
    }
  }

  & div {
    width: 600px;
    
    & img {
      width: 10%;
      height: 5vh;
      margin: 1px;
      margin-top: 1px;
    }

    @media screen and (max-width: 768px) {
      margin-left: 20px;

      & h3 {
        font-size: 15px;
      }

      & h4 {
        font-size: 12px;
      }

      & img {
        width: 25px;
        height: 3vh;
        margin: 2px;
        margin-top: 3px;
    }
  }

  & .ssl {
    width: 20%;
  }
}
`;

export const ContainerFooter3 = styled.div`
  width: 100%;
  background-color: #001414;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  & div {
    width: 600px;
    
    & img {
      width: 60px;
      height: 5vh;
      margin: 2px;
      margin-top: 3px;
    }

    @media screen and (max-width: 768px) {
      margin-left: 20px;

      & h3 {
        font-size: 15px;
      }

      & h4 {
        font-size: 12px;
      }

      & img {
        width: 25px;
        height: 3vh;
        margin: 2px;
        margin-top: 3px;
    }
  }
}
`;





