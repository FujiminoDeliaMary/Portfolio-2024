import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
    return <>
        <Header />
        <main>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
       
        <Footer/>
        </>
}

export default App;