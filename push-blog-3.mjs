import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const key = () => Math.random().toString(36).substring(2, 10);

const block = (text, style = 'normal', listItem = undefined) => {
  const node = {
    _type: 'block',
    _key: key(),
    style,
    children: [
      { _type: 'span', _key: key(), text, marks: [] },
    ],
    markDefs: [],
  };
  if (listItem) { node.listItem = listItem; node.level = 1; }
  return node;
};

// Block with mixed bold and normal spans
const mixedBlock = (spans, style = 'normal', listItem = undefined) => {
  const strongKey = key();
  const children = spans.map(s => ({
    _type: 'span',
    _key: key(),
    text: s.text,
    marks: s.bold ? [strongKey] : [],
  }));
  const node = {
    _type: 'block',
    _key: key(),
    style,
    children,
    markDefs: [{ _type: 'strong', _key: strongKey }],
  };
  if (listItem) { node.listItem = listItem; node.level = 1; }
  return node;
};

// Simple bold prefix block
const boldBlock = (prefix, rest, style = 'normal', listItem = undefined) => {
  const bKey = key();
  const node = {
    _type: 'block',
    _key: key(),
    style,
    children: [
      { _type: 'span', _key: key(), text: prefix, marks: ['strong1'] },
      { _type: 'span', _key: key(), text: rest, marks: [] },
    ],
    markDefs: [{ _type: 'strong', _key: 'strong1' }],
  };
  if (listItem) { node.listItem = listItem; node.level = 1; }
  return node;
};

