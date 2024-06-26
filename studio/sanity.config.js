import {defineConfig} from 'sanity' // Importing defineConfig function from Sanity
import {structureTool} from 'sanity/structure' // Importing structureTool from Sanity's structure module
import {visionTool} from '@sanity/vision' // Importing visionTool from Sanity's vision module
import {schemaTypes} from './schemaTypes' // Importing schemaTypes from a local file
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list' // Importing orderableDocumentListDeskItem from Sanity's orderable-document-list module

export default defineConfig({
  name: 'default', // Configuration name
  title: 'kaiiiss', // Configuration title

  projectId: 'qezjc3p6', // Project ID for Sanity Studio
  dataset: 'production', // Dataset name for Sanity Studio

  plugins: [
    structureTool({
      structure: (S, context) => {
        // Define the structure of the Sanity Studio content
        return S.list()
          .title('Content') // Title of the content section in the Sanity Studio
          .items([
            S.listItem()
              .title('Hero') // Title of the Hero section
              .id('hero') // ID of the Hero section
              .child(S.document().schemaType('hero').documentId('hero')), // Child document of type 'hero'

            S.listItem()
              .title('About') // Title of the About section
              .id('about') // ID of the About section
              .child(S.document().schemaType('about').documentId('about')), // Child document of type 'about'

            S.listItem()
              .title('Contact') // Title of the Contact section
              .id('contact') // ID of the Contact section
              .child(S.document().schemaType('contact').documentId('contact')), // Child document of type 'contact'

            orderableDocumentListDeskItem({
              // Creating orderable document list items dynamically
              type: 'resume', // Type of the document list item
              S, // Reference to the schema builder
              context, // Context passed to the structure
              title: 'Resume', // Title of the Resume section
            }),

            orderableDocumentListDeskItem({
              type: 'portfolio', // Type of the document list item
              S, // Reference to the schema builder
              context, // Context passed to the structure
              title: 'Portfolio', // Title of the Portfolio section
            }),

            orderableDocumentListDeskItem({
              type: 'skills', // Type of the document list item
              S, // Reference to the schema builder
              context, // Context passed to the structure
              title: 'Skills', // Title of the Skills section
            }),

            orderableDocumentListDeskItem({
              type: 'social', // Type of the document list item
              S, // Reference to the schema builder
              context, // Context passed to the structure
              title: 'Social', // Title of the Social section
            }),
          ])
      },
    }),

    visionTool(), // Using the visionTool plugin for Sanity Studio
  ],

  schema: {
    types: schemaTypes, // Assigning schema types defined in schemaTypes file
  },
})
