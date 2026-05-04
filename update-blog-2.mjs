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
    const slug = 'engineering-plastic-alloys-blends-designing-materials-for-performance';
    
    // 1. Upload the new banner image
    console.log('📤 Uploading new banner image...');
    const imagePath = 'C:\\Users\\CPMO\\.gemini\\antigravity\\brain\\c8624e6c-a57b-4afe-9ad8-3baa6dfaa71f\\media__1777881721465.png';
    
    // Read the file as a buffer
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Upload to sanity assets
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(imagePath)
    });
    console.log(`✅ Image uploaded successfully. Asset ID: ${imageAsset._id}`);

    // 2. Find the new post and update it with the mainImage
    console.log('🔍 Finding the post to update...');
    const newPosts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
    
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
      console.log(`✅ Post updated with new banner: ${postId}`);
    } else {
      console.log('⚠️ Could not find the post to update.');
    }

    console.log('🎉 All tasks completed successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

updatePostImage();
