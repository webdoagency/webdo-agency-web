import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Users, Code, Palette, TrendingUp, Globe, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForFreelancers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    portfolio: "",
    message: ""
  });
  
  const { toast } = useToast();

  const opportunities = [
    {
      icon: Code,
      title: "Development Partners",
      description: "Join our network of skilled developers working on cutting-edge eCommerce projects.",
      skills: ["React", "Node.js", "Shopify", "WooCommerce"]
    },
    {
      icon: Palette,
      title: "Design Collaborators",
      description: "Create stunning, conversion-focused designs for our client stores.",
      skills: ["UI/UX", "Figma", "Branding", "Conversion Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Specialists",
      description: "Drive growth and revenue for our partner stores through strategic marketing.",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing"]
    },
    {
      icon: Globe,
      title: "Strategic Consultants",
      description: "Help clients develop winning eCommerce strategies and optimize their operations.",
      skills: ["Strategy", "Analytics", "Market Research", "Business Development"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      skills: "",
      experience: "",
      portfolio: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="freelancers" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Talent Network
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with Webdo Agency and work on exciting eCommerce projects. 
            We're always looking for talented freelancers and agencies to collaborate with.
          </p>
        </div>

        {/* Opportunities */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="glass-blurred card-3d p-4 h-40">
              <CardContent className="p-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <opportunity.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{opportunity.title}</h3>
                    <p className="text-muted-foreground text-xs leading-tight">{opportunity.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {opportunity.skills.slice(0, 3).map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-accent/20 text-accent text-xs px-2 py-0">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="text-center">
          <div className="glass-blurred rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Join Our Network</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Ready to work on exciting projects?
            </p>
            <div className="space-y-3">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="mailto:talent@webdoagency.com">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  talent@webdoagency.com
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="https://wa.me/38348878222" target="_blank" rel="noopener noreferrer">
                  WhatsApp Direct
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFreelancers;