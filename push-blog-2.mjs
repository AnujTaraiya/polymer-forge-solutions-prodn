import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '16frci4z',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
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

const samplePost = {
  _type: 'post',
  title: 'Engineering Plastic Alloys & Blends: Designing Materials for Performance',
  slug: { _type: 'slug', current: 'engineering-plastic-alloys-blends-designing-materials-for-performance' },
  publishedAt: new Date().toISOString(),
  body: [
    block("Introduction", "h2"),
    block("Modern engineering applications rarely rely on a single material to meet all performance requirements. As industries demand higher strength, thermal resistance, flame retardancy, and cost efficiency, material science has evolved toward a more flexible and powerful solution: polymer alloys and blends."),
    block("Engineering plastic blends enable manufacturers to combine the strengths of multiple polymers into a single material, achieving performance levels that are often not possible with individual resins alone. From automotive systems to electrical components, these materials are rapidly becoming central to next-generation product design."),
    
    block("What Are Polymer Alloys and Blends?", "h2"),
    block("Polymer blends are physical mixtures of two or more polymers. When designed effectively, they allow engineers to improve impact strength, enhance heat resistance, optimize processability, and strike the right balance between performance and cost. In some cases, these blends behave almost like a single homogeneous material. In others, they retain distinct phases that must be carefully controlled during processing."),
    block("A key factor governing blend behavior is polymer compatibility, the degree to which two polymers can mix and interact at the molecular level. This, in turn, determines the blend's mechanical properties, thermal behavior, and long-term stability."),
    
    block("Understanding Polymer Compatibility", "h2"),
    block("Not all polymers mix easily. Whether two polymers form a stable blend depends on factors including chemical structure and polarity, thermodynamic interactions, processing temperature, and molecular weight. As a general rule of thumb, if the difference in solubility parameters between two polymers is less than 0.1, they are expected to be miscible. A difference greater than 0.3 often leads to immiscibility."),
    block("However, this is far from a simple equation. Even chemically similar polymers do not always blend well , a prime example being PP and LDPE, both non-polar hydrocarbons, which surprisingly do not form a stable miscible blend. Miscibility is further complicated by temperature and processing conditions, making this an area that demands both scientific knowledge and practical expertise."),
    
    block("Types of Polymer Blends", "h2"),
    block("1. Fully Compatible Blends", "h3"),
    block("These are rare systems where polymers mix uniformly at the molecular level. A classic example is Polyphenylene Ether (PPE) blended with Polystyrene (PS). PPE alone offers outstanding thermal and mechanical performance, but its extremely high melting point makes it nearly impossible to process on conventional equipment. When combined with PS, the resulting blend becomes highly processable while retaining the superior engineering properties of PPE."),
    block("This blend commercially known as Noryl, finds wide usage in automotive applications and, thanks to its exceptionally low water absorption, in demanding components like water-pump impellers. It represents how combining two polymers can unlock both performance and manufacturability simultaneously."),
    
    block("2. Partially Compatible Blends", "h3"),
    block("In these systems, portions of the polymers interact favourably, enabling a stable and useful blend without the need for a compatibilizer. The most widely used example is PC-ABS (Polycarbonate + ABS). The SAN phase of ABS and PC are partially miscible with each other, enabling their coexistence in a single material. The result is a blend that brings together:"),
    block("Polycarbonate's strength, dimensional stability, and heat resistance", "normal", "bullet"),
    block("ABS's improved flow, surface finish, and toughness at lower temperatures", "normal", "bullet"),
    block("PC-ABS is now a staple material in automotive interiors, consumer electronics housings, and electrical enclosures, a testament to what thoughtful polymer pairing can achieve."),
    
    block("3. Incompatible Blends and the Role of Compatibilizers", "h3"),
    block("Most polymer combinations are naturally incompatible. Without intervention, the result is coarse morphology, poor interfacial adhesion, and severely limited mechanical properties. This is where compatibilizers play a critical role."),
    
    block("Non-reactive compatibilization", "h3"),
    block("Non-reactive compatibilizers have molecular structures that are partially miscible with each component of the blend. They effectively act as \"interfacial agents,\" improving dispersion and bonding between the two phases without forming new chemical bonds."),
    
    block("Reactive compatibilization", "h3"),
    block("Reactive compatibilization involves the in-situ formation of chemical bonds during melt compounding. The compatibilizer carries reactive functional groups that chemically bond with one or more polymer components, creating a molecular bridge that stabilizes the blend."),
    block("A widely studied example is PP + PA6 using maleic anhydride-grafted PP (PP-g-MA) as the compatibilizer. The PP backbone integrates with the PP phase, while the maleic anhydride groups react with the amine end groups of PA6, forming a copolymer at the interface that dramatically improves blend morphology and mechanical performance. Similar strategies have been successfully applied to PP+PET, ABS+PA6, PBT+PP, PA6+EPDM, PPE+PA66, and many other combinations."),
    
    block("How Polymer Blends Are Manufactured", "h2"),
    block("Polymer blends are most commonly produced through melt compounding, with co-rotating twin-screw extruders being the preferred platform. This equipment provides the shear intensity, temperature control, and mixing efficiency needed to produce uniform dispersions and stable morphologies at commercial scale."),
    block("Solution blending is theoretically possible but rarely adopted in industry due to the high cost of solvent recovery, associated environmental concerns, and the complexity of scale-up. Process design, including screw configuration, temperature profile, residence time, and shear rate plays a critical role in determining the final properties of the blend."),
    
    block("Why Alloys & Blends Matter Across Industries", "h2"),
    block("The growing adoption of polymer blends is driven by their unique ability to address multiple challenges at once:"),
    block("Replace metals with lightweight, corrosion-resistant alternatives", "normal", "bullet"),
    block("Meet increasingly stringent regulatory requirements, particularly around flame retardancy (e.g., UL94 V-0)", "normal", "bullet"),
    block("Enable complex component geometries through injection molding", "normal", "bullet"),
    block("Optimize cost-performance balance without sacrificing quality", "normal", "bullet"),
    block("The shift in the Indian electrical market from thermoset switches (PF, MF, and UF resins) to FR Polycarbonate enclosures is perhaps one of the clearest illustrations of this transition in action, driven equally by regulation, performance demands, and manufacturing efficiency."),
    
    block("Emerging Trends: Biopolymer Blends", "h2"),
    block("One of the most exciting frontiers in polymer blend development is the integration of biopolymers with conventional engineering plastics. This approach addresses growing sustainability mandates while leveraging the mature property profiles of established engineering resins."),
    
    block("Polylactic Acid (PLA) Blends", "h3"),
    block("PLA is biodegradable and derived from renewable resources, but its inherent brittleness and limited thermal stability restrict its standalone use in demanding applications. Blending PLA with engineering polymers such as ABS, PP, HIPS, and polyesters can significantly improve its impact resistance and thermal performance. Notably, blends of PLA with PMMA have been reported to offer transparency, opening doors for sustainable optical applications. Melt blending of PLA requires careful temperature management, as the polymer is sensitive to thermal degradation at high processing temperatures. Compatibilizers based on maleic anhydride, epoxy, and isocyanate chemistries have shown the most promise."),
    
    block("Starch-Based Blends", "h3"),
    block("Starch is abundant, low-cost, and fully renewable, but its high moisture sensitivity and poor mechanical properties make direct use challenging. Through reactive compatibilization using agents derived from glycidyl methacrylate, maleic anhydride, and peroxides, starch-based blends are increasingly being adapted for packaging and consumer goods applications."),
    block("Commercial examples are already emerging. One notable development is a flame-retardant 50:50 blend of PLA and PC, specifically developed for use in IT devices, combining sustainability credentials with the fire-safety requirements of electronics. Broader platforms like PolyOne's (now Avient) reSound range demonstrate that bio-hybrid blends are no longer experimental, they are beginning to penetrate markets including consumer durables, electronics, medical devices, and automotive interiors."),
    
    block("Real-World Applications", "h2"),
    block("Polymer alloys and blends are embedded across virtually every major industry:"),
    boldBlock("Automotive: ", "PC-ABS for interior trims, PA blends for under-the-hood components, lightweight structural parts replacing metal assemblies", "bullet"),
    boldBlock("Electrical & Electronics: ", "Switchgear and connector housings (PBT blends), FR-rated enclosures for consumer and industrial electronics", "bullet"),
    boldBlock("Consumer Goods: ", "Appliance housings, power tool bodies, and durable plastic components where aesthetics meet performance", "bullet"),
    boldBlock("Emerging: ", "Biopolymer blends in sustainable packaging, lightweight components in electric vehicles, and medical-grade specialty materials", "bullet"),
    
    block("The Road Ahead", "h2"),
    block("As performance requirements continue to evolve, driven by lightweighting mandates, circular economy goals, and functional integration demands polymer blends will be at the center of materials innovation. Advances in compatibilization chemistry, reactive processing, and molecular-level morphology control are making it increasingly possible to engineer materials with near-bespoke property profiles."),
    block("The boundary between what is achievable and what once required a purpose-built resin is narrowing. For compounders, formulators, and material suppliers, this represents a significant strategic opportunity to deliver tailored, high-performance solutions at commercial viability."),
    
    block("Conclusion", "h2"),
    block("Engineering plastic alloys and blends represent one of the most powerful tools in modern material science. By combining polymers strategically and with the right processing expertise, manufacturers can design materials that meet demanding, multidimensional requirements across industries."),
    block("For Polyneo Advanced Materials, this is precisely where our capabilities lie: enabling our customers to go beyond off-the-shelf resins and into truly engineered material solutions.", "blockquote"),
    block("© Polyneo Advanced Materials. All rights reserved. For enquiries, please contact us through our website.")
  ],
};

async function pushPost() {
  try {
    console.log('🚀 Pushing second blog post to Sanity...');
    const result = await client.create(samplePost);
    console.log(`✅ Post created successfully!`);
    console.log(`   ID: ${result._id}`);
    console.log(`   Title: ${result.title}`);
    console.log(`   Slug: /blog/${result.slug.current}`);
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
  }
}

pushPost();
