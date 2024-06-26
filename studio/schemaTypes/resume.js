import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

// Define a Sanity schema type for Resume documents
export default defineType({
  name: 'resume', // The name of the schema type
  title: 'Resume', // The title displayed in the Sanity Studio
  type: 'document', // This defines it as a document type in Sanity
  orderings: [orderRankOrdering], // Enables ordering of documents using 'orderRankOrdering'

  fields: [
    // Define fields for the Resume document
    defineField({
      name: 'title', // Field name: 'title'
      title: 'Title', // Title displayed for this field
      type: 'string', // Type of the field: string
    }),

    defineField({
      name: 'subtitle', // Field name: 'subtitle'
      title: 'Subtitle', // Title displayed for this field
      type: 'string', // Type of the field: string
      description:
        'The name of the educational institution or company name can be written in this field.', // Description of the field
    }),

    defineField({
      name: 'image', // Field name: 'image'
      title: 'Educational institution or company image', // Title displayed for this field
      type: 'image', // Type of the field: image
      options: {
        hotspot: true, // Enables hotspot for image positioning
      },
    }),

    defineField({
      name: 'startDate', // Field name: 'startDate'
      title: 'Start Date', // Title displayed for this field
      type: 'date', // Type of the field: date
      options: {dateFormat: 'MMMM YYYY'}, // Date format options
    }),

    defineField({
      name: 'endDate', // Field name: 'endDate'
      title: 'End Date', // Title displayed for this field
      type: 'date', // Type of the field: date
      options: {dateFormat: 'MMMM YYYY'}, // Date format options
      description: "If you don't choose End Date, it will show as Present by default.", // Description of the field
    }),

    defineField({
      name: 'description', // Field name: 'description'
      title: 'Description', // Title displayed for this field
      type: 'blockContent', // Type of the field: blockContent (custom type for rich text)
    }),

    defineField({
      name: 'category', // Field name: 'category'
      title: 'Category', // Title displayed for this field
      type: 'string', // Type of the field: string
      options: {
        list: [
          // Options for selecting from a list
          {title: 'Education', value: 'education'}, // Option 1: Education
          {title: 'Experience', value: 'experience'}, // Option 2: Experience
        ],
      },
    }),

    defineField({
      name: 'location', // Field name: 'location'
      title: 'Location', // Title displayed for this field
      type: 'string', // Type of the field: string
    }),

    orderRankField({type: 'resume'}), // Defines a field for ordering within the 'resume' type
  ],
})
