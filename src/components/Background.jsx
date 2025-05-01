'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Agora funciona com Next.js
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0f172a",
        },
        particles: {
          color: { value: ["#ffff"] },
          links: { enable: true, color: "#94a3b8", distance: 150, opacity: 0.4 },
          move: { enable: true, speed: 1 },


          number: {
            value: 40, // necessário para density funcionar corretamente
            density: {
              enable: true,
              area: 800, // ajuste a densidade aqui
            },
          },
          



          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.7 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" }, // 🐭 ao passar o mouse, as partículas se afastam
            // onClick: { enable: true, mode: "push" },    // 🖱️ ao clicar, adiciona partículas
          },
          modes: {
            repulse: { distance: 150 },
            push: { quantity: 2 },
          },
        },
      }}
    />
  );  
}
