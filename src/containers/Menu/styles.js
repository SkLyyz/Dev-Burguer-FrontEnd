import styled from "styled-components";
import HamburguerBanner from "../../assets/bannerhamburguer.svg";
import Background from "../../assets/Padraop.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url("${Background}");
`;
export const Banner = styled.div`
  background: url("${HamburguerBanner}") no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};

  height: 480px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-family: ${(props) => props.theme.roadRageFont};
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;

    right: 15%;
    top: 30%;
  }

  span {
    display: block;
    color: ${(props) => props.theme.white};
    font-size: 20px;
  }
`;
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.isActiveCategory ? props.theme.purple : "#747272")};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;

  border-bottom: ${(props) => props.isActiveCategory && `2px solid ${props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 50px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 10%;
  top: -985px;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  font-size: 16px;
  cursor: pointer;
`;
