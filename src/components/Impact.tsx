import { CheckCircle } from "lucide-react";

const Impact = () => {
  const benefits = [
    "Protects women from deepfake exploitation and online harassment",
    "Builds digital trust by ensuring the authenticity of photos and videos",
    "Creates a safer online space for women to express themselves freely",
    "Simplifies reporting and takedown of harmful content",
    "Provides a support system with community and legal help",
    "Empowers women to take control of their digital identity"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Impact & Benefits
            </h2>
            <p className="text-xl text-muted-foreground">
              Creating measurable change in digital safety and women's empowerment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 rounded-xl feature-gradient interactive-hover"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent mt-1" />
                </div>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl hero-shadow">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join the Movement for Digital Safety
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Together, we're building a future where every woman can participate in 
                the digital world without fear of exploitation or harassment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;