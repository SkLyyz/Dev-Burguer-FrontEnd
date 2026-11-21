import styled from "styled-components";
import Background from "../../assets/Padraop.svg";
import Texture from "../../assets/texture.svg";

export const Container = styled.div`
  width: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url(${Background});
  min-height: 100vh;
`;
export const Banner = styled.div`
  background: url("${Texture}");
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 180px;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};

  img {
    height: 150px;
  }
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  text-align: center;
  color: ${(props) => props.theme.green};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: calc(50% - 28px);
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  padding: 40px;
  margin: 0 auto;
`;
