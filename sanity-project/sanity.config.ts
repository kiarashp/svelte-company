import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ABC company sanity',

  projectId: '71f5aidj',
  dataset: 'datasetabccompany',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
