import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function attachBanner() {
  try {
    const slug = 'why-engineering-polymer-compounding-backbone-modern-indian-manufacturing';
    const imagePath = 'C:\\Users\\CPMO\\Downloads\\IMG-20260530-WA0012.jpg';
    
    console.log('📤 Uploading banner image...');
    const imageBuffer = fs.readFileSync(imagePath);
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: 'article-1-banner.jpg'
    });
    console.log(`✅ Image uploaded: ${imageAsset._id}`);

    const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
    if (posts.length > 0) {
      await client.patch(posts[0]._id)
        .set({
          mainImage: {
            _type: 'image',
            asset: { _type: 'reference', _ref: imageAsset._id }
          }
        })
        .commit();
      console.log(`✅ Banner attached to Article 1!`);
    } else {
      console.log('❌ Post not found.');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

attachBanner();
