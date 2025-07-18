import {defineType, defineField} from 'sanity'

export const successStory = defineType({
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'writer',
      title: 'Writer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
