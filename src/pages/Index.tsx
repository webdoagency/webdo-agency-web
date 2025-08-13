import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ForClients from "@/components/ForClients";
import ForFreelancers from "@/components/ForFreelancers";
import OurShops from "@/components/OurShops";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ForClients />
      <ForFreelancers />
      <OurShops />
      <Contact />
    </div>
  );
};

export default Index;
