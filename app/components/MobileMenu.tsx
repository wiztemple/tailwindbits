"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  navType?: "home" | "components" | "docs";
  border?: boolean;
}

const MobileMenu: React.FC<HeaderProps> = ({
  navType = "home",
  border = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`fixed h-auto z-50 w-screen block lg:hidden top-0 bg-snow-100 dark:bg-[#0B1023] ${
      border ? "border-b border-b-slate-200 dark:border-b-gray-700" : ""
    }`}>
      <div className={`w-full bg-snow backdrop-blur-[20px] relative`}>
        <div className="">
          <div
            className={`mt-1 w-full relative rounded-[50px] backdrop-blur-[20px] `}
          >
            <div className="flex justify-between items-center h-[66px] py-[10px] px-5">
              <div className="flex items-center gap-5">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.svg"
                    width={55}
                    height={25}
                    alt="TailwindBits Logo Icon"
                  />
                  <span className="text-primary text font-semibold block ml-0.5">
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

              <button className="" onClick={toggleMenu}>
                {isOpen ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L1 17M1 1L17 17"
                      stroke="#2C3E50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1H16M1 9.75H21M1 18.5H11"
                      stroke="#2C3E50"
                      strokeWidth="1.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {isOpen && (
              <div className="overflow-hidden flex flex-col gap-2 px-5 shadow-sm">
                {navType === "home" && (
                  <Link
                    href="/"
                    className={`p-2 text-base`}
                  >
                    Home
                  </Link>
                )}
                {navType === "components" && (
                  <div>sss</div>
                )}
                <Link
                  href="/components"
                  className={`p-2 text-base`}
                >
                  Components
                </Link>
               
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
