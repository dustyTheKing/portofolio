import { motion } from "framer-motion";
import { RxArrowRight, RxEnvelopeClosed, RxGlobe } from "react-icons/rx";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ParticlesContainer from "../../components/ParticlesContainer";
import { fadeIn } from "../../variants";
import CyberMesh from "../../components/CyberMesh";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [subject, setSubject] = useState("");
  const router = useRouter();

  // Menangkap parameter ?service=... dari halaman Services
  useEffect(() => {
    if (router.query.service) {
      setSubject(`Inquiry regarding ${router.query.service}`);
    }
  }, [router.query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSent(true);
        myForm.reset();
        setSubject("");
        setTimeout(() => setIsSent(false), 6000);
      })
      .catch((error) => alert("Gagal mengirim pesan, silakan coba lagi."))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full h-screen bg-primary/30 pt-36 pb-32 xl:pt-40 xl:pb-28 text-center xl:text-left relative overflow-y-auto custom-scrollbar">
      {/* Background Interactive Particles (Bubble Bergerak) */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <ParticlesContainer />
        <CyberMesh />
      </div>

      <div className="container mx-auto min-h-full flex flex-col justify-center relative z-10">
        <div className="flex flex-col xl:flex-row gap-x-12 gap-y-8 items-center justify-between">
          
          {/* Section Kiri: Header & Contact Info */}
          <div className="text-center xl:text-left flex xl:w-[35vw] flex-col justify-center">
            
            {/* Badge Status */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="inline-block mx-auto xl:mx-0 mb-3"
            >
              <span className="py-1 px-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Available for Hire & Collaboration
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 leading-tight mb-3 text-3xl sm:text-4xl xl:text-5xl"
            >
              Let's <span className="text-emerald-400">connect .</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-[420px] mx-auto xl:mx-0"
            >
              Tertarik berkolaborasi untuk proyek software engineering, diskusi arsitektur backend, atau peluang karier? Kirim pesan langsung melalui form ini.
            </motion.p>

            {/* Direct Contact List */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-y-3 text-xs font-mono text-emerald-400/90 items-center xl:items-start"
            >
              <div className="flex items-center gap-x-3 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl w-fit">
                <RxEnvelopeClosed className="text-base text-emerald-400" />
                <span>muhammaddista15@gmail.com</span>
              </div>
              <div className="flex items-center gap-x-3 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl w-fit">
                <RxGlobe className="text-base text-emerald-400" />
                <span>Indonesia (UTC+7 / WIB)</span>
              </div>
            </motion.div>
          </div>

          {/* Section Kanan: Form */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%]"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex-1 flex flex-col gap-3.5 sm:gap-4 w-full mx-auto bg-black/30 backdrop-blur-md p-5 sm:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors duration-500 shadow-2xl relative"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Input Jebakan Anti-Spam Bot */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {/* Notification Banner */}
              {isSent && (
                <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs px-4 py-3 rounded-xl mb-2 font-mono flex items-center justify-between">
                  <span>✓ Pesan berhasil terkirim! Saya akan merespons secepatnya.</span>
                </div>
              )}

              {/* Input Nama & Email */}
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input border border-white/10 bg-white/5 focus:border-emerald-400 focus:bg-emerald-500/5 focus:outline-none transition-all rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/40 w-full"
                  disabled={isLoading}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input border border-white/10 bg-white/5 focus:border-emerald-400 focus:bg-emerald-500/5 focus:outline-none transition-all rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/40 w-full"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="input border border-white/10 bg-white/5 focus:border-emerald-400 focus:bg-emerald-500/5 focus:outline-none transition-all rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/40 w-full"
                disabled={isLoading}
                required
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={4}
                className="textarea border border-white/10 bg-white/5 focus:border-emerald-400 focus:bg-emerald-500/5 focus:outline-none transition-all rounded-xl p-4 text-xs sm:text-sm text-white placeholder:text-white/40 resize-none w-full"
                disabled={isLoading}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 max-w-[190px] px-8 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-emerald-400 hover:text-black hover:border-emerald-400 group relative self-center xl:self-start mt-1 shadow-lg active:scale-95"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-semibold text-xs sm:text-sm">
                  {isLoading ? "Sending..." : "Send Message"}
                </span>

                <RxArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-lg sm:text-xl"
                />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;