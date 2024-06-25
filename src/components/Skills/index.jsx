import React, { useState, useEffect, Fragment } from "react";
import { SectionWrapper } from "../../hoc";
import SanityService from "../../services/sanityService";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles/styles";
import { Disclosure, Transition } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";

const Skills = () => {
  const [skills, setSkills] = useState();

  /* GET SKILLS DATA FROM SANITY SERVICE */
  const getSkills = () => {
    SanityService.getData("skills")
      .then((response) => {
        setSkills(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSkills();
  }, []);

  // If the skills array is empty, we do not render this component.
  return skills?.length !== 0 ? (
    <div
      className="flex flex-col flex-wrap justify-center gap-10 mt-32"
      id="skills"
    >
      <motion.div variants={textVariant()} style={{ textAlign: "center" }}>
        <p className={`${styles.sectionSubText} second-font`}>Tools</p>
        <h2 className={`${styles.sectionHeadText}`}>
          <span className="text-[#37B7C3]">My</span> Skills
        </h2>
      </motion.div>
      <div className="w-full" data-aos="fade-up" data-aos-duration="1500">
        <div className="w-full rounded-lg bg-transparent p-2 flex flex-col gap-2">
          {/* skills?.some(
            (skill) => skill.category === "programming_languages"
          ) 
          We check the category with and if there is no data in this category, we do not render. */}
          {skills?.some(
            (skill) => skill.category === "programming_languages"
          ) && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Programming Languages</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* skills?.filter(
                      (skill) => skill.category === "programming_languages"
                    )
                    .map((skill) 
                    We print the data in this category on the screen with */}
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

          {/* skills?.some(
            (skill) => skill.category === "software_tools"
          ) 
          We check the category with and if there is no data in this category, we do not render. */}
          {skills?.some((skill) => skill.category === "software_tools") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Software / Tools</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* skills?.filter(
                      (skill) => skill.category === "software_tools"
                    )
                    .map((skill) 
                    We print the data in this category on the screen with */}
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

          {/* skills?.some(
            (skill) => skill.category === "ide"
          ) 
          We check the category with and if there is no data in this category, we do not render. */}
          {skills?.some((skill) => skill.category === "ide") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>IDE</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* skills?.filter(
                      (skill) => skill.category === "ide"
                    )
                    .map((skill) 
                    We print the data in this category on the screen with */}
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

          {/* skills?.some(
            (skill) => skill.category === "version_control"
          ) 
          We check the category with and if there is no data in this category, we do not render. */}
          {skills?.some((skill) => skill.category === "version_control") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Version Control</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>

                  {/* skills?.filter(
                      (skill) => skill.category === "version_control"
                    )
                    .map((skill) 
                    We print the data in this category on the screen with */}
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

          {skills?.some(
            (skill) => skill.category === "project_development"
          ) && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Project Development</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>
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

          {skills?.some((skill) => skill.category === "soft_skills") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Soft Skills</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>
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

          {skills?.some((skill) => skill.category === "technical_skills") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Technical Skills</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>
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

          {skills?.some((skill) => skill.category === "other") && (
            <Disclosure
              as="div"
              className="mt-3 p-1 bg-transparent skills-shadow"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-[#37B7C385]" : ""
                    } flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white`}
                  >
                    <span>Other</span>
                    <IoIosArrowUp
                      className={`${
                        !open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white-500 transition-all`}
                    />
                  </Disclosure.Button>
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

export default SectionWrapper(Skills, "skills");
