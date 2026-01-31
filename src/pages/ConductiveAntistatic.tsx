import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CometCard } from "@/components/ui/comet-card";
import conductiveEv from "@/assets/conductive-ev.png";
import conductiveElectronics from "@/assets/conductive-electronics.png";
import conductiveIndustrial from "@/assets/conductive-industrial.png";

const ConductiveAntistatic = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy">Conductive & Anti-Static Thermoplastic Compounds</h1>
                        <p className="text-xl text-muted-foreground">Engineered ESD protection and electrical conductivity solutions</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Overview */}
                        <section className="prose max-w-none text-foreground">
                            <h2 className="text-2xl font-bold mb-4 text-brand-orange">Overview</h2>
                            <p className="mb-4">
                                Polyneo offers conductive and anti-static thermoplastic compounds designed to manage electrostatic discharge (ESD) and electrical conductivity across a wide range of applications.
                            </p>
                            <p className="mb-4">
                                Our formulations are engineered to achieve controlled surface or volume resistivity, ensuring reliable performance without sacrificing processability or mechanical integrity.
                            </p>
                            <p>
                                We work closely with customers to select the right conductive system — from anti-static to permanently conductive solutions — based on functional needs and cost targets.
                            </p>
                        </section>

                        <Separator />

                        {/* Applications */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-brand-orange">Applications</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={conductiveEv} alt="EV & Battery Systems" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy">EV & Battery Systems</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Battery pack components</li>
                                            <li>EV charging infrastructure</li>
                                            <li>High-voltage cable management</li>
                                            <li>Thermal management components</li>
                                        </ul>
                                    </div>
                                </CometCard>

                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={conductiveElectronics} alt="Electrical & Electronic Equipment" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy">Electrical & Electronic Equipment</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Equipment housings and enclosures</li>
                                            <li>Connector systems</li>
                                            <li>Cable management solutions</li>
                                            <li>Control panels</li>
                                        </ul>
                                    </div>
                                </CometCard>

                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={conductiveIndustrial} alt="Industrial Applications" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy">Industrial Applications</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Material handling equipment</li>
                                            <li>Safety-critical components</li>
                                            <li>Sensitive electronics protection</li>
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
                                    <h3 className="text-xl font-bold mb-2">Tunable Resistivity Ranges</h3>
                                    <p className="text-muted-foreground mb-3">We engineer compounds to meet your specific ESD requirements:</p>
                                    <ul className="grid md:grid-cols-2 gap-4 text-sm">
                                        <li className="bg-secondary/20 p-3 rounded"><strong>Anti-static:</strong> 10⁹ - 10¹² Ω/sq</li>
                                        <li className="bg-secondary/20 p-3 rounded"><strong>Dissipative:</strong> 10⁶ - 10⁹ Ω/sq</li>
                                        <li className="bg-secondary/20 p-3 rounded"><strong>Conductive:</strong> 10³ - 10⁶ Ω/sq</li>
                                        <li className="bg-secondary/20 p-3 rounded"><strong>Highly Conductive:</strong> &lt;10³ Ω/sq</li>
                                    </ul>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Stable Performance Over Part Life</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                            <li>Permanent conductivity (not surface-dependent)</li>
                                            <li>Resistant to wear and tear</li>
                                            <li>Consistent performance across temperature ranges</li>
                                            <li>Long-term reliability in demanding environments</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">VAVE-Driven Solutions</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                            <li>Cost-performance optimization</li>
                                            <li>Material selection based on functional requirements</li>
                                            <li>Processing efficiency improvements</li>
                                            <li>Alternative formulations for cost reduction</li>
                                        </ul>
                                    </div>
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

export default ConductiveAntistatic;
