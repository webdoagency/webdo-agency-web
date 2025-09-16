import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ForClients from "@/components/ForClients";
import ForFreelancers from "@/components/ForFreelancers";
import OurShops from "@/components/OurShops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div className="py-32">
        {/* Section Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Choose Your Path to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              eCommerce Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a business looking to expand online or a freelancer ready to join our network, 
            we have the perfect solution tailored to your needs.
          </p>
        </div>
        <ForClients />
      </div>
      <div className="py-32">
        <ForFreelancers />
      </div>
      <div className="py-32">
        <OurShops />
      </div>
      <div className="py-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
