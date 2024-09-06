import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: gray;
  color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25) darkblue;
  border: none;
  margin: auto;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: rgb(10, 155, 212);
  }
`;

export const CustomButtonDescription = styled.button`
  width: 100%;
  background-color: transparent;
  color: #0000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  border: none;
  text-decoration: none;
  border: none;
  margin: auto;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
