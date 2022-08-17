import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import About from "./About";
// import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Intrests from "./Intrests";

const App = () => {
    return(
        <div>
            <Navbar/>
            <About/>
            {/* <Experience/> */}
            <Education/>
            <Skills/>
            <Intrests/>
        </div>
    )
}

export default App;