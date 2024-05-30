import exp from "constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ border = true }: { border?: boolean }) => {
  return (
    <nav
      className={`w-screen h-[60px] fixed top-0 z-50 sm:px-10 px-5 flex justify-between items-center bg-snow-100 ${
        border ? "border-b border-b-slate-200" : ""
      }`}
    >
      <div className="flex gap-x-5">
        <a href="/" className="flex items-center">
          <svg
            width="60"
            height="30"
            viewBox="0 0 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#64A3F6" />
            <circle cx="30" cy="15" r="15" fill="#3386F3" />
            <circle cx="45" cy="15" r="15" fill="#0D75FF" />
          </svg>
          <span className="text-primary text-lg font-semibold block ml-0.5">
            TailwindBits
          </span>
        </a>
        <span className="flex items-center border bg-grey-150 hover:bg-grey-100 rounded-full text-grey-600 text-xs font-semibold gap-x-1 px-1.5">
          <Image
            src="/tailwind.svg"
            width={24}
            height={10}
            alt="Tailwind Icon"
          />
         <span className="block mr-1">v3.4.1</span>
        </span>
      </div>
      <div>
        <a href="/components" className="ml-5 text-main-300 font-medium">
          Components
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
