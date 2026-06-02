import { block, boldBlock, table, pushPost } from './helpers.mjs';

// ARTICLE 2 — Monday June 9, 2026 12:00 PM IST
const post = {
  _type: 'post',
  title: 'Thermoplastics and India\'s EV Revolution: How Engineering Polymers Are Replacing Metal in Electric Vehicles',
  slug: { _type: 'slug', current: 'thermoplastics-india-ev-revolution-engineering-polymers-replacing-metal' },
  publishedAt: '2026-06-08T06:30:00.000Z',
  body: [
    block("Every kilogram saved on an EV battery enclosure adds range. Every uncompromised flame rating keeps passengers safe. Engineering polymers are delivering both — simultaneously.", "blockquote"),
    block("Global EV sales grew 25% in 2024 to a record 17.6 million units, with market share reaching 20% of all new vehicle sales — up from 4.6% in 2020. Forecasts point to 22 million units in 2025."),
    block("India is not watching from the sidelines. The Indian EV market was valued at USD 3.71 billion in 2025 and is projected to reach USD 191.04 billion by 2034 — a CAGR of 54.94%. EV sales reached 2.05 million units in FY25, up from 1.68 million in FY24. PM E-DRIVE, FAME, and PLI programmes are accelerating both adoption and domestic manufacturing."),

    block("Why EVs Demand a Different Class of Polymer", "h2"),
    block("EVs share many polymer requirements with conventional cars. But EV-specific architecture introduces demands that push standard grades past their limits:"),
    boldBlock("High-voltage electrical insulation: ", "EV powertrains operate at 400V to 800V. Components in the battery pack, inverter, and charging system need reliable dielectric insulation under continuous load and thermal cycling.", "normal", "bullet"),
    boldBlock("Thermal management: ", "Battery cells generate heat during charging and discharging. Compounds must hold dimensional stability at sustained elevated temperatures.", "normal", "bullet"),
    boldBlock("Flame retardancy: ", "In a thermal runaway event, component materials must not propagate fire. UL 94 V-0 is now a baseline requirement for most EV battery housing components.", "normal", "bullet"),
    boldBlock("Lightweighting: ", "Lighter vehicles travel further on the same charge. Every gram removed directly extends range — which directly affects market competitiveness.", "normal", "bullet"),
    boldBlock("EMI shielding: ", "As high-frequency power electronics become denser, shielding of electromagnetic interference is critical for both performance and regulatory compliance.", "normal", "bullet"),

    block("Where Metal Replacement Is Already Happening", "h2"),
    block("Battery Enclosures and Pack Structures", "h3"),
    block("SABIC has demonstrated that thermoplastic-based EV battery pack designs can achieve 30 to 50 percent weight savings per component versus conventional aluminium. Beyond weight, thermoplastic enclosures offer better electrical insulation, design freedom for complex geometries, and the ability to consolidate multiple functions into a single moulded part."),
    block("In 2023, Lanxess and Kautex Textron published a feasibility study confirming a near-series battery housing (1,400 × 1,400 mm) manufactured using direct long-fibre thermoplastic (D-LFT) and polyamide 6."),
    block("EV Drivetrain and Thermal Management", "h3"),
    block("PPA (polyphthalamide) and PPS (polyphenylene sulphide) compounds have proven performance in thermal management systems for EV drivetrains — coolant lines, pump housings, and heat exchanger components."),
    block("Charging Infrastructure", "h3"),
    block("High-power fast chargers (up to 450 kW) need housing materials that combine structural strength with reliable EMI shielding and flame retardance, creating demand for higher-performance custom compounds."),

    block("The Polymer Families Powering EV Applications", "h2"),
    table(
      ["Polymer", "Why EVs Need It", "Key EV Application", "Critical Property"],
      [
        ["PA6 / PA66 (Glass-filled)", "Weight vs. strength balance", "Battery cell carriers, structural brackets", "Tensile strength up to 200 MPa"],
        ["PPS", "Extreme heat & chemical resistance", "Thermal management, pump housings", "HDT >260°C"],
        ["PBT (FR grade)", "Electrical insulation + flame rating", "Battery module housings, connectors", "UL 94 V-0 at 0.8 mm"],
        ["PP STAMAX™ (Long glass-fibre)", "High impact + low density", "Battery covers, underbody shields", "30–50% lighter than aluminium"],
        ["PC/ABS", "Stiffness and toughness balance", "Charging port housings, interior bezels", "Impact strength, surface quality"],
      ]
    ),

    block("What This Means for India's EV Supply Chain", "h2"),
    block("India's EV component market was valued at USD 7.80 billion in 2025 and is projected to reach USD 28.50 billion by 2030, at a CAGR of 29.58%. The southern India manufacturing cluster — Chennai, Hosur, Bengaluru — contributes roughly 38% of India's EV component output by value."),
    block("The challenge for Indian OEMs and Tier-1 suppliers is not just adopting EV technology — it is localising the material supply chain. Locally compounded equivalents, developed and qualified in India, eliminate cost exposure, lead-time risk, and supply chain fragility."),
    block("India's automotive industry target is USD 300 billion in market size by 2030. PLI incentives of INR 25,938 crore (USD 3.1 billion) have been allocated to automotive manufacturing."),

    block("Key Market Data", "h3"),
    block("Global EV sales: 17.6M units in 2024 (+25% YoY) | Source: IEA", "normal", "bullet"),
    block("India EV market: USD 3.71B (2025) → USD 191.04B (2034) at 54.94% CAGR | Source: IBEF", "normal", "bullet"),
    block("Thermoplastic battery enclosures: 30–50% weight savings vs. aluminium | Source: SABIC", "normal", "bullet"),
    block("India EV components market: USD 7.80B (2025) → USD 28.50B (2030) | Source: Marqstats", "normal", "bullet"),
    block("India automotive PLI allocation: INR 25,938 crore (USD 3.1B) | Source: IBEF", "normal", "bullet"),

    block("Polyneo's Role in India's EV Material Transition", "h2"),
    block("We are working with Indian automotive manufacturers to develop and qualify compounds specifically for EV applications — battery housings, connector systems, thermal management components, and structural brackets. If you are an automotive R&D engineer or procurement head currently specifying material for an EV application, we would like to understand your requirements. Reach us at www.polyneo.in.", "blockquote"),
    block("Sources: IEA 2024, Plastics Engineering Aug 2025, IBEF, Fortune Business Insights 2025, SABIC, PlasticsToday Nov 2023, Envalior 2024, eMobility Engineering May 2025, Marqstats Apr 2026"),
  ],
};

import fs from 'fs';
import path from 'path';
import { client } from './helpers.mjs';

async function run() {
  const result = await pushPost(post);
  
  if (result) {
    console.log('📤 Uploading banner image for Article 2...');
    const imagePath = path.join(process.cwd(), 'scheduled', 'images', 'WA0011.jpg');
    const imageBuffer = fs.readFileSync(imagePath);
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: 'article-2-banner.jpg'
    });
    console.log(`✅ Image uploaded: ${imageAsset._id}`);

    await client.patch(result._id)
      .set({
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id }
        }
      })
      .commit();
    console.log(`✅ Banner attached to Article 2!`);
  }
}

run();
