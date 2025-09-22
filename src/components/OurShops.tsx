
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, TrendingUp, ShoppingCart, Users } from "lucide-react";

const OurShops = () => {
  const shops = [
    {
      name: "Ballers",
      url: "theballersstore.com",
      description: "Premium streetwear and athletic apparel for the modern athlete. Featuring exclusive collections and limited-edition drops.",
      category: "Fashion & Lifestyle",
      highlights: ["Exclusive Drops", "Premium Quality", "Athletic Inspired"],
      stats: [
        { label: "Categories", value: "50+", icon: ShoppingCart },
        { label: "Happy Customers", value: "2K+", icon: Users },
        { label: "Growth Rate", value: "150%", icon: TrendingUp }
      ]
    }
  ];

  const features = [
    "Responsive Design",
    "Fast Loading",
    "SEO Optimized",
    "Mobile First",
    "Conversion Focused",
    "Analytics Integrated"
  ];

  return (
    <section id="shops" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our{" "}
            <span className="text-accent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build stores for businesses – we run our own successful eCommerce businesses. 
            This gives us real-world insights into what actually drives sales and growth.
          </p>
        </div>

        {/* Featured Shops */}
        <div className="max-w-4xl mx-auto">
          <Card className="neumorphic-soft neumorphic-3d overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="/lovable-uploads/10e53572-e63d-4454-939c-4eff0b23541a.png" 
                    alt="Ballers Logo" 
                    className="h-8 w-auto"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Ballers</h3>
                    <Badge variant="secondary" className="neumorphic-pressed text-accent text-xs">
                      Fashion & Lifestyle
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://theballersstore.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Store
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                Premium streetwear and athletic apparel for the modern athlete.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-2 neumorphic rounded-lg">
                  <ShoppingCart className="w-4 h-4 text-accent mx-auto mb-1" />
                  <div className="font-bold text-sm">100%</div>
                  <div className="text-xs text-muted-foreground">Authentic</div>
                </div>
                <div className="text-center p-2 neumorphic rounded-lg">
                  <Users className="w-4 h-4 text-accent mx-auto mb-1" />
                  <div className="font-bold text-sm">Premium</div>
                  <div className="text-xs text-muted-foreground">Quality</div>
                </div>
                <div className="text-center p-2 neumorphic rounded-lg">
                  <TrendingUp className="w-4 h-4 text-accent mx-auto mb-1" />
                  <div className="font-bold text-sm">Original</div>
                  <div className="text-xs text-muted-foreground">Brands</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Technical Features */}
        <div className="mt-16">
          <Card className="neumorphic">
            <CardHeader>
              <CardTitle className="text-center">Built with Modern Standards</CardTitle>
              <p className="text-center text-muted-foreground">
                Every store we build incorporates the latest eCommerce best practices
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-3 rounded-lg neumorphic-pressed hover:neumorphic transition-all duration-200">
                    <div className="text-sm font-medium">{feature}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="neumorphic rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Success Story?</h3>
            <p className="text-muted-foreground mb-6">
              Let's create a high-performing eCommerce store that drives real results for your business.
            </p>
            <Button variant="hero" size="lg" onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurShops;
