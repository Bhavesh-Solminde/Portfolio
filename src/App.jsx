import React from "react";
import ShowCaseSection from "./sections/ShowCaseSection";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ShowCaseSection />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
