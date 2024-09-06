import styled from "styled-components";

export const ProductContainerPai = styled.div`
 
`

export const ProductDescImage = styled.div`
  grid-area: l;
  width: 50vw;
  height: 50vh;
    
  & img {
    width: 42vw;
    //object-fit: cover;
    height: 80vh;
    margin-left: 80px;
  }


  @media (max-width: 1750px) {
    margin-top: -20px;

    & img {
      width: 45vw;
      //object-fit: cover;
      height: 80vh;
      margin-left: 40px;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1068px) {
   
    margin-top: -20px;

    & img {
      width: 45vw;
      //object-fit: cover;
      height: 55vh;
      margin-left: 40px;
      margin-top: 20px;
    }
  }


  @media screen and (max-width: 968px) {
    margin-top: -5px;
   
    & img {
      width: 45vw;
      //object-fit: cover;
      height: 55vh;
      margin-left: 40px;
      margin-top: 20px;
    }
  }

  
  @media screen and (max-width: 768px) {
    margin-top: -2050px;

    & img {
      width: 200%;
      object-fit: cover;
      height: 60vh;
      margin-left: -50px;
      margin-top: 150px;
    }
  }

`
export const ProductImageMini = styled.div`
  margin-top: -710px;
  position: absolute;

  & .imgMini {
    margin: 1px;
    margin-left: -24px;

    & img {
      width: 5vw;
      height: 5vw;
      object-fit: cover;
      margin-left: -15px;
      //display: grid;

      &:hover {
        border: solid 2px;
        border-color: aqua;
      }

      @media (max-width: 1750px) {
        margin-left: -40px;
      }
    

      @media screen and (max-width: 1168px) {
        width: 9vw;
        height: 9vw;
        margin-left: -40px;
        display: none;
      }

      @media screen and (max-width: 968px) {
        width: 6vw;
        height: 6vw;
      }

      @media screen and (max-width: 768px) {
        width: 12vw;
        height: 12vw;
      }
    }
    
    @media screen and (max-width: 768px) {
      margin-left: 30px;
      height: 10vh;
      display: none;
      margin-top: -535px;
      position: absolute;
  
      & img {
        width: 20vw;
        height: 22vw;
        //object-fit: cover;
        margin-left: -55px;
      }
    }
  }
`
export const ProductDescPrimary = styled.div`
  width: 17vw;
  grid-area: r;
  margin-left: 10px;

  @media (max-width: 1750px) {
    width: 17vw;
    grid-area: r;
    margin-left: -20px;
  }

  @media (max-width: 1350px) {
    width: 17vw;
    margin-left: 10px;
  }

  @media (max-width: 1171px) {
    width: 20vw;
    margin-left: 40px;
  }

  @media (max-width: 970px) {

  }

  @media (max-width: 780px) {
    margin-top: 600px;
    margin-left: 0px;
    width: 95%;
    
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

  & .divDesc {

  margin: auto;
    & h5 {
      width: 75%;
      & strong {
        font-size: 1.2vw;

        @media screen and (max-width: 768px) {
          font-size: 4.2vw;
        }
      }
    }
  }
`
export const ProductDescPrimary2 = styled.div`
  width: 14vw;
  grid-area: r;
  margin-left: 350px;

  @media (max-width: 1750px) {
    width: 17vw;
    margin-left: 265px;
  }

  @media (max-width: 1350px) {
    width: 20vw;
    margin-left: 280px;
  }

  @media (max-width: 1171px) {
    width: 14vw;
  }

  @media (max-width: 970px) {
    width: 20vw;
    margin-left: 250px;
  }

  @media (max-width: 780px) {
    margin-top: 1200px;
    margin-left: 0px;
    width: 86%;
  }

  & button {
    background: aqua;
    border: none;
    margin: 1.5px;
    padding: 5px;
    width: 100%;
    border-radius: 8px;
    font-weight: bold;

    &:hover {
      background: #FDD201;
      box-shadow: 0 0 0 0.3px black;
    }
  }

  & .divDesc {
    & h5 {
      & strong {
        font-size: 2vw;
      }
    }
  }
`
export const ProductDescSecudanry = styled.div`
  grid-area: f;
  margin-top: 230px;
  font-size: 1.5vw;
  text-align: justify;

  & h4 {
    margin-top: -30px;
  }

  & h1 {
    font-size: 2vw;
  }

  & .btnButtonModal {
      margin: auto;
      display: flex;
      padding: 8px;
      background: aqua;
      outline: none;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 60px;
      margin-bottom: 30px;
      font-size: 2vw;

      &:hover {
        background: white;
        box-shadow: 0 0 0 0.3px black;
      }

      @media (max-width: 768px) {
        font-size: 3.6vw;
      }
    }

  @media (max-width: 1750px) {
    margin-top: 80px;
  }

  @media (max-width: 1350px) {
   
  }

  @media (max-width: 1171px) {
    margin-top: 50px;
  }

  @media (max-width: 970px) {
  
  }

  @media (max-width: 768px) {
    margin-top: 200px;
    margin-left: 0px;
    text-align: justify;
    width: 86%;
    font-size: 2.8vw;

    & h1 {
      font-size: 5vw;
    }

    & h4 {
      font-size: 5vw;
    }

    & p {
      font-size: 4vw;
    }
  }
`

export const ProductDescAvaliation = styled.div`
  grid-area: f;
  margin-top: 150px;

  @media (max-width: 1750px) {
    margin-top: 250px;
  }

  @media (max-width: 1350px) {
    
  }

  @media (max-width: 1171px) {
    margin-top: 350px;
  }

  @media (max-width: 970px) {
    
  }

  @media (max-width: 780px) {

  }
`

 