import { MapPin, Mail, Phone, Facebook, Twitter, Youtube } from "lucide-react";
// import logo from "@/assets/sadhisha-logo.png";
// import award from "@/assets/award.png";

const Footer = () => {
  const locations = [
    "Properties in Pondicherry",
    "Properties in ECR",
    "Properties in Auroville",
    "Properties in East Coast Road",
    "Properties in Marakanam",
    "Properties in Mahabalipuram",
    "Properties near Beach"
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Contact us", href: "#contact" }
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Sadisha</h3>
            {/* <img src={logo} alt="Sadhisha Homes" className="h-24 mb-6" /> */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+91 95852 30000</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>info@sadhisha.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Workafella IFL TOWERS Perungudi, OMR, Chennai</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Top Locations */}
          <div>
            <h3 className="text-xl font-bold mb-6">Top Locations</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div>
            <div className="flex gap-4">
              {/* <img src={award} alt="Best Thailand Agent Award" className="h-32 w-auto" />
              <img src={award} alt="Best Thailand Agent Award" className="h-32 w-auto" />
              <img src={award} alt="Best Thailand Agent Award" className="h-32 w-auto" /> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            Copyright © 2025 Sadhisha
          </p>
          <p className="text-muted-foreground">
            Online Presence Powered by:{" "}
            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
              Agam Creative Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
