import fs from 'fs';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skxzHUI7EPrx7omg3IRjgTeO9HXz4TC96954DTEdkI0067XXu0ZyLIh7IXtvCVOOBoHq4VuXeZVRXg6iEy6wYxQhevYv0jaItHb6jaAHYMHOunsrSvlOGMAqnhSc1MN95T9LfZF0ZRHSU3fdq8GaTQj6YbQldaASoTDKB1frTx7c7Mnu4ISu'
});

async function run() {
  const slug = 'thermoplastics-india-ev-revolution-engineering-polymers-replacing-metal';
  console.log(`🔍 Finding article with slug: ${slug}`);
  const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
  
  if (posts.length > 0) {
    const post = posts[0];
    console.log(`✅ Found post: ${post._id}`);
    
    console.log('📤 Uploading banner image...');
    const imagePath = 'C:\\Users\\CPMO\\.gemini\\antigravity\\brain\\c8624e6c-a57b-4afe-9ad8-3baa6dfaa71f\\media__1780929491705.jpg';
    const imageBuffer = fs.readFileSync(imagePath);
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: 'article-2-banner-fixed.jpg'
    });
    console.log(`✅ Image uploaded: ${imageAsset._id}`);

    await client.patch(post._id)
      .set({
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id }
        }
      })
      .commit();
    console.log(`✅ Banner successfully attached to Article 2!`);
  } else {
    console.log('❌ Article not found.');
  }
}

run();
