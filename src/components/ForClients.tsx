import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, Shield, Users, Zap, DollarSign, HeartHandshake } from "lucide-react";

const ForClients = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Low Entry Cost",
      description: "Start with minimal upfront investment. We grow together through our commission-based model."
    },
    {
      icon: HeartHandshake,
      title: "Long-term Partnership",
      description: "We're invested in your success. Our partnership continues as your business grows."
    },
    {
      icon: TrendingUp,
      title: "Ongoing Improvements",
      description: "Continuous optimization and growth strategies to maximize your store's performance."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Small setup fee for new stores ensures we're aligned and committed to your success."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated specialists handling design, development, marketing, and ongoing support."
    },
    {
      icon: Zap,
      title: "Fast Launch",
      description: "From concept to live store quickly, so you can start selling and generating revenue sooner."
    }
  ];

  const models = [
    {
      title: "Commission Partnership",
      subtitle: "Grow Together Model",
      features: [
        "Low startup cost",
        "Shared revenue growth",
        "Ongoing support & optimization",
        "Performance-based partnership",
        "Small setup fee for new stores"
      ],
      highlight: "Popular Choice",
      cta: "Start Partnership"
    },
    {
      title: "Direct Build & Sell",
      subtitle: "Full Ownership Model",
      features: [
        "Pay once, own fully",
        "Complete control",
        "No ongoing commissions",
        "Professional handover",
        "Optional maintenance plans"
      ],
      highlight: "Full Ownership",
      cta: "Get Quote"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="clients" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Launch & Grow Your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Online Store
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We handle everything from design to launch to ongoing growth optimization. 
            Choose the partnership model that works best for your business.
          </p>
        </div>

        {/* Business Models */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {models.map((model, index) => (
            <Card key={index} className="shadow-card hover-lift border-border/50 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  {model.highlight}
                </span>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">{model.title}</CardTitle>
                <p className="text-muted-foreground">{model.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={index === 0 ? "accent" : "default"} 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  {model.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass border-white/10 hover-lift">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your eCommerce Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss which model works best for your business and get you started.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForClients;