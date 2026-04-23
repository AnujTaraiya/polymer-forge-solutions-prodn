// Script to push a sample blog post to Sanity CMS
// Usage: node push-blog.mjs

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // Required for writes
});

const samplePost = {
  _type: 'post',
  title: 'The Future of Advanced Polymer Compounding',
  slug: { _type: 'slug', current: 'future-of-advanced-polymer-compounding' },
  publishedAt: new Date().toISOString(),
  body: [
    {
      _type: 'block',
      _key: 'intro1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span1',
          text: 'The polymer compounding industry is undergoing a significant transformation. With growing demands for sustainability, performance, and cost-efficiency, manufacturers are turning to innovative compounding solutions that push the boundaries of material science.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'heading1',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 'span2',
          text: 'Why Custom Compounding Matters',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'body1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span3',
          text: 'Off-the-shelf materials often fall short when it comes to meeting the specific requirements of modern applications. Custom polymer compounding allows manufacturers to tailor material properties — from flame retardancy and conductivity to colour matching and UV resistance — to their exact specifications.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'heading2',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 'span4',
          text: 'PolyNeo\'s Approach',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'body2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span5',
          text: 'At PolyNeo, we combine decades of expertise with cutting-edge technology to deliver compounds that meet the most demanding industry standards. Our team works closely with clients to develop bespoke solutions across colour masterbatches, conductive compounds, flame retardant formulations, and long glass fiber reinforced materials.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'quote1',
      style: 'blockquote',
      children: [
        {
          _type: 'span',
          _key: 'span6',
          text: 'Innovation in polymer compounding isn\'t just about better materials — it\'s about enabling our partners to build better products for a better world.',
          marks: [],
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'body3',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span7',
          text: 'Whether you\'re in automotive, electronics, construction, or packaging, PolyNeo has the expertise and infrastructure to bring your vision to life. Contact us today to discuss how our advanced compounding capabilities can transform your product line.',
          marks: [],
        },
      ],
      markDefs: [],
    },
  ],
};

async function pushPost() {
  try {
    console.log('🚀 Pushing blog post to Sanity...');
    const result = await client.create(samplePost);
    console.log(`✅ Post created successfully!`);
    console.log(`   ID: ${result._id}`);
    console.log(`   Title: ${result.title}`);
    console.log(`   Slug: /blog/${result.slug.current}`);
    console.log(`\n📝 View it in Studio at: http://localhost:5173/studio`);
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
    if (error.message.includes('token')) {
      console.error('\n💡 You need a write token. To generate one:');
      console.error('   1. Go to https://www.sanity.io/manage/project/16frci4z/api');
      console.error('   2. Click "Add API token"');
      console.error('   3. Name it "Blog Writer", set Permissions to "Editor"');
      console.error('   4. Run again with: SANITY_WRITE_TOKEN=your-token node push-blog.mjs');
    }
  }
}

pushPost();
