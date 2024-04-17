import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";

const App = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const closeMenu = () => setMenuOpen(false);

    return <>
        <Menu isOpen={isMenuOpen} closeMenu={closeMenu}/>
        <Header toggleMenu = {toggleMenu}/>
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