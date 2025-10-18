import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import Header from "../../Components/ongoingprojects/Header";
import Footer from "../../Components/ongoingprojects/Footer";
import property1 from "../../assets/images/ongoingprojects/property1.webp";
import property2 from "../../assets/images/ongoingprojects/property2.webp";
import property3 from "../../assets/images/ongoingprojects/property3.webp";
import property4 from "../../assets/images/ongoingprojects/property4.webp";
import property5 from "../../assets/images/ongoingprojects/property5.webp";
import property6 from "../../assets/images/ongoingprojects/property6.webp";
import property7 from "../../assets/images/ongoingprojects/property7.webp";
import property8 from "../../assets/images/ongoingprojects/property8.webp";
import property9 from "../../assets/images/ongoingprojects/property9.webp";
import property10 from "../../assets/images/ongoingprojects/property10.webp";
import property11 from "../../assets/images/ongoingprojects/property11.webp";
import property12 from "../../assets/images/ongoingprojects/property12.webp";
import property13 from "../../assets/images/ongoingprojects/property13.webp";
import property14 from "../../assets/images/ongoingprojects/property14.webp";
import property15 from "../../assets/images/ongoingprojects/property15.webp";
import property16 from "../../assets/images/ongoingprojects/property16.webp";
import gandhi from "../../assets/images/ongoingprojects/gandhi.webp";
import growth from "../../assets/images/ongoingprojects/growth.webp";
import property from "../../assets/images/ongoingprojects/mangrove.mp4";
import { useNavigate } from "react-router-dom";

