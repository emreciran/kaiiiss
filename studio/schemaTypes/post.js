import {defineField, defineType} from 'sanity'

// Define a Sanity schema type for Post documents
export default defineType({
  name: 'post', // The name of the schema type
  title: 'Post', // The title displayed in the Sanity Studio
  type: 'document', // This defines it as a document type in Sanity

  fields: [
    // Define fields for the Post document
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
      name: 'author', // Field name: 'author'
      title: 'Author', // Title displayed for this field
      type: 'reference', // Type of the field: reference
      to: {type: 'author'}, // Reference to another document type 'author'
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
      name: 'categories', // Field name: 'categories'
      title: 'Categories', // Title displayed for this field
      type: 'array', // Type of the field: array
      of: [{type: 'reference', to: {type: 'category'}}], // Array of references to 'category' documents
    }),

    defineField({
      name: 'publishedAt', // Field name: 'publishedAt'
      title: 'Published at', // Title displayed for this field
      type: 'datetime', // Type of the field: datetime
    }),

    defineField({
      name: 'body', // Field name: 'body'
      title: 'Body', // Title displayed for this field
      type: 'blockContent', // Type of the field: blockContent (custom type for rich text)
    }),
  ],

  // Preview configuration for how the document is displayed in Sanity Studio
  preview: {
    select: {
      title: 'title', // Field to display as the title
      author: 'author.name', // Field to display as the author's name
      media: 'mainImage', // Field to display as the media (main image)
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`} // Optionally prepare subtitle based on author
    },
  },
})
