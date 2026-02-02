import { useState, useEffect } from "react";
import heroBanner from "@/assets/hero-flag-pellets.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight"; // NEW import

const rotatingScenes = [
  {
    primary: "We understand your application",
    secondary: "Performance • Cost • Processing • Pain points"
  },
  {
    primary: "We Engineer the right compound",
    secondary: "Optimised for performance, processability & value"
  },
  {
    primary: "Built to meet regulations",
    secondary: "Automotive • Electrical • Global standards"
  },
  {
    primary: "Ready for serial production",
    secondary: "Consistent Quality • Reliable Supply"
  }
];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingScenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative group/hero h-[600px] md:h-[700px] overflow-hidden bg-brand-navy">
      {/* Aceternity Spotlight Effect (Dark Mode Enhanced) */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={heroBanner}
          alt="Engineering High-Performance Polymer Solutions"
          className="w-full h-full object-cover opacity-90"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        {/* Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/30 to-transparent" />
      </div>

      {/* Content Container - Vertically Centered */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center mb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-gotham font-bold text-white max-w-2xl leading-tight drop-shadow-lg">
            Delivering advanced compounds engineered for strength, precision and reliability
          </h1>
        </div>
      </div>

      {/* Rotating Text Banner - Positioned absolute bottom - Matches User Scenes */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-zinc-950/80 shadow-2xl backdrop-blur-md border-t border-white/10 z-20">
        <div className="relative min-h-[7rem] md:h-32 flex flex-col justify-center px-6 container mx-auto py-2 md:py-0">
          {/* Progress Bar */}
          <motion.div
            key={currentTextIndex + "progress"}
            className="absolute top-0 left-0 h-1 bg-brand-orange"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />

          <div className="relative w-full flex items-center justify-between">
            <div className="relative flex-1 overflow-hidden h-24 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="absolute inset-0 flex flex-col justify-center items-start"
                >
                  <div className="text-xl md:text-3xl font-gotham font-bold text-brand-orange tracking-wide leading-tight">
                    {rotatingScenes[currentTextIndex].primary}
                  </div>
                  <div className="text-sm md:text-lg text-white/90 font-medium mt-1 leading-tight">
                    {rotatingScenes[currentTextIndex].secondary}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3 ml-4 md:ml-6 self-center shrink-0">
              {rotatingScenes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTextIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentTextIndex ? "bg-brand-orange w-8" : "bg-white/30 w-2.5 hover:bg-white/60"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
