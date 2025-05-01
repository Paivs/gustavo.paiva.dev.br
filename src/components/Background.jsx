"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const { resolvedTheme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: isDark ? "#0f172a" : "#f8fafc", // dark ou light
        },
        particles: {
          color: { value: isDark ? "#ffffff" : "#0f172a" },
          links: {
            enable: true,
            color: isDark ? "#94a3b8" : "#94a3b8", // pode trocar por outra cor clara se quiser
            distance: 150,
            opacity: 0.4,
          },
          move: { enable: true, speed: 1 },
          number: {
            value: 40,
            density: { enable: true, area: 800 },
          },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.7 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" },
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
