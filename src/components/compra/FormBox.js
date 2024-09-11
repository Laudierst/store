import styled from "styled-components";


export const FormBox = styled.div`
    position: relative;
    margin-top: 10px;
    width: 50%;
    height: 800px;
    background: transparent;
    border: 2px solid #ffffff80;
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: inline-block;

    & img {
      width: 10%;
      margin: auto;
      display: flex;
      border-radius: 50px;

      @media (max-width: 923px){
        width: 14%;
        //position: absolute;
        margin-left: 40%;
        margin-top: 20px;
        //margin-top: 25px;
        //margin-bottom: -60px;
        //display: none;
      }
    }

    @media (max-width: 923px){
        position: relative;
        width: 90%;
        height: 680px;
        background: rgba(128, 128, 128, 0.487);
        border: 2px solid #ffffff80;
        border-radius: 20px;
        backdrop-filter: blur(15px);
        display: inline-block;
        margin-bottom: 10px;
    }
`
export const LoadingPage1 = styled.div`
 position: absolute;
  top: 30%;
  left: 45%;
`
export const LoadingPage = styled.div`
  width: 20%;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo2 = styled.div`
  position: absolute;
  margin-left: 50%;
  margin-top: -10px;
  font-weight: bold;
  font-size: 1.6vw;
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
      font-size: 3vw;
      margin-left: 10px;
    }
  }
`;
