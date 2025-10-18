import { Handshake, Home, Scale, Users, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Handshake,
      title: "TRUSTED SOUTH INDIA DEVELOPER",
      description:
        "Award-winning brand known for timely delivery, transparency, and trust.",
    },
    {
      icon: Home,
      title: "EXPERTISE IN LAND & VILLA PLOTS",
      description:
        "From ECR coastlines to Auroville sanctuaries—built on deep regional insights.",
    },
    {
      icon: Scale,
      title: "CLEAR TITLES & LEGAL CLARITY",
      description:
        "Fully compliant with local land laws and construction norms.",
    },
    {
      icon: Users,
      title: "RELIABLE PARTNER NETWORK",
      description:
        "We collaborate with top professionals for end-to-end delivery.",
    },
    {
      icon: Globe,
      title: "EXTENSIVE LAND PORTFOLIO",
      description:
        "Prime Plots in Pondicherry, Auroville & ECR curated for investment",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold mb-3">
            Explore Premium Lands for Sale by Sadhisha
          </h2>
          <p className="lead mb-4 text-muted">
            Build Your Dream. Invest in Growth.
          </p>
          <p className="mb-4 text-muted">
            At Sadhisha Homes, we offer you more than just land—we offer
            potential. With over 30 years of trust and expertise in real estate
            development, our curated portfolio of clear-titled residential and
            commercial plots in Pondicherry, Auroville, and along the scenic
            East Coast Road (ECR) is designed for those who seek long-term
            value, peace of mind, and the freedom to build their future, their
            way.
          </p>
          <button
            className="btn btn-dark px-4 py-2"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book a Site Visit
          </button>
        </div>

        <div className="row g-4 mt-4 justify-content-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                <div className="text-center p-3">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="rounded-circle bg-warning bg-opacity-10 p-3">
                      <Icon size={32} className="text-warning" />
                    </div>
                  </div>
                  <h3 className="h6 fw-bold mb-2">{feature.title}</h3>
                  <p className="small text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
