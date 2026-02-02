import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap, Layers, Component, Microscope, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Products = () => {
  const productCategories = [
    {
      name: "Colour Solutions",
      path: "/colour-solutions",
      description: "Precision colour engineering where appearance meets performance.",
      icon: <Layers className="w-10 h-10 text-brand-orange mb-4" />
    },
    {
      name: "Conductive & Anti-static",
      path: "/conductive-and-electrostatic-protection",
      description: "Engineered ESD protection and electrical conductivity solutions.",
      icon: <Zap className="w-10 h-10 text-brand-orange mb-4" />
    },
    {
      name: "Flame Retardant",
      path: "/flame-retardant",
      description: "Safety-critical materials engineered for compliance and performance.",
      icon: <Shield className="w-10 h-10 text-brand-orange mb-4" />
    },
    {
      name: "Long Glass Fiber (LGF)",
      path: "/long-glass-fiber",
      description: "High-strength materials for structural applications and metal replacement.",
      icon: <Star className="w-10 h-10 text-brand-orange mb-4" />
    }
  ];

  const heroProducts = [
    {
      name: "NeoPro",
      description: "Polypropylene Compounds"
    },
    {
      name: "NeoMAX",
      description: "Long glass fiber Compounds"
    },
    {
      name: "NeoABS",
      description: "Acrylonitrile Butadiene Styrene Compounds"
    },
    {
      name: "NeoCARBONATE",
      description: "Polycarbonate Compounds"
    },
    {
      name: "NeoPBT",
      description: "Polybutylene Terephthalate Compounds"
    },
    {
      name: "NeoLON",
      description: "Nylon Compounds"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">

        {/* Main Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-orange dark:via-amber-200 dark:to-brand-orange dark:bg-[length:200%_auto] dark:animate-shimmer filter dark:drop-shadow-[0_0_8px_rgba(245,166,0,0.5)]">
            Our Product Range
          </h2>
          <div className="text-xl text-muted-foreground flex justify-center">
            <TextGenerateEffect
              words="Comprehensive polymer solutions engineered to meet the most demanding specifications across diverse applications."
              className="text-center font-normal text-muted-foreground"
            />
          </div>
        </ScrollReveal>

        {/* Product Categories Grid */}
        <div className="mb-24">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-orange dark:via-amber-200 dark:to-brand-orange dark:bg-[length:200%_auto] dark:animate-shimmer border-b dark:border-white/10 pb-6 inline-block w-full filter dark:drop-shadow-[0_0_15px_rgba(245,166,0,0.5)]">Specialized Compounds</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full group">
                <CometCard className="h-full transition-transform duration-300 group-hover:scale-[1.02]">
                  <Card
                    className="h-full overflow-hidden relative bg-white/5 dark:bg-slate-900/40 backdrop-blur-md border border-zinc-200 dark:border-white/10 group-hover:bg-white/10 dark:group-hover:bg-slate-800/50 transition-colors duration-300"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader>
                      <div className="transform transition-transform duration-300">
                        {product.icon}
                      </div>
                      <CardTitle className="text-xl text-brand-navy dark:text-amber-100">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                        {product.description}
                      </CardDescription>
                      <Link to={product.path}>
                        <Button variant="outline" className="w-full hover:bg-brand-navy hover:text-white transition-colors">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CometCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Hero Products Section */}
        <div>
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-navy dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-orange dark:via-amber-200 dark:to-brand-orange dark:bg-[length:200%_auto] dark:animate-shimmer border-b dark:border-white/10 pb-6 inline-block w-full filter dark:drop-shadow-[0_0_15px_rgba(245,166,0,0.5)]">Hero Products</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {heroProducts.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.05} className="h-full group">
                <CometCard className="h-full transition-transform duration-300 group-hover:scale-[1.02]">
                  <Card
                    className="h-full overflow-hidden relative bg-white/5 dark:bg-slate-900/40 backdrop-blur-md border border-zinc-200 dark:border-white/10 group-hover:bg-white/10 dark:group-hover:bg-slate-800/50 transition-colors duration-300"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-brand-navy dark:text-amber-100">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CometCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
