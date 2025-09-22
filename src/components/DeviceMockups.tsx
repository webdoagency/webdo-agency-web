import { useState } from "react";
import { Monitor, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface DeviceMockupsProps {
  websites?: {
    title: string;
    description: string;
    desktopImage: string;
    mobileImage: string;
    url?: string;
  }[];
}

const DeviceMockups = ({ websites = [] }: DeviceMockupsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const defaultWebsites = [
    {
      title: "Ballers - Sports Caps Store",
      description: "Premium sports caps and baseball hats with team collections",
      desktopImage: "/showcase/ballers-preview.png",
      mobileImage: "/showcase/gb-preview.png",
    },
    {
      title: "GB - Luxury Fashion",
      description: "High-end fashion boutique with elegant dress collections",
      desktopImage: "/showcase/ballers-preview.png",
      mobileImage: "/showcase/gb-mobile-preview.png",
    }
  ];

  const displayWebsites = websites.length > 0 ? websites : defaultWebsites;

  const nextWebsite = () => {
    setCurrentIndex((prev) => (prev + 1) % displayWebsites.length);
  };

  const prevWebsite = () => {
    setCurrentIndex((prev) => (prev - 1 + displayWebsites.length) % displayWebsites.length);
  };

  const currentWebsite = displayWebsites[currentIndex];

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Background Liquid Effect */}
      <div className="absolute inset-0 liquid-flow opacity-30" />
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Laptop Mockup */}
        <div className="device-mockup group">
          <div className="relative">
            {/* Laptop Frame */}
            <div className="bg-gradient-glass p-6 rounded-3xl shadow-3d">
              {/* Screen */}
              <div className="device-screen aspect-[16/10] relative">
                <img 
                  src={currentWebsite.desktopImage}
                  alt={currentWebsite.title}
                  className="w-full h-full object-contain p-2 transition-all duration-500"
                />
                {/* Screen Glow */}
                <div className="absolute inset-0 bg-gradient-liquid opacity-20" />
              </div>
              
              {/* Keyboard */}
              <div className="mt-4 h-16 bg-gradient-glass rounded-xl opacity-80" />
            </div>
            
            {/* Laptop Base Shadow */}
            <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl" />
          </div>
          
          {/* Monitor Icon */}
          <div className="absolute -top-4 -right-4 glass-morphism p-3 rounded-2xl">
            <Monitor className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="device-mockup group lg:translate-y-12">
          <div className="relative mx-auto w-64">
            {/* Phone Frame */}
            <div className="bg-gradient-glass p-4 rounded-[2.5rem] shadow-3d">
              {/* Screen */}
              <div className="device-screen aspect-[9/19.5] relative">
                <img 
                  src={currentWebsite.mobileImage}
                  alt={`${currentWebsite.title} Mobile`}
                  className="w-full h-full object-contain p-2 transition-all duration-500"
                />
                {/* Screen Glow */}
                <div className="absolute inset-0 bg-gradient-liquid opacity-15" />
              </div>
            </div>
            
            {/* Phone Shadow */}
            <div className="absolute -bottom-6 left-6 right-6 h-12 bg-black/30 rounded-full blur-2xl" />
          </div>
          
          {/* Phone Icon */}
          <div className="absolute -top-4 -left-4 glass-morphism p-3 rounded-2xl">
            <Smartphone className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>

      {/* Website Info & Controls */}
      <div className="relative z-10 mt-16 text-center glass-morphism p-8 rounded-3xl max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">{currentWebsite.title}</h3>
        <p className="text-muted-foreground mb-6">{currentWebsite.description}</p>
        
        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevWebsite}
            className="glass hover-glow"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {displayWebsites.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent shadow-glow"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextWebsite}
            className="glass hover-glow"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockups;