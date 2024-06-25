import React, { useEffect, useState } from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import SanityService from "../../services/sanityService";

const Footer = () => {
  /* getFullYear */
  const year = new Date().getFullYear();

  const [socials, setSocials] = useState();

  /* GET FOOTER SOCIAL DATA FROM SANITY SERVICE */
  const getSocialLinks = () => {
    SanityService.getData("social")
      .then((response) => {
        setSocials(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSocialLinks();
  }, []);

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Animation with framer-motion package */}

      <div
        className={`flex items-center ${
          socials?.length !== 0 ? "justify-between" : "justify-center"
        }  max-md:flex-col max-md:gap-4 footer__container max-sm:text-center`}
      >
        <p>
          &copy; {year}{" "}
          <span className="text-[#37B7C3] second-font text-[20px]">
            Kaiiiss
          </span>
          &nbsp; All Rights Reserved
        </p>
        <div className="flex gap-2 text-xl">
          {socials?.map(
            (social) =>
              social.link != "" && (
                <a
                  href={social.link}
                  key={social._id}
                  target="_blank"
                  className="hover:text-[#37B7C3] transition-all"
                >
                  {social.name === "instagram" && social.link !== undefined ? (
                    <IoLogoInstagram />
                  ) : social.name === "twitter" && social.link !== undefined ? (
                    <FaXTwitter />
                  ) : social.name === "linkedin" &&
                    social.link !== undefined ? (
                    <IoLogoLinkedin />
                  ) : social.name === "facebook" &&
                    social.link !== undefined ? (
                    <IoLogoFacebook />
                  ) : social.name === "github" && social.link !== undefined ? (
                    <IoLogoGithub />
                  ) : (
                    ""
                  )}
                </a>
              )
          )}
        </div>
      </div>
    </motion.footer>
  );
};

export default SectionWrapper(Footer, "footer");
