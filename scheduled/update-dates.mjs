import { client } from './helpers.mjs';

async function run() {
  console.log('🔍 Fetching posts to update dates...');
  
  const slugsToUpdate = {
    'custom-compounding-advantage-tailored-thermoplastics-cut-cost-scrap-lead-time': '2026-07-13T06:30:00.000Z',
    'thermoplastics-india-ev-revolution-engineering-polymers-replacing-metal': '2026-07-07T06:30:00.000Z'
  };

  const posts = await client.fetch(`*[_type == "post" && slug.current in ["custom-compounding-advantage-tailored-thermoplastics-cut-cost-scrap-lead-time", "thermoplastics-india-ev-revolution-engineering-polymers-replacing-metal"]]{ _id, title, slug }`);
  
  for (const post of posts) {
    const targetDate = slugsToUpdate[post.slug.current];
    if (targetDate) {
      console.log(`🔄 Updating date for: ${post.title}`);
      try {
        await client.patch(post._id)
          .set({ publishedAt: targetDate })
          .commit();
        console.log(`   ✅ Date updated to ${targetDate}`);
      } catch (e) {
        console.error(`   ❌ Failed to update date:`, e.message);
      }
    }
  }
  
  console.log('✅ Date updates complete.');
}

run();
