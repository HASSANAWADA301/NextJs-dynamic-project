//components/sections/Header.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaBars, FaSearch, FaUser } from "react-icons/fa";
import Logo from "../atoms/Logo/Logo";
import IconButton from "../atoms/IconButton/IconButton";
// import ThemeToggleButton from "../atoms/ThemeToggleButton/ThemeToggleButton";
import { NavMenu } from "../molecules/NavMenu/NavMenu";
import { useRouter } from "next/navigation";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type HeaderContent = {
  logoUrl: string;
  navItems: NavItem[];
  contactLabel?: string;
  showSearchIcon?: boolean;
  showUserIcon?: boolean;
};

type HeaderProps = {
  id: string;
  content: HeaderContent;
  lang: string;
};

const Header = ({ content }: HeaderProps) => {
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen335, setIsOpen335] = useState(false);

  const isMobile = windowWidth <= 1024;
  const isTabletNav = windowWidth > 1024 && windowWidth <= 1335;
  const isDesktop = windowWidth > 1335;

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024 && isOpen) setIsOpen(false);
      if (
        (window.innerWidth <= 1024 || window.innerWidth > 1335) &&
        isOpen335
      ) {
        setIsOpen335(false);
      }
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isOpen, isOpen335]);
  

  const navItems = content?.navItems || [];
  const contactText = content?.contactLabel || "";
  console.log("Header Content:", content);

  if (!content) return null;

  return (
    <header className="flex-col m-0 justify-center pt-[20px]">
      <div className="justify-center m-auto w-full flex gap-[20px] text-gray-500 bg-white">
        {/* <ThemeToggleButton /> */}
      </div>

      <div className="hidden max-w-[1296px] w-[100vw] h-[60px] p-10 m-auto box-border justify-between items-center max-[1335px]:flex">
        <div className={`${isOpen ? "hidden" : ""}`}>
          <Logo src={content.logoUrl} />
        </div>

        {isTabletNav && (
          <button
            className="w-[45px] h-[45px] text-gray-500 rounded-full flex items-center justify-center text-xl"
            onClick={() => setIsOpen335((prev) => !prev)}
          >
            <IconButton Icon={isOpen335 ? FaArrowLeft : FaBars} />
          </button>
        )}

        {isMobile && (
          <button
            className="z-2000 text-[18px] w-[42px] h-[42px] text-gray-500 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <IconButton Icon={isOpen ? FaArrowLeft : FaBars} />
          </button>
        )}
      </div>

      {isDesktop && (
        <nav className="flex items-center justify-center text-sm bg-gray-100 rounded-full max-w-[1295px] w-screen h-[80px]">
          <Logo src={content.logoUrl} />
          <NavMenu items={navItems} />
          <Link href="/contactUs" className="bg-[#eb6f2d] text-white rounded-full py-2 px-4 list-none">
            {contactText}
          </Link>
          <div className="pr-6 pl-5 flex gap-2">
            {content.showSearchIcon && (
              <IconButton
                className="bg-gray-200 text-gray-500 rounded-full w-[50px] h-[50px] flex items-center justify-center ml-2"
                Icon={FaSearch}
              />
            )}
            {content.showUserIcon && (
              <IconButton
                className="bg-gray-200 text-gray-500 rounded-full w-[50px] h-[50px] flex items-center justify-center ml-2"
                Icon={FaUser}
              />
            )}
          </div>
        </nav>
      )}

      {isTabletNav && isOpen335 && (
        <motion.nav
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[20px] right-[5%] bottom-0 mt-[20px] w-[70vw] flex items-center rounded-[100px] h-[80px] left-[20%] justify-center bg-gray-200 z-[1000] overflow-y-auto"
        >
          <NavMenu items={navItems} />
          <Link href="/contactUs" className="bg-[#eb6f2d] text-white rounded-full text-sm py-1.5 px-3.5 list-none">
            {contactText}
          </Link>
          <div className="flex gap-3">
            {content.showSearchIcon && (
              <IconButton
                className="bg-gray-200 flex text-gray-500 w-[46px] h-[46px] text-sm justify-center items-center"
                Icon={FaSearch}
              />
            )}
            {content.showUserIcon && (
              <IconButton
                className="bg-gray-200 flex text-gray-500 w-[46px] h-[46px] text-sm justify-center items-center"
                Icon={FaUser}
              />
            )}
          </div>
        </motion.nav>
      )}

      {isMobile && isOpen && (
        <motion.nav
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 left-0 bottom-0 pt-[200px] flex flex-col justify-start bg-gray-200 z-[1000] overflow-y-auto animate-slideDown rounded-t-[30%] w-[100vw] items-center"
        >
          <Logo src={content.logoUrl} />
          <NavMenu items={navItems} />
          <Link href="/contactUs" className="bg-[#eb6f2d] text-white rounded-full text-sm py-1.5 px-2.5 mb-2 list-none items-center justify-center">
            {contactText}
          </Link>
          <div className="flex items-center gap-4 px-4">
            {content.showSearchIcon && (
              <IconButton
                className="bg-gray-200 flex text-gray-500 w-[40px] h-[40px] text-base justify-center items-center"
                Icon={FaSearch}
              />
            )}
            {content.showUserIcon && (
              <IconButton
                className="bg-gray-200 flex text-gray-500 w-[40px] h-[40px] text-base justify-center items-center"
                Icon={FaUser}
              />
            )}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
