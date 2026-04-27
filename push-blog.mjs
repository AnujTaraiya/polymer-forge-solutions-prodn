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
  title: 'What Are Thermoplastics? The Material Behind Modern Innovation',
  slug: { _type: 'slug', current: 'what-are-thermoplastics-the-material-behind-modern-innovation' },
  publishedAt: new Date().toISOString(),
  body: [
    block("Every time you buckle into a car, pick up your smartphone, or reach for a water bottle, you're touching a thermoplastic. These materials are everywhere, yet most people have never stopped to ask: what exactly are they, and why do they matter?"),
    block("At Polyneo Advanced Materials, thermoplastics are at the heart of what we do. So let's break it down."),
    
    block("The Simple Science", "h2"),
    block("Thermoplastics are a class of polymers that soften when heated and harden when cooled and this cycle can be repeated multiple times without significantly degrading the material. Think of them like butter: heat it and it melts, cool it and it solidifies. That reversible behaviour is what sets thermoplastics apart."),
    block("At the molecular level, thermoplastic chains are held together by physical bonds not chemical crosslinks. This means the material can be remelted, reshaped, and reused, making it one of the most versatile and sustainable material families available today."),
    
    block("Not All Plastics Are Equal", "h2"),
    block("It's important to distinguish thermoplastics from thermosets, another major plastic category. While thermosets undergo an irreversible chemical reaction (crosslinking) during processing and cannot be remelted, thermoplastics remain reshapeable throughout their lifecycle. This gives thermoplastics a clear edge in recyclability and manufacturing flexibility."),
    block("Thermoplastics account for over 80% of total plastic consumption globally, a testament to their widespread utility."),
    
    block("From every day to High-Performance", "h2"),
    block("Thermoplastics exist across a broad performance spectrum:"),
    boldBlock("Commodity Thermoplastics : ", "such as Polyethylene (PE), Polypropylene (PP), PVC, and Polystyrene (PS) are low-cost, high-volume materials used in packaging, pipes, and consumer goods.", "bullet"),
    boldBlock("Engineering Thermoplastics : ", "including Polyamide (Nylon/PA), Polycarbonate (PC), Polyacetal (POM), and ABS are engineered for demanding applications requiring strength, heat resistance, and dimensional precision.", "bullet"),
    boldBlock("High-Performance Thermoplastics : ", "such as PEEK, PTFE, and LCP serve in extreme environments where standard materials simply cannot operate.", "bullet"),
    
    block("Why Engineers Love Them", "h2"),
    block("Thermoplastics offer a compelling combination of properties that make them indispensable:"),
    boldBlock("Lightweight strength : ", "Replacing metal components without sacrificing performance, critical for fuel efficiency in vehicles and portability in electronics.", "bullet"),
    boldBlock("Design freedom : ", "Injection moulding, extrusion, blow moulding, and 3D printing all work with thermoplastics, enabling complex geometries at speed.", "bullet"),
    boldBlock("Short processing cycles : ", "No chemical curing reactions means faster production, lower energy consumption, and easier quality control.", "bullet"),
    boldBlock("Recyclability : ", "Waste material can often be reprocessed and reused, supporting circular economy goals.", "bullet"),
    boldBlock("Customisability : ", "Additives, fillers, and reinforcing fibres (glass, carbon, aramid) can be incorporated to tailor specific properties.", "bullet"),
    
    block("Real-World Impact", "h2"),
    block("The applications are as diverse as the materials themselves:"),
    boldBlock("Automotive : ", "Engine covers, fuel system components, dashboard panels, gears, and bumpers increasingly rely on engineering thermoplastics for their weight-saving and heat-resistant properties.", "bullet"),
    boldBlock("Electronics : ", "Housings, connectors, and insulation demand the dimensional accuracy and electrical performance that materials like PC and PBT deliver.", "bullet"),
    boldBlock("Medical Devices : ", "Biocompatible grades of thermoplastics are used in IV cannulas, surgical instruments, and implantable components.", "bullet"),
    boldBlock("Industrial & Construction : ", "From precision bearings and pump components to piping systems and structural panels, thermoplastics serve where durability matters.", "bullet"),
    
    block("The Sustainability Edge", "h2"),
    block("As industries face mounting pressure to reduce environmental impact, thermoplastics offer a genuine path forward. Their ability to be remelted and recycled rather than discarded positions them as key enablers of the circular economy. Bio-based variants and recyclable engineering grades are growing rapidly, responding to the demand for greener material solutions."),
    
    block("Looking Ahead", "h2"),
    block("The global shift toward electric vehicles, miniaturised electronics, and sustainable manufacturing is accelerating demand for high-performance thermoplastics. PA and PC demand alone could double by 2030, driven by EV battery systems and advanced electronics."),
    block("At Polyneo Advanced Materials, we believe the future of materials is not just stronger or lighter, it is smarter, more sustainable, and more adaptable. Thermoplastics are central to that future."),
    
    block("Have a project that demands high-performance polymer solutions? Let's talk.", "blockquote"),
    block("Connect with us  |  Visit our website  |  Drop your questions in the comments"),
    block("#Thermoplastics #AdvancedMaterials #PolymerScience #EngineeringPlastics #MaterialsScience #Sustainability #Innovation #Polyneo")
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
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
  }
}

pushPost();
