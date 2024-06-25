import React from "react";
import moment from "moment";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../../sanity";
import { PortableText } from "@portabletext/react";
import { components } from "../../utils/PortableTextOptions";
import { IoLocationOutline } from "react-icons/io5";

/* A builder to be able to use images from sanity.io */
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

// For Cards used in VerticalTimeline
const ExperienceEducationCard = ({ data }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        boxShadow: "#37B7C32f 0px 1px 8px 0px",
      }}
      iconStyle={{ background: "#37B7C3" }}
      // date format with moment package
      date={`${moment(data?.startDate).format("YYYY MMMM")} / ${
        data?.endDate ? moment(data.endDate).format("YYYY MMMM") : "Present"
      }`}
      // icon
      icon={
        data?.image !== undefined ? (
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={urlFor(data?.image.asset._ref)}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-full"
            />
          </div>
        ) : undefined
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{data?.title}</h3>

        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {data?.subtitle}
        </p>
      </div>
      <div className="mt-5 list-disc space-y-2">
        <div className="text-white-100 text-[14px] pl-1 tracking-wider">
          {/* With the @portabletext/react package, we print the description data from Sanity to the screen more regularly. */}
          <PortableText value={data?.description} components={components} />
        </div>
      </div>
      <div className="mt-5 list-disc space-y-2">
        <div className="text-white-100 text-[14px] pl-1 tracking-wider flex items-center gap-1">
          <IoLocationOutline size={18} />
          {data?.location}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceEducationCard;
