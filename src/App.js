import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/Not Found/NotFound";
import ProjectComp from "./components/ProjectComp/ProjectComp";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

import Loading from "./components/Loading/Loading";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
      contrastText: "#00000",
    },
  },
});

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <ThemeProvider theme={theme}>
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="193, 11, 111"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>

            <Route
              path="/project/:id"
              element={<ProjectComp></ProjectComp>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
