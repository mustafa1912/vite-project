import "./assets/style/css/style.css";
import { Route, Routes } from "react-router-dom";

// import Switcher from './switch/Switcher';
import Header from "./Components/layout/Header";
import Resume from "./Components/resume/Resume";
import Blog from "./Components/blog/Blog";
import Home from "./Components/home/Home";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";

function App() {
    return (
        <div className="App">
            {/* <Switcher />   */}
            <Header />
            {/* <Routes /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default App;