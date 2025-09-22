import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Your{" "}
              <span className="text-accent">
                Dream Store
              </span>{" "}
              Today
            </h1>
            

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Low startup costs with commission-based partnerships</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Full ownership options with direct build & sell</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Ongoing support and growth optimization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Start Your Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Floating 3D Cards */}
              <div className="absolute -top-8 -left-8 w-32 h-32 neumorphic rounded-3xl p-4 animate-float neumorphic-3d">
                <div className="w-full h-full neumorphic-pressed rounded-2xl flex items-center justify-center text-accent font-bold text-sm">
                  Growth
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-24 h-24 neumorphic rounded-3xl p-3 animate-[float_6s_ease-in-out_infinite_2s] neumorphic-3d">
                <div className="w-full h-full neumorphic-pressed rounded-2xl flex items-center justify-center text-accent font-bold text-xs">
                  Sales
                </div>
              </div>

              <div className="w-80 h-80 neumorphic-card rounded-[3rem] p-8 flex items-center justify-center neumorphic-3d">
                <div className="text-center">
                  <div className="w-16 h-16 neumorphic rounded-3xl mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ready to Launch</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional eCommerce solutions built for success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;