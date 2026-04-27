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

async function managePosts() {
  try {
    // 1. Delete the old test post
    console.log('🗑️  Finding old test post to delete...');
    const oldPosts = await client.fetch('*[_type == "post" && slug.current == "the-future-of-advanced-polymer-compounding"]');
    for (const post of oldPosts) {
      await client.delete(post._id);
      console.log(`✅ Deleted old post: ${post._id}`);
    }

    // 2. Upload the new thumbnail image
    console.log('📤 Uploading new thumbnail image...');
    const imagePath = 'C:\\Users\\CPMO\\.gemini\\antigravity\\brain\\c8624e6c-a57b-4afe-9ad8-3baa6dfaa71f\\media__1777275453162.jpg';
    
    // Read the file as a buffer
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Upload to sanity assets
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(imagePath)
    });
    console.log(`✅ Image uploaded successfully. Asset ID: ${imageAsset._id}`);

    // 3. Find the new post and update it with the mainImage
    console.log('🔍 Finding the new post to update...');
    const newPosts = await client.fetch('*[_type == "post" && slug.current == "what-are-thermoplastics-the-material-behind-modern-innovation"]');
    
    if (newPosts.length > 0) {
      const postId = newPosts[0]._id;
      await client.patch(postId)
        .set({
          mainImage: {
            _type: 'image',
            asset: {
              _type: "reference",
              _ref: imageAsset._id
            }
          }
        })
        .commit();
      console.log(`✅ Post updated with new thumbnail: ${postId}`);
    } else {
      console.log('⚠️ Could not find the new post to update.');
    }

    console.log('🎉 All tasks completed successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

managePosts();
