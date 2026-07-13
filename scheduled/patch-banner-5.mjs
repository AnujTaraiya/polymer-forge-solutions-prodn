import fs from 'fs';
import { client } from './helpers.mjs';

async function run() {
  const articleId = 'MbOBprsinTQIhTfttXAi1x';
  const imagePath = 'C:\\Users\\CPMO\\Downloads\\Media (5).jpg';

  console.log(`📤 Uploading new banner image from ${imagePath}...`);
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: 'custom-compounding-banner.jpg'
    });
    console.log(`✅ Image uploaded: ${imageAsset._id}`);

    await client.patch(articleId)
      .set({
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id }
        }
      })
      .commit();
    
    console.log(`✅ Banner successfully attached to the article!`);
  } catch (error) {
    console.error('❌ Failed:', error);
  }
}

run();
