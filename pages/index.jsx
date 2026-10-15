import { motion } from "framer-motion";
import Link from "next/link";

import ParticlesContainer from "../components/ParticlesContainer";
import DigitalLightning from "../components/DigitalLightning";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";
import FloatingOrbs from "../components/FloatingOrbs";
import CyberMesh from "../components/CyberMesh";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen xl:h-full relative overflow-y-auto xl:overflow-hidden flex items-center">
      {/* Container utama & Efek Background Overlay */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/40 to-black/10 flex items-center pt-28 pb-16 sm:pt-36 sm:pb-20 xl:py-0">
        <div className="text-center flex flex-col justify-center xl:pt-10 xl:text-left h-full container mx-auto px-4 z-20 relative">
          
          {/* Tagline Kecil / Badge */}
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 inline-block"
          >
            <span className="py-1 px-3.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Available for Hire & Collaboration
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 font-bold leading-tight max-w-[700px] mx-auto xl:mx-0 text-3xl sm:text-5xl xl:text-6xl"
          >
            Where Creativity Meets <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Logic & Code
            </span>
          </motion.h1>

          {/* Role & Deskripsi Singkat */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-8 text-white/80 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            Halo! Aku seorang <span className="text-white font-semibold">Full-Stack Engineer</span> yang fokus membangun sistem scalable, enterprise API, dan aplikasi mobile modern. Mengubah ide kompleks menjadi solusi digital yang bersih dan efisien.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 z-30"
          >
            {/* Tombol Project */}
            <div className="relative transform scale-75 sm:scale-90 xl:scale-100 transition-transform duration-300 origin-center xl:origin-left -my-3 sm:my-0">
              <ProjectsBtn />
            </div>

            {/* Tombol Kontak */}
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Visuals / Background elements */}
      <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none z-10">
        {/* Background Explosion */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-40"
          aria-hidden
        />

       <FloatingOrbs />

       {/* <CyberMesh /> */}
        {/* Interactive Particles */}
        <ParticlesContainer />

        {/* Avatar Layer */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[650px] max-h-[600px] absolute lg:bottom-0 lg:right-[5%] hidden xl:block pointer-events-none"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;