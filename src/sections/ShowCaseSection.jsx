import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = React.useRef(null);
  const project1Ref = React.useRef(null);
  const project2Ref = React.useRef(null);
  const project3Ref = React.useRef(null);

  useGSAP(() => {
    const projectRefs = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projectRefs.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          duration: 1,
          ease: "power2.inOut",
          delay: (index + 1) * 0.3, // Stagger by 0.3s for each project
        }
      );
    }, []);
  });

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left Side*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-warapper">
              <a href="https://hostara.onrender.com/listings">
                <img src="/images/project1.png" alt="project1" />
              </a>
            </div>
            <div className="text-content">
              <h2> Hostara – Full-Stack Property Rental Platform</h2>
              <p className="text-white-50 md:text-xl">
                A comprehensive property booking and rental house website built
                using the MERN Stack + EJS, enabling users to explore, list, and
                review rental properties with a seamless UI/UX.
              </p>
            </div>
          </div>

          {/* Right Side*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a href="https://github.com/Bhavesh-Solminde/Resume-Optimizer">
                  <img src="/images/project2.png" alt="project2" />
                </a>
              </div>
              <h2> Resume Optimizer – AI Resume Co-Pilot</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <a href="https://bhavesh-solminde.github.io/Streetly/">
                  <img src="/images/project3.png" alt="project3" />
                </a>
              </div>
              <h2> Streetly – React Street Food Website with Chatbot</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
