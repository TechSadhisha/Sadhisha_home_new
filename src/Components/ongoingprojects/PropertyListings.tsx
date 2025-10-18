import { Link } from "react-router-dom";
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

const PropertyListings = () => {
  const properties = [
    {
      id: "auroville-lakeview",
      image: property1,
      title: "Auroville Lakeview Land",
      description: "Prime Development Land near SBI Kuilapalayam Junction",
      price: "₹2,500 per sq. ft.",
      details:
        "1.25 Acres | 54,450 sq. ft. | Subdividable into 10,000 sq. ft. plots | Auroville",
    },
    {
      id: "ecr-beachfront-enclave",
      image: property2,
      title: "ECR Beachfront Enclave",
      description:
        "Prime Coastal Land 100 meters from East Coast Road (ECR) Shoreline",
      price: "₹550 per sq. ft.",
      details:
        "1 Acre | 43,560 sq. ft. | Subdividable into 10,000 sq. ft. plots | near Auroville",
    },
    {
      id: "auroville-coastal-grove",
      image: property3,
      title: "Auroville Coastal Grove",
      description: "Villas Near ECR & Aurolec",
      price: "Starting ₹2.25 Cr",
      details:
        "85 Cents | 37,000 sq. ft | Subdividable into 2,500 sq. ft. plots",
    },
    {
      id: "ecr-coconut-grove",
      image: property4,
      title: "ECR Coconut Grove",
      description: "Development Land Near Wooden Resort – Just 20m Off ECR",
      price: "₹2.5 Crores per Acre",
      details:
        "2.5 Acres | 1,08,900 sq. ft. | Subdividable into 10,000 sq. ft. plots",
    },
    {
      id: "ecr-anumanthai-haven",
      image: property5,
      title: "ECR Anumanthai Haven",
      description: "Premium Coconut Land – 1 km from Anumanthai Toll Gate",
      price: "₹2.5 Crores per Acre",
      details:
        "1.1 Acres | Approx. 47,916 sq. ft | Subdividable into 10,000 sq. ft. plots",
    },
    {
      id: "marakanam-meadows",
      image: property6,
      title: "Marakanam Meadows",
      description: "Prime Development Land – 1 km from Marakanam (ECR)",
      price: "₹1.5 Crores per Acre",
      details:
        "34 Acres | Approx. 14,80,000+ sq. ft. | Suitable for Township Projects",
    },
    {
      id: "pims-enclave",
      image: property7,
      title: "PIMS Enclave",
      description:
        "Prime Development Land 1 km from ECR, Close to PIMS Hospital",
      price: "₹550 per sq. ft.",
      details:
        "1.5 Acres | Approx. 65,340 sq. ft. | Subdividable into 10,000 sq. ft. plots",
    },
    {
      id: "auroville-coastal-grove-apartments",
      image: property8,
      title: "Auroville Coastal Grove",
      description: "Studio Apartments Near ECR & Aurolec",
      price: "Starting ₹55 Lakhs",
      details:
        "85 Cents | 37,000 sq. ft | Subdividable into 2,500 sq. ft. plots",
    },
    {
      id: "chinna-kottakuppam-villa-plots",
      image: property9,
      title: "Chinna Kottakuppam Villa Plots",
      description:
        "Premium Residential Villa Plots Near Kottakuppam, Pondicherry",
      price: "₹95 Lakhs",
      details: "2,500 sq.ft. Land | 1,000 sq.ft. Villa | Chinna Kottakuppam",
    },
    {
      id: "chinna-kottakuppam-plots",
      image: property10,
      title: "Chinna Kottakuppam Plots",
      description: "Premium Residential Plots Near Kottakuppam, Pondicherry",
      price: "₹45 Lakhs",
      details: "2,500 sq.ft. Land | ₹1,700 per sq.ft. | Chinna Kottakuppam",
    },
    {
      id: "sandai-pudukuppam-plot",
      image: property11,
      title: "Sandai Pudukuppam Plot",
      description: "Prime Land Parcel at Vanur",
      price: "₹500 per sq. ft.",
      details:
        "5,750 sq.ft. | Total Price: ₹30 Lakhs | Individual Plot near Puducherry",
    },
    {
      id: "arumbarthapuram-apartment",
      image: property12,
      title: "Arumbarthapuram Apartment",
      description:
        "3 BHK Residential Apartment at Prime Location in Pondicherry",
      price: "₹90 Lakhs",
      details:
        "1,450 sq.ft. | Spacious 3 BHK | Near AG Padhmavathi Hospital, Arumbarthapuram",
    },
    {
      id: "bommayapalayam-buddha-garden-plot",
      image: property13,
      title: "Bommayapalayam Buddha Garden Plot",
      description: "Premium Residential Plot near Auroville Township",
      price: "₹1 Crore",
      details:
        "3,000 sq.ft. Plot | Just 1 KM from Mango Hill Resort | 500 M from Aurolec",
    },
    {
      id: "bommayapalayam-buddha-garden-villa",
      image: property14,
      title: "Bommayapalayam Buddha Garden Villa",
      description: "Premium Luxury Villa Plot near Auroville Township",
      price: "₹2.65 Crores",
      details:
        "3,000 sq.ft. Plot | 1,500 sq.ft. Built-up | 3 BHK Villa | Just 1 KM from Mango Hill Resort",
    },
    {
      id: "ariyankuppam-villas",
      image: property15,
      title: "Ariyankuppam Villas",
      description: "Premium Luxury Villa near Ariyankuppam Church, Pondicherry",
      price: "₹95 Lakhs",
      details:
        "1,200 sq.ft. Land | 1,000 sq.ft. Built-up | 2BHK Villa | Developed Locality",
    },
    {
      id: "ariyankuppam-plots",
      image: property16,
      title: "Ariyankuppam Plots",
      description:
        "Premium Residential Plot Near Ariyankuppam Church, Pondicherry",
      price: "₹45 Lakhs",
      details: "1,200 sq.ft. Plot | ₹3,750 per sq.ft. | Developed Locality",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container p-5">
        <h2 className="h3 fw-bold text-center mb-5">
          Pondicherry Real Estate: Premium Listings
        </h2>

        <div className="row g-4 justify-content-center">
          {properties.map((property) => (
            <div key={property.id} className="col-lg-6 col-md-6">
              <Link
                to={`/property-detail?id=${property.id}`}
                className="text-decoration-none"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="card-img-top h-100"
                    style={{ height: "256px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold mb-2">{property.title}</h3>
                    <p className="text-muted mb-3">{property.description}</p>
                    <p
                      className="h6 fw-bold mb-2"
                      style={{ color: "var(--gold-color)" }}
                    >
                      {property.price}
                    </p>
                    <p className="small text-muted mb-0">{property.details}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
