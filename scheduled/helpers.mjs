// Shared helpers for scheduled blog posts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: "skxzHUI7EPrx7omg3IRjgTeO9HXz4TC96954DTEdkI0067XXu0ZyLIh7IXtvCVOOBoHq4VuXeZVRXg6iEy6wYxQhevYv0jaItHb6jaAHYMHOunsrSvlOGMAqnhSc1MN95T9LfZF0ZRHSU3fdq8GaTQj6YbQldaASoTDKB1frTx7c7Mnu4ISu",
});

export const key = () => Math.random().toString(36).substring(2, 10);

export const block = (text, style = 'normal', listItem = undefined) => {
  const node = {
    _type: 'block', _key: key(), style,
    children: [{ _type: 'span', _key: key(), text, marks: [] }],
    markDefs: [],
  };
  if (listItem) { node.listItem = listItem; node.level = 1; }
  return node;
};

export const boldBlock = (prefix, rest, style = 'normal', listItem = undefined) => {
  const bKey = key();
  const node = {
    _type: 'block', _key: key(), style,
    children: [
      { _type: 'span', _key: key(), text: prefix, marks: [bKey] },
      { _type: 'span', _key: key(), text: rest, marks: [] },
    ],
    markDefs: [{ _type: 'strong', _key: bKey }],
  };
  if (listItem) { node.listItem = listItem; node.level = 1; }
  return node;
};

export async function pushPost(post) {
  try {
    console.log(`🚀 Pushing: ${post.title}`);
    console.log(`   Scheduled for: ${new Date(post.publishedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
    const result = await client.create(post);
    console.log(`✅ Created: ${result._id}`);
    console.log(`   Slug: /blog/${result.slug.current}\n`);
    return result;
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

export const table = (headers, rows) => ({
  _type: 'dataTable',
  _key: key(),
  headers,
  rows,
});

