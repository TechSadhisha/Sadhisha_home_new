import { Check } from "lucide-react";
import beachImage from "../../assets/images/ongoingprojects/beach.jpg";

const WhyInvest = () => {
  const reasons = [
    "DTCP/RERA-approved plots with clear legal documentation",
    "Located in fast-appreciating zones near the coast, green belts & major highways",
    "Ready for immediate registration and construction",
    "Options ranging from compact lifestyle plots to expansive estates",
    "Ideal for retirement homes, weekend villas, eco-residences, and resale investments",
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="h2 fw-bold text-center mb-5">
          Why Invest in Land with Sadhisha?
        </h2>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <img
              src={beachImage}
              alt="Coastal landscape"
              className="img-fluid rounded shadow-lg"
            />
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="d-flex gap-3">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <Check size={20} className="text-warning" />
                    </div>
                  </div>
                  <p className="text-muted fs-6 mb-0">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
