import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9fa53359f2814191829516c56789fa75%2Fd8b78d75ed3243e59f5c604738af1742?format=webp&width=800"
                alt="MatchWave Labs"
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-bold text-xl text-foreground">MatchWave Labs</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Innovative solutions for modern IT challenges.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">App Development</Link></li>
              <li><Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">Systems Design</Link></li>
              <li><Link to="/services" className="text-foreground/60 hover:text-primary transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-foreground/60 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-foreground/60 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} MatchWave Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
