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

const boldBlock = (prefix, rest, style = 'normal', listItem = undefined) => {
  const bKey = key();
  const node = {
    _type: 'block',
    _key: key(),
    style,
    children: [
      { _type: 'span', _key: key(), text: prefix, marks: [bKey] },
      { _type: 'span', _key: key(), text: rest, marks: [] },
    ],
    markDefs: [{ _type: 'strong', _key: bKey }],
  };
  if (listItem) { node.listItem = listItem; node.level = 1; }
  return node;
};

const post = {
  _type: 'post',
  title: 'Injection Moulding of Engineering Thermoplastics: An Introduction and Best Practices',
  slug: { _type: 'slug', current: 'injection-moulding-engineering-thermoplastics-introduction-best-practices' },
  publishedAt: new Date().toISOString(),
  body: [
    // Intro
    block("Injection moulding is the backbone of modern plastics manufacturing. For engineering thermoplastics, it enables production of complex, high-tolerance parts at scale. This requires understanding material behaviour, processing windows, and mould design—key differentiators between commodity and engineering-grade plastics."),

    // Section 1
    block("1. What Is Injection Moulding?", "h2"),
    block("Injection moulding involves heating plastic granules until molten, injecting the material into a precision-machined metal mould under high pressure, cooling, and ejecting the solidified part. Unlike thermoset processes, thermoplastics solidify through cooling, allowing the material to be remelted—though regrind material is typically blended with virgin resin below 50% to maintain performance."),

    // Section 2
    block("2. Engineering Thermoplastics: The Main Players", "h2"),
    block("Engineering thermoplastics occupy the tier above commodity plastics (PP, PE, PS) with demanding combinations of strength, thermal stability, and chemical resistance:"),
    boldBlock("ABS: ", "40–55 MPa tensile strength, excellent surface finish, cost-effective and forgiving to process.", "normal", "bullet"),
    boldBlock("Polycarbonate (PC): ", "Exceptional impact resistance, optical clarity, glass transition temperature up to 148°C.", "normal", "bullet"),
    boldBlock("Polyamide/Nylon (PA6/PA66): ", "Strong, wear-resistant, self-lubricating workhorse for gears, bearings, and structural components. Hygroscopic—must be dried before processing.", "normal", "bullet"),
    boldBlock("POM/Acetal: ", "Exceptional dimensional stability and low friction; ideal for precision mechanical components and gears.", "normal", "bullet"),
    boldBlock("PEEK: ", "Continuous service temperature 260°C, exceptional chemical and hydrolysis resistance. Requires specialist high-temperature tooling.", "normal", "bullet"),

    // Section 3
    block("3. Key Processing Parameters", "h2"),
    block("Precise temperature control of the mould is critical; processing windows are narrower than for commodity materials. Material-specific guidance (compiled from manufacturer data):"),
    boldBlock("ABS: ", "Melt 200–260°C, mould temperature 60–80°C, shrinkage 0.4–0.8%", "normal", "bullet"),
    boldBlock("Polycarbonate: ", "Melt 280–320°C, mould temperature 70–110°C, drying 120°C for 4–6 hrs, shrinkage 0.5–0.7%", "normal", "bullet"),
    boldBlock("Nylon PA6: ", "Melt 230–280°C, mould temperature 80–90°C, drying 80°C for 4+ hrs, shrinkage 1.0–1.5%", "normal", "bullet"),
    boldBlock("Nylon PA66: ", "Melt 260–310°C, mould temperature 80–90°C, drying 80°C for 4+ hrs, shrinkage 1.5–2.0%", "normal", "bullet"),
    boldBlock("POM/Acetal: ", "Melt 190–220°C, mould temperature 60–90°C, no drying required, shrinkage 1.8–3.0%", "normal", "bullet"),
    boldBlock("PEEK: ", "Melt 360–400°C, mould temperature 160–200°C, drying 150°C for 3–4 hrs, shrinkage 0.9–1.4%", "normal", "bullet"),
    block("PA and PC both absorb atmospheric moisture. If not dried below 0.2% moisture content, water vapour turns to steam in the barrel, causing splay marks and part property loss. Drying is not optional.", "blockquote"),

    // Section 4
    block("4. Part Design Best Practices", "h2"),
    block("Part design drives outcome more than any single processing parameter. Four fundamental variables:"),
    boldBlock("Wall Thickness: ", "Maintain uniform walls throughout. Thick sections cool slower, creating differential shrinkage, internal stress, and sink marks. Standard for ABS: 1.5–4.0 mm with 3:1 maximum variation ratio.", "normal", "bullet"),
    boldBlock("Draft Angles: ", "Minimum 1 degree per 25 mm of cavity depth; textured surfaces require 1.5 degrees per 0.025 mm of texture depth.", "normal", "bullet"),
    boldBlock("Ribs: ", "Use ribs rather than thicker walls to add stiffness without creating sink marks or voids.", "normal", "bullet"),
    boldBlock("Gate Placement: ", "Position gates in the thickest section to ensure even fill distribution and minimize weld lines.", "normal", "bullet"),

    // Section 5
    block("5. Common Defects and Prevention", "h2"),
    boldBlock("Sink Marks: ", "Caused by thick walls or low packing pressure. Remedy: uniform wall thickness and increased hold pressure.", "normal", "bullet"),
    boldBlock("Weld/Knit Lines: ", "Two flow fronts meeting at low temperature. Remedy: raise melt temperature and reposition gate.", "normal", "bullet"),
    boldBlock("Warpage: ", "Uneven cooling and inconsistent wall thickness. Remedy: balance cooling channels and maintain uniform wall design.", "normal", "bullet"),
    boldBlock("Flash: ", "Excess injection pressure or worn tooling. Remedy: reduce pressure and check parting line.", "normal", "bullet"),
    boldBlock("Splay (Silver Streaks): ", "Moisture in hygroscopic resin. Remedy: dry material thoroughly before processing.", "normal", "bullet"),
    boldBlock("Short Shots: ", "Insufficient injection pressure or volume. Remedy: increase injection speed and pressure.", "normal", "bullet"),

    // Section 6
    block("6. Material Selection Guide", "h2"),
    boldBlock("Impact Resistance & Surface Finish: ", "ABS or PC/ABS blend", "normal", "bullet"),
    boldBlock("Wear Resistance & Low Friction: ", "POM or lubricated PA (gears, bearings)", "normal", "bullet"),
    boldBlock("High Structural Load: ", "PA66-GF30 (glass-filled Nylon)", "normal", "bullet"),
    boldBlock("Transparency & Impact: ", "Polycarbonate", "normal", "bullet"),
    boldBlock("Extreme Temperature or Chemicals: ", "PEEK or PPS", "normal", "bullet"),
    block("Mould flow simulation software (Moldflow, Cadmould) is recommended before cutting any tool to predict fill patterns, weld lines, shrinkage, and cooling performance."),

    // Closing
    block("Closing Thought", "h2"),
    block("Injection moulding of engineering thermoplastics rewards precision at every stage: material selection, drying, mould design, processing parameters, and part geometry. Errors compound. Getting each variable right systematically is what produces consistent, high-performance parts."),
    block("At Polyneo Advanced Materials, we help engineers navigate material selection and manufacturing challenges. Get in touch or visit our website for more information.", "blockquote"),
  ],
};

async function pushPost() {
  try {
    console.log('🚀 Pushing blog post 4 to Sanity...');
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
