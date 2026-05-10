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

async function updatePostImage() {
  try {
    const slug = 'iran-war-global-polymer-prices-what-happened-by-the-numbers';
    
    console.log('📤 Uploading banner image...');
    const imagePath = 'C:\\Users\\CPMO\\.gemini\\antigravity\\brain\\c8624e6c-a57b-4afe-9ad8-3baa6dfaa71f\\media__1778407144344.jpg';
    const imageBuffer = fs.readFileSync(imagePath);
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(imagePath)
    });
    console.log(`✅ Image uploaded. Asset ID: ${imageAsset._id}`);

    console.log('🔍 Finding the post...');
    const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
    
    if (posts.length > 0) {
      const postId = posts[0]._id;
      await client.patch(postId)
        .set({
          mainImage: {
            _type: 'image',
            asset: { _type: "reference", _ref: imageAsset._id }
          }
        })
        .commit();
      console.log(`✅ Post updated with banner: ${postId}`);
    } else {
      console.log('⚠️ Post not found.');
    }
    console.log('🎉 Done!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

updatePostImage();
