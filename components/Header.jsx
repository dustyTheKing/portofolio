import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 xl:px-0 h-[80px] sm:h-[90px] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-4 sm:py-6">
          
          {/* Logo Teks Modern */}
          <Link href="/" className="group flex items-center gap-x-1">
            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white transition-all duration-300 group-hover:text-emerald-400">
              dista<span className="text-emerald-400 group-hover:text-white transition-all duration-300">.dev</span>
            </span>
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
          </Link>

          {/* Social Icons */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;