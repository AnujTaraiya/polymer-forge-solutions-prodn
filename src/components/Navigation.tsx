import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import polnyeoLogo from "@/assets/polyneo-logo-white.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        }, 100); // Small delay to ensure render
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
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Industries", id: "industries" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome
        ? "bg-secondary/60 backdrop-blur-md shadow-lg border-b border-white/10"
        : "bg-transparent backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="cursor-pointer">
            <img src={polnyeoLogo} alt="PolyNeo Advanced Materials" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-secondary-foreground/90 hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-secondary">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-secondary-foreground/90 hover:bg-secondary-foreground/10 hover:text-primary transition-colors uppercase tracking-wide"
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
    </nav>
  );
};

export default Navigation;
