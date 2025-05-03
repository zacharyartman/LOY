"use client";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownTogglers, setDropdownTogglers] = useState<
    Record<number, boolean>
  >({});
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
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

  // Toggle a specific dropdown
  const toggleDropdown = (id: number) => {
    setDropdownTogglers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full bg-white py-1 shadow transition duration-100 dark:bg-black`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/las-olas-yoga-near-me.webp"
              alt="logo"
              width={110}
              height={Math.round(110 * (203 / 256))}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-5.5 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-5.5 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`overflow-hidden transition-all duration-500 xl:overflow-visible ${
            navigationOpen ? "navbar max-h-screen" : "max-h-0"
          } w-full items-center justify-between xl:flex xl:max-h-full xl:w-full`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData
                .filter((menuItem) => !menuItem.hidden)
                .map((menuItem, key) => (
                  <li
                    key={key}
                    className={`${menuItem.submenu ? "group flex w-full flex-wrap lg:relative lg:w-auto" : "flex lg:flex-none"}`}
                  >
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(menuItem.id)}
                          className={`flex cursor-pointer items-center justify-between gap-3 hover:text-primary  ${menuItem.submenu ? "w-full" : ""}`}
                        >
                          {menuItem.title}
                          <span>
                            <svg
                              className={`h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary ${dropdownTogglers[menuItem.id] ? "rotate-180" : ""}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </span>
                        </button>

                        <ul
                          className={`dropdown ${dropdownTogglers[menuItem.id] ? "flex flex-col" : ""}`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li key={key} className="hover:text-primary">
                              <a
                                href={item.path || "#"}
                                className="block w-full"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a
                        href={`${menuItem.path}`}
                        className={` w-full ${
                          pathUrl === menuItem.path
                            ? "text-primary hover:text-primary"
                            : "hover:text-primary"
                        }`}
                      >
                        {menuItem.title}
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
          <div className="my-5 flex items-center gap-2 xl:mb-0 xl:ml-10 xl:mt-0">
            <a
              href="/schedule"
              className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-center text-regular text-white transition-all duration-0 hover:bg-primaryho xl:duration-200"
            >
              Class Schedule
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
