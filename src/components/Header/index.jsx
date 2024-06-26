import React, { useEffect, useState, Fragment } from "react"; // Import React and its hooks
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import routing components from react-router-dom
import { styles } from "../../styles/styles"; // Import custom styles
import { HiMenuAlt2, HiHome } from "react-icons/hi"; // Import menu and home icons from react-icons
import { Menu, Transition } from "@headlessui/react"; // Import components from headlessui for dropdown menu
import { motion } from "framer-motion"; // Import motion for animations from framer-motion
import { ImBook } from "react-icons/im"; // Import book icon from react-icons
import { TbMessageCircle2Filled } from "react-icons/tb"; // Import message icon from react-icons

const Header = () => {
  // State to manage if the header should have a background based on scroll position
  const [scrolled, setScrolled] = useState(false);

  // Hooks to manage navigation and location
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect to add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get current scroll position
      if (scrollTop > 50) {
        setScrolled(true); // Set scrolled state to true if scrolled more than 50px
      } else {
        setScrolled(false); // Set scrolled state to false if scrolled less than 50px
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
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
          {/* Logo and link to home */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0); // Scroll to top when logo is clicked
            }}
          >
            <p className="text-white text-[18px] max-md:text-[16px] font-bold cursor-pointer flex ">
              Kaiiiss
            </p>
          </Link>
          {/* Navigation links for larger screens */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            <li className="hover:text-white font-medium cursor-pointer">
              {/* Button to navigate to home */}
              <button
                onClick={() => {
                  navigate("/"); // Navigate to home
                }}
                className={`text-white group flex w-full items-center gap-1 transition-all hover:bg-[#37B7C3] ${
                  location.pathname === "/" ? "bg-[#37B7C3]" : ""
                } px-2 rounded-md py-2 max-md:px-1 text-md`}
              >
                <HiHome className="h-4 w-4 cursor-pointer" />
                Home
              </button>
            </li>
            <li className="text-white hover:text-white font-medium cursor-pointer">
              {/* Button to navigate to portfolio */}
              <button
                onClick={() => {
                  navigate("/portfolio"); // Navigate to portfolio
                }}
                className={`text-white group flex w-full items-center gap-1 rounded-md transition-all hover:bg-[#37B7C3] ${
                  location.pathname === "/portfolio" ? "bg-[#37B7C3]" : ""
                }  px-2 py-2 text-md max-md:px-1`}
              >
                <ImBook className="h-4 w-4 cursor-pointer" />
                Portfolio
              </button>
            </li>
            <li className="text-white hover:text-white font-medium cursor-pointer">
              {/* Button to navigate to contact */}
              <button
                onClick={() => {
                  navigate("/contact"); // Navigate to contact
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
                  {/* Animated menu button for mobile */}
                  <motion.div
                    initial={{ opacity: 0 }} // Initial opacity for animation
                    animate={{ opacity: 1 }} // Animate to full opacity
                    transition={{ duration: 1.4 }} // Duration of the animation
                    exit={{ opacity: 0, transition: { duration: 0.5 } }} // Exit animation
                    className="max-[700px]:flex sm:hidden cursor-pointer fixed bottom-6 bg-[#333] rounded-full p-4 z-50"
                  >
                    <HiMenuAlt2 />
                  </motion.div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100" // Enter transition
                enterFrom="transform opacity-0 scale-95" // Start state of enter transition
                enterTo="transform opacity-100 scale-100" // End state of enter transition
                leave="transition ease-in duration-75" // Leave transition
                leaveFrom="transform opacity-100 scale-100" // Start state of leave transition
                leaveTo="transform opacity-0 scale-95" // End state of leave transition
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        // Button to navigate to home in mobile menu
                        <button
                          onClick={() => {
                            navigate("/"); // Navigate to home
                          }}
                          className={`${
                            active ? "bg-[#37B7C3] text-white" : "text-gray-900"
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
                        // Button to navigate to portfolio in mobile menu
                        <button
                          onClick={() => {
                            navigate("/portfolio"); // Navigate to portfolio
                          }}
                          className={`${
                            active ? "bg-[#37B7C3] text-white" : "text-gray-900"
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
                        // Button to navigate to contact in mobile menu
                        <button
                          onClick={() => {
                            navigate("/contact"); // Navigate to contact
                          }}
                          className={`${
                            active ? "bg-[#37B7C3] text-white" : "text-gray-900"
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

export default Header; // Export the Header component for use in other parts of the app
