import styled from "styled-components";

export const ContainerImgLogo = styled.div`

 & div {
  & .imgLogo {
    width: "20%";
    margin: "auto";
    display: "flex";
    padding: 5;
    border-radius: 5;
    background-color: red;

    @media (max-width: 923px) {
      width: "20%";
      margin: "auto";
      display: "flex";
      padding: 5;
      border-radius: 5;
    }
  }
 }
`

export const CartContainer = styled.div`
  position: fixed;
  position: absolute;
  width: 30%;
  display: flex;
  margin-left: 68.7%;
  margin-top: -120px;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
  //border: solid 1px;
  //border-color: red;
  //border-width: 5px;
  
  & a {
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;

    & button {
      font-weight: bold;
      font-size: 30px;
    }

    
  }
  @media (max-width: 923px) {
    width: 78%;
    margin-left: 19%;
    margin-top: -100px;
  }

  p {
    color: #222222;
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
`;

export const CartContent = styled.div`
  height: 60%;
  min-width: 8%;
  z-index: 200;
  background-color: white;
  overflow-y: scroll;
  border: 1px solid;
  position: fixed;

  @media (max-width: 923px) {
    min-width: 10%;
    height: 60%;
  }
`;
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;

  & .efectBtn {
    background: "red";
    width: "25px";
    height: "33px";
    border: "none";
  }
`;
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`;

export const Mais = styled.b`
  position: absolute;
  margin-top: 35px;
  margin-left: -130px;
`;

export const Menos = styled.b`
  position: absolute;
  margin-top: 35px;
  margin-left: -130px;
`;

export const cartQuantity = styled.b`
  margin: 10px;
`;

export const TableCartFinalize = styled.div`
  & table {
    width: 100%;
    margin: 0 auto;
    font-size: 1.2vw;
    color: white;
    background-image: linear-gradient(#03EBEB, #000000);
  
    & hr {
      width: 100%;
      margin: 0 auto;
      height: 1px;
      border: 0;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0)
      );
      margin-bottom: 20px;
    }

    & .logoTitle {
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      font-size: 2.5vw;
      color: aqua;
      text-shadow: 0 4px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
        0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
        0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
        0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);

      @media(max-width: 780px) {
        text-align: center;
        font-size: 5.5vw;

        text-shadow: 0 1px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
        0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
        0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
        0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
      }

      /*&:hover {
        background: gray;
        color: rgba(0, 255, 255, 0.582);
        padding: 10px;
        border-radius: 8px;
      }*/
    }

    & .namePosition {
      margin-top: -10px;
    } 

    @media(max-width: 923px) {

        & .namePosition {
          width: 100%;
          //position: absolute;
          margin-top: -26px;
          font-size: 2.5vw;
          padding: 10px;
        } 
      }

    & td {
      & .div1 {
        width: 115px;
        //border: solid 1px;
        border-radius: 8px;
        margin-top: 5px;

        & button {
          //background-color: white;

          @media (max-width: 923px) {
            margin-top: -3px;
            margin-bottom: 20px;
          }
        }

        @media(max-width: 923px) {
          width: 180px;

          & .namePosition {
            position: absolute;
            margin-top: -20px;
          } 
        }

      }

      & img {
        width: 100px;
        height: 100px;
        border-radius: 8px;
        margin-right: 10px;

        @media(max-width: 780px) {
          width: 80px;
          height: 70px;
          margin-right: 5px;
          margin-top: -0.8px;
        }
      }

      & .div2 {
        width: 80%;
        border-radius: 8px;
        margin-left: 15px;
      }

      & .divnome {
        margin-left: -50px;
        font-size: 1vw;

        @media(max-width: 923px) {
          //margin-top: -20px;
        }
      }

      & .divimg {
          position: absolute;

          & img {
            width: 150px;
            height: 150px;
          }
          //margin-top: -5px;
        }

      @media screen and (max-width: 923px) {
        font-size: 3vw;

        & .divimg {
          position: absolute;

          & img {
            width: 65px;
            height: 90px;
          }
          //margin-top: -5px;
        }

        & .divnome {
          margin-left: 40px;
          font-size: 1.8vw;
        }
      }
    }

    & thead {
      display: flex;

      & tr {

        & h2 {
          margin-top: 10px;
          font-weight: bold;
        }

        @media(max-width: 768px){
          & h2 {
            font-size: 4vw;
          }
        }
      }
    }

    & tbody {
      display: table;

      & img {
        width: 30%;
      }

      & td {
        display: table-cell;
        padding: 10px;
        width: 300px;

        & b {
          font-weight: bolder;

          @media (max-width: 768px) {
            position: absolute;
            
            & p {
              margin-top: 28px;
              margin-left: -60px;
              font-size: 12px;
            }
          }
        }

        & .divButton {
          width: 80px;
          border: solid 1px;
          display: inline-block;
          border-radius: 4px;

          & .btnButton {
            border: none;
            border-radius: 8px;
            padding-left: 5px;
            padding-right: 5px;
            background-color: transparent;
            font-weight: lighter;
            color: white;
            margin: 2px;

            @media(max-width: 923px) {
              width: 29px;
              
            }
          }

          @media(max-width: 923px) {
              margin-left: 12px;
              width: 75px;
            }
        }

        & .pUnidade {
            display: inline-block;
            margin: 8px;
          }
       

        & .button {
          border: solid 0.1px;
          border-radius: 8px;
          font-weight: bold;
          padding: 5px;
          background-color: transparent;
          color: white;
          margin: 8px;

          &:hover {
            background-color: rgba(0, 255, 255, 0.582);
            color: #000000;
            font-weight: bold;
          }

          @media (max-width: 923px) {
            width: 85px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    & table {
      width: 960;
      margin: 0 auto;

      & thead {
        display: flex;

        & tr {
          display: flex;
        }
      }

      & tbody {
        display: table;

        & img {
          width: 50px;
        }

        & td {
          display: table-cell;
          padding: 5px;
          width: 200px;
          font-size: 8p;

          & b {
            margin: 5px;
            font-size: 8p;
          }
        }
      }
    }
  }
`;

