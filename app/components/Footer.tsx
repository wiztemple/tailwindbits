import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white relative w-full dark:bg-[#0B1023]">
      <div className="absolute right-0 -top-16 z-40 sm:block hidden">
        <Image
          src="/fan.svg"
          width={170}
          height={200}
          alt="Spinning Fan Icon"
        />
      </div>
      <div className="absolute right-0 -top-8 z-40 sm:hidden block">
        <Image
          src="/fan.svg"
          width={100}
          height={130}
          alt="Spinning Fan Icon"
        />
      </div>
      <div className="sm:p-10 p-5">
        <div className="bg-[#FBF8FA] rounded-2xl sm:px-8 px-5 py-10 relative h-full dark:bg-[#0B132F]">
          <Link href="/" className="flex items-center mb-8">
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
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-5">
            <div className="grid sm:grid-cols-3 grid-cols-1">
              <div>
                <Link
                  href="/"
                  className="text-[#2A4F7B] font-medium flex items-center gap-x-2 py-3 px-2"
                >
                  <Image
                    src="/component2.svg"
                    width={22}
                    height={22}
                    alt="Component Icon"
                  />
                  Components
                </Link>
               <div className="sm:block hidden">
               <Image
                  src="/circles.svg"
                  className="mt-2"
                  width={200}
                  height={200}
                  alt="Circles Icon"
                />
               </div>
               <div className="block sm:hidden">
               <Image
                  src="/circles.svg"
                  className="mt-1"
                  width={100}
                  height={100}
                  alt="Circles Icon"
                />
               </div>
              </div>
              <div>
                <Link
                  href="/"
                  className="text-[#2A4F7B] font-medium flex items-center gap-x-2 py-3 px-2"
                >
                  <Image
                    src="/component2.svg"
                    width={22}
                    height={22}
                    alt="Component Icon"
                  />
                  Tailwind CSS
                </Link>
                <Link
                  href="/"
                  className="text-[#2A4F7B] font-medium flex items-center gap-x-2 py-3 px-2"
                >
                  <Image
                    src="/codepen.svg"
                    width={26}
                    height={23}
                    alt="Codepen Icon"
                  />
                  Codepen
                </Link>
                <Link
                  href="/"
                  className="text-[#2A4F7B] font-medium flex items-center gap-x-2 py-3 px-2"
                >
                  <Image
                    src="/linkedin.svg"
                    width={24}
                    height={24}
                    alt="LinkedIn Icon"
                  />
                  LinkedIn
                </Link>
              </div>
              <div>
                <Link
                  href="/"
                  className="text-[#2A4F7B] font-medium flex items-center gap-x-2 py-3 px-2"
                >
                  <Image
                    src="/figma.svg"
                    width={17}
                    height={24}
                    alt="Figma Icon"
                  />
                  TailwindBits Figma
                </Link>
                <Link
                  href="/"
                  className="text-[#2A4F7B] font-medium flex items-center gap-x-2 py-3 px-2"
                >
                  <Image
                    src="/figma.svg"
                    width={17}
                    height={24}
                    alt="Twitter/X Icon"
                  />
                  Twitter/X
                </Link>
                <Link
                  href="/"
                  className="text-[#2A4F7B] font-medium flex items-center gap-x-2 py-3 px-2 cursor-pointer"
                >
                  <Image
                    src="/figma.svg"
                    width={17}
                    height={24}
                    alt="Facebook Icon"
                  />
                  Facebook
                </Link>
              </div>
            </div>
            <div className="sm:pt-0 sm:pb-0 pt-5 pb-10">
              <h1 className="text-4xl font-extrabold text-[#2A4F7B] dark:text-slate-200">
                Need help with anything?
              </h1>
              <p className="text-[#2A4F7B] sm:pt-3 pt-10">
                Lets hear about it,{" "}
                <span className="text-primary">wiztemple7@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute sm:flex hidden justify-center bottom-16 w-full">
        <Image src="/square.svg" width={170} height={86} alt="Square Icon" />
      </div>
      <div className="absolute sm:hidden flex justify-center bottom-16 w-full">
        <Image src="/square.svg" width={134} height={50} alt="Square Icon" />
      </div>
      <p className="text-center sm:text-base text-xs border-t border-t-slate-100 py-5 dark:text-purple-200 dark:border-t-gray-700">
        Copyright © 2024 TailwindBits. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
