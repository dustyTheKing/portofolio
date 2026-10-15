import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiTiktokFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://youtube.com",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/muhammad_dista/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com/@dustyyow?_t=ZS-8u7W16BX2aP&_r=1",
    Icon: RiTiktokFill,
  },
  {
    name: "Github",
    link: "https://github.com/dustyTheKing",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3.5 sm:gap-x-5 text-base sm:text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full p-1.5 hover:bg-emerald-400 hover:text-black hover:border-emerald-400"
              : "text-white/80 hover:text-emerald-400"
          } transition-all duration-300 flex items-center justify-center`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;