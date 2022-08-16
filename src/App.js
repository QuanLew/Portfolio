import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { createContext, useState } from "react";
//import ReactSwitch from "react-switch";
import Toggle from "./components/toggle";
import { darkTheme, lightTheme } from "./components/theme";
import { ThemeProvider } from "styled-components";
//import { useDarkMode } from "./components/useDarkMode";
//import Splash from "./components/SplashScreen";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  //const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      {/*
    <ThemeProvider theme={themeMode}>
        <Splash theme={theme} setTheme={setTheme} />
      </ThemeProvider>
      */}

      <ThemeProvider theme={themeMode}>
        <div className="Themes" id={theme}>
          {/*
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <h5>
            This is {theme} + {themeMode.gradient}
          </h5>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          */}
          {/*<Toggle theme={theme} setTheme={changeTheme} />*/}
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
