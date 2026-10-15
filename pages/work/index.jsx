import { motion } from "framer-motion";

import WorkSlider from "../../components/WorkSlider";
import ParticlesContainer from "../../components/ParticlesContainer";
import { fadeIn } from "../../variants";
import FloatingOrbs from "../../components/FloatingOrbs";

const Work = () => {
  return (
    <div className="w-full h-screen overflow-y-auto bg-primary/30 pt-36 pb-36 xl:pt-40 xl:pb-28 text-center xl:text-left relative custom-scrollbar">
      {/* Background Interactive Particles (Bubble Bergerak) */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <ParticlesContainer />
         <FloatingOrbs />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-6 xl:gap-y-0">
          
          {/* Text Section */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left justify-center">
            
            {/* Status Badge */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="inline-block mx-auto lg:mx-0 mb-3"
            >
              <span className="py-1 px-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Featured Projects & Engineering
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-2 leading-tight text-3xl sm:text-4xl xl:text-5xl"
            >
              My Work <span className="text-emerald-400">.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 sm:mb-6 max-w-[420px] mx-auto lg:mx-0 text-white/80 text-xs sm:text-sm md:text-base leading-relaxed"
            >
              Kumpulan proyek rekayasa perangkat lunak terpilih—mulai dari sistem enterprise BUMN, aplikasi transaksi keuangan, hingga solusi mobile berkinerja tinggi yang dibangun dengan standar arsitektur bersih.
            </motion.p>

            {/* Core Achievements / Impact Badges */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden lg:flex flex-wrap gap-2 max-w-[400px]"
            >
              {[
                "Enterprise Architecture",
                "High-Traffic API",
                "Cross-Platform Mobile",
                "SQL & Docker",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400/90"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] flex flex-col justify-center pb-8 xl:pb-0"
          >
            <div className="pb-6">
              <WorkSlider />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Work;