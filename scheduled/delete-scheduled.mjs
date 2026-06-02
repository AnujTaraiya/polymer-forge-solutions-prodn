import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const slugs = [
  'thermoplastics-india-ev-revolution-engineering-polymers-replacing-metal',
  'sustainable-polymer-compounds-indian-manufacturers-green-without-compromising-performance',
  'custom-compounding-advantage-tailored-thermoplastics-cut-cost-scrap-lead-time',
];

for (const slug of slugs) {
  const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]{ _id }`);
  for (const p of posts) {
    await client.delete(p._id);
    console.log(`🗑️  Deleted: ${slug} (${p._id})`);
  }
}
console.log('✅ Articles 2, 3, 4 cleared.');
