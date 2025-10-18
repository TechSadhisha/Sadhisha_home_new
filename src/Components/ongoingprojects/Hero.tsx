import { Phone } from "lucide-react";
import heroVideo from "../../assets/images/ongoingprojects/hero-Video.mp4";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <Header />
<section className="position-relative d-flex flex-column" style={{ minHeight: "77vh" }}>

        {/* Hero Content */}
        <div className="flex-fill d-flex align-items-center justify-content-center position-relative overflow-hidden">
          {/* Background Video */}
          <video
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919585230000"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed btn btn-success rounded-circle shadow-lg"
        style={{
          bottom: "24px",
          right: "24px",
          zIndex: 1050,
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Contact on WhatsApp"
      >
        <Phone size={32} />
      </a>
    </>
  );
};

export default Hero;
