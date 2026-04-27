import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Credentials loaded from .env
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '16frci4z';
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2023-05-03';

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// Helper function to easily resolve sanity images
export const urlFor = (source: any) => {
  return builder.image(source);
};
