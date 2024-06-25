import React, { useEffect, useState } from "react";
import "./about.css";
import sanityClient from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { styles } from "../../styles/styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import SanityService from "../../services/sanityService";

/* A builder to be able to use images from sanity.io */
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [about, setAbout] = useState();

  /* GET ABOUT DATA FROM SANITY SERVICE */
  const getAbout = () => {
    SanityService.getData("about")
      .then((response) => {
        setAbout(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAbout();
  }, []);

  const [_file, id, extension] =
    about !== undefined && about?.file !== undefined
      ? about?.file.asset._ref.split("-")
      : "";

  return (
    <div className="container mx-auto mt-32" id="about">
      {/* Animation with framer-motion package */}
      <motion.div variants={textVariant()} className="text-center">
        <p
          className={`${styles.sectionSubText} second-font`}
          style={{ textAlign: "center" }}
        >
          About
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-[#37B7C3]">My</span> Introduction
        </h2>
      </motion.div>

      <div className="flex flex-row-reverse max-lg:flex-col-reverse max-lg:items-center gap-10 justify-center">
        <div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white max-w-xl leading-[26px]"
          >
            {about?.description}
          </motion.p>
          {_file !== undefined ? (
            <motion.a
              href={`https://cdn.sanity.io/files/qezjc3p6/production/${id}.${extension}`}
              rel="noreferrer noopener"
              target="_blank"
              aria-label="View My Resume"
              className="flex items-center gap-1 bg-[#37B7C3] w-fit hover:bg-[#2d929b] transition-all mt-4 text-white rounded-lg p-4"
            >
              View Resume
              <BiLinkExternal size={20} />
            </motion.a>
          ) : (
            ""
          )}
        </div>
        {about?.image !== undefined ? (
          <div className="relative mt-4 sm:w-[500px] w-full">
            <img
              src={urlFor(about?.image.asset._ref)}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
