import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const SANITY_TOKEN = process.env.SANITY_WRITE_TOKEN || "skxzHUI7EPrx7omg3IRjgTeO9HXz4TC96954DTEdkI0067XXu0ZyLIh7IXtvCVOOBoHq4VuXeZVRXg6iEy6wYxQhevYv0jaItHb6jaAHYMHOunsrSvlOGMAqnhSc1MN95T9LfZF0ZRHSU3fdq8GaTQj6YbQldaASoTDKB1frTx7c7Mnu4ISu";

// Sanity Client setup
const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: SANITY_TOKEN,
});

const block = (text, style = 'normal', listItem = undefined) => {
  const node = {
    _type: 'block',
    _key: Math.random().toString(36).substring(7),
    style,
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).substring(7),
        text,
        marks: [],
      },
    ],
    markDefs: [],
  };
  if (listItem) {
    node.listItem = listItem;
    node.level = 1;
  }
  return node;
};

const boldBlock = (prefix, text, listItem = undefined) => {
  const node = {
    _type: 'block',
    _key: Math.random().toString(36).substring(7),
    style: 'normal',
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).substring(7),
        text: prefix,
        marks: ['strong'],
      },
      {
        _type: 'span',
        _key: Math.random().toString(36).substring(7),
        text: text,
        marks: [],
      },
    ],
    markDefs: [],
  };
  if (listItem) {
    node.listItem = listItem;
    node.level = 1;
  }
  return node;
};

// Generated Image Path
const imagePath = 'C:\\Users\\anuja\\.gemini\\antigravity-ide\\brain\\c6e0bdfb-36bc-411d-bad8-7fa130457e7d\\lgf_ev_component_1786778688478.png';

async function pushNewTestBlog() {
  if (!SANITY_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN environment variable is missing.');
    console.log('💡 Please run the script with a valid Sanity Write Token:');
    console.log('   SANITY_WRITE_TOKEN="your_token_here" node push-blog-6.mjs');
    process.exit(1);
  }

  try {
    console.log('🚀 Step 1: Uploading header image to Sanity asset store...');
    let imageAssetRef = null;

    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      const imageAsset = await client.assets.upload('image', imageBuffer, {
        filename: path.basename(imagePath),
      });
      console.log(`✅ Header image uploaded successfully! Asset ID: ${imageAsset._id}`);
      imageAssetRef = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id,
        },
      };
    } else {
      console.warn(`⚠️ Warning: Image file not found at ${imagePath}. Proceeding without main image.`);
    }

    console.log('🚀 Step 2: Creating new blog post in Sanity CMS...');

    const postPayload = {
      _type: 'post',
      title: 'Next-Generation LGF Composites: Metal Replacement in Electric Vehicle Structural Components',
      slug: {
        _type: 'slug',
        current: 'next-generation-lgf-composites-metal-replacement-in-ev',
      },
      publishedAt: new Date().toISOString(),
      ...(imageAssetRef && { mainImage: imageAssetRef }),
      body: [
        block("Introduction", "h2"),
        block("As electric vehicles (EVs) continue to push the boundaries of range, efficiency, and safety, automotive OEMs face a critical engineering dilemma: how to reduce structural mass without sacrificing mechanical integrity or crashworthiness."),
        block("Long Glass Fiber (LGF) thermoplastic compounds have emerged as the leading solution for metal replacement in structural EV modules. By combining high specific stiffness, energy absorption, and design flexibility, LGF materials are transforming automotive chassis and battery module architectures."),

        block("Why Long Glass Fiber Outperforms Short Glass Fiber", "h2"),
        block("Unlike conventional short glass fiber (SGF) compounds, LGF technology maintains long, continuous fiber lengths (typically 10mm to 25mm) within the polymer matrix during pultrusion pelletizing. This internal skeletal network provides dramatic performance advantages:"),
        boldBlock("Enhanced Impact Energy Absorption: ", "The continuous fiber network dissipates energy across a broader volumetric matrix, resisting crack propagation under high strain rates.", "bullet"),
        boldBlock("Superior Creep and Fatigue Resistance: ", "Maintains structural performance under continuous loads and thermal cycling up to 120°C.", "bullet"),
        boldBlock("High Modulus-to-Weight Ratio: ", "Delivers up to 40% weight reduction compared to die-cast aluminum while matching yield strength.", "bullet"),

        block("Material Comparison Matrix", "h2"),
        {
          _type: 'dataTable',
          _key: 'table-lgf-metrics',
          headers: ['Property', 'LGF Polypropylene (50%)', 'Cast Aluminum (A380)', 'Short GF Nylon (30%)'],
          rows: [
            ['Density (g/cm³)', '1.34', '2.71', '1.37'],
            ['Tensile Strength (MPa)', '145', '310', '175'],
            ['Flexural Modulus (GPa)', '13.5', '71.0', '8.5'],
            ['Izod Impact (kJ/m²)', '28.0', '3.5', '11.0'],
            ['Weight Savings vs Al', '-50.5%', 'Baseline', '-49.4%']
          ]
        },

        block("Key EV Applications for LGF Compounds", "h2"),
        block("LGF thermoplastics are currently displacing stamped steel and die-cast aluminum across several core vehicle subsystems:"),
        boldBlock("Battery Enclosures & Module Frames: ", "Providing lightweight structural support with intrinsic electrical insulation and flame retardancy.", "bullet"),
        boldBlock("Front-End Modules & Bumper Beams: ", "Absorbing front crash energy while integrating headlight and radiator mounts into a single molded part.", "bullet"),
        boldBlock("Instrument Panel Carriers: ", "Reducing dashboard sub-assembly weight while enabling complex ducting and wire harness routing.", "bullet"),

        block("Conclusion", "h2"),
        block("The shift toward electrification demands smarter, lighter, and more manufacturable materials. LGF thermoplastic compounds represent the pinnacle of structural polymer engineering for modern automotive platforms."),
        block("At Polyneo Advanced Materials, we formulate customized LGF Polypropylene and Polyamide grades tailored to your exact mechanical, thermal, and regulatory requirements.", "blockquote")
      ],
    };

    const result = await client.create(postPayload);

    console.log(`\n🎉 SUCCESS! Test blog post created in Sanity CMS!`);
    console.log(`   📌 Post ID: ${result._id}`);
    console.log(`   📌 Title: ${result.title}`);
    console.log(`   📌 Slug: /blog/${result.slug.current}`);
    console.log(`   📌 View live at: http://localhost:8080/blog/${result.slug.current}`);

  } catch (error) {
    console.error('❌ Error pushing post to Sanity CMS:', error.message);
  }
}

pushNewTestBlog();
