import styled from "styled-components";

export const Slids2 = styled.div`
  max-width: 900px;
  height: 300px;
  display: flex;
  margin: auto;
  cursor: grab;
  overflow: hidden;

  & div {
    display: flex;
  }

  & img {
    width: 900px;
    height: 300px;
    margin: auto;
    display: flex;
    padding: 5px;
    border-radius: 12px;
    pointer-events: none;
  }
`;

export const Slids = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 400px;
  overflow: hidden;
  display: flex;

  & input {
    display: flex;
  }

  & img {
    width: 800px;
    position: relative;
  }

  & label {
    position: absolute;
    width: 80px;
    margin-top: -40px;
    display: flex;
    justify-content: center;

    & button {
      border: 2px solid #000;
      padding: 5px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`
export const ContainerPRT = styled.div`
  margin-top: 20px;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #FDD201;

  & ul {
    display: flex;
    margin: auto;

    & li {
      display: inline-block;
      margin: 5px;
      padding: 1px;
      border-radius: 50px;
      border-color: "rgb(159, 161, 161)";
      border: solid 0px;
      
      & a {
        margin: 5px;
        & span {
          & img {
            width: 60px;
            height: 5vh;
            border-radius: 50px;
          }
        }
      }

      & p {
        text-align: center;

        @media (max-width: 768px) {
          font-size: 2vw;
        }
      }

      @media (max-width: 768px) {
        width: 10%;
        margin-top: 10px;
        padding: 5px;
        margin: 3px;
        
        & a {
          & span {
            & img {
              width: 30px;
              height: 4vh;
              padding: -10px;
              border-radius: 50px;
              margin-left: -4px;
            }
          }
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
        background-color: #ffff;

        & .li {
          padding: -15px;
        }

        & a {
          color: #000000;
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

export const buttonContainer = styled.button`
  & button {
    & span {
      & .carousel-control-next-icon {
        color: red;
      }
    }
  }
`

export const ContainerSlid = styled.div`
width: 100%;
margin-top: 2px;

  & div {
    & img {
      height: 55vh;
    }
  }

  @media (max-width: 968px) {
   & div {
    & img {      
      height: 260px;
    }
   }
  }

  @media (max-width: 768px) {
   & div {
    & img {      
      height: 180px;
    }
   }
  }
`
