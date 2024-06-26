import {defineField, defineType} from 'sanity'

// Define a schema type 'about' for sanity.io
export default defineType({
  name: 'about', // Type name
  title: 'About', // Display title in Sanity Studio
  type: 'document', // Document type

  // Fields within the 'about' document type
  fields: [
    // Field for description of the about section
    defineField({
      name: 'description', // Field name
      title: 'Description', // Display title in Sanity Studio
      type: 'text', // Data type (text)
    }),

    // Field for job title
    defineField({
      name: 'job', // Field name
      title: 'Job Title', // Display title in Sanity Studio
      type: 'string', // Data type (string)
    }),

    // Field for an image related to the about section
    defineField({
      name: 'image', // Field name
      title: 'About Image', // Display title in Sanity Studio
      type: 'image', // Data type (image)
      options: {
        hotspot: true, // Allow hotspot for image editing
      },
    }),

    // Field for uploading a resume file
    defineField({
      name: 'file', // Field name
      title: 'Resume File', // Display title in Sanity Studio
      type: 'file', // Data type (file)
      description: 'Please select only pdf file. Not required!', // Field description
      options: {
        accept: '.pdf', // Accept only PDF files
      },
    }),
  ],
})
