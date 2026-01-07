import React, { Suspense, lazy } from "react";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";

const ShowCaseSection = lazy(() => import("./sections/ShowCaseSection"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const Footer = lazy(() => import("./sections/Footer"));
const Contact = lazy(() => import("./sections/Contact"));
const TechStack = lazy(() => import("./sections/TechStack"));

const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <ShowCaseSection />
          <ExperienceSection />
          <TechStack />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
};

export default App;
