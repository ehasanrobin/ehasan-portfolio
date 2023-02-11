import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import { createTheme, ThemeProvider } from "@mui/material";
import ProjectComp from "./components/ProjectComp/ProjectComp";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/ContactUs/ContactUs";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import NotFound from "./components/Not Found/NotFound";
import Blogs from "./components/Blogs/Blogs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
      contrastText: "#00000",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
    </>
  );
}

export default App;
