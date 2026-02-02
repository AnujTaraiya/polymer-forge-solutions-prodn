import { Car, Zap, Building2, Truck, Heart, Cpu } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Industries = () => {
  const industries = [
    {
      icon: Car,
      name: "Automotive",
      description: "Advanced compounds for interior, exterior, and under-the-hood applications.",
    },
    {
      icon: Zap,
      name: "Electrical & Electronics",
      description: "Insulating and flame-retardant materials for connectors and housings.",
    },
    {
      icon: Building2,
      name: "Construction",
      description: "Durable compounds for pipes, profiles, and building materials.",
    },
    {
      icon: Truck,
      name: "Transportation",
      description: "Lightweight, robust solutions for rail, aerospace, and marine applications.",
    },
    {
      icon: Heart,
      name: "Medical & Healthcare",
      description: "Biocompatible compounds meeting strict regulatory requirements.",
    },
    {
      icon: Cpu,
      name: "Consumer Goods",
      description: "Versatile materials for appliances, packaging, and consumer products.",
    },
  ];

  return (
    <section id="industries" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-sky-300 dark:to-blue-500 dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">Industries Served</h2>
          <div className="text-xl text-muted-foreground flex justify-center">
            <TextGenerateEffect
              words="We deliver tailored polymer solutions across high-performance sectors, ensuring reliability and innovation where it matters most."
              className="text-center font-normal text-muted-foreground"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
              <CometCard className="h-full">
                <div
                  className="bg-card p-6 rounded-xl border border-border h-full group"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              </CometCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
