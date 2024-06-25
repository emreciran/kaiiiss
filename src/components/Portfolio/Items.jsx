import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../../sanity";
import { Truncate } from "../../utils/TruncateText";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems?.map((projectItem) => {
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.4 }}
            className="portfolio__items card card-two pb-14"
            key={projectItem?._id}
          >
            {/* Animation with framer-motion package */}

            <div className="portfolio__img-wrapper">
              <a href={`/portfolio/${projectItem?.slug.current}`}>
                <img
                  src={urlFor(projectItem?.mainImage.asset._ref)}
                  alt=""
                  className="portfolio__img"
                />
              </a>
            </div>
            <span className="portfolio__category text-cs">
              {projectItem?.category}
            </span>
            <a href={`/portfolio/${projectItem?.slug.current}`}>
              <h3 className="portfolio__title text-[18px]">
                {projectItem?.title && Truncate(projectItem?.title, 100)}
              </h3>
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p className="portfolio__description text-[15px]">
                {projectItem?.description &&
                  Truncate(projectItem?.description, 200)}
              </p>
              <a
                href={`/portfolio/${projectItem?.slug.current}`}
                className="absolute bottom-3 flex hover:gap-2 transition-all duration-300 items-center gap-3"
              >
                See Details
                <FaArrowRight className="link__icon" />
              </a>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