// Property data
const properties = {
  "auroville-lakeview": {
    id: "auroville-lakeview",
    title: "Auroville Lakeview Land",
    heroTitle: "Auroville Lakeview Land",
    heroSubtitle: "Prime Development Land near SBI Kuilapalayam Junction",
    price: "₹2,500",
    priceLabel: "per sq. ft.",
    description: "Prime Development Land near SBI Kuilapalayam Junction",
    details:
      "1.25 Acres (54,450 sq. ft.) | Subdividable into 10,000 sq. ft. plots | Auroville",
    images: [property1, property2, property3],
    mainImage: property1,
  },
  "ecr-beachfront-enclave": {
    id: "ecr-beachfront-enclave",
    title: "ECR Beachfront Enclave",
    heroTitle: "ECR Beachfront Enclave",
    heroSubtitle:
      "Prime Coastal Land 100 meters from East Coast Road (ECR) Shoreline",
    price: "₹550",
    priceLabel: "per sq. ft.",
    description:
      "Prime Coastal Land 100 meters from East Coast Road (ECR) Shoreline",
    details:
      "1 Acre (43,560 sq. ft.) | Subdividable into 10,000 sq. ft. plots | near Auroville",
    images: [property2, property3, property4],
    mainImage: property2,
  },
  "auroville-coastal-grove": {
    id: "auroville-coastal-grove",
    title: "Auroville Coastal Grove",
    heroTitle: "Auroville Coastal Grove",
    heroSubtitle: "Villas Near ECR & Aurolec",
    price: "₹2.25 Cr",
    priceLabel: "Starting Price",
    description: "Villas Near ECR & Aurolec",
    details: "85 Cents | 37,000 sq. ft | Subdividable into 2,500 sq. ft. plots",
    images: [property3, property1, property2],
    mainImage: property3,
  },
  "ecr-coconut-grove": {
    id: "ecr-coconut-grove",
    title: "ECR Coconut Grove",
    heroTitle: "ECR Coconut Grove",
    heroSubtitle: "Development Land Near Wooden Resort – Just 20m Off ECR",
    price: "₹2.5 Cr",
    priceLabel: "per Acre",
    description: "Development Land Near Wooden Resort – Just 20m Off ECR",
    details:
      "2.5 Acres | 1,08,900 sq. ft. | Subdividable into 10,000 sq. ft. plots",
    images: [property4, property5, property6],
    mainImage: property4,
  },
  "ecr-anumanthai-haven": {
    id: "ecr-anumanthai-haven",
    title: "ECR Anumanthai Haven",
    heroTitle: "ECR Anumanthai Haven",
    heroSubtitle: "Premium Coconut Land – 1 km from Anumanthai Toll Gate",
    price: "₹2.5 Cr",
    priceLabel: "per Acre",
    description: "Premium Coconut Land – 1 km from Anumanthai Toll Gate",
    details:
      "1.1 Acres | Approx. 47,916 sq. ft | Subdividable into 10,000 sq. ft. plots",
    images: [property5, property6, property7],
    mainImage: property5,
  },
  "marakanam-meadows": {
    id: "marakanam-meadows",
    title: "Marakanam Meadows",
    heroTitle: "Marakanam Meadows",
    heroSubtitle: "Prime Development Land – 1 km from Marakanam (ECR)",
    price: "₹1.5 Cr",
    priceLabel: "per Acre",
    description: "Prime Development Land – 1 km from Marakanam (ECR)",
    details:
      "34 Acres | Approx. 14,80,000+ sq. ft. | Suitable for Township Projects",
    images: [property6, property7, property8],
    mainImage: property6,
  },
  "pims-enclave": {
    id: "pims-enclave",
    title: "PIMS Enclave",
    heroTitle: "PIMS Enclave",
    heroSubtitle:
      "Prime Development Land 1 km from ECR, Close to PIMS Hospital",
    price: "₹550",
    priceLabel: "per sq. ft.",
    description: "Prime Development Land 1 km from ECR, Close to PIMS Hospital",
    details:
      "1.5 Acres | Approx. 65,340 sq. ft. | Subdividable into 10,000 sq. ft. plots",
    images: [property7, property8, property9],
    mainImage: property7,
  },
  "auroville-coastal-grove-apartments": {
    id: "auroville-coastal-grove-apartments",
    title: "Auroville Coastal Grove Apartments",
    heroTitle: "Auroville Coastal Grove Apartments",
    heroSubtitle: "Studio Apartments Near ECR & Aurolec",
    price: "₹55 Lakh",
    priceLabel: "Starting Price",
    description: "Studio Apartments Near ECR & Aurolec",
    details: "85 Cents | 37,000 sq. ft | Subdividable into 2,500 sq. ft. plots",
    images: [property8, property9, property10],
    mainImage: property8,
  },
  "chinna-kottakuppam-villa-plots": {
    id: "chinna-kottakuppam-villa-plots",
    title: "Chinna Kottakuppam Villa Plots",
    heroTitle: "Chinna Kottakuppam Villa Plots",
    heroSubtitle:
      "Premium Residential Villa Plots Near Kottakuppam, Pondicherry",
    price: "₹95 Lakh",
    priceLabel: "Total",
    description:
      "Premium Residential Villa Plots Near Kottakuppam, Pondicherry",
    details: "2,500 sq.ft. Land | 1,000 sq.ft. Villa | Chinna Kottakuppam",
    images: [property9, property10, property11],
    mainImage: property9,
  },
  "chinna-kottakuppam-plots": {
    id: "chinna-kottakuppam-plots",
    title: "Chinna Kottakuppam Plots",
    heroTitle: "Chinna Kottakuppam Plots",
    heroSubtitle: "Premium Residential Plots Near Kottakuppam, Pondicherry",
    price: "₹45 Lakh",
    priceLabel: "Total",
    description: "Premium Residential Plots Near Kottakuppam, Pondicherry",
    details: "2,500 sq.ft. Land | ₹1,700 per sq.ft. | Chinna Kottakuppam",
    images: [property10, property11, property12],
    mainImage: property10,
  },
  "sandai-pudukuppam-plot": {
    id: "sandai-pudukuppam-plot",
    title: "Sandai Pudukuppam Plot",
    heroTitle: "Sandai Pudukuppam Plot",
    heroSubtitle: "Prime Land Parcel at Vanur",
    price: "₹500",
    priceLabel: "per sq. ft.",
    description: "Prime Land Parcel at Vanur",
    details:
      "5,750 sq.ft. | Total Price: ₹30 Lakhs | Individual Plot near Puducherry",
    images: [property11, property12, property13],
    mainImage: property11,
  },
  "arumbarthapuram-apartment": {
    id: "arumbarthapuram-apartment",
    title: "Arumbarthapuram Apartment",
    heroTitle: "Arumbarthapuram Apartment",
    heroSubtitle:
      "3 BHK Residential Apartment at Prime Location in Pondicherry",
    price: "₹90 Lakh",
    priceLabel: "Total",
    description: "3 BHK Residential Apartment at Prime Location in Pondicherry",
    details:
      "1,450 sq.ft. | Spacious 3 BHK | Near AG Padhmavathi Hospital, Arumbarthapuram",
    images: [property12, property13, property14],
    mainImage: property12,
  },
  "bommayapalayam-buddha-garden-plot": {
    id: "bommayapalayam-buddha-garden-plot",
    title: "Bommayapalayam Buddha Garden Plot",
    heroTitle: "Bommayapalayam Buddha Garden Plot",
    heroSubtitle: "Premium Residential Plot near Auroville Township",
    price: "₹1 Cr",
    priceLabel: "Total",
    description: "Premium Residential Plot near Auroville Township",
    details:
      "3,000 sq.ft. Plot | Just 1 KM from Mango Hill Resort | 500 M from Aurolec",
    images: [property13, property14, property15],
    mainImage: property13,
  },
  "bommayapalayam-buddha-garden-villa": {
    id: "bommayapalayam-buddha-garden-villa",
    title: "Bommayapalayam Buddha Garden Villa",
    heroTitle: "Bommayapalayam Buddha Garden Villa",
    heroSubtitle: "Premium Luxury Villa Plot near Auroville Township",
    price: "₹2.65 Cr",
    priceLabel: "Total",
    description: "Premium Luxury Villa Plot near Auroville Township",
    details:
      "3,000 sq.ft. Plot | 1,500 sq.ft. Built-up | 3 BHK Villa | Just 1 KM from Mango Hill Resort",
    images: [property14, property15, property16],
    mainImage: property14,
  },
  "ariyankuppam-villas": {
    id: "ariyankuppam-villas",
    title: "Ariyankuppam Villas",
    heroTitle: "Ariyankuppam Villas",
    heroSubtitle: "Premium Luxury Villa near Ariyankuppam Church, Pondicherry",
    price: "₹95 Lakh",
    priceLabel: "Total",
    description: "Premium Luxury Villa near Ariyankuppam Church, Pondicherry",
    details:
      "1,200 sq.ft. Land | 1,000 sq.ft. Built-up | 2BHK Villa | Developed Locality",
    images: [property15, property16, property1],
    mainImage: property15,
  },
  "ariyankuppam-plots": {
    id: "ariyankuppam-plots",
    title: "Ariyankuppam Plots",
    heroTitle: "Ariyankuppam Plots",
    heroSubtitle:
      "Premium Residential Plot Near Ariyankuppam Church, Pondicherry",
    price: "₹45 Lakh",
    priceLabel: "Total",
    description:
      "Premium Residential Plot Near Ariyankuppam Church, Pondicherry",
    details: "1,200 sq.ft. Plot | ₹3,750 per sq.ft. | Developed Locality",
    images: [property16, property1, property2],
    mainImage: property16,
  },
};

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
    properties[propertyId as keyof typeof properties] ||
    properties["auroville-lakeview"];

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
  const similarProperties = Object.values(properties).filter(
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
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          height: "1000px",
          backgroundImage: `url(${currentProperty.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>

      {/* Property Details and Form */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left: Property Details */}
            <div className="col-lg-8">
              <h2 className="h4 fw-bold mb-3">{currentProperty.title}</h2>
              <p className="text-muted mb-3">{currentProperty.description}</p>
              <p
                className="text-muted h6 mb-2"
                style={{ color: "var(--gold-color)" }}
              >
                {currentProperty.price}{" "}
                {currentProperty.priceLabel.toLowerCase()}
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
              <div className="position-relative mb-4">
                <img
                  src={currentProperty.images[currentImageIndex]}
                  alt={`Property view ${currentImageIndex + 1}`}
                  className="img-fluid rounded w-100"
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    // backgroundColor: "#f8f9fa", // light gray background fill
                  }}
                />

                <button
                  onClick={prevImage}
                  className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2"
                  style={{ width: "40px", height: "40px" }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-2"
                  style={{ width: "40px", height: "40px" }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div
                className="mb-4 rounded overflow-hidden"
                style={{
                  width: "100%",
                  height: "500px", // or whatever you prefer
                }}
              >
                <video
                  src={property}
                  className="w-100 h-80"
                  style={{
                    objectFit: "cover", // fills area, crops a little
                  }}
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
                  Lake, nestled just minutes from SBI Kullapalayam Junction.
                  This rare parcel of real estate offers a blank canvas for
                  discerning buyers looking to create something extraordinary—be
                  it a private estate, boutique development, or a serene
                  retreat.
                </p>

                <h3 className="h6 fw-bold mt-4 mb-3">Property Highlights</h3>
                <ul className="list-styled">
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">Prestigious Location:</strong>{" "}
                    Just off Auroville's scenic green belt, with easy access to
                    Matrimandir, local cafés, international schools, and the
                    East Coast Road.
                  </li>
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">
                      Versatile Usage Potential:
                    </strong>{" "}
                    Ideal for subdividing into 10,000 sq. ft. plots or for
                    building private villas, eco-farmhouses, yoga retreats, or a
                    boutique resort.
                  </li>
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">Breathtaking Setting:</strong>{" "}
                    Enjoy unobstructed views of lush greenery, peaceful
                    surroundings, and the lake breeze—perfect for luxury living
                    or high-end hospitality ventures.
                  </li>
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">
                      Developer-Friendly Parcel:
                    </strong>{" "}
                    Flat terrain, road-facing access, and well-connected
                    infrastructure make this plot ready for immediate planning
                    and execution.
                  </li>
                </ul>

                <h3 className="h6 fw-bold mt-4 mb-3">Investment Insights</h3>
                <ul className="list-styled">
                  <li className="mb-2 text-muted">High Appreciation Zone</li>
                  <li className="mb-2 text-muted">
                    Proximity to Coastal Tourism Belt
                  </li>
                  <li className="mb-2 text-muted">
                    Ideal for NRI Investment, Wellness Resorts & Green Living
                    Concepts
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="col-lg-4">
              <div
                className="card border-0 shadow-sm sticky-top"
                style={{ top: "20px" }}
              >
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-4">Enquire Sadhisha</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Your name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Your email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Your message (optional)
                      </label>
                      <textarea
                        className="form-control text-muted"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={6}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark w-100 py-2 fw-semibold"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Pondicherry */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6">
              <img
                src={gandhi}
                alt="Pondicherry landmark"
                className="img-fluid rounded shadow-lg"
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="h3 fw-bold mb-4">About pondicherry</h2>
              <p className="text-muted">
                Pondicherry—often called the "French Riviera of the East"—is a
                serene coastal town that beautifully blends colonial charm with
                contemporary living. Known for its clean beaches, spiritual
                centers like Auroville, vibrant cafés, and heritage
                architecture, Pondicherry offers a lifestyle that balances
                peace, culture, and accessibility. With a unique blend of
                tradition and modernity, it remains one of South India's most
                desirable destinations for both living and tourism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Investment */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6">
              <h2 className="h3 fw-bold mb-4">
                Real Estate Investment in Pondicherry
              </h2>
              <p className="text-muted">
                Pondicherry is fast emerging as a prime destination for real
                estate investment in South India. With growing demand for
                eco-living, vacation homes, and plotted development near
                Auroville and along the East Coast Road (ECR), property values
                continue to appreciate steadily. Its proximity to Chennai,
                strong tourism appeal, and increasing infrastructure make it an
                ideal choice for long-term investors, NRI buyers, and developers
                seeking high-value coastal opportunities.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={growth}
                alt="Investment growth"
                className="img-fluid rounded shadow-lg"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
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
                      className={`transition-transform ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
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
      </section>

      {/* Similar Listings */}
      <section className="py-5">
        <div className="container">
          <h2 className="h2 fw-bold text-center mb-5">
            Similar Listings recommended by Sadhisha
          </h2>
          <div className="row g-4">
            {similarProperties.map((property) => (
              <div key={property.id} className="col-md-4">
                <Link
                  to={`/property-detail?id=${property.id}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 border-0 shadow-sm overflow-hidden">
                    <img
                      src={property.mainImage}
                      alt={property.title}
                      className="card-img-top"
                      style={{ height: "280px", objectFit: "cover" }}
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
