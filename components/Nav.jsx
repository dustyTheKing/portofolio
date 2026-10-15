import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiBriefcase,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "experience",
    path: "/experience",
    Icon: HiBriefcase,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen pointer-events-none">
      <div className="flex w-full xl:flex-col items-center justify-around xl:justify-center gap-y-10 px-4 sm:px-10 xl:px-0 h-[62px] xl:h-max py-3 xl:py-8 bg-black/40 xl:bg-white/10 backdrop-blur-lg text-xl sm:text-2xl xl:text-xl xl:rounded-full border-t xl:border border-white/10 shadow-2xl pointer-events-auto">
        {navData.map((link, i) => {
          const isActive = link.path === pathname;

          return (
            <Link
              className={`${
                isActive ? "text-emerald-400 scale-110" : "text-white/70"
              } relative flex items-center group hover:text-emerald-400 transition-all duration-300`}
              href={link.path}
              key={i}
            >
              {/* Tooltip Modern (Hanya untuk Desktop) */}
              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex items-center pointer-events-none transition-all duration-300 animate-in fade-in zoom-in-95"
              >
                <div className="bg-black/90 backdrop-blur-md border border-white/10 relative flex text-white items-center px-3 py-1.5 rounded-lg shadow-xl">
                  <div className="text-[12px] leading-none font-medium tracking-wide uppercase font-sans text-emerald-400">
                    {link.name}
                  </div>

                  {/* Triangle Arrow */}
                  <div
                    className="border-solid border-l-black/90 border-l-6 border-y-transparent border-y-[5px] border-r-0 absolute -right-1.5"
                    aria-hidden
                  />
                </div>
              </div>

              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110">
                <link.Icon aria-hidden />
              </div>

              {/* Indikator Titik Aktif Kecil di Mobile */}
              {isActive && (
                <span className="xl:hidden absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;