import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

// Define a Sanity schema type for Skills documents
export default defineType({
  name: 'skills', // The name of the schema type
  title: 'Skills', // The title displayed in the Sanity Studio
  type: 'document', // This defines it as a document type in Sanity
  orderings: [orderRankOrdering], // Enables ordering of documents using 'orderRankOrdering'

  fields: [
    // Define fields for the Skills document
    defineField({
      name: 'name', // Field name: 'name'
      title: 'Name', // Title displayed for this field
      type: 'string', // Type of the field: string
    }),

    defineField({
      name: 'category', // Field name: 'category'
      title: 'Category', // Title displayed for this field
      type: 'string', // Type of the field: string
      options: {
        list: [
          // Options for selecting from a list
          {title: 'Programming Languages', value: 'programming_languages'}, // Option 1: Programming Languages
          {title: 'Software/Tools', value: 'software_tools'}, // Option 2: Software/Tools
          {title: 'IDE', value: 'ide'}, // Option 3: IDE
          {title: 'Version Control', value: 'version_control'}, // Option 4: Version Control
          {title: 'Project Development', value: 'project_development'}, // Option 5: Project Development
          {title: 'Soft Skills', value: 'soft_skills'}, // Option 6: Soft Skills
          {title: 'Technical Skills', value: 'technical_skills'}, // Option 7: Technical Skills
          {title: 'Other', value: 'other'}, // Option 8: Other
        ],
      },
    }),

    orderRankField({type: 'skills'}), // Defines a field for ordering within the 'skills' type
  ],
})