export const CartVazio = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;

  & .a {
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 3vw;
    width: 30%;
    height: 10vh;
    text-shadow: 0 0 0 10px #000000;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 6vw;
    }
  }
`

export const ContainerImg = styled.div`
   & img {
    width: 40%;
    margin: auto;
    display: flex;

    @media (max-width: 768px) {
      width: 80%;
      font-size: 6vw;
    }
  }
`

export const CartIcon = styled.div`
  text-align: left;
  color: #000000;
  margin-top: 5px;
  font-size: 25px;
  text-align: center;
`

export const ButtonCard = styled.button`
  background-color: aqua;
  width: 90%;
  font-weight: bold;
  margin-left: 15px;
  border: none;
  border-radius: 6px;
`

export const SubTotal = styled.div`
  width: 100%;
  font-size: 45px;
  text-align: center;
  margin: auto;
  color: green;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 26px;
    text-align: center;
    margin: auto;
  }
`;

export const Button = styled.button`
  background-color: aqua;
  border: none;
  border-radius: 6px;
  width: 30%;
  padding: 10px;
  text-align: center;
  margin-left: 35%;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;

  & a {
    text-decoration: none;
    text-align: center;
    color: black;
    border: none;
  }

  &:hover {
    background-color: rgba(0, 255, 255, 0.582);
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 15px;
    margin-left: 10%;
    margin-top: 70px;
  }
`;

export const ButtonClearCart = styled.button`
  background-color: aquamarine;
  border: none;
  border-radius: 6px;
  width: 10%;
  padding: 10px;
  text-align: center;
  margin-left: 1%;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background-color: red;
    color: white;
  }

  @media (max-width: 768px) {
    width: 30%;
    font-size: 15px;
    margin-left: 10%;
  }
`;
