import React from "react";
import ShowCaseSection from "./components/sections/ShowCaseSection";
import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ShowCaseSection />
      </div>
    </main>
  );
};

export default App;
