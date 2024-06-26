import {defineType, defineArrayMember} from 'sanity'

/**
 * Schema definition for the rich text fields used in the blog studio.
 * When imported into schemas.js, it can be reused with:
 * {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 * }
 */
export default defineType({
  title: 'Block Content', // Display title in Sanity Studio
  name: 'blockContent', // Type name
  type: 'array', // Data type (array)

  // Array of allowed types within 'blockContent'
  of: [
    {
      type: 'break', // Custom type for line breaks
    },
    {
      type: 'button', // Custom type for buttons
    },
    defineArrayMember({
      title: 'Block', // Display title in Sanity Studio
      type: 'block', // Built-in block type for text blocks

      // Styles available for block content
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],

      // Lists available for block content
      lists: [{title: 'Bullet', value: 'bullet'}],

      // Marks for inline text in the block editor
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL', // Annotation type for links
            name: 'link', // Name of the annotation
            type: 'object', // Data type of the annotation
            fields: [
              {
                title: 'URL', // Field title
                name: 'href', // Field name
                type: 'url', // Data type of the field (URL)
              },
            ],
          },
        ],
      },
    }),

    // Additional types allowed within 'blockContent'
    defineArrayMember({
      type: 'image', // Built-in type for images
      options: {hotspot: true}, // Image options (e.g., hotspot)
    }),
    {
      type: 'youtube', // Custom type for YouTube videos
    },
  ],
})
