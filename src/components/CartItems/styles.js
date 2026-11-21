import styled from "styled-components";

export const ProductImage = styled.img`
  height: 70px;
  width: 100px;
  border-radius: 20px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};
    border-radius: 15px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.2s ease-in-out;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.darkPurple};
    }
  }
`;
export const EmptyCart = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;
export const ProductTotalPrice = styled.p`
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.purple};
  font-weight: bold;
  border-radius: 20px;
  position: relative;
`;
export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
