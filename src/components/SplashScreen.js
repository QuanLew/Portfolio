import styled from "styled-components";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import Header from "./header/Header";

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
`;

function Splash(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <MoonIcon size={40} /> : <SunIcon size={40} />;

  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
        <Title>Hello {props.theme === "light" ? "Sun" : "Moon"}</Title>
        <Header />
      </Container>
    </Page>
  );
}

export default Splash;
