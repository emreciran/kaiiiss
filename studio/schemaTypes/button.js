// Define a schema type for a button in Sanity Studio

export default {
  name: 'button', // Type name in Sanity Studio
  type: 'object', // Object type for schema definition
  title: 'Button', // Display title in Sanity Studio

  // Fields within the 'button' object
  fields: [
    {
      name: 'name', // Field name
      title: 'Name', // Field title in Sanity Studio
      type: 'string', // Data type (string)
    },
    {
      name: 'buttonImage', // Field name
      title: 'Button image', // Field title in Sanity Studio
      type: 'image', // Data type (image)
      options: {
        hotspot: true, // Enable hotspot editing for images
      },
    },
    {
      name: 'link', // Field name
      title: 'Link', // Field title in Sanity Studio
      type: 'url', // Data type (url)
    },
  ],
}
