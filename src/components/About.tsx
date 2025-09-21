const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            The Problem We're Solving
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Deepfake Exploitation Crisis
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Deepfake technology is increasingly being weaponized for online harassment, 
                blackmail, and identity theft, with women being disproportionately targeted. 
                The lack of reliable verification systems leaves victims vulnerable and 
                perpetrators unchecked.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Current reporting mechanisms are slow, complex, and often ineffective, 
                leaving women to navigate this crisis alone.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-accent mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We envision a digital world where women can express themselves freely, 
                knowing their authentic content is protected and verifiable. CLOAK creates 
                a comprehensive ecosystem of protection, detection, and community support.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining cutting-edge AI technology with blockchain verification and 
                community-driven support, we're building the future of digital safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;