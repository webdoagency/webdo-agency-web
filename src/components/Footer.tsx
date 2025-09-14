import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "For Clients", href: "#clients" },
    { label: "For Freelancers", href: "#freelancers" },
    { label: "Our Shops", href: "#shops" },
    { label: "Contact", href: "#contact" }
  ];

  const contactEmails = [
    { label: "General", email: "contact@anexiogroup.com" },
    { label: "Partners", email: "partners@webdoagency.com" },
    { label: "Talent", email: "talent@webdoagency.com" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="glass-blurred border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/30cc02e5-c90e-4957-a097-8f0c3a43a41c.png" 
                alt="Webdo Agency" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold">Webdo Agency</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional eCommerce solutions. Partnership-based growth.
            </p>
            <p className="text-xs text-muted-foreground">
              A brand by Anexio Group
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Emails */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              {contactEmails.map((contact, index) => (
                <div key={index}>
                  <div className="text-xs text-muted-foreground">{contact.label}</div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-foreground hover:text-accent transition-colors block"
                  >
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+38348878222" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +383 48 878 222
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Prishtina, Kosovo</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/38348878222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Webdo Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;