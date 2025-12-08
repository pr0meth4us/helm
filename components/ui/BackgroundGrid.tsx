'use client';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function BackgroundGrid() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-helm-dark">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // This creates the connecting lines to cursor
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: { opacity: 0.5 }
              },
            },
          },
          particles: {
            color: { value: "#66FCF1" }, // Helm Cyan
            links: {
              color: "#45A29E", // Helm Teal
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60, // Number of dots
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Vignette Overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0C10_100%)] pointer-events-none" />
    </div>
  );
}