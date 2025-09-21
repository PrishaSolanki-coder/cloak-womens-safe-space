import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;