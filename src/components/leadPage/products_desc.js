import styled from "styled-components";

export const ProductContainerPai = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  display: flex;
  margin-top: 50px;

  display: grid;
  grid-template-areas: "l r" "f f";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;

  @media screen and (max-width: 923px) {
    margin-top: 150px;
    grid-template-areas: "r" "l" "f";
    grid-template-columns: 1fr;
  }
`

export const ProductDescImage = styled.div`
  grid-area: l;
  width: 50vw;
  margin-left: 110px;
  background: white;

  & .swiper {
    width: 90%;
    color: transparent;
  }
 
  & img {
    width: 42vw;
    //object-fit: cover;
    height: 80vh;
    margin-left: 80px;
  }

  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1750px) {
    margin-top: -20px;

    & .swiper {
      width: 90%;
      height: 100vh;
    }

    & img {
      width: 45vw;
      //object-fit: cover;
      height: 100vh;
      margin-left: 20px;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1168px) {
   
    margin-top: -30px;
    margin-left: -30px;

    & img {
      width: 55vw;
      //object-fit: cover;
      height: 55vh;
      margin-left: 40px;
      margin-top: 20px;
    }
  }


  @media screen and (max-width: 923px) {
    /*margin-top: -2000px;
    width: 100vw;
    height: 0vh;
    margin-left: -45.5px;
    //border: solid 1px;


  & .swiper {
    width: 111%;
    height: 68vh;
    background: white;
    margin-top: -24px;
    margin-left: -17px;
    border: solid 1px;
    /*& img {
      margin-top: -10px;
      width: 100%;
      height: 100%;
    }*/
  }

`
export const ProductImageMini = styled.div`
  grid-area: l;
  margin-top: 0px;
  margin-left: -50px;
  width: 1px;
  position: absolute;

  & .imgMini {
    margin: 1px;

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
    margin-top: 310px;
    margin-left: 0px;
    width: 100%;
  }

  & button {
    margin: 2px;
    border: none;
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: #8690aa;
      box-shadow: 0 0 0 0.3px black;
    }
  }

  & .divDesc {

  margin: auto;
    & h5 {
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

  @media (max-width: 923px) {
    margin-top: 1370px;
    margin-left: -1px;
    width: 100%;

    & div {
      & .divdescSecudare {
        margin-top: -100px;
      }
    }
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
      background: #8690aa;
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

      @media (max-width: 923px) {
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

  @media (max-width: 923px) {
    margin-top: 50px;
    //margin-left: -10px;
    text-align: justify;
    width: 100%;
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

export const ImgComponentList = styled.div`
  display: none;
  @media (max-width: 970px) {
    display: flex;
  }
`

 