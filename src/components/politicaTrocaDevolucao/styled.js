import styled from "styled-components";

export const ContainerPolitica = styled.div`
    max-width: 80%;
    margin: auto;
    font-size: 1.5vw;

    & h2 {
        margin-top: 5%;
        font-size: 2vw;
        font-weight: bold;
    }

    @media screen and (max-width: 908px)  {
        font-size: 3vw;

        & h2 {
            font-size: 3vw;
        }
    }
    
    @media screen and (max-width: 768px)  {
        font-size: 4vw;

        & h2 {
            font-size: 4vw;
        }
    }
`