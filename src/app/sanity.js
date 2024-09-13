// sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Client configuration
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Environment variable for project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',  // Dataset (default to 'production')
  apiVersion: '2023-09-10',  // Use latest API version or specific version
  useCdn: true,  // Use the CDN for faster, cached responses
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

// Helper function to generate image URLs
export const urlFor = (source) => builder.image(source);
