import {defineField, defineType} from 'sanity'

// Define a Sanity schema type for a Hero document
export default defineType({
  name: 'hero', // The name of the schema type
  title: 'Hero', // The title displayed in the Sanity Studio
  type: 'document', // This defines it as a document type in Sanity
  fields: [
    // Define fields for the Hero document
    defineField({
      name: 'slogans', // Field name: 'slogans'
      title: 'Slogans', // Title displayed for this field
      type: 'array', // Type of the field: array (can contain multiple values)
      of: [{type: 'string'}], // Array of strings: Each element in the array is a string
      // 'of' specifies the array can contain elements of type 'string'
    }),
  ],
})
