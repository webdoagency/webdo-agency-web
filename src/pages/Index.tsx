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
