import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    // Trigger circuit transition effect
    document.documentElement.setAttribute("data-transition", "true");

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      document.documentElement.removeAttribute("data-transition");
    }, 100);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F9fa53359f2814191829516c56789fa75%2Fd8b78d75ed3243e59f5c604738af1742?format=webp&width=800"
            alt="MatchWave Labs"
            className="w-10 h-10 rounded-lg"
          />
          <span className="hidden sm:block font-bold text-xl text-foreground">MatchWave Labs</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("home")} className="text-foreground/80 hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection("services")} className="text-foreground/80 hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-primary transition-colors">Contact</button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
            <button
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
