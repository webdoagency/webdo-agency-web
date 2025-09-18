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
    <section id="businesses" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-liquid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass-morphism liquid-3d p-4 h-32 shadow-liquid">
              <CardContent className="p-0 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-liquid">
                  <benefit.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs leading-tight">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-3xl p-8 max-w-2xl mx-auto liquid-3d shadow-3d">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your eCommerce Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss which model works best for your business and get you started.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact} className="hover-glow">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForClients;