"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import Link from "next/link";
import { Menu } from "@/types/menu";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownTogglers, setDropdownTogglers] = useState<
    Record<number, boolean>
  >({});
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY >= 1) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  const toggleDropdown = (id: number) => {
    setDropdownTogglers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLinkClick = () => {
    setNavigationOpen(false);
  };

  const isSubmenuActive = (submenu: Menu[]) => {
    return submenu.some((item) => pathUrl === item.path);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full bg-white shadow transition duration-75`}
    >
      <div
        className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:grid 
                   xl:grid-cols-[1fr_5fr_1fr] xl:gap-4 2xl:px-0"
      >
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo/las-olas-yoga-near-me.webp"
              alt="logo"
              width={110}
              height={Math.round(110 * (203 / 256))}
              className="w-full max-h-22 object-contain"
              priority
            />
          </Link>

          {/* Hamburger Toggle BTN */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-5.5 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-5.5 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Middle: Nav */}
        <div
          className={`overflow-hidden transition-all duration-300 xl:overflow-visible ${
            navigationOpen ? "navbar max-h-screen" : "max-h-0"
          } w-full items-center justify-center xl:flex xl:max-h-full`}
        >
          <nav className="w-full">
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-center xl:gap-10">
              {menuData
                .filter((menuItem) => !menuItem.hidden)
                .map((menuItem, key) => (
                  <li
                    key={key}
                    className={`${
                      menuItem.submenu
                        ? "group flex w-full flex-wrap lg:relative lg:w-auto"
                        : "flex lg:flex-none"
                    }`}
                  >
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => {
                            if (window.innerWidth < 1280) {
                              toggleDropdown(menuItem.id);
                            }
                          }}
                          className={`flex cursor-pointer items-center justify-between gap-3 hover:text-primary  ${
                            menuItem.submenu ? "w-full" : ""
                          } ${
                            isSubmenuActive(menuItem.submenu)
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {menuItem.title}
                          <span>
                            <svg
                              className={`h-3 w-3 cursor-pointer fill-current transition-transform xl:group-hover:rotate-180 ${
                                dropdownTogglers[menuItem.id]
                                  ? "rotate-180"
                                  : ""
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </span>
                        </button>

                        <ul
                          className={`dropdown ${
                            dropdownTogglers[menuItem.id] ? "flex flex-col" : ""
                          }`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li 
                              key={key}
                            >
                              <Link
                                href={item.path || "#"}
                                className={`block w-full py-4 px-5 rounded-md text-sm font-normal hover:bg-gray-50 hover:text-primary ${
                                  pathUrl === item.path 
                                    ? "bg-primary/5 text-primary font-medium" 
                                    : ""
                                }`}
                                onClick={handleLinkClick}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <Link
                          href={`${menuItem.path}`}
                          className={`w-full ${
                            pathUrl === menuItem.path
                              ? "text-primary hover:text-primary"
                              : "hover:text-primary"
                          }`}
                          onClick={handleLinkClick}
                        >
                          {menuItem.title}
                        </Link>
                      </>
                    )}
                  </li>
                ))}

              {/* Class Schedule visible in dropdown only on mobile */}
              <li className="block xl:hidden">
                <Link
                  href="/schedule"
                  className="flex w-full flex-col items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-center text-regular leading-tight text-white transition-all hover:bg-primaryho mb-5"
                  onClick={handleLinkClick}
                >
                  <span>Class Schedule</span>
                  <span className="text-xs opacity-80">Book Classes</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: Class Schedule only on desktop */}
        <div className="hidden items-center justify-end gap-2 xl:flex">
          <Link
            href="/schedule"
            className="flex w-full flex-col items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-center text-regular leading-tight text-white transition-all hover:bg-primaryho xl:w-auto"
            onClick={handleLinkClick}
          >
            <span>Class Schedule</span>
            <span className="text-xs opacity-80">Book Classes</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
