import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  // Inisialisasi particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 50, // Jumlah partikel dikurangi untuk efek clean
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#00d4ff", "#0088ff", "#00ffaa"], // Warna gradasi biru-hijau
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7, // Lebih transparan
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
          },
          size: {
            value: { min: 2, max: 8 }, // Variasi ukuran partikel lebih besar
            random: true,
            anim: { enable: true, speed: 3, size_min: 0.3, sync: false },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false, rotateX: 600, rotateY: 600 },
          },
          links: {
            enable: false, // Hilangkan garis penghubung
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 10,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
