import {defineField, defineType} from 'sanity'

// sanity.io hero schema

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    // Define the 'slogans' field
    defineField({
      name: 'slogans', // The name of the field
      title: 'Slogans', // The title displayed in the Studio
      type: 'array', // The type of the field, which is an array
      of: [{type: 'string'}], // The array contains strings
    }),
  ],
})
