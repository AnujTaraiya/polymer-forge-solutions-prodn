import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Credentials loaded from .env (VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET)
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
export const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

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
