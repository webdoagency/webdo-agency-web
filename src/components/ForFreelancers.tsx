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
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="glass border-white/10 hover-lift">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <opportunity.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{opportunity.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {opportunity.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-accent/20 text-accent">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Apply to Join Our Network
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Tell us about yourself and let's explore how we can work together
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className="bg-input border-border focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-input border-border focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="bg-input border-border focus:border-accent">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior (1-2 years)</SelectItem>
                      <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5+ years)</SelectItem>
                      <SelectItem value="expert">Expert (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Primary Skills & Expertise</Label>
                  <Input
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => handleInputChange("skills", e.target.value)}
                    placeholder="e.g., React, UI/UX Design, Google Ads, Shopify..."
                    className="bg-input border-border focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website URL</Label>
                  <Input
                    id="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange("portfolio", e.target.value)}
                    placeholder="https://yourportfolio.com"
                    className="bg-input border-border focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Yourself</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="What makes you unique? What kind of projects excite you? Any relevant experience with eCommerce?"
                    className="bg-input border-border focus:border-accent transition-colors min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button type="submit" variant="hero" size="lg" className="group">
                    Submit Application
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button type="button" variant="outline" size="lg">
                    <a href="mailto:contact@webdoagency.com" className="flex items-center gap-2">
                      Email Us Directly
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Questions? Reach out to us at{" "}
              <a href="mailto:contact@webdoagency.com" className="text-accent hover:text-accent-hover transition-colors">
                contact@webdoagency.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFreelancers;