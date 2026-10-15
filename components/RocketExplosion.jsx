import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const RocketExplosion = () => {
  const [stage, setStage] = useState("flying"); // 'flying' | 'exploded' | 'reset'

  useEffect(() => {
    const timer = setInterval(() => {
      setStage("flying");
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const handleReachCenter = () => {
    setStage("exploded");
    setTimeout(() => {
      setStage("reset");
    }, 1200);
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. ROKET VERTIKAL MELUNCUR PRESISI KE TENGAH */}
      {stage === "flying" && (
        <motion.div
          initial={{ x: "105vw", y: "-10vh", scale: 0.7, opacity: 1 }}
          animate={{ x: "50vw", y: "48vh", scale: 1.2, opacity: 1 }}
          transition={{ duration: 3.5, ease: "easeIn" }}
          onAnimationComplete={handleReachCenter}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          {/* Rotasi 225deg: Dari Atas Vertikal Memutar Lurus ke Kiri Bawah (Lintasan Terbang) */}
          <div className="relative flex flex-col items-center justify-center rotate-[225deg]">
            
            {/* SVG ROKET VERTIKAL (Bodi Tegak Lurus Presisi) */}
            <svg
              width="60"
              height="80"
              viewBox="0 0 60 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] relative z-10"
            >
              {/* Sirip Kiri */}
              <path
                d="M12 52L2 66C2 56 6 48 14 42L12 52Z"
                fill="#DC2626"
              />
              {/* Sirip Kanan */}
              <path
                d="M48 52L58 66C58 56 54 48 46 42L48 52Z"
                fill="#DC2626"
              />
              {/* Sirip Tengah / Ekor */}
              <path
                d="M30 48L30 64L26 58L30 48Z"
                fill="#991B1B"
              />

              {/* Bodi Utama Roket (Kapsul Putih Metalik Tegak) */}
              <path
                d="M30 2C42 16 46 32 46 56H14C14 32 18 16 30 2Z"
                fill="url(#verticalBodyGrad)"
              />

              {/* Moncong Merah Tegak */}
              <path
                d="M30 2C36 10 40 18 42 24H18C20 18 24 10 30 2Z"
                fill="#EF4444"
              />

              {/* Kaca Kokpit Cyan Bulat */}
              <circle
                cx="30"
                cy="34"
                r="7"
                fill="#0EA5E9"
                stroke="#1E293B"
                strokeWidth="1.5"
              />
              <circle cx="32" cy="32" r="2.5" fill="#FFFFFF" opacity="0.9" />

              {/* Nozzle / Pipa Semburan Api Bawah */}
              <rect x="22" y="56" width="16" height="5" rx="2" fill="#475569" />

              {/* Gradient Defs */}
              <defs>
                <linearGradient id="verticalBodyGrad" x1="14" y1="30" x2="46" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#CBD5E1" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Semburan Api Pendorong Lurus Tepat di Belakang Nozzle Bawah */}
            <div className="relative -mt-1 flex flex-col items-center pointer-events-none">
              {/* Api Luar Merah/Orange */}
              <motion.div
                animate={{ scaleY: [0.9, 1.4, 0.9], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 0.1 }}
                className="w-5 h-16 bg-gradient-to-b from-red-600 via-orange-500 to-transparent rounded-full blur-[2px] origin-top"
              />
              {/* Inti Api Kuning/Terang */}
              <motion.div
                animate={{ scaleY: [0.8, 1.3, 0.8] }}
                transition={{ repeat: Infinity, duration: 0.08 }}
                className="w-3 h-10 bg-gradient-to-b from-amber-200 via-yellow-100 to-white rounded-full blur-[1px] absolute top-0 origin-top"
              />
            </div>

          </div>
        </motion.div>
      )}

      {/* 2. LEDAKAN DENGAN PERCIKAN MERAH-ORANGE */}
      {stage === "exploded" && (
        <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.2, opacity: 1 }}
            animate={{ scale: 4.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 blur-md shadow-[0_0_70px_#ef4444]"
          />

          <motion.div
            initial={{ scale: 0.1, opacity: 1 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-20 h-20 rounded-full border-2 border-red-500 bg-red-500/10"
          />

          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const distance = 120 + Math.random() * 60;

            return (
              <motion.span
                key={i}
                initial={{ x: 0, y: 0, scale: 1.5, opacity: 1 }}
                animate={{
                  x: Math.cos(rad) * distance,
                  y: Math.sin(rad) * distance,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 3 === 0
                    ? "bg-red-500 shadow-[0_0_12px_#ef4444]"
                    : i % 3 === 1
                    ? "bg-orange-400 shadow-[0_0_12px_#f97316]"
                    : "bg-amber-300 shadow-[0_0_12px_#fcd34d]"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RocketExplosion;