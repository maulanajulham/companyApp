import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Teams from "./pages/Teams";

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Teams" element={<Teams/>} />
        <Route path="/Login" element={<Login/>} />
    </Routes>
  )
}

export default App
