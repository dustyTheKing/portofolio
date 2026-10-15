import { motion } from "framer-motion";
import ParticlesContainer from "../../components/ParticlesContainer";
import { fadeIn } from "../../variants";

const experiences = [
  {
    period: "2023 - Present",
    role: "Full-Stack Software Engineer",
    company: "Enterprise & BUMN Projects",
    description:
      "Mengembangkan arsitektur backend scalable dengan Go (Fiber/Gin) & Spring Boot, serta membangun portal antarmuka modern menggunakan React/Next.js.",
    tech: ["Golang", "Spring Boot", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    period: "2023 - Present",
    role: "Mobile & Web Developer",
    company: "Financial & Enterprise Solutions",
    description:
      "Merancang aplikasi transaksi lintas platform dengan Flutter, integrasi RESTful API aman, serta optimasi performa query database.",
    tech: ["Flutter", "Dart", "REST API", "Firebase", "PostgreSQL"],
  },
  {
    period: "Academic Era",
    role: "S1 Informatika (GPA 3.72)",
    company: "Universitas Amikom Yogyakarta",
    description:
      "Fokus pada Rekayasa Perangkat Lunak, Arsitektur Komputer, Algoritma Struktur Data, dan Sistem Terdistribusi.",
    tech: ["Software Engineering", "Clean Code", "System Design"],
  },
];

const Experience = () => {
  return (
    <div className="w-full h-screen bg-primary/30 pt-36 pb-32 xl:pt-40 xl:pb-28 text-center relative overflow-y-auto custom-scrollbar">
      {/* Background Interactive Particles (Bubble Bergerak) */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <ParticlesContainer />
      </div>

      <div className="container mx-auto min-h-full flex flex-col justify-center relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="inline-block mb-2"
          >
            <span className="py-1 px-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Career & Milestones
            </span>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 leading-tight text-3xl sm:text-4xl xl:text-5xl"
          >
            Professional <span className="text-emerald-400">Journey .</span>
          </motion.h2>
        </div>

        {/* Timeline Cards Grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-[1100px] mx-auto px-4"
        >
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="bg-[rgba(65,47,123,0.25)] backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 inline-block mb-3">
                  {item.period}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs text-emerald-400/80 font-mono mb-3">
                  {item.company}
                </p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {item.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/30 text-white/80 border border-white/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;