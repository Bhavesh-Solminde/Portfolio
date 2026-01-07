import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import { Room } from "./Room";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 480);
      setIsTablet(width <= 1280 && width > 480);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 15], fov: isTablet ? 60 : 45 }}
    >
      <HeroLights />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet && !isMobile} // No zoom on mobile/tablet
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 0.8 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
