// Define a schema type for contact information in Sanity Studio

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact', // Type name in Sanity Studio
  title: 'Contact', // Display title in Sanity Studio
  type: 'document', // Document type for schema definition

  // Fields within the 'contact' document
  fields: [
    // Define field for 'address'
    defineField({
      name: 'address', // Field name
      title: 'Address', // Field title in Sanity Studio
      type: 'string', // Data type (string)
    }),

    // Define field for 'email'
    defineField({
      name: 'email', // Field name
      title: 'Email', // Field title in Sanity Studio
      type: 'string', // Data type (string)
    }),

    // Define field for 'phone'
    defineField({
      name: 'phone', // Field name
      title: 'Phone', // Field title in Sanity Studio
      type: 'string', // Data type (string)
    }),
  ],
})
