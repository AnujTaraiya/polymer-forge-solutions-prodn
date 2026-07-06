import { createClient } from '@sanity/client';
import { block, boldBlock, table } from './helpers.mjs';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: 'skxzHUI7EPrx7omg3IRjgTeO9HXz4TC96954DTEdkI0067XXu0ZyLIh7IXtvCVOOBoHq4VuXeZVRXg6iEy6wYxQhevYv0jaItHb6jaAHYMHOunsrSvlOGMAqnhSc1MN95T9LfZF0ZRHSU3fdq8GaTQj6YbQldaASoTDKB1frTx7c7Mnu4ISu'
});

async function run() {
  const slug = 'thermoplastics-india-ev-revolution-engineering-polymers-replacing-metal';
  console.log(`🔍 Finding article with slug: ${slug}`);
  const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
  
  if (posts.length > 0) {
    const post = posts[0];
    console.log(`✅ Found post: ${post._id}`);
    
    const newBody = [
      block("Every kilogram saved on an EV battery enclosure adds range. Every uncompromised flame rating keeps passengers safe. Engineering polymers are delivering both simultaneously.", "blockquote"),
      block("Global electric car sales grew by 20% in 2025 to exceed 20 million units, pushing the electric share of new car sales to roughly 25%. The International Energy Agency expects global electric car sales to grow further to around 23 million in 2026, representing about 28% of total car sales, even as growth patterns shift markedly between regions, with Europe and emerging markets accelerating while US sales have pulled back following the expiry of federal tax credits."),
      block("Source: International Energy Agency (IEA), Global EV Outlook 2026"),
      block("India is firmly part of this story. India's overall EV market , spanning two-wheelers, three-wheelers, passenger vehicles, and commercial vehicles crossed roughly 2.45 million units sold in FY26, up 24.6% year-on-year, with cumulative EV sales in India surpassing 8.3 million units since FY18. The IEA separately reports that electric car sales in India alone increased by over 75% in 2025. Government programmes including PM E-DRIVE, FAME, and the PLI scheme for Advanced Chemistry Cell batteries continue to accelerate both adoption and domestic manufacturing."),
      block("Source: FADA retail sales data via Autocar Professional, April 2026; IEA, Global Energy Review 2026"),
      block("For material engineers, procurement heads, and product designers at India's OEMs and Tier-1 suppliers, this is not an abstract market statistic. It is a material specification challenge arriving on desks right now."),
      block("The core question: what do EVs need from polymers that combustion-engine vehicles do not?"),
      
      block("Why EVs Demand a Different Class of Polymer", "h2"),
      block("Electric vehicles share many polymer requirements with conventional cars , interior trims, body panels, under-hood connectors, lighting bezels. Legacy automotive compounds handle these well. But EV-specific architecture introduces demands that push standard grades to their limits or beyond them:"),
      
      boldBlock("High-voltage electrical insulation: ", "EV powertrains operate at 400V to 800V. Components in the battery pack, inverter, and charging system must provide reliable dielectric insulation under continuous load and thermal cycling.", "normal", "bullet"),
      boldBlock("Thermal management: ", "Battery cells generate heat during charging and discharging. Compounds used in cell carriers, battery module housings, and thermal interface components must maintain dimensional stability and structural integrity at sustained elevated temperatures.", "normal", "bullet"),
      boldBlock("Flame retardancy: ", "In the event of a thermal runaway event, component materials must not propagate fire. UL 94 V-0, the strictest standard flame-retardancy rating is now a baseline requirement for most EV battery housing components.", "normal", "bullet"),
      boldBlock("Lightweighting: ", "Lighter vehicles travel further on the same battery charge. Every gram removed from a structural polymer component directly extends range, which directly affects the vehicle's market competitiveness.", "normal", "bullet"),
      boldBlock("EMI shielding: ", "As high-frequency power electronics become denser inside EV platforms, shielding of electromagnetic interference becomes critical for performance and regulatory compliance.", "normal", "bullet"),
      
      block("The Metal Replacement Opportunity: Where It Is Happening", "h2"),
      block("The case for replacing metal with engineered thermoplastics in EV applications is no longer theoretical. Global materials companies and automotive suppliers have taken it to production, and the engineering keeps advancing."),
      
      block("Battery Enclosures and Pack Structures", "h3"),
      block("SABIC has demonstrated that thermoplastic-based EV battery pack concepts can realise 30 to 50 percent weight savings per component compared with conventional designs using aluminium and other metals. Beyond weight reduction, thermoplastic enclosures offer improved electrical insulation behaviour, design freedom for complex geometries, and the ability to integrate multiple functions into a single moulded part — eliminating assembly steps and reducing the leak risk at weld points that conventional aluminium profiles require."),
      block("Source: SABIC, SABIC Advances Thermoplastic Solutions for Critical EV Battery Technologies. sabic.com"),
      
      block("The pace of innovation has not slowed. A hybrid thermoplastic-composite battery enclosure recognised with a 2026 SPE Automotive Innovation Award achieved a weight reduction of 10 to 20 percent while cutting production costs by up to 30 percent, alongside improved heat dissipation and fire safety — evidence that the metal-replacement case keeps strengthening rather than plateauing."),
      block("Source: Plastics Engineering, Next-Generation EV Battery Solution Wins SPE Award, March 2026"),
      
      block("EV Drivetrain and Thermal Management Components", "h3"),
      block("PPA (polyphthalamide) and PPS (polyphenylene sulphide) compounds continue to prove their performance in thermal management systems for EV drivetrains. Their resistance to dielectric fluids used in immersive cooling systems, combined with structural stability under sustained heat, makes them the engineering choice for coolant lines, pump housings, and heat exchanger components."),
      
      block("Charging Infrastructure", "h3"),
      block("High-power fast chargers require housing materials that combine structural strength with reliable EMI shielding and flame retardance. Standard-grade polycarbonates and polyamides continue to reach their performance limits in these applications, creating sustained demand for higher-performance customised compounds as charging networks scale globally and within India."),
      
      block("The Polymer Families Powering EV Applications", "h2"),
      block("Not all compounds are suited to EV applications. The following polymer families are carrying the primary material workload in EV design today:"),
      
      table(
        ["Polymer", "Why EVs Need It", "Key EV Application", "Critical Property"],
        [
          ["PA6 / PA66 (Glass-filled)", "Weight vs. strength balance", "Battery cell carriers, structural brackets", "Tensile strength up to 200 MPa"],
          ["PPS", "Extreme heat & chemical resistance", "Thermal management parts, pump housings", "HDT >260°C"],
          ["PBT (FR grade)", "Electrical insulation + flame rating", "Battery module housings, connectors", "UL 94 V-0 at 0.8 mm"],
          ["PP long glass-fibre (LGF)", "High impact + low density", "Battery covers, underbody shields", "30–50% lighter than aluminium"],
          ["PC/ABS", "Balance of stiffness and toughness", "Charging port housings, interior bezels", "Impact strength, surface quality"]
        ]
      ),
      
      block("What This Means for India's EV Supply Chain", "h2"),
      block("India's EV component market was valued at USD 7.80 billion in 2025 and is projected to reach USD 28.50 billion by 2030, growing at a CAGR of roughly 29.6%. The southern India manufacturing cluster Chennai, Hosur, Bengaluru remains a leading EV component production base, alongside expanding western India (Gujarat, Maharashtra) and emerging central India capacity such as Mahindra's planned Nagpur mega-hub."),
      block("Source: Marqstats, India Electric Vehicle Components Market, April 2026"),
      
      block("For Indian OEMs and Tier-1 suppliers, the challenge is not just adopting EV technology it is localising the material supply chain to avoid import dependency. A compound specified by a European or American OEM and sourced from a European compounder creates cost exposure, lead-time risk, and supply chain fragility. Locally compounded equivalents, developed and qualified in India, eliminate these vulnerabilities."),
      block("India's auto component industry is expected to see roughly Rs. 25,000–30,000 crore (about USD 2.9–3.5 billion) of investment in FY26 alone for capacity expansion and EV parts, following Rs. 15,000–20,000 crore in FY25, according to ICRA. The material foundation of that expansion is advanced polymer compounding."),
      block("Source: IBEF, Electric Vehicle Industry in India, 2026"),
      
      block("► Global electric car sales: >20M units in 2025 (+20% YoY); ~23M forecast for 2026. Source: IEA"),
      block("► India EV sales: ~2.45M units in FY26 (+24.6% YoY); cumulative 8.3M+ since FY18. Source: FADA/Autocar Pro"),
      block("► Thermoplastic battery enclosures: 30–50% weight savings vs. aluminium. Source: SABIC"),
      block("► India EV components market: USD 7.80B (2025) → USD 28.50B (2030). Source: Marqstats"),
      block("► India auto component FY26 capex for EV parts: ~Rs. 25,000–30,000 crore (~USD 2.9–3.5B). Source: ICRA / IBEF"),
      
      block("Polyneo's Role in India's EV Material Transition", "h2"),
      block("At Polyneo Advanced Materials, we are working with Indian automotive manufacturers to develop and qualify compounds specifically for EV applications battery housings, connector systems, thermal management components, and structural brackets. Our Nexapol affiliation gives us access to a deep base of compound development expertise, allowing us to develop and trial application-specific EV grades for Indian production volumes and processing infrastructure."),
      block("If you are an automotive R&D engineer or procurement head currently specifying material for an EV application, we would like to understand your requirements. Reach us at www.polyneo.in.", "blockquote"),
      
      block("Sources & References", "h3"),
      block("[1] International Energy Agency (IEA). Global EV Outlook 2026. iea.org", "normal", "bullet"),
      block("[2] International Energy Agency (IEA). Global Energy Review 2026 — Electric Vehicles. iea.org", "normal", "bullet"),
      block("[3] Autocar Professional. FY26: When India's EV Market Found Scale, April 2026 (FADA retail data). autocarpro.in", "normal", "bullet"),
      block("[4] IBEF. Electric Vehicle Industry in India, 2026. ibef.org", "normal", "bullet"),
      block("[5] SABIC. SABIC Advances Thermoplastic Solutions for Critical EV Battery Technologies. sabic.com", "normal", "bullet"),
      block("[6] Plastics Engineering. Next-Generation EV Battery Solution Wins SPE Award, March 2026. plasticsengineering.org", "normal", "bullet"),
      block("[7] Marqstats. India Electric Vehicle Components Market, April 2026. marqstats.com", "normal", "bullet")
    ];

    console.log('📤 Patching article body...');
    await client.patch(post._id)
      .set({ body: newBody })
      .commit();
    console.log(`✅ Article body successfully updated!`);
  } else {
    console.log('❌ Article not found.');
  }
}

run();
