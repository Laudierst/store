import styled from "styled-components";

export const Pricipal = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 0px 650px 100%;
  grid-template-areas:
    "cabecalho cabecalho"
    "secao barra-lateral"
    "rodape rodape";

  & .imgDiv {
    width: 98%;
    height: 75vh;
    border: none;
    margin-top: -30px;

    @media screen and (max-width: 923px) {
      width: 98%;
      height: 70vh;
      border: none;
    }

    @media (max-width: 1650px){
      height: 100vh;
    }

    @media (max-width: 1350px){
      height: 80vh;
    }

    @media (max-width: 1050px){
      height: 70vh;
    }
  }

  & header {
    grid-area: cabecalho;
    background-color: transparent;
  }

  & section {
    grid-area: secao;
    background-color: transparent;
    grid-template-rows: 0px 50px 50px;
  }

  & aside {
    grid-area: barra-lateral;
    background-color: transparent;

    @media (max-width: 1350px){
      & h5 {
        & strong {
          font-size: 1vw;
        }
      }

      & span {
        font-size: 1vw;
      }

      & div {
        & h1 {
          font-size: 2vw;
        }
      }
    }

    @media (max-width: 1050px){
      & h5 {
        & strong {
          font-size: 1vw;
        }
      }

      & span {
        font-size: 1vw;
      }

      & div {
        & h1 {
          font-size: 2vw;
        }
      }
    }

    @media (max-width: 923px){
      & h5 {
        & strong {
          font-size: 20px;
        }
      }

      & span {
        font-size: 15px;
      }

      & div {
        & h1 {
          font-size: 40px;
        }
      }
    }

    .slugImgDiv {
      width: 50px;
      margin: 2px;
    }

    .slugImg {
      width: 40px;
      margin: 2px;

      &:hover {
        border: 1px solid;
        border-color: cyan;
        opacity: 0.8;
        border-radius: 10px;
        //box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.582);
        color: #000000;
        font-weight: bold;
        font-size: 0.8rem;
        text-align: center;
        cursor: pointer;
      }
    }
  }

  & span {
    grid-area: barra-lateral;
    background-color: transparent;
  }

  & footer {
    grid-area: rodape;
  }

  & footer {
    margin-top: 40px;
    grid-area: rodape;
    display: flex;
    justify-content: space-evenly;
  }

  & .parte1 {
    width: 100%;
    height: 100%;
    background-color: transparent;
    margin-top: 30px;
  }

  .div {
    border: solid 1px;
    border: none;
    width: 45%;
    height: 100%;
    display: inline-flex;
    margin: 5px;

    & .buttonColor {
      margin: 2px;
			display: "inline-block";
			font-size: 11px;
      border: none;
      padding: 5px;
      border-radius: 6px;
			background-color: #08e2d332;
			border: solid 1px;
      border-color: aquamarine;

      &:hover {
        background: #e5d416;
        box-shadow: 0 0 0 0.3px black;
      }
    }

		& .buttonCompra {
			border: none;
			width: 100%;
			background: aqua;
			margin: 2px;
			padding: 5px;
			border-radius: 6px;
			font-weight: bold;
			
			&:hover {
				background: #FDD201;
				box-shadow: 0 0 0 0.3px black;
			}

			@media (max-width: 932px) {
				width: 99%;
			}
		}

		& .btnButtonTamanho {
			font-weight: bold;
			margin: 1.5px;
      padding: 3px;
      border-color: aquamarine;
			border-radius: 3px;
      background: #08e2d332;

			&:hover {
				background: #e5d416;
        box-shadow: 0 0 0 0.3px black;
			}
		}

		@media (max-width: 1200px) {
			font-size: 12px;
		}
	}

  @media (max-width: 992px) {
    width: 100%;
    text-align: justify;
    grid-template-columns: 100%;
    grid-template-rows: 0px 470px 250px;
    grid-template-areas: "cabecalho" "secao" "barra-lateral" "rodape";

    & .img {
      width: 100%;
      height: 60vh;
      border: none;
    }

    & aside {
      //margin-top: 40%;
      text-align: justify;
      padding: 5px;
      height: 100%;
      grid-area: barra-lateral;
      background-color: transparent;
    }

    & footer {
      margin: 10;
      margin-top: 270%;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
    }

    & .parte1 {
      margin-top: 110px;
      padding: 5px;
      text-align: justify;
      width: 100%;

      @media (max-width: 923px) {
        width: 95%;
      }
    }

    & .div {
      margin-top: 15%;
      border: none;
      width: 97%;
      height: 100%;
      display: inline-block;
    }
  }
`;

export const MarginTop = styled.div`
  margin-top: 70px;

  @media (max-width: 992px) {
    margin-top: 0px;
  }
`;
