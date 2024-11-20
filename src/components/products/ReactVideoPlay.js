import styled from "styled-components";

export const ProduVideoPlay = styled.div`
  width: 100%;
  margin-top: -30px;
  background: transparent;
  display: flex;
  margin: auto;

  @media (max-width: 923px) {
    width: 100%;
    margin: auto;
    display: none;
  }
`

export const ProduVideoPlay2 = styled.div`
  display: flex;
  margin: auto;
  width: 110vh;
  margin-bottom: 30px;

  & a {
    color: white;
    position: absolute;
    margin-left: 280px;
    margin-top: 70px;
    border: solid 1px;
    padding: 8px;
    border-radius: 12px;
    border-color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover{
      background-color: white;
      color: #000000;
    }
  }

  @media (max-width: 923px) {
    width: 100%;

    & a {
    color: white;
    position: absolute;
    margin-left: 115px;
    margin-top: 28px;
    border: solid 1px;
    padding: 3px;
    border-radius: 12px;
    border-color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;

    &:hover{
      background-color: white;
      color: #000000;
    }
  }
  }
`