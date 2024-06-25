import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'kaiiiss',

  projectId: 'qezjc3p6',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Hero')
              .id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('About')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Contact')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')),
            orderableDocumentListDeskItem({type: 'resume', S, context, title: 'Resume'}),
            orderableDocumentListDeskItem({type: 'portfolio', S, context, title: 'Portfolio'}),
            orderableDocumentListDeskItem({type: 'skills', S, context, title: 'Skills'}),
            orderableDocumentListDeskItem({type: 'social', S, context, title: 'Social'}),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
