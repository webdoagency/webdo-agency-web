import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "businesses", "freelancers", "shops", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "businesses", label: "For Businesses" },
    { id: "freelancers", label: "For Freelancers" },
    { id: "shops", label: "Our Shops" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 neumorphic-floating rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="/lovable-uploads/30cc02e5-c90e-4957-a097-8f0c3a43a41c.png" 
              alt="Webdo Agency" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold text-foreground">Webdo Agency</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-accent ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Store
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden neumorphic-soft mt-2 rounded-2xl">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-xl ${
                  activeSection === item.id
                    ? "text-accent neumorphic-pressed"
                    : "text-muted-foreground hover:text-foreground neumorphic-soft"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button
                variant="hero"
                size="sm"
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Store
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;