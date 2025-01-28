
// // import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = (props: any) => {
  const [init, setInit] = useState(false); // Tracks particle engine initialization
  const [loading, setLoading] = useState(true); // Tracks whether particles are loading

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load only slim particles bundle
    }).then(() => {
      setInit(true); // Set init to true after engine is initialized
    });
  }, []);

  // Callback for when particles are loaded
  const particlesLoaded = () => {
    setLoading(false); // Set loading to false when particles are loaded
  };

  const options:any = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: false,
    }),
    []
  );

  return (
    <div
      className={`absolute inset-0 transition-all duration-1000 ${
        loading ? "bg-black" : ""
      }`} // Initially black background
    >
      {init && (
        <Particles
          id={props.id}
          init={particlesLoaded}
          options={options}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;
