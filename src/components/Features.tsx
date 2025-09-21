import { Shield, Eye, ArrowDown, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Digital Watermarking",
      subtitle: "Authenticity Seal",
      description: "Every photo or video taken with the app uses AI and blockchain to create a verifiable, tamper-proof seal. This ensures real content can't be replaced by deepfakes and acts as a 'digital signature of truth.'"
    },
    {
      icon: Eye,
      title: "Deepfake Detector",
      subtitle: "AI Verification",
      description: "Upload suspicious media to be scanned by our AI detection engine. Get a real vs. fake authenticity score in seconds, empowering women to expose fake content with confidence."
    },
    {
      icon: ArrowDown,
      title: "Auto Takedown Request",
      subtitle: "One-Click Protection",
      description: "Generate instant legal and platform reports for harmful content. Send takedown requests to social media, search engines, and hosting sites, simplifying the stressful reporting process."
    },
    {
      icon: Users,
      title: "Community SafeNet",
      subtitle: "Women Helping Women",
      description: "A secure forum where women can report harassment, share warnings, and support each other. Includes access to cyber experts, legal advisors, and counselors, building a 'safe sisterhood online.'"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Protection Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four comprehensive tools working together to create an impenetrable defense 
            against deepfake exploitation and digital harassment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient interactive-hover p-8 text-center border-0 h-full"
            >
              <div className="feature-icon mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm font-semibold text-accent mb-4">
                {feature.subtitle}
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;