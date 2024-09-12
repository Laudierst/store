import styled from "styled-components";
import img from "./img/sacola.jpg"

export const CompraStyle = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url(${img}) no-repeat;
    background-size: cover;
    background-position-y: -130px;

    & .btn-cep {
        border: none;
        padding: 5px;
        //position: absolute;
        margin-left: -55px;
        margin-top: 50px;

        @media (max-width: 1650px) {
            font-size: 1.1vw;
            margin-left: -70px;
            margin-top: 60px;
        }

        @media (max-width: 923px) {
            font-size: 2vw;
            margin-left: -60px;
        }
    }

    & div {
        margin-top: 45px;
    }

    & a {
        text-decoration: none;
        margin-top: 25px;
        color: #fff;
        margin-left: 15px;
        border: 1px solid;
        border-radius: 10px;
        padding: 7px;
        background: #d6fcf980;
        border: none;
    }

    & a:hover {
        background: rgb(14, 194, 14);
    }

    @media (max-width: 923px) {
        display: flex;
        margin-top: -1px;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: url(${img}) no-repeat;
        background-size: cover;
        background-position-y: -300px;
    }

`

export const Title = styled.h1`
    padding: 20px;
    font-size: 3vw;
    color: darck;
    text-align: center;

    @media (max-width: 768px){
        padding: 0;
        margin-top: 10px;
        margin-bottom: -20px;
        font-size: 6vw;
        font-weight: bold;
    }
`

export const InputBox = styled.div`
    position: relative;
    margin: 10px;
    width: 30%;
    border-bottom: 2px solid #fff;
    display: inline-block;
    font-weight: bold;
    

    & input{
        width: 100%;
        height: 50px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        padding: 0 -5px 0 0;
        color: darck;
        border-radius: 5px;
        text-align: justify;
        font-weight: lighter;

        @media (max-width: 768px){
            padding: 0;
            margin-top: -12px;
            color: darck;
        }
    }

    & input:focus ~ label {
        top: -12px;
    }

    & input:valid ~ label {
        top: -12px;
    }

    & label{
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1vw;
        pointer-events: none;
        transition: .5s;
        color: #000000;

        @media (max-width: 768px){
            font-size: 3vw;
        }
    }

    @media (max-width: 923px){
        margin: 20px;
        width: 120px;
        margin-bottom: 2px;
    }
`

export const ButtonBox = styled.button`
    margin-top: 50px;
    width: 50%;
    height: 48px;
    border-radius: 48px;
    background: aqua;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.3vw;
    font-weight: 600;
    margin-left: 25%;

    &:hover {
        background: rgb(14, 194, 14);
    }

    @media (max-width: 1350px){
        margin-top: -30px;
        margin-left: 15%;
        font-size: 2vw;
        width: 70%;
    }

    @media (max-width: 1120px){
        margin-top: -30px;
        margin-left: 15%;
        font-size: 3vw;
        width: 70%;
    }

    @media (max-width: 923px){
        margin-top: 25px;
        margin-left: 15%;
        font-size: 4vw;
        width: 70%;
        color: black;
    }
    
`
