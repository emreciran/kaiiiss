import React from 'react'
import getVideoId from 'get-video-id' // Importing the get-video-id library to extract video ID from YouTube URL
import YouTube from 'react-youtube' // Importing the react-youtube component to embed YouTube videos

// Preview component for the YouTube embed field in Sanity Studio
const Preview = (props) => {
  const {url, renderDefault} = props // Destructuring props to get the 'url' and 'renderDefault' function

  // If no URL is provided, display a message indicating it's missing
  if (!url) return <div>Missing YouTube URL</div>

  // Extract the video ID from the provided URL using getVideoId function
  const id = getVideoId(url)

  // Render the default preview and embed the YouTube video using react-youtube component
  return (
    <div>
      {renderDefault({...props, title: 'YouTube Embed'})} {/* Render the default preview */}
      <YouTube videoId={id.id} /> {/* Embed the YouTube video using the extracted video ID */}
    </div>
  )
}

// Exporting the schema definition for YouTube Embed in Sanity Studio
export default {
  name: 'youtube', // Name of the schema type
  type: 'object', // Type of schema: object
  title: 'YouTube Embed', // Title displayed in Sanity Studio
  fields: [
    {
      name: 'url', // Field name: 'url'
      type: 'url', // Type of the field: url
      title: 'YouTube video URL', // Title displayed for this field in Sanity Studio
    },
  ],
  preview: {
    select: {
      url: 'url', // Selecting the 'url' field for preview
    },
  },
  components: {
    preview: Preview, // Assigning the Preview component to be used for preview in Sanity Studio
  },
}
