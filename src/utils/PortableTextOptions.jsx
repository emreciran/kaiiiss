import imageUrlBuilder from "@sanity/image-url";
import getVideoId from "get-video-id";
import YouTube from "react-youtube";
import sanityClient from "../../sanity";
import { BiLinkExternal } from "react-icons/bi";

// Initialize image URL builder for Sanity.io images
const builder = imageUrlBuilder(sanityClient);

/**
 * Function to build an image URL using Sanity.io image assets.
 * @param {object} source - The image asset reference.
 * @returns {string} - The constructed image URL.
 */
function urlFor(source) {
  return builder.image(source);
}

const opts = {
  height: "450",
  width: "100%",
};

/**
 * Simple component to lazily load images.
 * @param {object} props - Component props.
 */
const SampleImageComponent = (props) => {
  return (
    <img
      src={urlFor()
        .image(props.value.asset._ref)
        .fit("max")
        .auto("format")
        .url()}
      loading="lazy"
      style={{
        display: props.isInline ? "inline-block" : "block", // Display inline if inside block text span
      }}
    />
  );
};

/**
 * Components object defining custom renderers for Portable Text (Rich Text) content.
 */
export const components = {
  types: {
    // Example: Custom renderer for image type
    image: SampleImageComponent,

    // Example: Render YouTube videos
    youtube: (props) => {
      const { url } = props.value;
      const id = getVideoId(url);
      return <YouTube videoId={id.id} opts={opts} />;
    },

    // Example: Render breaks based on style
    break: (props) => {
      const { style } = props.value;
      if (style === "lineBreak") {
        return <hr className="lineBreak" />;
      }
      if (style === "lineSpacing") {
        return <br className="lineSpacing" />;
      }
      return null;
    },

    // Example: Render buttons with or without images
    button: (props) => {
      if (props?.value?.buttonImage !== undefined) {
        // Button with image
        return (
          <a
            href={props?.value?.link}
            target="_blank"
            className="inline-block w-32 my-2"
          >
            <img
              src={urlFor(props?.value?.buttonImage?.asset._ref)}
              alt=""
              className="w-full h-full"
            />
          </a>
        );
      } else {
        // Button without image
        return (
          <a
            href={props?.value?.link}
            target="_blank"
            className="inline-block my-2"
          >
            <button className="flex items-center gap-2 hover:bg-white hover:text-black font-semibold border border-solid py-2 px-4 rounded-lg max-h-[32px] ease-in duration-300">
              {props?.value?.name}
            </button>
          </a>
        );
      }
    },

    // Additional custom types can be defined here
    // Example: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },

  marks: {
    // Example: Render emphasis (italic) with custom styling
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Example: Render links with custom target and rel attributes
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className="underline"
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },

  block: {
    // Example: Custom renderers for common block types
    h1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="blockquote">{children}</blockquote>
    ),
    h2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl">{children}</h4>,
    p: ({ children }) => console.log(children), // Example: Log paragraph content
    customHeading: ({ children }) => <h2 className="text-lg">{children}</h2>, // Example: Render custom heading style
  },

  list: {
    // Example: Custom renderers for common list types
    bullet: ({ children }) => <ul className="mt-xl pl-10">{children}</ul>,
    number: ({ children }) => (
      <ol className="mt-lg pl-10 list-decimal">{children}</ol>
    ),

    // Example: Render custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  listItem: {
    // Example: Custom renderers for common list item types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),

    // Example: Render custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
