import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Separator className="bg-secondary/30 h-[2px]" />
      <Products />
      <Separator className="bg-secondary/30 h-[2px]" />
      <Industries />
      <Separator className="bg-secondary/30 h-[2px]" />
      <About />
      <Separator className="bg-secondary/30 h-[2px]" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
