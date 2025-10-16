import { Check } from "lucide-react";
// import beachImage from "@/assets/beach.jpg";

const WhyInvest = () => {
  const reasons = [
    "DTCP/RERA-approved plots with clear legal documentation",
    "Located in fast-appreciating zones near the coast, green belts & major highways",
    "Ready for immediate registration and construction",
    "Options ranging from compact lifestyle plots to expansive estates",
    "Ideal for retirement homes, weekend villas, eco-residences, and resale investments"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Invest in Land with Sadhisha?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img 
              // src={beachImage} 
              alt="Coastal landscape" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
