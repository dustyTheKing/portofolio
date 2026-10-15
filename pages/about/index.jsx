import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import {
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiGo,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiSpringboot,
  SiNextdotjs,
  SiVuedotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import ParticlesContainer from "../../components/ParticlesContainer";
import RocketExplosion from "../../components/RocketExplosion"; // Import komponen roket
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          { Icon: SiGo, color: "text-[#00ADD8]" },
          { Icon: FaJava, color: "text-[#ED8B00]" },
          { Icon: SiTypescript, color: "text-[#3178C6]" },
          { Icon: SiJavascript, color: "text-[#F7DF1E]" },
          { Icon: FaPhp, color: "text-[#777BB4]" },
          { Icon: FaPython, color: "text-[#3776AB]" },
          { Icon: SiDart, color: "text-[#0175C2]" },
        ],
      },
      {
        title: "Frameworks",
        icons: [
          { Icon: FaReact, color: "text-[#61DAFB]" },
          { Icon: SiNextdotjs, color: "text-white" },
          { Icon: SiSpringboot, color: "text-[#6DB33F]" },
          { Icon: SiFlutter, color: "text-[#02569B]" },
          { Icon: SiVuedotjs, color: "text-[#4FC08D]" },
          { Icon: SiExpress, color: "text-gray-300" },
          { Icon: SiLaravel, color: "text-[#FF2D20]" },
        ],
      },
      {
        title: "Database & Tools",
        icons: [
          { Icon: SiMysql, color: "text-[#4479A1]" },
          { Icon: SiPostgresql, color: "text-[#4169E1]" },
          { Icon: SiFirebase, color: "text-[#FFCA28]" },
          { Icon: FaDocker, color: "text-[#2496ED]" },
          { Icon: FaGitAlt, color: "text-[#F05032]" },
          { Icon: FaFigma, color: "text-[#F24E1E]" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - PT Bakti Teknologi Mandiri",
        stage: "Feb 2023 - Present",
      },
      {
        title: "Software Engineer - PT Asuransi Jasindo Syariah",
        stage: "Nov 2023 - Present",
      },
      {
        title: "Software Engineer - PLN ICON PLUS",
        stage: "Feb 2024 - Sep 2024",
      },
      {
        title: "Software Engineer - UGM FMIPA",
        stage: "Feb 2023 - 2025",
      },
      {
        title: "Software Engineer - SD IT Insan Madani & SMAN 1 Seyegan",
        stage: "2026",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "S1 Informatika - Universitas Amikom Yogyakarta (IPK 3.72)",
        stage: "Lulus 2023",
      },
      {
        title: "CCNA (Cisco Certified Network Associate)",
        stage: "2023",
      },
      {
        title: "Publish Jurnal Science and Technology (SINTA 3)",
        stage: "2022",
      },
      {
        title: "Pelatihan Makin Cakap Digital - KOMINFO",
        stage: "2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-screen overflow-y-auto bg-primary/30 pt-36 pb-32 xl:pt-40 xl:pb-28 text-center xl:text-left relative custom-scrollbar">
      {/* Background Interactive Particles & Rocket Explosion */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <ParticlesContainer />
        <RocketExplosion /> {/* <--- Efek Roket Meluncur & Meledak */}
      </div>

      {/* Avatar Image (Hanya untuk Laptop/Desktop) */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] pointer-events-none z-10"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto min-h-full flex flex-col items-center xl:flex-row gap-x-8 justify-center z-10 relative">
        {/* Left Column: Summary & Counters */}
        <div className="flex-1 flex flex-col justify-center mb-8 xl:mb-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 leading-tight"
          >
            Engineering <span className="text-emerald-400">robust solutions</span> for enterprise & digital products.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-white/80 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            Software Engineer (Full Stack) lulusan S1 Informatika Universitas Amikom Yogyakarta (IPK 3.72). Berpengalaman merancang, membangun, dan mengoptimalkan aplikasi Web & Mobile skala enterprise, BUMN, instansi pemerintah, hingga sektor pendidikan.
          </motion.p>

          {/* Counters dari Data CV */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Pengalaman Kerja */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-emerald-400 mb-1">
                  <CountUp start={0} end={3} duration={3} />+
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/70">
                  Years Experience
                </div>
              </div>

              {/* IPK Amikom */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-emerald-400 mb-1">
                  3.72
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/70">
                  GPA (Amikom)
                </div>
              </div>

              {/* Sektor / Client */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-emerald-400 mb-1">
                  <CountUp start={0} end={6} duration={3} />+
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/70">
                  Enterprise Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Tabbed Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%]"
        >
          {/* Tab Headers */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-6 shrink-0">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI
                    ? "text-emerald-400 after:w-[100%] after:bg-emerald-400"
                    : "text-white/60 after:w-0"
                } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative font-medium transition-all duration-300 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="py-2 xl:py-4 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="w-full flex flex-col md:flex-row gap-x-3 items-center xl:items-start text-center xl:text-left text-white/80 bg-white/5 sm:bg-transparent p-3.5 sm:p-0 rounded-xl border border-white/5 sm:border-none"
              >
                <div className="font-semibold text-white mb-1 md:mb-0 text-xs sm:text-sm">
                  {item.title}
                </div>
                {item.stage && (
                  <>
                    <div className="hidden md:flex text-emerald-400">-</div>
                    <div className="text-xs sm:text-sm text-emerald-400/90 font-mono">
                      {item.stage}
                    </div>
                  </>
                )}

                {/* Icons Grid */}
                {item.icons && (
                  <div className="flex flex-wrap justify-center xl:justify-start gap-2 mt-2 md:mt-0 items-center">
                    {item.icons.map((iconObj, iconI) => {
                      const IconComponent = iconObj?.Icon || iconObj;
                      const customColor = iconObj?.color || "text-white";

                      if (!IconComponent || typeof IconComponent !== "function") return null;

                      return (
                        <div
                          key={iconI}
                          className={`text-xl sm:text-2xl ${customColor} hover:scale-125 transition-transform duration-300 p-1.5 bg-black/40 rounded-md backdrop-blur-sm border border-white/10`}
                        >
                          <IconComponent />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;