import React, { useState, useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 80%", // Start when top of counter is 80% down the viewport
      end: "bottom 20%", // End when bottom of counter is 20% down the viewport
      onEnter: () => {
        setStartCounting(true);
      },
      onLeave: () => {
        // Optional: Reset counter when scrolling past
        //setStartCounting(false);
      },
      onEnterBack: () => {
        // Optional: Restart counter when scrolling back
        //setStartCounting(true);
      },
      markers: false, // Set to true for debugging
    });
  }, []);

  return (
    <div ref={counterRef} id="counter" className="padding-xl-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp
                suffix={item.suffix}
                end={startCounting ? item.value : 0}
                duration={3}
                start={0}
              />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
