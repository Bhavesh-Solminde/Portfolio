import React from "react";
import ShowCaseSection from "./components/sections/ShowCaseSection";
import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
import ExperienceSection from "./components/sections/ExperienceSection";
import Footer from "./components/sections/Footer";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ShowCaseSection />
        <ExperienceSection />
        <Footer />
      </div>
    </main>
  );
};

export default App;
