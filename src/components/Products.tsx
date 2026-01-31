import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive polymer solutions engineered to meet the most demanding specifications
            across diverse applications.
          </p>
        </ScrollReveal>

        {/* Product Categories Grid */}
        <div className="mb-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-10 text-center text-brand-navy border-b pb-4 inline-block w-full">Specialized Compounds</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <CometCard className="h-full">
                  <Card
                    className="h-full border-border overflow-hidden relative bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader>
                      <div className="transform transition-transform duration-300">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl text-brand-navy">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-6 text-base">
                        {category.description}
                      </CardDescription>
                      <Link to={category.path}>
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
            <h3 className="text-2xl font-bold mb-10 text-center text-brand-navy border-b pb-4 inline-block w-full">Hero Products</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {heroProducts.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.05} className="h-full">
                <CometCard className="h-full">
                  <Card
                    className="bg-brand-navy/90 text-white border-none shadow-xl h-full backdrop-blur-md border border-white/10"
                  >
                    <CardHeader>
                      <CardTitle className="text-3xl font-gotham text-brand-orange">{product.name}</CardTitle>
                      <CardDescription className="text-white/80 text-lg font-medium">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
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
