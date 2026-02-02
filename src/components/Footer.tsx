import nexapolLogo from "@/assets/nexapol-logo.png";
import polnyeoLogo from "@/assets/polyneo-logo-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <img src={polnyeoLogo} alt="PolyNeo Advanced Materials" className="h-10 mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-secondary-foreground/80">A</span>
              <img src={nexapolLogo} alt="Nexapol" className="h-5" />
              <span className="text-sm text-secondary-foreground/80">Company</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mt-2">
              Leading the way in advanced polymer compounding solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/#products" className="text-secondary-foreground/80 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm text-secondary-foreground">Contact Info</h4>
            <ul className="space-y-1.5 text-sm text-secondary-foreground/80">
              <li>CIA Office Complex, Main Road</li>
              <li>Sector - III, I.D.A Phase-II</li>
              <li>Cherlapally, Secunderabad 500051</li>
              <li className="mt-2">+91 9606708908</li>
              <li>info@polyneo.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-4 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {currentYear} PolyNeo Advanced Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
