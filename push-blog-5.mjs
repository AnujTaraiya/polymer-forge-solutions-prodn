import { createClient } from '@sanity/client';
import fs from 'fs';

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
    _type: 'block', _key: key(), style,
    children: [{ _type: 'span', _key: key(), text, marks: [] }],
    markDefs: [],
  };
  if (listItem) { node.listItem = listItem; node.level = 1; }
  return node;
};

const boldBlock = (prefix, rest, style = 'normal', listItem = undefined) => {
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

const post = {
  _type: 'post',
  title: 'How to Choose a Polymer with the Right Mechanical Properties for Your Application',
  slug: { _type: 'slug', current: 'how-to-choose-polymer-right-mechanical-properties-application' },
  publishedAt: new Date().toISOString(),
  body: [
    block("Choosing the right engineering polymer is a precision decision. The gap between a component that performs and one that fails is most often a gap in property understanding, not budget. Here is a structured, evidence-based approach to getting it right."),

    // Step 1
    block("Step 1: Define How the Part Will Fail", "h2"),
    block("Before looking at any datasheet, identify the governing failure mode. This determines which property matters most, per Instron and ZwickRoell:"),
    boldBlock("Tensile fracture under static load: ", "governed by tensile strength and Young's modulus (ISO 527 / ASTM D638)", "normal", "bullet"),
    boldBlock("Sudden or cyclic impact: ", "governed by Charpy or Izod impact strength (ISO 179 / ASTM D256)", "normal", "bullet"),
    boldBlock("Slow deformation under sustained load: ", "governed by creep resistance (ISO 899)", "normal", "bullet"),
    boldBlock("Wear, friction, and sliding contact: ", "governed by hardness and tribological performance (ISO 868)", "normal", "bullet"),
    boldBlock("High-temperature structural performance: ", "governed by heat deflection temperature (HDT, ISO 75) and glass transition temperature (Tg)", "normal", "bullet"),

    // Step 2
    block("Step 2: Match the Property to the Material", "h2"),
    block("The engineering thermoplastic family spans an enormous performance range. Here is where the main materials sit:"),

    boldBlock("PP Compounds (Polypropylene): ", "25–40 MPa tensile strength in standard grades, rising to 60–100 MPa in glass-filled compounds (PP-GF20/GF30). Low density (0.90–0.91 g/cm³), excellent chemical resistance, and outstanding fatigue performance make PP the most widely used engineering-adjacent thermoplastic globally. PP-GF30 compounds are extensively used in automotive bumpers, battery housings, and appliance structural components. Talc-filled PP grades offer improved stiffness and dimensional stability for interior trim, per SABIC PP compounds data. Mineral-reinforced PP-EPDM blends are also the standard choice for automotive fascias requiring combined stiffness and impact resistance.", "normal", "bullet"),
    boldBlock("ABS: ", "40–55 MPa tensile strength, 10–40 kJ/m² impact. Excellent processability and surface finish. Best for consumer electronics, interior trim, and appliance housings.", "normal", "bullet"),
    boldBlock("Polycarbonate (PC): ", "55–75 MPa tensile strength, 60–80 kJ/m² unnotched Charpy impact. One of the toughest amorphous engineering polymers available. Specified for riot shields, aircraft cabin windows, and medical enclosures, per Covestro Makrolon data.", "normal", "bullet"),
    boldBlock("PA66 (Nylon 66): ", "80–90 MPa tensile strength, excellent fatigue resistance and natural lubricity. Standard choice for gears, bearing cages, and automotive structural brackets. Glass-filled PA66-GF30 reaches 180–220 MPa tensile strength and 9–13 GPa modulus, per BASF Ultramid.", "normal", "bullet"),
    boldBlock("POM (Acetal/Delrin): ", "60–75 MPa tensile strength, exceptional dimensional stability and a coefficient of friction against steel of 0.1–0.3. The material of choice for precision sliders, snap-fits, and small gears, per Celanese Hostaform.", "normal", "bullet"),
    boldBlock("PPS: ", "85–200 MPa (filled grades), continuous service up to 220°C, outstanding chemical resistance. Widely used in automotive fluid-handling components and electrical connectors, per Solvay Ryton PPS.", "normal", "bullet"),
    boldBlock("PEEK: ", "100 MPa unfilled, over 200 MPa in CF30 grades, continuous service temperature of 260°C, resistant to virtually all industrial chemicals. The apex of injection-mouldable thermoplastics, per Victrex material properties. Used in aerospace fasteners, oil and gas seals, and medical implants.", "normal", "bullet"),

    block("As Ensinger Plastics, one of Europe's largest engineering plastics manufacturers, notes: in applications where components are designed to withstand stress, the mechanical properties of polymers have a particularly important role to play.", "blockquote"),

    // Step 3
    block("Step 3: Account for What Datasheets Do Not Tell You", "h2"),
    block("Published mechanical property values are measured at 23°C and 50% relative humidity (ISO 291). Real operating conditions can shift these values significantly:"),
    boldBlock("Moisture: ", "PA66 tensile modulus drops from approximately 3.3 GPa (dry) to 2.1 GPa at 50% RH because absorbed moisture acts as a plasticiser, per BASF Ultramid design data. Critical for outdoor, food-processing, and humid-environment applications.", "normal", "bullet"),
    boldBlock("Temperature: ", "Amorphous polymers (PC, ABS) lose stiffness rapidly near their Tg. Semi-crystalline materials (PA, POM, PP, PEEK) retain useful properties up to their crystalline melting point, making them the preferred choice for elevated-temperature structural parts.", "normal", "bullet"),
    boldBlock("Chemical and UV exposure: ", "PP has excellent resistance to acids, alkalis, and solvents but is susceptible to UV degradation without stabilisation. POM is vulnerable to strong acids and alkalis. ABS without UV stabilisation degrades outdoors, losing hardness and elongation at break over time. PEEK resists virtually all industrial solvents to 260°C, per Victrex.", "normal", "bullet"),

    // Step 4
    block("Step 4: Consider Reinforcement", "h2"),
    block("Base polymer properties are not the performance ceiling. Reinforcement strategies can dramatically change the picture:"),
    boldBlock("Short glass fibre (GF20/GF30/GF50): ", "PP-GF30 raises tensile strength from ~35 MPa to approximately 90–100 MPa and stiffness from ~1.5 GPa to ~6–7 GPa. PA66-GF30 reaches 180–220 MPa tensile strength and 9–13 GPa modulus. The standard route for automotive structural components.", "normal", "bullet"),
    boldBlock("Mineral and talc fillers: ", "Talc-filled PP offers improved flexural modulus and dimensional stability at lower cost than glass fibre, widely used for interior trim panels and appliance housings where surface quality matters.", "normal", "bullet"),
    boldBlock("Carbon fibre (CF30): ", "PEEK CF30 exceeds 200 MPa tensile strength and 20 GPa modulus, approaching aluminium alloy performance at a fraction of the density, per Victrex composite data.", "normal", "bullet"),
    boldBlock("Nano-fillers: ", "Peer-reviewed research in Springer Nature (2025) demonstrated a 238% increase in tensile strength and 161% rise in Young's modulus in glass-fibre-reinforced ABS versus the neat base polymer.", "normal", "bullet"),
    boldBlock("Bio-based nanocomposites: ", "Research published in MDPI Polymers (2025) reported an 82% improvement in elastic modulus in recycled PVC reinforced with bio-derived CaCO₃ nanofillers, pointing to a credible sustainable performance tier.", "normal", "bullet"),

    // Step 5
    block("Step 5: Validate Before You Commit", "h2"),
    block("Datasheet screening narrows the field. Validation confirms the choice:"),
    block("Use ISO/ASTM-compliant datasheet data from material manufacturers: Victrex, BASF, Covestro, Celanese, SABIC, Solvay, or validated third-party sources such as Ensinger's material database.", "normal", "bullet"),
    block("Run mould flow simulation (Moldflow, Cadmould) and FEA under realistic loading and temperature conditions before tooling.", "normal", "bullet"),
    block("Conduct physical testing on prototype parts under actual service conditions (temperature, humidity, chemicals), not just ambient laboratory conditions. As Instron advises, this is the only reliable basis for confident material qualification.", "normal", "bullet"),

    // Closing
    block("The data needed to make precise polymer selections is available. The discipline is in applying it systematically rather than defaulting to familiar materials. At Polyneo Advanced Materials, we help engineers and procurement teams make exactly these decisions, whether at the specification stage or when troubleshooting a field failure.", "blockquote"),
  ],
};

async function pushPost() {
  try {
    // 1. Push the blog post
    console.log('🚀 Pushing blog post 5 to Sanity...');
    const result = await client.create(post);
    console.log(`✅ Post created: ${result._id}`);
    console.log(`   Slug: /blog/${result.slug.current}`);

    // 2. Upload banner image
    console.log('📤 Uploading banner image...');
    const imagePath = 'C:\\Users\\CPMO\\.gemini\\antigravity\\brain\\c8624e6c-a57b-4afe-9ad8-3baa6dfaa71f\\media__1779879926179.jpg';
    const imageBuffer = fs.readFileSync(imagePath);
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: 'polymer-components.jpg'
    });
    console.log(`✅ Image uploaded: ${imageAsset._id}`);

    // 3. Attach image to post
    await client.patch(result._id)
      .set({
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id }
        }
      })
      .commit();
    console.log(`✅ Banner attached!`);
    console.log('🎉 All done!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

pushPost();
