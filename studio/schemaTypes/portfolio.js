import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

// Define a Sanity schema type for Portfolio documents
export default defineType({
  name: 'portfolio', // The name of the schema type
  title: 'Portfolio', // The title displayed in the Sanity Studio
  type: 'document', // This defines it as a document type in Sanity
  orderings: [orderRankOrdering], // Enables ordering of documents using 'orderRankOrdering'

  fields: [
    // Define fields for the Portfolio document
    defineField({
      name: 'title', // Field name: 'title'
      title: 'Title', // Title displayed for this field
      type: 'string', // Type of the field: string
    }),

    defineField({
      name: 'slug', // Field name: 'slug'
      title: 'Slug', // Title displayed for this field
      type: 'slug', // Type of the field: slug
      options: {
        source: 'title', // Source field used to generate the slug
        maxLength: 96, // Maximum length of the slug
      },
    }),

    defineField({
      name: 'category', // Field name: 'category'
      title: 'Category', // Title displayed for this field
      type: 'string', // Type of the field: string
    }),

    defineField({
      name: 'mainImage', // Field name: 'mainImage'
      title: 'Main image', // Title displayed for this field
      type: 'image', // Type of the field: image
      options: {
        hotspot: true, // Enables hotspot for image positioning
      },
    }),

    defineField({
      name: 'description', // Field name: 'description'
      title: 'Description', // Title displayed for this field
      type: 'text', // Type of the field: text
    }),

    defineField({
      name: 'more', // Field name: 'more'
      title: 'More Details', // Title displayed for this field
      type: 'blockContent', // Type of the field: blockContent (custom type for rich text)
    }),

    defineField({
      name: 'image', // Field name: 'image'
      title: 'Images', // Title displayed for this field
      type: 'array', // Type of the field: array (can contain multiple values)
      of: [{type: 'image'}], // Specifies that the array can contain elements of type 'image'
      options: {
        hotspot: true, // Enables hotspot for image positioning
      },
    }),

    defineField({
      name: 'file', // Field name: 'file'
      title: 'Project File', // Title displayed for this field
      type: 'file', // Type of the field: file
      description: 'Please select only pdf file. Not required!', // Description for this field
      options: {
        accept: '.pdf', // Specifies that only PDF files are accepted
      },
    }),

    defineField({
      name: 'link', // Field name: 'link'
      title: 'Link', // Title displayed for this field
      type: 'url', // Type of the field: url
      description: 'Not required!', // Description for this field
    }),

    orderRankField({type: 'portfolio'}), // Defines a field for ordering documents of type 'portfolio'
  ],
})
