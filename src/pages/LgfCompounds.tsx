import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CometCard } from "@/components/ui/comet-card";
import lgfAutomotive from "@/assets/lgf-automotive.png";
import lgfBattery from "@/assets/lgf-battery.png";
import lgfIndustrial from "@/assets/lgf-industrial.png";

const LgfCompounds = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-navy">Long Glass Fiber (LGF) Thermoplastic Compounds</h1>
                        <p className="text-xl text-muted-foreground">High-strength materials for structural applications and metal replacement</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Overview */}
                        <section className="prose max-w-none text-foreground">
                            <h2 className="text-2xl font-bold mb-4 text-brand-orange">Overview</h2>
                            <p className="mb-4">
                                Polyneo's long glass fiber thermoplastic compounds are engineered for applications that demand <strong>high strength, stiffness, and impact resistance</strong>, often replacing metal or short-fiber plastics.
                            </p>
                            <p className="mb-4">
                                By preserving fiber length through formulation and processing optimization, our LGF compounds deliver superior structural performance while enabling <strong>light-weighting and part consolidation</strong>.
                            </p>
                            <p>
                                Our LGF solutions allow designers to achieve metal-like performance with the processing advantages and weight savings of thermoplastics.
                            </p>
                        </section>

                        <Separator />

                        {/* Applications */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-brand-orange">Applications</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={lgfAutomotive} alt="Automotive Structural" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy">Automotive Structural</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Front-end modules and carriers</li>
                                            <li>Seat structures and frames</li>
                                            <li>Pedal systems</li>
                                            <li>Door modules</li>
                                            <li>Underbody shields</li>
                                        </ul>
                                    </div>
                                </CometCard>

                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={lgfBattery} alt="Battery & EV" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy">Battery & EV</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Battery trays and enclosures</li>
                                            <li>Structural battery pack frames</li>
                                            <li>Load-bearing mounting brackets</li>
                                            <li>High-voltage component housings</li>
                                            <li>Crash-resistant structures</li>
                                        </ul>
                                    </div>
                                </CometCard>

                                <CometCard className="w-full h-full">
                                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
                                        <img src={lgfIndustrial} alt="Industrial & Mobility" className="w-full h-48 object-cover rounded-md mb-4" />
                                        <h3 className="text-xl font-bold mb-3 text-brand-navy">Industrial & Mobility</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground flex-grow">
                                            <li>Material handling equipment</li>
                                            <li>Agricultural machinery components</li>
                                            <li>Power tool housings</li>
                                            <li>Industrial robotics parts</li>
                                        </ul>
                                    </div>
                                </CometCard>
                            </div>
                        </section>



                        <Separator />


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

export default LgfCompounds;
