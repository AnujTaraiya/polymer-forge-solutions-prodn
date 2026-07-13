import { client } from './helpers.mjs';

async function run() {
  console.log('🔍 Fetching all posts...');
  const posts = await client.fetch(`*[_type == "post"]{ _id, title, slug, mainImage }`);
  
  // Group by slug
  const bySlug = {};
  for (const post of posts) {
    if (!post.slug || !post.slug.current) continue;
    const s = post.slug.current;
    if (!bySlug[s]) bySlug[s] = [];
    bySlug[s].push(post);
  }

  for (const slug in bySlug) {
    const versions = bySlug[slug];
    if (versions.length > 1) {
      console.log(`⚠️ Found ${versions.length} versions of slug: ${slug}`);
      
      // Sort so the one WITH a mainImage is kept
      versions.sort((a, b) => {
        if (a.mainImage && !b.mainImage) return -1;
        if (!a.mainImage && b.mainImage) return 1;
        return 0;
      });

      // The first one is the "good" one. The rest are duplicates.
      const goodOne = versions[0];
      console.log(`   ✅ Keeping: ${goodOne._id} (Has image: ${!!goodOne.mainImage})`);
      
      for (let i = 1; i < versions.length; i++) {
        const dup = versions[i];
        console.log(`   🗑️ Hiding duplicate: ${dup._id}`);
        try {
          await client.patch(dup._id)
            .unset(['slug'])
            .set({ title: '[DUPLICATE] ' + dup.title, hidden: true })
            .commit();
          console.log(`      -> Successfully hidden.`);
        } catch (e) {
          console.error(`      -> Failed to hide:`, e.message);
        }
      }
    }
  }
  
  console.log('✅ Cleanup complete.');
}

run();
