// App.js
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <HashRouter>
      <div className="flex flex-col">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
