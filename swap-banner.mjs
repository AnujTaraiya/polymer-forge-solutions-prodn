import { createClient } from '@sanity/client';
import fs from 'fs';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const buf = fs.readFileSync('C:\\Users\\CPMO\\.gemini\\antigravity\\brain\\c8624e6c-a57b-4afe-9ad8-3baa6dfaa71f\\media__1779162235801.jpg');
const asset = await client.assets.upload('image', buf, { filename: 'injection-moulding-factory.jpg' });
console.log('Uploaded:', asset._id);

const posts = await client.fetch('*[_type=="post" && slug.current=="injection-moulding-engineering-thermoplastics-introduction-best-practices"]');
if (posts.length) {
  await client.patch(posts[0]._id).set({
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  }).commit();
  console.log('✅ Banner updated:', posts[0]._id);
}
