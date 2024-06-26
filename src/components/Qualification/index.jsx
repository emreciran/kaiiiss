import React, { useEffect, useState } from "react"; // Import React and necessary hooks
import "./qualification.css"; // Import local CSS file for styling
import { VerticalTimeline } from "react-vertical-timeline-component"; // Import VerticalTimeline component
import "react-vertical-timeline-component/style.min.css"; // Import CSS for VerticalTimeline
import ExperienceEducationCard from "./ExperienceEducationCard"; // Import custom card component
import SanityService from "../../services/sanityService"; // Import Sanity service for fetching data
import { textVariant } from "../../utils/motion"; // Import motion animation variants
import { styles } from "../../styles/styles"; // Import styles for consistent styling
import { motion } from "framer-motion"; // Import motion components for animations
import { SectionWrapper } from "../../hoc"; // Import higher-order component for section wrapping

const Qualification = () => {
  const [resumes, setResumes] = useState(); // State to store fetched resume data

  /* GET EXPERIENCE & EDUCATION DATA FROM SANITY SERVICE */
  const getResume = () => {
    SanityService.getData("resume")
      .then((response) => {
        setResumes(response); // Set resumes state with fetched data
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during data fetching
      });
  };

  const [toggle, setToggle] = useState(1); // State to toggle between Experience and Education tabs

  // Function to toggle between Experience and Education tabs
  const toggleTab = (index) => {
    setToggle(index);
  };

  useEffect(() => {
    getResume(); // Fetch resume data when component mounts
  }, []);

  // Render component only if resumes array is not empty
  return resumes?.length !== 0 ? (
    <div id="resume" className="qualification mt-32 container mx-auto">
      <motion.div variants={textVariant()} className="text-center">
        {/* Section heading for Resume */}
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
          {/* Experience and Education toggle buttons */}
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

        {/* Conditional rendering based on active tab */}
        {toggle === 1 ? (
          <div className="mt-20 flex flex-col overflow-hidden">
            {resumes && (
              // VerticalTimeline for displaying Experience cards
              <VerticalTimeline lineColor="#1d1d1d">
                {resumes?.map((experience, index) => {
                  if (experience.category === "experience") {
                    return (
                      <ExperienceEducationCard
                        key={`experience-${index}`}
                        data={experience} // Pass experience data to ExperienceEducationCard component
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
              // VerticalTimeline for displaying Education cards
              <VerticalTimeline lineColor="#1d1d1d">
                {resumes?.map((education, index) => {
                  if (education.category === "education") {
                    return (
                      <ExperienceEducationCard
                        key={`educations-${index}`}
                        data={education} // Pass education data to ExperienceEducationCard component
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
    "" // Render nothing if resumes array is empty
  );
};

export default SectionWrapper(Qualification, "qualification"); // Export Qualification component wrapped with SectionWrapper
