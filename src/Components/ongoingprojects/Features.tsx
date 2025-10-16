import { Handshake, Home, Scale, Users, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Handshake,
      title: "TRUSTED SOUTH INDIA DEVELOPER",
      description: "Award-winning brand known for timely delivery, transparency, and trust."
    },
    {
      icon: Home,
      title: "EXPERTISE IN LAND & VILLA PLOTS",
      description: "From ECR coastlines to Auroville sanctuaries—built on deep regional insights."
    },
    {
      icon: Scale,
      title: "CLEAR TITLES & LEGAL CLARITY",
      description: "Fully compliant with local land laws and construction norms."
    },
    {
      icon: Users,
      title: "RELIABLE PARTNER NETWORK",
      description: "We collaborate with top professionals for end-to-end delivery."
    },
    {
      icon: Globe,
      title: "EXTENSIVE LAND PORTFOLIO",
      description: "Prime Plots in Pondicherry, Auroville & ECR curated for investment"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Premium Lands for Sale by Sadhisha
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Build Your Dream. Invest in Growth.
          </p>
          <p className="text-base md:text-lg text-foreground/80 max-w-5xl mx-auto mb-8">
            At Sadhisha Homes, we offer you more than just land—we offer potential. With over 30 years of trust and expertise in real estate development, our curated portfolio of clear-titled residential and commercial plots in Pondicherry, Auroville, and along the scenic East Coast Road (ECR) is designed for those who seek long-term value, peace of mind, and the freedom to build their future, their way.
          </p>
          <button className="h-11 px-8 bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary rounded-md font-medium transition-colors">
            Book a Site Visit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent/10">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
