import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CometCard } from "@/components/ui/comet-card";
import colourAutomotive from "@/assets/colour-automotive.png";
import colourElectronics from "@/assets/colour-electronics.png";
import colourIndustrial from "@/assets/colour-industrial.png";

const ColourSolutions = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-orange dark:via-amber-200 dark:to-brand-orange dark:bg-[length:200%_auto] dark:animate-shimmer filter dark:drop-shadow-[0_0_8px_rgba(245,166,0,0.5)]">Colour Solutions for Thermoplastic Compounds</h1>
                        <p className="text-xl text-muted-foreground">Precision colour engineering where appearance meets performance</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Overview */}
                        <section className="prose max-w-none text-foreground">
                            <h2 className="text-2xl font-bold mb-4 text-brand-orange">Overview</h2>
                            <p className="mb-4">
                                At Polyneo, we develop precision colour solutions for thermoplastic compounds where appearance, consistency, and performance must coexist.
                            </p>
                            <h3 className="text-xl font-bold mb-3">Our Colour Compounds Are Engineered to Deliver:</h3>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li><strong>Excellent colour consistency across batches</strong> - Ensuring your parts look identical every time</li>
                                <li><strong>Compatibility with demanding processing conditions</strong> - No compromise during manufacturing</li>
                                <li><strong>Long-term colour stability in real-world environments</strong> - Your products maintain their appearance over time</li>
                            </ul>
                            <p>
                                Whether the requirement is deep blacks, bright whites, or custom shades, we tailor colour systems without compromising mechanical, thermal, or regulatory performance.
                            </p>
                        </section>

                        <Separator />

                        {/* Applications */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-brand-orange">Applications</h2>
                            <p className="mb-6">Our colour solutions are trusted across industries for:</p>

                            <div className="grid md:grid-cols-3 gap-8">
                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={colourAutomotive} alt="Automotive" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Automotive</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Interior components (dashboards, trim, panels)</li>
                                            <li>Exterior parts (bumpers, grilles, body panels)</li>
                                            <li>Underhood applications</li>
                                        </ul>
                                    </div>
                                </CometCard>

                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={colourElectronics} alt="Electrical & Electronics" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Electrical & Electronics</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Housings and enclosures</li>
                                            <li>Consumer-facing components</li>
                                            <li>Connectors and switches</li>
                                        </ul>
                                    </div>
                                </CometCard>

                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={colourIndustrial} alt="Industrial" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-brand-orange dark:to-amber-500">Industrial</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Functional components</li>
                                            <li>Machine parts</li>
                                            <li>Equipment housings</li>
                                        </ul>
                                    </div>
                                </CometCard>
                            </div>
                        </section>

                        <Separator />

                        {/* Value Added Services */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-brand-orange">Value Added Services</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Custom Colour Matching</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                        <li>Precise matching to RAL, Pantone, or custom samples</li>
                                        <li>Color development for brand-specific requirements</li>
                                        <li>Multi-batch consistency guarantee</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">UV & Heat Stability Options</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                        <li>Compounds resistant to weathering and UV degradation</li>
                                        <li>Heat-stable formulations for high-temperature applications</li>
                                        <li>Long-term outdoor performance</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Compliance & Certification</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                        <li>Automotive-grade compliance (OEM specifications)</li>
                                        <li>Electrical-grade standards</li>
                                        <li>RoHS and REACH compliant options</li>
                                        <li>Food contact compliance (where applicable)</li>
                                    </ul>
                                </div>
                            </div>
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

export default ColourSolutions;
