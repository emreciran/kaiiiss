import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

// Define a Sanity schema type for Social documents
export default defineType({
  name: 'social', // The name of the schema type
  title: 'Social', // The title displayed in the Sanity Studio
  type: 'document', // This defines it as a document type in Sanity
  orderings: [orderRankOrdering], // Enables ordering of documents using 'orderRankOrdering'

  fields: [
    // Define fields for the Social document
    defineField({
      name: 'name', // Field name: 'name'
      title: 'Social name', // Title displayed for this field
      type: 'string', // Type of the field: string
      options: {
        list: [
          // Options for selecting from a list
          {title: 'Instagram', value: 'instagram'}, // Option 1: Instagram
          {title: 'Twitter (X)', value: 'twitter'}, // Option 2: Twitter
          {title: 'LinkedIn', value: 'linkedin'}, // Option 3: LinkedIn
          {title: 'Facebook', value: 'facebook'}, // Option 4: Facebook
          {title: 'Github', value: 'github'}, // Option 5: Github
        ],
      },
    }),

    defineField({
      name: 'link', // Field name: 'link'
      title: 'Social Link', // Title displayed for this field
      type: 'url', // Type of the field: url
    }),

    orderRankField({type: 'social'}), // Defines a field for ordering within the 'social' type
  ],
})
