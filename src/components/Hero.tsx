import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient text-white section-padding overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            CLOAK: Developing Tools for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Cyber Safety and Digital Empowerment of Women
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Browse, Share, and Post with Confidence.
          </p>
          
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-white/80 leading-relaxed">
              Women are vulnerable to deepfake exploitation due to the lack of a reliable system 
              for verifying the authenticity of digital media. CLOAK creates a trusted platform 
              that empowers women to protect their digital identity by ensuring authenticity and 
              preventing deepfake misuse.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 bounce-hover text-lg px-8 py-6 rounded-xl font-semibold shadow-lg"
            >
              Protect Your Digital Identity Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;