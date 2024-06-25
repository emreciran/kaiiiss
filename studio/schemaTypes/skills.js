import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

// sanity.io skills schema

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Programming Languages', value: 'programming_languages'},
          {title: 'Software/Tools', value: 'software_tools'},
          {title: 'IDE', value: 'ide'},
          {title: 'Version Control', value: 'version_control'},
          {title: 'Project Development', value: 'project_development'},
          {title: 'Soft Skills', value: 'soft_skills'},
          {title: 'Technical Skills', value: 'technical_skills'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    orderRankField({type: 'skills'}),
  ],
})
