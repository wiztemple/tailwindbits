import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white relative w-full dark:bg-[#0B1023]">
      <div className="absolute right-0 -top-16 z-40">
        <Image
          src="/fan.svg"
          width={170}
          height={200}
          alt="Spinning Fan Icon"
        />
      </div>
      <div className="sm:p-10 p-5">
      {/* #1A2650 */}
        <div className="bg-[#FBF8FA] rounded-2xl px-8 py-10 relative h-full dark:bg-[#0B132F]">
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
          <div className="grid sm:grid-cols-2 sm:gap-x-5">
            <div className="grid grid-cols-3">
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
                <Image
                  src="/circles.svg"
                  className="mt-2"
                  width={200}
                  height={200}
                  alt="Circles Icon"
                />
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
            <div>
              <h1 className="text-4xl font-extrabold text-[#2A4F7B] dark:text-slate-200">
                Need help with anything?
              </h1>
              <p className="text-[#2A4F7B] pt-3">
                Lets hear about it,{" "}
                <span className="text-primary">wiztemple7@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center bottom-16 w-full">
        <Image
          src="/square.svg"
          width={170}
          height={86}
          alt="Square Icon"
        />
      </div>
      <p className="text-center border-t border-t-slate-100 py-5 dark:text-purple-200 dark:border-t-gray-700">
        Copyright © 2024 TailwindBits. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
