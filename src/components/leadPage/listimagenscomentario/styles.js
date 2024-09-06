import styled from "styled-components";

export const Container = styled.div`
  
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  & .bg {
    background: var(--color, red);
    border-radius: 20px;
    padding: 1px;
    width: 20px;
    margin-left: 25px;
    margin-top: -7px;
    text-align: center;
  }

  & form {
    margin-left: 30%;
    width: 45%;
    border: none;
    border-radius: 20px;

    & input {
      align-items: center;
      margin: auto;
      display: flex;
      width: 75%;
      border: none;
      border-radius: 20px;
      background: #eee;
      border-color: #eee;
      text-align: center;
      outline: none;
      text-align: center;

      &:hover {
        background: #eee;
        border: none;
      }    

    }
    @media(max-width: 768px){
      width: 1100px;
      margin-left: 2%;
    }

    & .lupaMarge {
      margin-top: -28px;
      margin-left: 69%;
      font-size: 30px;
      position: absolute;
      color: #000000;
    }
  
  }

  & .lupa3 {
    position: absolute;
    margin-left: 71.3%;
    margin-top: 0.5px;
    font-size: 1.5vw;
    color: #000000;

    @media(max-width: 1780px) {
      margin-left: 70.6%;
      margin-top: -1px;
      font-size: 2vw;
    }

    @media(max-width: 1150px) {
      margin-left: 68%;
      margin-top: 1px;
      font-size: 3vw;
    }
    
    @media(max-width: 1580px) {
      margin-left: 68%;
      margin-top: 1px;
      font-size: 3vw;
    }

    @media(max-width: 768px) {
      margin-left: 82%;
      margin-top: 1px;
      font-size: 6vw;
    }
  }

`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 2.5vw;
  text-shadow: 0 5px 0 rgb(121, 116, 116), 0 3px 0 #c9c9c9, 0 1px 0 #bbb,
    0 1px 0 #b9b9b9, 0 1px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);

  & a {
    margin-left: 1px;
    color: white;
    text-decoration: none;

    &:hover {
      color: aqua;
    }

    @media (max-width: 768px) {
      font-size: 7vw;
      margin-left: -15px;
    }
  }
`;

export const Buttons = styled.div`
  float: right;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
    b {
      position: absolute;
      margin-left: 14px;
      margin-top: 7px;
      font-size: 11px;
    }
  }

  @media (max-width: 768px){
    margin-top: -3px;
    margin-left: -12px;
    position: absolute;
  }
`;

export const ContainerAMR = styled.div`
  width: 100%;
  background-color: #FDD201;
  text-decoration: none;
  justify-content: space-between;
  color: #eee;
  padding: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  text-align: center;

  & .img3 {
    position: absolute;
    width: 5%;
    margin-left: -200px;
    border-radius: 50px;
    padding: 10px;
    margin-top: -5px;

    @media (max-width: 1750px) {
      margin-left: -175px;
      margin-top: -5px;
      width: 5%;
    }

    @media (max-width: 1550px) {
      margin-left: -175px;
      margin-top: -5px;
      width: 5%;
    }

    @media (max-width: 1300px) {
      margin-left: -135px;
      margin-top: -5px;
      width: 5%;
    }
    
    @media (max-width: 1100px) {
      margin-left: -115px;
      margin-top: -5px;
      width: 5%;
    }

    @media(max-width: 1024px) {
      margin-left: -110px;
      margin-top: -10px;
      width: 5%;
    }

    @media(max-width: 998px) {
      margin-left: -110px;
      margin-top: -10px;
      width: 5%;
    }

    @media(max-width: 768px) {
      margin-left: -125px;
      margin-top: -5px;
      width: 14%;
    }
  }
  
  & img {
    position: absolute;
    margin-left: -50%;
    margin-top: 12px;
    width: 150px;
    
    @media (max-width: 1300px) {
      margin-left: -50%;
      margin-top: 5px;
      width: 130px;
    }
    
    @media (max-width: 1100px) {
      margin-left: -50%;
      margin-top: 5px;
      width: 120px;
    }
    
    @media (max-width: 768px) {
      margin-left: -50%;
      margin-top: 5px;
      width: 80px;
    }
  }
  
  & a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    background: #FDD201;
  }
  `;

export const CartIconVazio = styled.div`
  width: 5%;
`

export const ContainerPRT = styled.div`
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  & ul {
    display: flex;
    margin: auto;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: -12px;
    }

    & li {
      display: inline-block;
      margin-left: 50px;
      padding: 0px 10px;
      border-radius: 6px;

      @media (max-width: 768px) {
        width: 100%;
        margin: 0px 8px 1px 5px;
        margin-left: -15px;
        margin-bottom: 5px;
        
        & a {
          color: #000000;
        }

        & .h4 {
          display: mome;
        }

        & span {
          position: absolute;
          margin-top: -20px;
          margin-left: -1px;

        }
        
      }

     
      & button {
        text-decoration: none;
        background-color: #000000;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 20px;

        &:hover {
          background-color: #FDD201;
          color: #000000;
        }

        @media (max-width: 768px) {
          width: 100%;
          margin-left: -10px;
          font-size: 1.8vw;
        }
      }
      

      &:hover {
        background-color: rgba(128, 128, 128, 0.464);
        
        & .li {
          padding: -15px;
        }

      }

      & a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 20px;

        @media (max-width: 768px) {
          width: 100%;
          margin-left: -10px;
          font-size: 1.8vw;
          margin-left: 1px;
        }
      }
    }
  }
`
export const DropDow = styled.div`

  list-style:none;
  margin-top: -4px;  

  & ul{
    position: absolute;
  }

  & div li a{
    color:#333; 
    text-decoration:none; 
    display:block;
    font-size: 1vw;

    @media (max-width: 768px) {
      font-size: 2vw;
      position: absolute;
    }
  }



  & ul{
    position:absolute;
    top:32px;
    margin-left:-80px;
    background-color:#fff;
    display:none;
    border-radius: 10px;
    text-align: left;
    
  }

  & li:hover ul, li.over ul{display:block;}

  &:hover{
    background: transparent;
  }

  @media (max-width: 768px) {

    margin-top: 0px;

    & ul{
      position:absolute;
      width: 120px;
      top:32px;
      margin-left:-50px;
      background-color:#fff;
      display:none;
      border-radius: 10px;
      text-align: left;
      border: 1px;
      
    }
  }
  
`

export const IcomCategory = styled.div`
  position: absolute;
  color: #ffff;
  margin-left: 48px;
  margin-top: 10px;
`
export const DivContainer = styled.div`
  position: inherit;
  border-radius: 6px;
  width: 24%;
  margin-top: 37px;
  background: #000000;
  text-decoration: none;
  
  & p {
    position: absolute;
    text-decoration: none;
    margin-left: -39%;
    margin-top: 8px;
    cursor: pointer;
  }

  & img {
    width: 70px;
    height: 80px;
    margin-left: -200%;
    margin-top: 6px;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    position: inherit;
    width: 80%;
    margin-left: -100px;
    font-size: vw;
    background: #000000;

    & p {
      position: absolute;
      width: 60%;
      text-decoration: none;
      margin-left: -45%;
      margin-top: 8px;
      font-size: 3vw;
      cursor: pointer;
    }

    & img {
      width: 70px;
      height: 80px;
      margin-left: -300%;
      margin-top: 6px;
      cursor: pointer;
    }

    & .lupa4 {
      color: white;
    }
  }
  
`

export const DivContainerHederFixed = styled.div`
  position: fixed;
`
