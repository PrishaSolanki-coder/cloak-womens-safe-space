import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const keyFeatures = [
    "Digital Watermarking with Blockchain Verification",
    "AI-Powered Deepfake Detection Engine",
    "Automated Takedown Request System",
    "Community SafeNet Support Network"
  ];

  return (
    <footer className="bg-primary text-white section-padding-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Statement */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Giving women control over their digital identity and content.
            </h2>
          </div>
          
          {/* Key Features List */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white/90">
              Key CLOAK Features:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mb-12">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 bounce-hover text-lg px-8 py-6 rounded-xl font-semibold"
            >
              Join the movement. Take control of your digital identity.
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Legal Links */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
            <div className="mt-6 text-white/60">
              <p>&copy; 2024 CLOAK. Empowering women through digital safety.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;