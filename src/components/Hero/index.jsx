import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../../styles/styles";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SanityService from "../../services/sanityService";

const Hero = () => {
  const [hero, setHero] = useState();

  /* GET HOME DATA FROM SANITY SERVICE */
  const getHero = () => {
    SanityService.getData("hero")
      .then((response) => {
        setHero(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    getHero();
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 text-center max-w-full justify-center items-center mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hello World, I'm
            <span className="text-[#37B7C3] second-font"> Kaiiiss</span>
          </h1>

          {/* writing effect on home page */}
          {hero !== undefined ? (
            <Typewriter
              options={{
                strings: hero?.slogans,
                autoStart: true,
                loop: true,
                cursorClassName:
                  "mt-2 font-medium second-font lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
                wrapperClassName:
                  "mt-2 text-white-100 second-font text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
              }}
            />
          ) : (
            ""
          )}
          <motion.a
            href="#works"
            className="bg-[#37B7C3] hover:bg-[#2d929b] transition-all mt-4 inline-block text-white rounded-lg p-4"
          >
            My Portfolio
          </motion.a>
          <motion.a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="bg-transparent mt-4 inline-block text-white transition-all hover:text-[#37B7C3] rounded-lg p-4"
          >
            Say Hello
          </motion.a>
        </div>
      </div>

      {/* looping animation icon on the home page */}
      <div className="absolute xs:bottom-6 bottom-24 w-full flex justify-center items-center">
        <a href="#about" className="flex items-center">
          <div className="w-[35px] h-[56px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
