import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Credentials for PolyNeo Sanity Content Studio & API
export const projectId = '16frci4z';
export const dataset = 'production';
const apiVersion = '2023-05-03';

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

// Helper function to easily resolve sanity images
export const urlFor = (source: any) => {
  return builder.image(source);
};
