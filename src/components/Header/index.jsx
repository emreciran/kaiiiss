import React, { useEffect, useState, Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../../styles/styles";
import { HiMenuAlt2 } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { ImBook } from "react-icons/im";
import { TbMessageCircle2Filled } from "react-icons/tb";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // To update the state and apply header style when the page scrolls
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* MAIN HEADER */}
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center container mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[18px] max-md:text-[16px] font-bold cursor-pointer flex ">
              Kaiiiss
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            <li className={`hover:text-white font-medium cursor-pointer`}>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className={`text-white group flex w-full items-center gap-1 transition-all hover:bg-[#37B7C3] ${
                  location.pathname === "/" ? "bg-[#37B7C3]" : ""
                } px-2 rounded-md py-2 max-md:px-1 text-md`}
              >
                <HiHome className="h-4 w-4 cursor-pointer" />
                Home
              </button>
            </li>
            <li
              className={`text-white hover:text-white font-medium cursor-pointer`}
            >
              <button
                onClick={() => {
                  navigate("/portfolio");
                }}
                className={`text-white group flex w-full items-center gap-1 rounded-md transition-all hover:bg-[#37B7C3] ${
                  location.pathname === "/portfolio" ? "bg-[#37B7C3]" : ""
                }  px-2 py-2 text-md max-md:px-1`}
              >
                <ImBook className="h-4 w-4 cursor-pointer" />
                Portfolio
              </button>
            </li>
            <li
              className={`text-white hover:text-white font-medium cursor-pointer`}
            >
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className={`text-white group flex w-full items-center gap-1 rounded-md transition-all hover:bg-[#37B7C3] ${
                  location.pathname === "/contact" ? "bg-[#37B7C3]" : ""
                }  px-2 py-2 text-md max-md:px-1`}
              >
                <TbMessageCircle2Filled className="h-4 w-4 cursor-pointer" />
                Contact
              </button>
            </li>
          </ul>

          {/* MOBILE HEADER */}
          <div className="sm:hidden fixed z-50 bottom-52 right-10 w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md x-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.4 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="max-[700px]:flex sm:hidden cursor-pointer fixed bottom-6 bg-[#333] rounded-full p-4 z-50"
                  >
                    <HiMenuAlt2 />
                  </motion.div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            navigate("/");
                          }}
                          className={`${
                            active
                              ? "bg-[#37B7C3] text-white"
                              : "text-gray-900"
                          } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-md ${
                            location.pathname === "/"
                              ? "bg-[#37B7C3] text-white"
                              : ""
                          }`}
                        >
                          <HiHome className="h-4 w-4 cursor-pointer" />
                          Home
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            navigate("/portfolio");
                          }}
                          className={`${
                            active
                              ? "bg-[#37B7C3] text-white"
                              : "text-gray-900"
                          } group flex w-full items-center gap-2 rounded-md px-2 py-2 ${
                            location.pathname === "/portfolio"
                              ? "bg-[#37B7C3] text-white"
                              : ""
                          } text-md`}
                        >
                          <ImBook className="h-4 w-4 cursor-pointer " />
                          Portfolio
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            navigate("/contact");
                          }}
                          className={`${
                            active
                              ? "bg-[#37B7C3] text-white"
                              : "text-gray-900"
                          } group flex w-full items-center gap-2 rounded-md px-2 py-2 ${
                            location.pathname === "/contact"
                              ? "bg-[#37B7C3] text-white"
                              : ""
                          } text-md`}
                        >
                          <TbMessageCircle2Filled className="h-4 w-4 cursor-pointer" />
                          Contact
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
