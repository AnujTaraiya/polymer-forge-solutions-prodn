import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export const projectId = '16frci4z';
export const dataset = 'production';

export default defineConfig({
  name: 'default',
  title: 'PolyNeo Content Studio',
  basePath: '/studio',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
