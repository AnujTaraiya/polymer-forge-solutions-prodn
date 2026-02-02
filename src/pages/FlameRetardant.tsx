import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CometCard } from "@/components/ui/comet-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import frElectrical from "@/assets/fr-electrical.png";
import frBattery from "@/assets/fr-battery.png";
import frIndustrial from "@/assets/fr-industrial.png";

const FlameRetardant = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <ScrollReveal className="max-w-4xl mx-auto mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-orange dark:via-amber-200 dark:to-brand-orange dark:bg-[length:200%_auto] dark:animate-shimmer filter dark:drop-shadow-[0_0_8px_rgba(245,166,0,0.5)]">Flame Retardant / Fire-Resistant Thermoplastic Compounds</h1>
                        <p className="text-xl text-muted-foreground">Safety-critical materials engineered for compliance and performance</p>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Overview */}
                        <ScrollReveal className="prose max-w-none text-foreground">
                            <h2 className="text-2xl font-bold mb-4 text-brand-orange">Overview</h2>
                            <p className="mb-4">
                                Safety and compliance are at the core of Polyneo's flame retardant thermoplastic compounds.
                            </p>
                            <p className="mb-4">
                                We formulate materials that meet stringent fire performance standards while maintaining mechanical strength, processing ease, and long-term reliability.
                            </p>
                            <p>
                                Our portfolio includes <strong>halogenated and non-halogenated flame-retardant systems</strong>, developed to meet automotive, electrical, and industrial regulations.
                            </p>
                        </ScrollReveal>

                        <Separator />

                        {/* Applications */}
                        <section>
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold mb-6 text-brand-orange">Applications</h2>
                            </ScrollReveal>
                            <div className="grid md:grid-cols-3 gap-8">
                                <ScrollReveal delay={0.1} className="h-full">
                                    <CometCard className="w-full h-full">
                                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                            <img src={frElectrical} alt="Electrical & Electronic Enclosures" className="w-full h-48 object-cover rounded-md mb-4" />
                                            <h3 className="text-xl font-bold mb-3 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Electrical & Electronic Enclosures</h3>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                                <li>Switch gear and control panels</li>
                                                <li>Circuit breaker housings</li>
                                                <li>Electrical connectors</li>
                                                <li>Consumer electronics enclosures</li>
                                                <li>Charging equipment</li>
                                            </ul>
                                        </div>
                                    </CometCard>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2} className="h-full">
                                    <CometCard className="w-full h-full">
                                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                            <img src={frBattery} alt="Battery Systems & EV Infrastructure" className="w-full h-48 object-cover rounded-md mb-4" />
                                            <h3 className="text-xl font-bold mb-3 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Battery Systems & EV Infrastructure</h3>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                                <li>EV battery enclosures and trays</li>
                                                <li>Battery management system (BMS) housings</li>
                                                <li>High-voltage cable covers</li>
                                                <li>Charging station components</li>
                                                <li>Energy storage systems</li>
                                            </ul>
                                        </div>
                                    </CometCard>
                                </ScrollReveal>

                                <ScrollReveal delay={0.3} className="h-full">
                                    <CometCard className="w-full h-full">
                                        <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                            <img src={frIndustrial} alt="Industrial & Building Applications" className="w-full h-48 object-cover rounded-md mb-4" />
                                            <h3 className="text-xl font-bold mb-3 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Industrial & Building Applications</h3>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                                <li>Electrical installation components</li>
                                                <li>Building wire and cable</li>
                                                <li>Industrial equipment housings</li>
                                                <li>Public transportation interiors</li>
                                            </ul>
                                        </div>
                                    </CometCard>
                                </ScrollReveal>
                            </div>
                        </section>

                        <Separator />

                        {/* Flame Retardant Systems - UPDATED: Removed Halogenated Systems */}
                        <section>
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold mb-6 text-brand-orange">Flame Retardant Systems</h2>
                            </ScrollReveal>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Non-Halogenated Systems */}
                                <ScrollReveal delay={0.1} className="h-full">
                                    <div className="bg-secondary/10 p-5 rounded-lg h-full">
                                        <h3 className="font-bold text-lg mb-2">Non-Halogenated Systems</h3>
                                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                                            <li>Phosphorus-based FR</li>
                                            <li>Mineral-filled systems</li>
                                            <li>Intumescent technologies</li>
                                            <li>Environmentally preferred options</li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                                {/* Custom Formulations */}
                                <ScrollReveal delay={0.2} className="h-full">
                                    <div className="bg-secondary/10 p-5 rounded-lg h-full">
                                        <h3 className="font-bold text-lg mb-2">Custom Formulations</h3>
                                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                                            <li>Tailored to specific fire test requirements</li>
                                            <li>Optimized for your processing conditions</li>
                                            <li>Cost-performance balanced solutions</li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </section>

                        <Separator />

                        {/* Value Added Services - Compliance */}
                        <section>
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold mb-6 text-brand-orange">Compliance with Global Standards</h2>
                            </ScrollReveal>
                            <div className="grid md:grid-cols-3 gap-6">
                                <ScrollReveal delay={0.1}>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Electrical & Electronics:</h3>
                                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                                            <li>UL 94 (V-0, V-1, V-2, 5VA, 5VB)</li>
                                            <li>IEC 60695</li>
                                            <li>Glow Wire Testing (GWFI, GWIT)</li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={0.2}>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Automotive:</h3>
                                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                                            <li>FMVSS 302 (Federal Motor Vehicle Safety Standard)</li>
                                            <li>ISO 3795</li>
                                            <li>OEM-specific flammability requirements</li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={0.3}>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Industry-Specific:</h3>
                                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                                            <li>EN 45545 (Railway applications)</li>
                                            <li>UL746 series (Long-term performance)</li>
                                            <li>RoHS and REACH compliance</li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </section>

                        <Separator />

                        {/* Technical Capabilities */}
                        <section>
                            <ScrollReveal>
                                <h2 className="text-2xl font-bold mb-4 text-brand-orange">Technical Capabilities</h2>
                            </ScrollReveal>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <ScrollReveal delay={0.1} className="h-full">
                                    <li className="bg-secondary/20 p-4 rounded-md h-full"><strong>Base Polymer Options:</strong> PP, PE, PA (PA6, PA66, specialty nylons), PC, PC/ABS blends, PBT, PET, Engineering plastics</li>
                                </ScrollReveal>
                                <ScrollReveal delay={0.2} className="h-full">
                                    <li className="bg-secondary/20 p-4 rounded-md h-full"><strong>Performance Characteristics:</strong> UL 94 ratings: V-0, V-1, Halogen-free options</li>
                                </ScrollReveal>
                            </ul>
                        </section>

                        {/* Contact Form Section */}
                        <section id="contact-form" className="scroll-mt-24">
                            <ContactForm />
                        </section>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FlameRetardant;
