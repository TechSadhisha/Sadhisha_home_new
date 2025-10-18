import { MapPin, Mail, Phone, Facebook, Twitter, Youtube } from "lucide-react";
import logo1 from "../../assets/images/ongoingprojects/logo1.webp";
import award from "../../assets/images/ongoingprojects/award.webp";

const Footer = () => {
  const locations = [
    "Properties in Pondicherry",
    "Properties in ECR",
    "Properties in Auroville",
    "Properties in East Coast Road",
    "Properties in Marakanam",
    "Properties in Mahabalipuram",
    "Properties near Beach",
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Contact us", href: "#contact" },
  ];

  return (
    <footer className="bg-white border-top">
      <div className="container py-5">
        <div className="row g-4 mb-5">
          {/* Contact Section */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold mb-4">Contact Sadisha</h3>
            <img
              src={logo1}
              alt="Sadhisha Homes"
              style={{ height: "96px" }}
              className="mb-4"
            />
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-2">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>+91 95852 30000</span>
              </div>
              <div className="d-flex gap-2">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>info@sadhisha.com</span>
              </div>
              <div className="d-flex gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Workafella IFL TOWERS Perungudi, OMR, Chennai</span>
              </div>
            </div>

            <div className="d-flex gap-3 mt-4">
              <a
                href="#"
                className="btn btn-primary rounded d-flex align-items-center justify-content-center"
                style={{ width: "48px", height: "48px" }}
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="btn btn-info text-white rounded d-flex align-items-center justify-content-center"
                style={{ width: "48px", height: "48px" }}
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="btn btn-danger rounded d-flex align-items-center justify-content-center"
                style={{ width: "48px", height: "48px" }}
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Top Locations */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold mb-4">Top Locations</h3>
            <ul className="list-unstyled">
              {locations.map((location, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-muted text-decoration-none">
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold mb-4">Quick Links</h3>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="text-muted text-decoration-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex gap-3">
              <img
                src={award}
                alt="Best Thailand Agent Award"
                style={{ height: "250px", width: "100px" }}
              />
              <img
                src={award}
                alt="Best Thailand Agent Award"
                style={{ height: "250px", width: "100px" }}
              />
              <img
                src={award}
                alt="Best Thailand Agent Award"
                style={{ height: "250px", width: "100px" }}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top pt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-muted mb-0">Copyright © 2025 Sadhisha</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
