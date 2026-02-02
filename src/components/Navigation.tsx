import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Package, Factory, Mail, ChevronDown } from "lucide-react"; // Added icons
import polnyeoLogo from "@/assets/polyneo-logo-white.png";
import { ModeToggle } from "@/components/mode-toggle";
import { FloatingDock } from "@/components/ui/floating-dock"; // Added FloatingDock
import { AnimatePresence, motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Trigger dock after 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section on location change (if hash exists)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);


  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home", icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
    { label: "About", id: "about", icon: <Info className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
    { label: "Products", id: "products", icon: <Package className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
    { label: "Industries", id: "industries", icon: <Factory className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
    { label: "Contact", id: "contact", icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" /> },
  ];

  const floatingDockItems = navItems.map(item => ({
    title: item.label,
    icon: item.icon,
    href: `#${item.id}`,
    onClick: () => scrollToSection(item.id)
  }));


  return (
    <>
      {/* Standard Top Navigation - Fades out on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm pt-4"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                <a href="/" className="cursor-pointer">
                  <img src={polnyeoLogo} alt="PolyNeo Advanced Materials" className="h-12" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map((item) => {
                    if (item.id === "products") {
                      return (
                        <DropdownMenu key={item.id}>
                          <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-secondary-foreground/90 hover:text-primary transition-colors uppercase tracking-wide flex items-center gap-1 focus:outline-none">
                            {item.label} <ChevronDown className="h-4 w-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-background/95 backdrop-blur-md border-white/10">
                            <DropdownMenuItem asChild>
                              <Link to="/colour-solutions" className="cursor-pointer">Colour Solutions</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/conductive-and-electrostatic-protection" className="cursor-pointer">Conductive & Anti-static</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/flame-retardant" className="cursor-pointer">Flame Retardant</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/long-glass-fiber" className="cursor-pointer">Long Glass Fiber</Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      );
                    }
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="px-4 py-2 text-sm font-medium text-secondary-foreground/90 hover:text-primary transition-colors uppercase tracking-wide"
                      >
                        {item.label}
                      </button>
                    );
                  })}
                  <div className="mr-4">
                    <ModeToggle />
                  </div>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get in Touch
                  </Button>
                </div>

                {/* Mobile Menu Button - Only visible at top */}
                <div className="md:hidden flex items-center gap-2">
                  <ModeToggle />
                  <button
                    className="p-2 text-secondary-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Dropdown */}
              {isMobileMenuOpen && (
                <div className="md:hidden py-4 bg-secondary/95 backdrop-blur-md rounded-b-xl border-t border-white/10">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-secondary-foreground/90 hover:bg-white/5 hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="px-4 pt-2">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
                      onClick={() => scrollToSection("contact")}
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Dock - Appears on scroll */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-4 pointer-events-none"
          >
            {/* Static Logo separate from dock */}
            <div
              className="pointer-events-auto bg-neutral-900/50 backdrop-blur-md border border-white/10 p-3 rounded-2xl cursor-pointer hover:bg-neutral-900/80 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src={polnyeoLogo} alt="PolyNeo" className="h-10 w-auto" />
            </div>

            <div className="pointer-events-auto">
              <FloatingDock items={floatingDockItems} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
