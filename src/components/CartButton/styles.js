import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 8px;
  font-size: 30px;
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme.darkPurple};
  }

  img {
    width: 30px;
    height: 30px;
    top: 0;
    left: 0;
    transform: translate(calc(50% - 15px), calc(50% - 15px));
  }
`;
