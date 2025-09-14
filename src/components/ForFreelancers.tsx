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
      title: "Shopify & Development Experts",
      description: "We're actively seeking Shopify specialists and skilled developers for premium eCommerce projects.",
      skills: ["Shopify Plus", "Liquid", "React", "Node.js"]
    },
    {
      icon: Palette,
      title: "Creative Design Professionals",
      description: "Looking for talented designers and photographers who understand product selling and brand storytelling.",
      skills: ["Product Photography", "UI/UX", "Brand Design", "Visual Merchandising"]
    },
    {
      icon: TrendingUp,
      title: "AI & Marketing Specialists",
      description: "Join our team of AI-savvy marketers driving exceptional results for eCommerce brands.",
      skills: ["AI Tools", "Performance Marketing", "Data Analytics", "Conversion Optimization"]
    },
    {
      icon: Globe,
      title: "Strategic Product Consultants",
      description: "Help brands develop winning product strategies and optimize their selling operations.",
      skills: ["Product Strategy", "Market Research", "Sales Optimization", "Business Intelligence"]
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
            We're especially seeking talented professionals with Shopify expertise, product selling experience, 
            AI specialists, creative designers, and photographers. Join our network of skilled collaborators.
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
                <a href="https://wa.me/message/6AUJBYONSU2HK1" target="_blank" rel="noopener noreferrer">
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