const post = {
  _type: 'post',
  title: 'The Iran War and Global Polymer Prices: What Happened, By the Numbers',
  slug: { _type: 'slug', current: 'iran-war-global-polymer-prices-what-happened-by-the-numbers' },
  publishedAt: new Date().toISOString(),
  body: [
    // Intro
    block("On 28 February 2026, a US-Israeli military campaign against Iran triggered one of the most severe disruptions to global petrochemical supply chains in recorded history. Polymer prices surged to multi-year highs within days. This article sets out the facts, the numbers, and what the road to recovery looks like for buyers and manufacturers across the globe, including India."),

    // Section 1
    block("1. The Chokepoint: Why the Strait of Hormuz Matters", "h2"),
    block("The Strait of Hormuz carries roughly 20% of the world's daily seaborne oil trade, around 20 million barrels per day. It is the only export corridor for Saudi Arabia, the UAE, Kuwait, Iraq, and Qatar. When Iran closed it as a counter-strike, the global petrochemical complex felt the effect immediately. Vessel traffic collapsed to around 5% of its pre-conflict level of 3,000 ships per month, per the UK House of Commons Library. The International Energy Agency called it the \"largest supply disruption in the history of the global oil market.\""),
    block("The Sadara Chemical plant in Saudi Arabia, a joint venture between Dow and Aramco with capacity for 1.5 million tonnes of ethylene and 750,000 tonnes of PE per year, shut down entirely due to supply chain disruption, per Argus Media."),

    // Section 2
    block("2. The Price Shock: Key Numbers", "h2"),
    block("The speed of the price movement was unprecedented. The table below captures the scale:"),

    // Table as formatted text (Portable Text doesn't support native tables)
    block("Price Impact Summary", "h3"),
    boldBlock("PE / PP (US spot): ", "~$0.30–0.32/lb → ~$0.65–0.70/lb — approximately +100%", "normal", "bullet"),
    boldBlock("HDPE (India): ", "₹100–120/kg → ₹175–210/kg (est.) — approximately +75%", "normal", "bullet"),
    boldBlock("ABS (India): ", "₹1,89,500–1,91,500/MT — Multi-year high", "normal", "bullet"),
    boldBlock("PVC (India): ", "₹98,600–1,02,750/MT — Elevated", "normal", "bullet"),
    boldBlock("PET (Europe): ", "+15% year-on-year", "normal", "bullet"),
    boldBlock("ICIS Global Petrochem Index: ", "+32.7% in March 2026 — Record month-on-month rise", "normal", "bullet"),

    block("Sources: PlasticsToday, PolymerUpdate, Syntex America, Resource Recycling"),

    block("The ICIS Global Petrochemical Index posted its steepest month-on-month rise since the index launched in 2000: 32.7% in March 2026 alone. Northeast Asia saw a 42.6% jump, driven by an 88.6% spike in ethylene. Naphtha breached $1,000/MT. Brent crude hit $141.36 per barrel, its highest since 2008. At least 31 force majeure declarations were filed by mid-March, affecting sites run by Dow, LyondellBasell, Indorama, LG Chem, Formosa, and QatarEnergy."),

    // Section 3
    block("3. Polypropylene vs Polyethylene: Different Stories", "h2"),
    block("PE and PP both surged, but PP faces a deeper structural problem. While roughly 20% of global PE supply was disrupted, the figure for PP was closer to 70%, according to LyondellBasell EVP Kim Foley on their May 2026 investor call, reported by Resource Recycling. Asian PP producers lost access to propane feedstock. North America, historically a net importer of PP, is now positioned to become a net exporter. PP prices are expected to see further increases even as PE begins to correct."),

    // Section 4
    block("4. The Impact on India", "h2"),
    block("India is among the worst-affected markets. The country relies heavily on Middle Eastern feedstock and imported polymers, and the disruption hit at every level of the supply chain. Key data from PlasticsToday and PolymerUpdate:"),
    block("The polymer basket average reached ₹1,51,000 to ₹1,57,000/MT during March to April 2026", "normal", "bullet"),
    block("ABS prices ranged from ₹1,89,500 to ₹1,91,500/MT", "normal", "bullet"),
    block("PVC traded at ₹98,600 to ₹1,02,750/MT", "normal", "bullet"),
    block("HDPE prices surged 75% from pre-war levels", "normal", "bullet"),
    block("PP and PE prices, which had recovered to ₹100–120/kg by early 2026, were pushed sharply higher as naphtha costs escalated", "normal", "bullet"),
    block("Polybag prices in key manufacturing hubs rose by up to 80%", "normal", "bullet"),
    block("Approximately 50% of plastic MSMEs temporarily shut down due to unviable input costs", "normal", "bullet"),

    block("In response, the Indian government waived customs duties on 40 petrochemical products until June 30, 2026, at a cost of INR 1,800 crore (approximately $215 million), per Syntex America."),

    // Section 5
    block("5. The Road to Recovery", "h2"),
    block("A ceasefire was announced on 8 April 2026. Oil prices fell 11% immediately. But polymer prices have not followed. The reason is straightforward: the physical supply of polymer has not returned. ICIS estimates it will take 12 to 18 months for Middle East polymer exports to recover once the Strait fully reopens. That timeline involves several sequential steps: a durable political agreement, insurance market normalisation, resumption of shipping services, and recommissioning of damaged plants. Iran International reported that plant restoration alone could take six months to two years."),
    block("\"We've never before seen the strait close, and we've never seen it reopen. Full restoration of flows will take months.\"", "blockquote"),
    block("— EIA Administrator Tristan Abbey, April 2026"),

    // Section 6
    block("6. What This Means for Buyers", "h2"),
    block("An oil price correction does not equal a polymer price correction. The supply disruption is physical and will take months to unwind.", "normal", "bullet"),
    block("PP is structurally more exposed than PE. Buyers reliant on Asian-sourced PP should reassess supply geography now.", "normal", "bullet"),
    block("North American producers are the near-term alternative source, with ethane-based feedstock costs and 90%+ utilisation rates.", "normal", "bullet"),
    block("Ask for data, not headlines. As ResinSmart's Michael Workman notes in PlasticsToday: \"Producers are skilled at using geopolitical headlines to build pricing momentum. Ask for the data behind every increase request.\"", "normal", "bullet"),

    // Closing
    block("At Polyneo Advanced Materials, we are committed to helping our clients navigate these disruptions.", "blockquote"),
    block("Have a project that demands resilient, high-performance polymer solutions? Let's talk. Connect with us or visit our website."),
  ],
};

async function pushPost() {
  try {
    console.log('🚀 Pushing blog post 3 to Sanity...');
    const result = await client.create(post);
    console.log(`✅ Post created successfully!`);
    console.log(`   ID: ${result._id}`);
    console.log(`   Title: ${result.title}`);
    console.log(`   Slug: /blog/${result.slug.current}`);
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
  }
}

pushPost();
