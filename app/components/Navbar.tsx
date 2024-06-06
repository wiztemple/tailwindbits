import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ border = true }: { border?: boolean }) => {
  return (
    <nav
      className={`w-screen h-[60px] fixed top-0 z-50 sm:px-10 px-5 sm:flex hidden justify-between items-center bg-snow-100 dark:bg-[#0B1023] ${
        border ? "border-b border-b-slate-200 dark:border-b-gray-700" : ""
      }`}
    >
      <div className="flex items-center gap-x-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            width={60}
            height={30}
            alt="TailwindBits Logo Icon"
          />
          <span className="text-primary text-lg font-semibold block ml-0.5">
            TailwindBits
          </span>
        </Link>
        <span className="flex items-center py-1 border dark:border-gray-700 bg-grey-150 dark:bg-[#0B132F] hover:bg-grey-100 rounded-full text-grey-600 text-xs font-semibold gap-x-1 px-1.5">
          <Image
            src="/tailwind.svg"
            width={24}
            height={10}
            alt="Tailwind Icon"
          />
          <span className="block mr-1">v3.4.1</span>
        </span>
      </div>
      <div className="flex items-center gap-x-4">
        <a href="/components" className="ml-5 text-main-300 font-medium">
          Components
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
