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
              <img src="/images/project1.png" alt="project1" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                call Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                Ryde is a ride-hailing app that connects passengers with drivers
                in real-time.
              </p>
            </div>
          </div>

          {/* Right Side*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="project2" />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="project3" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
