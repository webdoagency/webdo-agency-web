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
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build stores for clients – we run our own successful eCommerce businesses. 
            This gives us real-world insights into what actually drives sales and growth.
          </p>
        </div>

        {/* Featured Shops */}
        <div className="space-y-12">
          {shops.map((shop, index) => (
            <Card key={index} className="shadow-card hover-lift border-border/50 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{shop.name}</h3>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        {shop.category}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://${shop.url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Visit Store
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {shop.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {shop.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="border-accent/50 text-accent">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {shop.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 glass rounded-lg">
                        <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                        <div className="font-bold text-lg">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-card to-muted/20">
                  <div className="relative">
                    {/* Mock Browser Window */}
                    <div className="w-80 bg-card rounded-lg shadow-premium border border-border overflow-hidden">
                      {/* Browser Header */}
                      <div className="h-8 bg-muted flex items-center px-3 gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-destructive rounded-full"></div>
                          <div className="w-2 h-2 bg-warning rounded-full"></div>
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-input rounded text-xs text-center py-1 text-muted-foreground">
                          {shop.url}
                        </div>
                      </div>
                      
                      {/* Content Preview */}
                      <div className="p-4 space-y-3">
                        <div className="h-24 bg-gradient-primary rounded opacity-80"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-muted rounded w-3/4"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-muted rounded"></div>
                          <div className="h-16 bg-muted rounded"></div>
                        </div>
                        <div className="h-8 bg-accent rounded"></div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-[float_3s_ease-in-out_infinite]">
                      <ShoppingCart className="w-6 h-6 text-accent" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-[float_3s_ease-in-out_infinite_1.5s]">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Features */}
        <div className="mt-16">
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="text-center">Built with Modern Standards</CardTitle>
              <p className="text-center text-muted-foreground">
                Every store we build incorporates the latest eCommerce best practices
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="text-sm font-medium">{feature}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
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