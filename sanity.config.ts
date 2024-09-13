import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schema from './sanity/schemas/schemas';  // Import the schema file

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  name: 'default',
  title: 'Javan CMS',  // Change this to your preferred title

  projectId: "59bzkcyx",
  dataset: "production",
  plugins: [deskTool(), visionTool()],  // Include any plugins you want to use

  schema: {
    types: schema.types,  // Reference your custom schemas
  },
});
