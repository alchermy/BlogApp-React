import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import "./App.css";

// Component Page
import Home from "./Components/Home"; //Home
import Blogs from "./Components/Blogs"; //Blogs
import About from "./Components/About"; // About
import NotFound from "./Components/NotFound";
import Detail from "./Components/Detail";

//Component
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/home" element={<Navigate to="/"/>}></Route>
        <Route path="/blog/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
