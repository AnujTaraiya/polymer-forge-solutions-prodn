import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function cleanup() {
  const allPosts = await client.fetch('*[_type == "post"]{ _id, title, "slug": slug.current }');
  console.log("Found posts:", allPosts);
  
  for (const post of allPosts) {
    if (post.title === "The Future of Advanced Polymer Compounding") {
      await client.delete(post._id);
      console.log(`✅ Deleted post: ${post.title}`);
    }
  }
}

cleanup();
