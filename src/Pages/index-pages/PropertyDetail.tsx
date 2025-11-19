import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// import { useToast } from "@/hooks/use-toast";
import Header from "../../Components/ongoingprojects/Header";
import Footer from "../../Components/ongoingprojects/Footer";

import gandhi from "../../assets/images/ongoingprojects/gandhi.webp";
import growth from "../../assets/images/ongoingprojects/growth.webp";
import PropertyMediaSlider from "../../Components/common/PropertyMediaSlider";
import { useNavigate } from "react-router-dom";
import { propertyDetailData } from "../../assets/data/propertyDetailData";
import GeneralEnquiryForm from "../../Components/Forms/GeneralEnquiryForm";

const PropertyDetail = () => {
  const location = useLocation(); // ✅ now defined

  const navigate = useNavigate();

  const handleBookVisit = () => {
    // navigate to ongoing projects and pass scroll info
    navigate("/ongoing-projects", { state: { scrollTo: "contact" } });
  };

  //   const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get("id") || "auroville-lakeview";
  const currentProperty =
    propertyDetailData[propertyId as keyof typeof propertyDetailData] ||
    propertyDetailData["auroville-lakeview"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:
      "I am interested in receiving more information about this property.\nThank you",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll to top when property changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentImageIndex(0);
  }, [propertyId, location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Enquiry Submitted",
    //   description: "We'll get back to you shortly!",
    // });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProperty.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentProperty.images.length) %
        currentProperty.images.length
    );
  };

  // Get similar properties (all except current)
  const similarProperties = Object.values(propertyDetailData).filter(
    (p) => p.id !== propertyId
  );

  const faqs = [
    {
      question: "1. Can outsiders invest in land near Auroville?",
      answer:
        "Yes. While the core Auroville township follows unique governance and land use norms, properties in the Auroville Green Belt or surrounding areas like Kullapalayam, Bommayapalayam, and ECR are available for private investment and development.",
    },
    {
      question:
        "2. Are there any restrictions for NRIs buying land near Auroville?",
      answer:
        "NRIs can purchase agricultural or non-agricultural land in the Auroville region, subject to standard government regulations and RBI guidelines. It's recommended to work with legal experts familiar with property laws in Tamil Nadu.",
    },
    {
      question: "3. Is it safe to invest in real estate near Auroville?",
      answer:
        "Yes. The Auroville region is considered a stable and secure investment zone with clear land titles, growing infrastructure, and strong demand for eco-friendly and boutique developments.",
    },
    {
      question: "4. What makes Auroville a valuable real estate destination?",
      answer:
        "Auroville offers a unique combination of spiritual tranquility, eco-conscious living, proximity to beaches, and international community appeal—making it ideal for wellness resorts, boutique villas, and sustainable living projects.",
    },
    {
      question:
        "5. What kind of properties are best to invest in/near Auroville?",
      answer:
        "Plotted land for eco-farmhouses, luxury villas, boutique resorts, and yoga/wellness retreats are highly sought after. Properties with lake views, green surroundings, or proximity to the ECR command premium appreciation.",
    },
  ];

  return (
    <div className="min-vh-100 bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="
    position-relative 
    d-flex 
    align-items-center 
    justify-content-center 
    text-center 
    text-white
  "
        style={{
          backgroundImage: `url(${currentProperty.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>

      <style>
        {`
  section {
    min-height: 100vh; /* default for large screens */
  }

  /* Tablet view */
  @media (max-width: 1024px) {
    section {
      min-height: 80vh;
    }
  }

  /* Mobile view */
  @media (max-width: 768px) {
    section {
      min-height: 60vh;
    }
  }
`}
      </style>

      {/* Property Details and Form */}

      <div className="container">
        <div className="row g-4">
          {/* Left: Property Details */}
          <div className="col-lg-8">
            <h2 className="h4 fw-bold mb-3">{currentProperty.title}</h2>
            <p className="text-muted mb-3">{currentProperty.description}</p>
            <p className="text-warning fw-semibold h6 mb-2">
              {currentProperty.price} {currentProperty.priceLabel.toLowerCase()}
            </p>
            <p className="text-muted mb-4" style={{ whiteSpace: "pre-line" }}>
              {currentProperty.details}
            </p>

            <div className="text-center">
              <button
                className="btn btn-dark px-4 py-2 mb-4"
                onClick={handleBookVisit}
              >
                Book a Site Visit
              </button>
            </div>

            {/* Image Carousel */}
            <div className="my-4">
              <PropertyMediaSlider media={currentProperty.images} />
            </div>

            {/* Responsive Video */}
            <div className="ratio ratio-16x9 mb-4">
              <video
                src={(currentProperty as any).video}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>

            {/* Property Description */}
            <div className="mb-5">
              <p className="text-muted">
                We are proud to present an exclusive opportunity to own 1.25
                acres of premium land near the tranquil shores of Auroville
                Lake...
              </p>

              <h3 className="h6 fw-bold mt-4 mb-3">Property Highlights</h3>
              <ul className="list-unstyled">
                <li className="mb-3 text-muted">
                  <strong className="text-dark">Prestigious Location:</strong>{" "}
                  Just off Auroville's scenic green belt...
                </li>
                <li className="mb-3 text-muted">
                  <strong className="text-dark">
                    Versatile Usage Potential:
                  </strong>{" "}
                  Ideal for subdividing or building villas...
                </li>
                <li className="mb-3 text-muted">
                  <strong className="text-dark">Breathtaking Setting:</strong>{" "}
                  Enjoy unobstructed views of lush greenery...
                </li>
                <li className="mb-3 text-muted">
                  <strong className="text-dark">
                    Developer-Friendly Parcel:
                  </strong>{" "}
                  Flat terrain, road-facing access, etc.
                </li>
              </ul>

              <h3 className="h6 fw-bold mt-4 mb-3">Investment Insights</h3>
              <ul className="list-unstyled">
                <li className="mb-2 text-muted">High Appreciation Zone</li>
                <li className="mb-2 text-muted">
                  Proximity to Coastal Tourism Belt
                </li>
                <li className="mb-2 text-muted">
                  Ideal for NRI Investment, Wellness Resorts & Eco Living
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="col-lg-4">
            
              <div className="card-body p-4">
                <h3 className="h5 fw-bold mb-4">Enquire Sadhisha</h3>
                <GeneralEnquiryForm />
              </div>

          </div>
        </div>
      </div>

      {/* About Pondicherry */}
      <div className=" bg-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img
                src={gandhi}
                alt="Pondicherry landmark"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <h2 className="h3 fw-bold mb-4">About Pondicherry</h2>
              <p className="text-muted">
                Pondicherry—often called the “French Riviera of the East”—is a
                serene coastal town that beautifully blends colonial charm with
                contemporary living. Known for its clean beaches, spiritual
                centers like Auroville, vibrant cafés, and heritage
                architecture, Pondicherry offers a lifestyle that balances
                peace, culture, and accessibility. With a unique blend of
                tradition and modernity, it remains one of South India’s most
                desirable destinations for both living and tourism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real Estate Investment */}
      <div className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <h2 className="h3 fw-bold mb-4">
                Real Estate Investment in Pondicherry
              </h2>
              <p className="text-muted">
                Pondicherry—often called the “French Riviera of the East”—is a
                serene coastal town that beautifully blends colonial charm with
                contemporary living. Known for its clean beaches, spiritual
                centers like Auroville, vibrant cafés, and heritage
                architecture, Pondicherry offers a lifestyle that balances
                peace, culture, and accessibility. With a unique blend of
                tradition and modernity, it remains one of South India’s most
                desirable destinations for both living and tourism.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={growth}
                alt="Investment growth"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-5">
            Frequently Asked Questions About Auroville
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-bottom mb-3">
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="btn btn-link text-decoration-none text-dark w-100 text-start d-flex justify-content-between align-items-center py-3"
                  >
                    <span className="fs-6">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform:
                          openFaqIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="pb-3 text-muted small">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Listings */}
      <section className="py-5">
        <div className="container">
          <h2 className="h2 fw-bold text-center mb-5">
            Similar Listings Recommended by Sadhisha
          </h2>
          <div className="row g-4">
            {similarProperties.map((property) => (
              <div key={property.id} className="col-md-6 col-lg-4">
                <Link
                  to={`/property-detail?id=${property.id}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 border-0 shadow-sm overflow-hidden">
                    <img
                      src={property.mainImage}
                      alt={property.title}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body p-4">
                      <h3 className="h5 fw-bold mb-2 text-decoration-underline">
                        {property.title}
                      </h3>
                      <p className="small text-muted mb-3">
                        {property.description}
                      </p>
                      <p
                        className="fw-bold mb-0"
                        style={{ color: "var(--gold-color)" }}
                      >
                        {property.price} {property.priceLabel}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
