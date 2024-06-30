"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GeneralElementsIcon from "./icons/GeneralElementsIcon";
import ChevronIcon from "./icons/ChevronIcon";
import NavElementsIcon from "./icons/NavElementsIcon";
import AccordionIcon from "./icons/AccordionIcon";
import CardIcon from "./icons/CardIcon";
import Image from "next/image";

interface MenuItem {
  title: string;
  icon: JSX.Element;
  children: { title: string; path: string }[];
}

type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export const MENU_ITEMS: SideNavItem[] = [
  {
    title: "General Elements",
    path: "/components/general",
    icon: <GeneralElementsIcon fill="current" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Accordions",
        icon: <AccordionIcon fill="current" />,
        path: "/components/general/accordions",
      },
      {
        title: "Cards",
        icon: <CardIcon fill="current" />,
        path: "/components/general/cards",
      },
    ],
  },
  {
    title: "Navigational Elements",
    path: "/components/nav/navigations",
    icon: <NavElementsIcon stroke="current" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Navigations",
        icon: <AccordionIcon fill="current" />,
        path: "/components/nav/navigations",
      },
      {
        title: "Cards",
        icon: <CardIcon fill="current" />,
        path: "/components/d",
      },
    ],
  },
  {
    title: "Form Elements",
    path: "/form",
    icon: <GeneralElementsIcon fill="current" />,
    submenu: true,
    subMenuItems: [
      { title: "Accordions", path: "/components/a" },
      { title: "Cards", path: "/components/b" },
    ],
  },
  {
    title: "Feedback Elements",
    path: "/feedback",
    icon: <GeneralElementsIcon fill="current" />,
    submenu: true,
    subMenuItems: [
      { title: "Accordions", path: "/components/e" },
      { title: "Cards", path: "/components/f" },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-snow-100 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="flex items-center gap-x-2 pb-3 ml-8">
        <Image
          src="/component.svg"
          width={20}
          height={20}
          alt="Component Icon"
        />
        <h1 className="text-main-200 font-semibold">Components</h1>
      </div>
      {MENU_ITEMS.map((item, idx) => (
        <MenuItem key={idx} item={item} />
      ))}
    </aside>
  );
};

export default Sidebar;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(
    item.subMenuItems?.some((subItem) => subItem.path === pathname) || false
  );

  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev);
  };

  return (
    <div className="ml-2">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center px-3 py-3 text-sm font-medium rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path)
                ? "bg-primaryZinc text-primary"
                : "text-main-200"
            }`}
            // className={`flex flex-row items-center px-3 py-3 rounded-lg text-sm font-medium hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
            //   subMenuOpen ? "bg-primaryZinc text-primary" : "text-main-200"
            // }`}
          >
            <div className="flex flex-row space-x-4 items-center fill-current">
              {item.icon}
              <span className="font-medium text-sm flex">{item.title}</span>
            </div>
            <ChevronIcon
              className={`transform transition-transform duration-200 ${
                subMenuOpen ? "rotate-0" : "rotate-180"
              }`}
              fill="current"
            />
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-6 flex flex-col space-y-4 border-l border-l-slate-200 pl-3">
              {item.subMenuItems?.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={subItem.path}
                  className={`text-sm flex items-center gap-x-2 ${
                    subItem.path === pathname
                      ? "text-primary font-medium"
                      : "text-main-200"
                  }`}
                >
                  <span>{subItem.icon}</span>
                  <span>{subItem.title}</span>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 text-main-200 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? "bg-zinc-100" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
