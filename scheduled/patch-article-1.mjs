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
  const slug = 'why-engineering-polymer-compounding-backbone-modern-indian-manufacturing';
  console.log(`🔍 Finding article with slug: ${slug}`);
  const posts = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`);
  
  if (posts.length > 0) {
    const post = posts[0];
    console.log(`✅ Found post: ${post._id}`);
    
    const newBody = [
      block("Your product's performance is decided before a single component is moulded. It is decided in the compounder's lab.", "blockquote"),
      block("If you work in manufacturing, automotive, electrical equipment, or industrial machinery in India, the material your product is made from will determine how long it lasts, how much it costs, whether it passes safety certifications, and whether your production line runs or stops. And that material decision , for hundreds of millions of Indian-made products, starts at the polymer compounding stage."),
      block("Yet compounding remains one of the least-discussed disciplines in Indian industry."),
      
      block("What Is Polymer Compounding? A Plain-Language Explanation", "h2"),
      block("At its simplest, polymer compounding is the science of taking a base plastic resin and engineering it into something far more capable."),
      block("A base polymer say, nylon (polyamide 6), polypropylene, or polycarbonate , has a useful set of properties straight from the reactor. But most industrial applications demand something more specific: higher strength, better flame resistance, greater stiffness at high temperatures, improved surface finish, or lower weight. Standard resins rarely tick all those boxes."),
      block("Compounding solves this. During the process, the base polymer is combined in an extruder with additives, fillers, and reinforcements such as:"),
      
      boldBlock("Glass fibres", " - to increase tensile strength and stiffness", "normal", "bullet"),
      boldBlock("Flame retardants", " - to meet safety ratings like UL 94 V-0 for electrical components", "normal", "bullet"),
      boldBlock("Talc or mineral fillers", " - to improve rigidity and dimensional stability", "normal", "bullet"),
      boldBlock("UV stabilisers", " - to protect outdoor components from degradation", "normal", "bullet"),
      boldBlock("Impact modifiers", " - to prevent cracking under stress", "normal", "bullet"),
      boldBlock("Conductive carbon black or metallic additives", " - for EMI shielding and antistatic performance", "normal", "bullet"),
      
      block("The result is a compounded grade - a precise, engineered material ready for injection moulding, extrusion, or blow moulding directly on the manufacturer's processing line."),
      
      block("The Difference Between Commodity Plastics and Engineered Compounds", "h2"),
      block("It is important to draw a clear line between commodity plastics and engineered compounds. Commodity grades like standard PP or HDPE are produced in enormous volumes for general-purpose use: packaging, pipes, bags, and basic containers. They are cost-optimised and specification-light."),
      block("Engineering polymer compounds are different. They are formulated for demanding conditions. Think about the bracket holding a sensor in an engine bay at 130°C, or the connector housing inside an industrial switchgear panel that must pass a 960°C glow-wire test. Standard polypropylene would fail both tests. A correctly compounded PA66 grade or a flame-retardant PBT would not."),
      block("The performance gap between commodity plastics and engineered compounds is not marginal. It is the difference between product success and product failure."),
      
      block("Why India's Manufacturing Moment Makes Compounding Critical", "h2"),
      block("India is at an inflection point in materials sophistication. The data tells the story clearly."),
      block("India's engineering plastics market is forecast to grow from roughly 2.64 million tons in 2026 to 3.43 million tons by 2031, at a CAGR of about 5.3%. More significantly, the broader plastic compounding market which includes all compounded grades across resins is projected to expand from USD 12.7 billion in 2025 to USD 22.4 billion by 2031, representing a 9.6% annual growth rate."),
      block("Source: Mordor Intelligence, India Engineering Plastics Market Report, updated 2026; Mobility Foresights, India Plastic Compounding Market, 2026", "blockquote"),
      
      block("What is driving this? Three converging forces:"),
      
      block("1. Automotive electrification", "h3"),
      block("India's automotive sector is replacing metal parts with engineering polymers at an accelerating rate, particularly as the EV transition gains real scale rather than pilot-project momentum. The India automotive plastics market was valued at USD 1,507.9 million in 2025 and is forecast to reach USD 2,217.7 million by 2034, growing at a CAGR of roughly 4.25% from 2026. Lightweight compounds for battery housings, connectors, and structural components are current procurement decisions across OEM and Tier-1 supply chains and not a future trend."),
      block("Source: IMARC Group, India Automotive Plastics Market, 2026 edition"),
      
      block("2. Electronics manufacturing expansion", "h3"),
      block("The Electronics and Electrical segment, supported by India's Production-Linked Incentive (PLI) schemes, continues to drive demand for high-performance flame-retardant and EMI-shielding compounds. Domestic electronics manufacturing and the ongoing rollout of 5G infrastructure are stimulating demand for heat-resistant, electrically insulating polymer compounds used in semiconductor housings, circuit boards, and wearable technology."),
      block("Source: Mordor Intelligence, India Engineering Plastics Market Report, 2026"),
      
      block("3. China-plus-one and supply chain localisation", "h3"),
      block("Global manufacturers continue to diversify supply chains away from sole dependence on Chinese sourcing. India, with competitive processing costs, a growing engineering base, and government support through PCPIR zones in Dahej, Vishakhapatnam, and Paradeep, alongside expanding petrochemical corridors such as Gujarat's Jamnagar-Dahej belt is emerging as a regional manufacturing hub for compounded materials."),
      block("Source: Mordor Intelligence, Analysis of the Plastic Industry in India, 2026"),
      
      block("The Core Polymer Families and What They Solve", "h2"),
      block("Understanding which polymer family is relevant to your application is the first step toward a better material decision. Here is a practical overview:"),
      
      table(
        ["Polymer", "Key Properties", "Typical Applications", "Common Grades"],
        [
          ["PA6 / PA66 (Nylon)", "High strength, thermal stability, chemical resistance", "Under-hood automotive parts, electrical connectors, gears", "Glass-filled, flame-retardant, flexible"],
          ["PBT (Polybutylene Terephthalate)", "Dimensional stability, electrical insulation, moisture resistance", "Electrical housings, switches, relay bases", "Glass-filled, flame-retardant (UL 94 V-0)"],
          ["PP (Polypropylene)", "Lightweight, chemical resistance, processability", "Automotive interior/exterior, appliances, industrial parts", "Talc-filled, glass-filled, TPO blends"],
          ["POM (Polyoxymethylene)", "High stiffness, low friction, dimensional precision", "Gears, fasteners, pumps, precision engineering parts", "UV-stabilised, lubricated grades"],
          ["PPS (Polyphenylene Sulphide)", "Extreme heat resistance, chemical inertness", "Under-hood EV components, chemical equipment", "Glass/mineral-filled"]
        ]
      ),
      
      block("Why Customisation Is the Deciding Factor", "h2"),
      block("Standard off-the-shelf grades serve the majority of applications well. But as manufacturers push product performance, reduce part weight, miniaturise designs, or target new certifications, the material's precise specification becomes a competitive differentiator."),
      block("Custom compounding allows a manufacturer to specify exactly the flow rate, tensile modulus, flame rating, surface gloss, or colour they need rather than engineering around the limitations of a standard grade. This has measurable operational benefits: reduced scrap, fewer material approvals, faster design iterations, and lower total cost of ownership."),
      block("At Polyneo Advanced Materials, this is precisely the challenge we are built to solve. As India's engineering polymer compounding specialists, affiliated with Nexapol, we work with automotive OEMs, Tier-1 suppliers, electrical manufacturers, and industrial engineering companies to develop compounds that are precisely right for their application, not approximately right."),
      
      block("► India's plastic compounding market: USD 12.7B in 2025 → USD 22.4B by 2031 (9.6% CAGR)"),
      block("► Engineering plastics volume: ~2.64M tons (2026) → 3.43M tons (2031)"),
      block("► Three demand drivers: Automotive EV, Electronics PLI, Supply chain localisation"),
      block("► Custom compounding enables: Scrap reduction, faster approvals, lower total material cost"),
      
      block("If You Are in Manufacturing, This Is Your Starting Point", "h2"),
      block("Whether you are designing a new EV connector, sourcing material for a switchgear housing, or trying to reduce the weight of a structural bracket the compound you specify will determine whether you succeed on your first tooling run or spend six months in material qualification loops."),
      block("The most effective time to involve a compounding specialist is at the design stage, not after the mould is cut.", "blockquote"),
      block("We invite procurement managers, design engineers, and R&D leads to share their current material challenges with us. The conversation starts long before any purchase order."),
      block("Connect with us at www.polyneo.in or message us directly on LinkedIn."),
      
      block("Sources & References", "h3"),
      block("[1] Mordor Intelligence. India Engineering Plastics Market Report, 2026 update. mordorintelligence.com", "normal", "bullet"),
      block("[2] Mobility Foresights. India Plastic Compounding Market Size and Forecasts, 2026 edition. mobilityforesights.com", "normal", "bullet"),
      block("[3] IMARC Group. India Automotive Plastics Market, 2026–2034 edition. imarcgroup.com", "normal", "bullet"),
      block("[4] Mordor Intelligence. Analysis of the Plastic Industry in India, 2026. mordorintelligence.com", "normal", "bullet")
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
