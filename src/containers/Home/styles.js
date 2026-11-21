import styled from "styled-components";
import BannerHome from "../../assets/bghome.png";
import Background from "../../assets/Padraop.svg";

export const Banner = styled.div`
  background: url("${BannerHome}");
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: ${(props) => props.theme.roadRageFont};
    font-size: 80px;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 10%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${Background}");
  height: 100%;
`;
