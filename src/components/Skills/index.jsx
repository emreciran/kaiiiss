import React, { useState, useEffect, Fragment } from "react"; // Import React and necessary hooks
import { SectionWrapper } from "../../hoc"; // Import SectionWrapper higher-order component
import SanityService from "../../services/sanityService"; // Import Sanity service for fetching data
import { motion } from "framer-motion"; // Import motion components for animations
import { textVariant } from "../../utils/motion"; // Import motion animation variants
import { styles } from "../../styles/styles"; // Import styles for consistent styling
import { Disclosure, Transition } from "@headlessui/react"; // Import Disclosure and Transition components for collapsible sections
import { IoIosArrowUp } from "react-icons/io"; // Import IoIosArrowUp icon from react-icons library

const Skills = () => {
  const [skills, setSkills] = useState(); // State to store fetched skills data

  /* GET SKILLS DATA FROM SANITY SERVICE */
  const getSkills = () => {
    SanityService.getData("skills")
      .then((response) => {
        setSkills(response); // Set skills state with fetched data
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during data fetching
      });
  };

  useEffect(() => {
    getSkills(); // Fetch skills data when component mounts
  }, []);

  // If the skills array is empty, we do not render this component.
  return skills?.length !== 0 ? (
    <div
      className="flex flex-col flex-wrap justify-center gap-10 mt-32"
      id="skills"
    >
      <motion.div variants={textVariant()} style={{ textAlign: "center" }}>
        {/* Section heading for Skills */}
        <p className={`${styles.sectionSubText} second-font`}>Tools</p>
        <h2 className={`${styles.sectionHeadText}`}>
          <span className="text-[#37B7C3]">My</span> Skills
        </h2>
      </motion.div>
      <div className="w-full" data-aos="fade-up" data-aos-duration="1500">
        <div className="w-full rounded-lg bg-transparent p-2 flex flex-col gap-2">
          {/* Render section for programming languages if data exists */}
          {skills?.some(
            (skill) => skill.category === "programming_languages"
          ) && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for programming languages */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Programming Languages</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* Render programming languages skills */}
                  {skills
                    ?.filter(
                      (skill) => skill.category === "programming_languages"
                    )
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}

          {/* Render section for software tools if data exists */}
          {skills?.some((skill) => skill.category === "software_tools") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for software tools */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Software / Tools</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* Render software tools skills */}
                  {skills
                    ?.filter((skill) => skill.category === "software_tools")
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}

          {/* Render section for IDE if data exists */}
          {skills?.some((skill) => skill.category === "ide") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for IDE */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>IDE</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* Render IDE skills */}
                  {skills
                    ?.filter((skill) => skill.category === "ide")
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}

          {/* Render section for version control if data exists */}
          {skills?.some((skill) => skill.category === "version_control") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for version control */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Version Control</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* Render version control skills */}
                  {skills
                    ?.filter((skill) => skill.category === "version_control")
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}

          {/* Render section for project development if data exists */}
          {skills?.some(
            (skill) => skill.category === "project_development"
          ) && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for project development */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Project Development</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* Render project development skills */}
                  {skills
                    ?.filter(
                      (skill) => skill.category === "project_development"
                    )
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}

          {/* Render section for soft skills if data exists */}
          {skills?.some((skill) => skill.category === "soft_skills") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for soft skills */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Soft Skills</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>
                  {/* Render soft skills */}
                  {skills
                    ?.filter((skill) => skill.category === "soft_skills")
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}

          {/* Render section for technical skills if data exists */}
          {skills?.some((skill) => skill.category === "technical_skills") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for technical skills */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Technical Skills</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>
                  {/* Render technical skills */}
                  {skills
                    ?.filter((skill) => skill.category === "technical_skills")
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}

          {/* Render section for other skills if data exists */}
          {skills?.some((skill) => skill.category === "other") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  {/* Disclosure button for other skills */}
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Other</span>
                    {/* Arrow icon for disclosure button */}
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>
                  {/* Render other skills */}
                  {skills
                    ?.filter((skill) => skill.category === "other")
                    .map((skill) => (
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        key={skill._id}
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                          • {skill.name}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                </>
              )}
            </Disclosure>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SectionWrapper(Skills, "skills"); // Export Skills component wrapped with SectionWrapper
