import { Phone } from "lucide-react";
import cloudinaryAssets from "../../assets/cloudinary_assets.json";
const heroVideo =
  cloudinaryAssets["src/assets/images/ongoingprojects/hero-Video.mp4"];
import Header from "./Header";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <Header />

      {/* Hero Content */}
      {/* Background Video */}
      <div className="ratio ratio-16x9 w-100">
        <video
          className="w-100 h-100"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* WhatsApp Float Button */}
      {/* <a
        href="https://wa.me/919585230000"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-3 bg-success text-white d-flex align-items-center justify-content-center rounded-circle p-3 shadow"
        aria-label="Contact on WhatsApp"
        style={{ zIndex: 1000 }}
      >
        <FaWhatsapp size={32} />
      </a> */}
    </>
  );
};

export default Hero;
