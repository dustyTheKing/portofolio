import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Orb 1: Emerald (Kiri Atas dekat Teks) */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[10%] w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-emerald-500/20 rounded-full blur-[90px] mix-blend-screen"
      />

      {/* Orb 2: Cyan/Teal (Kanan Bawah dekat Avatar) */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[15%] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-teal-400/20 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Orb 3: Accent Cyan Kecil (Tengah) */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 30, 0],
          scale: [0.8, 1.1, 0.9, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] left-[45%] w-[180px] h-[180px] bg-cyan-500/15 rounded-full blur-[70px] mix-blend-screen"
      />
    </div>
  );
};

export default FloatingOrbs;