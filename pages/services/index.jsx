import { motion } from "framer-motion";
import {
  RxDesktop,
  RxMobile,
  RxServer,
  RxDatabase,
  RxGear,
} from "react-icons/rx";

import ServiceSlider from "../../components/ServiceSlider";
import ParticlesContainer from "../../components/ParticlesContainer";
import { fadeIn } from "../../variants";

// Data Layanan Interaktif Teuku Muhammad Dista
export const serviceData = [
  {
    icon: RxDesktop,
    title: "Full-Stack Web Dev",
    tagline: "Modern Web Apps & Platforms",
    description:
      "Pengembangan aplikasi web end-to-end yang cepat, responsif, dan scalable dari antarmuka hingga backend.",
    features: ["React & Next.js", "Go Fiber / Laravel", "SEO & Speed Optimized"],
  },
  {
    icon: RxMobile,
    title: "Mobile App Dev",
    tagline: "Cross-Platform iOS & Android",
    description:
      "Pembangunan aplikasi mobile lintas platform dengan performa tinggi, animasi mulus, dan antarmuka intuitif.",
    features: ["Flutter & Dart", "Native-like Performance", "Offline Data Sync"],
  },
  {
    icon: RxServer,
    title: "Enterprise & Backend API",
    tagline: "High-Availability System",
    description:
      "Perancangan arsitektur server, RESTful API, dan microservices berkeamanan tinggi untuk BUMN & enterprise.",
    features: ["Go & Java Spring Boot", "Clean Architecture", "Secure Authentication"],
  },
  {
    icon: RxDatabase,
    title: "Database & System Mgmt",
    tagline: "Scalable Data & Infrastructure",
    description:
      "Pengelolaan, skema relational/NoSQL, query optimization, serta pengemasan aplikasi dengan Docker.",
    features: ["PostgreSQL & MySQL", "Firebase Integration", "Containerization (Docker)"],
  },
  {
    icon: RxGear,
    title: "Maintenance & Optimization",
    tagline: "Stability & Security Audit",
    description:
      "Pemeliharaan kode, pembenahan bug (bug fixing), audit keamanan, dan peningkatan performa sistem berkala.",
    features: ["Codebase Refactoring", "Performance Tuning", "Uptime & Bug Fixing"],
  },
];

const Services = () => {
  return (
    <div className="w-full h-screen overflow-y-auto bg-primary/30 pt-36 pb-36 xl:pt-40 xl:pb-28 text-center xl:text-left relative custom-scrollbar">
      {/* Background Interactive Particles (Bubble Bergerak) */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <ParticlesContainer />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-6 xl:gap-y-0">
          
          {/* Section Kiri: Header Teks & Highlight */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left justify-center">
            
            {/* Badge Status */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="inline-block mx-auto lg:mx-0 mb-3"
            >
              <span className="py-1 px-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                End-to-End Engineering
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
              My Services <span className="text-emerald-400">.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 sm:mb-6 max-w-[420px] mx-auto lg:mx-0 text-white/80 text-xs sm:text-sm md:text-base leading-relaxed"
            >
              Solusi rekayasa perangkat lunak terintegrasi—mulai dari arsitektur backend skala besar, aplikasi mobile, hingga optimasi performa sistem web.
            </motion.p>

            {/* Tech Pill Badges */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden lg:flex flex-wrap gap-2 max-w-[400px]"
            >
              {["Golang", "Spring Boot", "React / Next.js", "Flutter", "Docker"].map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400/90"
                  >
                    #{tech}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Section Kanan: Slider Card Services */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[70%] flex flex-col justify-center pb-8 xl:pb-0"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-center lg:justify-between mb-3 px-2">
              <div className="flex items-center gap-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-emerald-400/90 tracking-wide">
                  Swipe / Scroll horizontally →
                </span>
              </div>
            </div>

            {/* Area Slider dengan Padding Bawah agar Dots & Shadow Tidak Terpotong */}
            <div className="pb-6">
              <ServiceSlider serviceData={serviceData} />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Services;