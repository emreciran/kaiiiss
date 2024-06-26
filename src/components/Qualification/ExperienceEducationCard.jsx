import React from "react"; // Import React library
import moment from "moment"; // Import moment.js for date formatting
import { VerticalTimelineElement } from "react-vertical-timeline-component"; // Import component from the vertical timeline library
import "react-vertical-timeline-component/style.min.css"; // Import CSS for the vertical timeline
import imageUrlBuilder from "@sanity/image-url"; // Import image URL builder from Sanity
import sanityClient from "../../../sanity"; // Import configured Sanity client
import { PortableText } from "@portabletext/react"; // Import PortableText component from @portabletext/react
import { components } from "../../utils/PortableTextOptions"; // Import custom components for PortableText
import { IoLocationOutline } from "react-icons/io5"; // Import location icon from react-icons

// Initialize a builder to generate image URLs from Sanity
const builder = imageUrlBuilder(sanityClient);

// Function to generate image URL for a given source
function urlFor(source) {
  return builder.image(source);
}

// Component to display a card in the vertical timeline
const ExperienceEducationCard = ({ data }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        boxShadow: "#37B7C32f 0px 1px 8px 0px", // Custom box shadow for the card
      }}
      iconStyle={{ background: "#37B7C3" }} // Custom background color for the icon
      // Format start and end dates using moment.js
      date={`${moment(data?.startDate).format("YYYY MMMM")} / ${
        data?.endDate ? moment(data.endDate).format("YYYY MMMM") : "Present"
      }`}
      // Display an icon if the data has an image
      icon={
        data?.image !== undefined ? (
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={urlFor(data?.image.asset._ref)} // Generate image URL
              alt="" // Alt text for the image
              className="w-[100%] h-[100%] object-cover rounded-full" // CSS classes for styling the image
            />
          </div>
        ) : undefined
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{data?.title}</h3>{" "}
        {/* Title of the experience/education */}
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }} // Inline style to remove margin
        >
          {data?.subtitle} {/* Subtitle of the experience/education */}
        </p>
      </div>
      <div className="mt-5 list-disc space-y-2">
        <div className="text-white-100 text-[14px] pl-1 tracking-wider">
          {/* Display the description using PortableText component */}
          <PortableText value={data?.description} components={components} />
        </div>
      </div>
      <div className="mt-5 list-disc space-y-2">
        <div className="text-white-100 text-[14px] pl-1 tracking-wider flex items-center gap-1">
          <IoLocationOutline size={18} /> {/* Location icon */}
          {data?.location} {/* Location of the experience/education */}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceEducationCard; // Export the component
