import React, { useEffect, useState } from "react";
import "./qualification.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceEducationCard from "./ExperienceEducationCard";
import SanityService from "../../services/sanityService";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles/styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";

const Qualification = () => {
  const [resumes, setResumes] = useState();

  /* GET EXPERIENCE & EDUCATION DATA FROM SANITY SERVICE */
  const getResume = () => {
    SanityService.getData("resume")
      .then((response) => {
        setResumes(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  useEffect(() => {
    getResume();
  }, []);

  // If the resumes array is empty, we do not render this component.
  return resumes?.length !== 0 ? (
    <div id="resume" className="qualification mt-32 container mx-auto">
      <motion.div variants={textVariant()} className="text-center">
        <p
          className={`${styles.sectionSubText} second-font`}
          style={{ textAlign: "center" }}
        >
          Resume
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-[#37B7C3]">My</span> Story
        </h2>
      </motion.div>
      <div
        className="qualification__container container mt-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="qualification__tabs">
          {/* Education or Experience buttons */}

          <div
            onClick={() => toggleTab(1)}
            className={
              toggle === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
          >
            <i className="ri-briefcase-line qualification__icon"></i>
            <span className=" max-sm:text-base">Experience</span>
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={
              toggle === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
          >
            <i className="ri-graduation-cap-line qualification__icon"></i>
            <span className=" max-sm:text-base">Education</span>
          </div>
        </div>

        {toggle === 1 ? (
          <div className="mt-20 flex flex-col overflow-hidden">
            {resumes && (
              // RESUME component with VerticalTimeline package
              <VerticalTimeline lineColor="#1d1d1d">
                {resumes?.map((experience, index) => {
                  if (experience.category === "experience") {
                    return (
                      <ExperienceEducationCard
                        key={`experience-${index}`}
                        data={experience}
                      />
                    );
                  }
                })}
              </VerticalTimeline>
            )}
          </div>
        ) : (
          <div className="mt-20 flex flex-col overflow-hidden">
            {resumes && (
              // RESUME component with VerticalTimeline package
              <VerticalTimeline lineColor="#1d1d1d">
                {resumes?.map((education, index) => {
                  if (education.category === "education") {
                    return (
                      <ExperienceEducationCard
                        key={`educations-${index}`}
                        data={education}
                      />
                    );
                  }
                })}
              </VerticalTimeline>
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default SectionWrapper(Qualification, "qualification");
