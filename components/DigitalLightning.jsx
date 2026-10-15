import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Variasi untuk central discharge (petir voxel besar)
const boltVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  show: (custom) => ({
    opacity: [0, 1, 1, 0],
    scaleY: [0, 1, 1, 0.8],
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: [0.17, 0.67, 0.83, 0.67],
      times: [0, 0.1, 0.9, 1],
    },
  }),
};

const DigitalLightning = () => {
  const [bolts, setBolts] = useState([]);

  // Fungsi membuat koordinat, cabang, dan properti petir voxel
  const generateBolt = () => {
    return {
      id: Date.now() + Math.random(),
      xStart: Math.random() * 80 + 10,
      xEnd: Math.random() * 80 + 10,
      yStart: -10,
      yEnd: 110,
      duration: Math.random() * 1.5 + 0.8,
      delay: Math.random() * 4,
      color: Math.random() > 0.5 ? "text-emerald-400" : "text-cyan-300",
      branches: Math.random() > 0.5 ? [10, 20, 30] : [15, 25, 35], // Jumlah cabang pixelated
    };
  };

  useEffect(() => {
    // Inisialisasi awal
    setBolts([generateBolt(), generateBolt()]);

    // Interval penambahan & pembersihan memori
    const interval = setInterval(() => {
      setBolts((prevBolts) => {
        const newBolt = generateBolt();
        const updated = [...prevBolts, newBolt];
        return updated.length > 6 ? updated.slice(1) : updated; // Batasi jumlah petir agar ringan
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {bolts.map((bolt) => (
        <motion.div
          key={bolt.id}
          className={`absolute opacity-70 ${bolt.color}`}
          initial="hidden"
          animate="show"
          custom={{ duration: bolt.duration, delay: bolt.delay }}
          variants={boltVariants}
          style={{
            originY: 0,
            left: `${bolt.xStart}%`,
            top: `${bolt.yStart}%`,
            transform: `translateX(-50%) skewX(${bolt.xEnd - bolt.xStart > 0 ? -20 : 20}deg)`,
          }}
        >
          {/* Garis Central Discharge Voxel (Kompleks & Pixelated) */}
          <div className="w-[1.8px] h-[75vh] bg-current rounded-full drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]" />

          {/* Menambahkan Cabang Voxelated yang Kompleks */}
          {bolt.branches.map((branch, i) => (
            <motion.div
              key={i}
              className={`absolute h-[1px] w-[20px] bg-current ${bolt.color}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 0.6,
                delay: bolt.delay + bolt.duration * (0.1 + i * 0.1),
                ease: "easeOut",
              }}
              style={{
                originX: 0,
                top: `${branch}%`,
                left: i % 2 === 0 ? "100%" : "-100%",
                transform: `rotate(${i % 2 === 0 ? 30 : -30}deg)`,
              }}
            />
          ))}

          {/* Menambahkan Cluster Cahaya Voxel (Pulse & Fade) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0, 1.2, 1.5] }}
            transition={{
              duration: 0.8,
              delay: bolt.delay + bolt.duration * 0.2,
              ease: "easeOut",
            }}
            className="absolute top-[35%] left-1/2 -translate-x-1/2 rounded-full w-20 h-20 bg-current blur-md shadow-[0_0_15px_rgba(52,211,153,0.9)]"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DigitalLightning;