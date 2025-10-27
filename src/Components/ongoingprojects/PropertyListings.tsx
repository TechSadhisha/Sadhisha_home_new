import { Link } from "react-router-dom";
import property1 from "../../assets/images/ongoingprojects/property1.jpg";
import property2 from "../../assets/images/ongoingprojects/property2.jpg";
import property3 from "../../assets/images/ongoingprojects/property3.jpg";
import property4 from "../../assets/images/ongoingprojects/property4.jpg";
import property5 from "../../assets/images/ongoingprojects/property5.jpg";
import property6 from "../../assets/images/ongoingprojects/property6.jpg";
import property7 from "../../assets/images/ongoingprojects/property7.jpg";
import property8 from "../../assets/images/ongoingprojects/property8.jpg";
import property9 from "../../assets/images/ongoingprojects/property9.jpg";
import property10 from "../../assets/images/ongoingprojects/property10.jpg";
import property11 from "../../assets/images/ongoingprojects/property11.jpg";
import property12 from "../../assets/images/ongoingprojects/property12.jpg";
import property13 from "../../assets/images/ongoingprojects/property13.jpg";
import property14 from "../../assets/images/ongoingprojects/property14.jpg";
import property15 from "../../assets/images/ongoingprojects/property15.jpg";
import property16 from "../../assets/images/ongoingprojects/property16.jpg";
import property17 from "../../assets/images/ongoingprojects/property17.jpg";
import property18 from "../../assets/images/ongoingprojects/property18.jpg";
import property19 from "../../assets/images/ongoingprojects/property19.jpg";
import property20 from "../../assets/images/ongoingprojects/property20.jpg";

import property21 from "../../assets/images/ongoingprojects/property21.webp";
import property22 from "../../assets/images/ongoingprojects/property22.webp";
import property23 from "../../assets/images/ongoingprojects/property23.webp";
import property24 from "../../assets/images/ongoingprojects/property24.webp";
import property25 from "../../assets/images/ongoingprojects/property25.webp";
import property26 from "../../assets/images/ongoingprojects/property26.webp";
import property27 from "../../assets/images/ongoingprojects/property27.webp";
import property28 from "../../assets/images/ongoingprojects/property28.webp";
import property29 from "../../assets/images/ongoingprojects/property29.webp";
import property30 from "../../assets/images/ongoingprojects/property30.webp";
import property31 from "../../assets/images/ongoingprojects/property31.webp";
import property32 from "../../assets/images/ongoingprojects/property32.webp";
import property33 from "../../assets/images/ongoingprojects/property33.webp";
import property34 from "../../assets/images/ongoingprojects/property34.webp";
import property35 from "../../assets/images/ongoingprojects/property35.webp";
import property36 from "../../assets/images/ongoingprojects/property36.webp";

const PropertyListings = () => {
  const properties = [
    {
      id: "apartments-in-pondicherry",
      image: property1,
      title: "Apartments in Pondicherry",
      description:
        "Modern premium apartments located in the heart of Pondicherry with luxury amenities and sea breeze views.",
      price: "Starting ₹75 Lakhs",
      details:
        "2 & 3 BHK | 1,200–1,800 sq.ft. | Near White Town | Gated Community with Gym & Pool",
    },
    {
      id: "club-house",
      image: property2,
      title: "Club House",
      description:
        "A lifestyle hub featuring modern architecture, sports zones, and leisure facilities designed for community gatherings.",
      price: "₹4.5 Crores",
      details:
        "10,000 sq.ft. Built-up | Banquet, Indoor Games, Café | Located near Auroville Township",
    },
    {
      id: "convention-center",
      image: property3,
      title: "Convention Center",
      description:
        "A state-of-the-art facility designed for corporate events, exhibitions, and weddings with ample parking and modern interiors.",
      price: "₹12 Crores",
      details:
        "30,000 sq.ft. | Seating Capacity 1,500 | Near ECR Highway | Fully Air-conditioned",
    },
    {
      id: "education-institution",
      image: property4,
      title: "Education Institution",
      description:
        "Spacious academic campus with modern classrooms, labs, and green surroundings — ideal for schools or colleges.",
      price: "₹8 Crores",
      details:
        "4 Acres | 1,74,000 sq.ft. | 2 Academic Blocks + Playground | Located in Vanur",
    },
    {
      id: "financial-district",
      image: property5,
      title: "Financial District",
      description:
        "Premium commercial land designated for banks, offices, and fintech startups in a rapidly developing zone.",
      price: "₹3.5 Crores per Acre",
      details:
        "5 Acres | Commercial Zone | Wide 60ft Road Access | Near Pondicherry Airport",
    },
    {
      id: "high-rise-apartment",
      image: property6,
      title: "High Rise Apartment",
      description:
        "Luxury skyscraper residences offering panoramic city and sea views with premium lifestyle facilities.",
      price: "Starting ₹1.5 Crores",
      details:
        "3 & 4 BHK | 1,800–2,800 sq.ft. | 20 Floors | Sky Lounge, Infinity Pool, Gym",
    },
    {
      id: "industrial-park",
      image: property7,
      title: "Industrial Park",
      description:
        "Fully developed industrial layout with road connectivity, power supply, and drainage — ideal for factories and logistics.",
      price: "₹2.2 Crores per Acre",
      details:
        "15 Acres | Ready Infrastructure | Near Villupuram Highway | Zoned for Manufacturing",
    },
    {
      id: "it-world",
      image: property8,
      title: "IT World",
      description:
        "A cutting-edge tech park for IT and startups featuring smart infrastructure and business-friendly facilities.",
      price: "₹7 Crores per Acre",
      details:
        "10 Acres | 3,00,000 sq.ft. Development Potential | Fiber Optic Connectivity | Near Chennai-Pondy Highway",
    },
    {
      id: "luxury-villas",
      image: property9,
      title: "Luxury Villas",
      description:
        "Exclusive collection of modern villas with private pools and landscaped gardens, designed for elite living.",
      price: "Starting ₹2.5 Crores",
      details:
        "4 BHK | 3,000 sq.ft. | 4,000 sq.ft. Plot | Near Auroville Beach Road",
    },
    {
      id: "multiplex-theatre",
      image: property10,
      title: "Multiplex Theatre",
      description:
        "Premium entertainment complex featuring multiple screens, food court, and advanced projection systems.",
      price: "₹15 Crores",
      details:
        "25,000 sq.ft. | 5 Screens | Seating Capacity 1,200 | Located on ECR",
    },
    {
      id: "office-space",
      image: property11,
      title: "Office Space",
      description:
        "Modern workspace complex ideal for corporate offices and co-working setups with flexible layouts.",
      price: "₹1.2 Crores per Floor",
      details:
        "4 Floors | 2,500 sq.ft. Each | Lift & Power Backup | Near Pondicherry City Center",
    },
    {
      id: "recreational-center",
      image: property12,
      title: "Recreational Center",
      description:
        "A health and fitness retreat featuring gyms, yoga halls, and activity zones for families and corporates.",
      price: "₹3 Crores",
      details:
        "8,000 sq.ft. Built-up | Swimming Pool | Multi-purpose Hall | Near Auroville",
    },
    {
      id: "resort-in-goa",
      image: property13,
      title: "Resort in Goa",
      description:
        "Luxury beachfront resort property in North Goa offering villas, cottages, and a private beach zone.",
      price: "₹18 Crores",
      details:
        "2 Acres | 25 Keys | Infinity Pool | 300 Meters from Beach | North Goa",
    },
    {
      id: "row-housing",
      image: property14,
      title: "Row Housing",
      description:
        "Stylish row houses designed for urban family living with community parks and easy city access.",
      price: "₹95 Lakhs",
      details:
        "2 & 3 BHK | 1,200–1,600 sq.ft. | 50 Units | Near Ariyankuppam, Pondicherry",
    },
    {
      id: "shopping-mall",
      image: property15,
      title: "Shopping Mall",
      description:
        "A large commercial complex with retail spaces, food courts, and entertainment zones for high footfall traffic.",
      price: "₹25 Crores",
      details:
        "1,00,000 sq.ft. | 4 Floors | Parking for 150 Cars | On East Coast Road (ECR)",
    },
    {
      id: "spiritual-retreat",
      image: property16,
      title: "Spiritual Retreat",
      description:
        "A serene wellness center surrounded by nature, ideal for meditation camps and holistic living.",
      price: "₹6 Crores",
      details:
        "3 Acres | 15 Cottages | Meditation Hall & Organic Garden | Near Auroville Forest Zone",
    },
    {
      id: "theme-park",
      image: property17,
      title: "Theme Park",
      description:
        "Adventure and water park designed for family entertainment with attractions, rides, and restaurants.",
      price: "₹30 Crores",
      details:
        "12 Acres | 50,000 sq.ft. Built-up | 25 Rides | Near Chennai–Pondicherry Highway",
    },
    {
      id: "urbanscape-township",
      image: property18,
      title: "Urbanscape Township",
      description:
        "Integrated township offering residential, commercial, and recreational zones with premium amenities.",
      price: "₹4.5 Crores per Acre",
      details:
        "50 Acres | Mixed-Use Zoning | 12m Road Network | Near Puducherry–Tindivanam Highway",
    },
    {
      id: "yoga-retreat",
      image: property19,
      title: "Yoga Retreat",
      description:
        "An eco-friendly yoga sanctuary amidst lush greenery offering calm, rejuvenating stays and workshops.",
      price: "₹3.8 Crores",
      details:
        "2 Acres | 10 Cottages | Yoga Hall | Near Auroville Forest | Organic Café",
    },
    {
      id: "multispeciality-hospital-bangalore",
      image: property20,
      title: "Multispeciality Hospital in Bangalore",
      description:
        "A cutting-edge medical complex equipped with modern facilities and advanced healthcare technology.",
      price: "₹60 Crores",
      details:
        "2 Acres | 1,50,000 sq.ft. | 150 Beds | Located in Bangalore Tech Corridor",
    },
    {
      id: "auroville-lakeview",
      image: property21,
      title: "Auroville Lakeview Land",
      description: "Prime Development Land near SBI Kuilapalayam Junction",
      price: "₹2,500 per sq. ft.",
      details:
        "1.25 Acres | 54,450 sq. ft. | Subdividable into 10,000 sq. ft. plots | Auroville",
    },
    {
      id: "ecr-beachfront-enclave",
      image: property22,
      title: "ECR Beachfront Enclave",
      description:
        "Prime Coastal Land 100 meters from East Coast Road (ECR) Shoreline",
      price: "₹550 per sq. ft.",
      details:
        "1 Acre | 43,560 sq. ft. | Subdividable into 10,000 sq. ft. plots | near Auroville",
    },
    {
      id: "auroville-coastal-grove",
      image: property23,
      title: "Auroville Coastal Grove",
      description: "Villas Near ECR & Aurolec",
      price: "Starting ₹2.25 Cr",
      details:
        "85 Cents | 37,000 sq. ft | Subdividable into 2,500 sq. ft. plots",
    },
    {
      id: "ecr-coconut-grove",
      image: property24,
      title: "ECR Coconut Grove",
      description: "Development Land Near Wooden Resort – Just 20m Off ECR",
      price: "₹2.5 Crores per Acre",
      details:
        "2.5 Acres | 1,08,900 sq. ft. | Subdividable into 10,000 sq. ft. plots",
    },
    {
      id: "ecr-anumanthai-haven",
      image: property25,
      title: "ECR Anumanthai Haven",
      description: "Premium Coconut Land – 1 km from Anumanthai Toll Gate",
      price: "₹2.5 Crores per Acre",
      details:
        "1.1 Acres | Approx. 47,916 sq. ft | Subdividable into 10,000 sq. ft. plots",
    },
    {
      id: "marakanam-meadows",
      image: property26,
      title: "Marakanam Meadows",
      description: "Prime Development Land – 1 km from Marakanam (ECR)",
      price: "₹1.5 Crores per Acre",
      details:
        "34 Acres | Approx. 14,80,000+ sq. ft. | Suitable for Township Projects",
    },
    {
      id: "pims-enclave",
      image: property27,
      title: "PIMS Enclave",
      description:
        "Prime Development Land 1 km from ECR, Close to PIMS Hospital",
      price: "₹550 per sq. ft.",
      details:
        "1.5 Acres | Approx. 65,340 sq. ft. | Subdividable into 10,000 sq. ft. plots",
    },
    {
      id: "auroville-coastal-grove-apartments",
      image: property28,
      title: "Auroville Coastal Grove",
      description: "Studio Apartments Near ECR & Aurolec",
      price: "Starting ₹55 Lakhs",
      details:
        "85 Cents | 37,000 sq. ft | Subdividable into 2,500 sq. ft. plots",
    },
    {
      id: "chinna-kottakuppam-villa-plots",
      image: property29,
      title: "Chinna Kottakuppam Villa Plots",
      description:
        "Premium Residential Villa Plots Near Kottakuppam, Pondicherry",
      price: "₹95 Lakhs",
      details: "2,500 sq.ft. Land | 1,000 sq.ft. Villa | Chinna Kottakuppam",
    },
    {
      id: "chinna-kottakuppam-plots",
      image: property30,
      title: "Chinna Kottakuppam Plots",
      description: "Premium Residential Plots Near Kottakuppam, Pondicherry",
      price: "₹45 Lakhs",
      details: "2,500 sq.ft. Land | ₹1,700 per sq.ft. | Chinna Kottakuppam",
    },
    {
      id: "sandai-pudukuppam-plot",
      image: property31,
      title: "Sandai Pudukuppam Plot",
      description: "Prime Land Parcel at Vanur",
      price: "₹500 per sq. ft.",
      details:
        "5,750 sq.ft. | Total Price: ₹30 Lakhs | Individual Plot near Puducherry",
    },
    {
      id: "arumbarthapuram-apartment",
      image: property32,
      title: "Arumbarthapuram Apartment",
      description:
        "3 BHK Residential Apartment at Prime Location in Pondicherry",
      price: "₹90 Lakhs",
      details:
        "1,450 sq.ft. | Spacious 3 BHK | Near AG Padhmavathi Hospital, Arumbarthapuram",
    },
    {
      id: "bommayapalayam-buddha-garden-plot",
      image: property33,
      title: "Bommayapalayam Buddha Garden Plot",
      description: "Premium Residential Plot near Auroville Township",
      price: "₹1 Crore",
      details:
        "3,000 sq.ft. Plot | Just 1 KM from Mango Hill Resort | 500 M from Aurolec",
    },
    {
      id: "bommayapalayam-buddha-garden-villa",
      image: property34,
      title: "Bommayapalayam Buddha Garden Villa",
      description: "Premium Luxury Villa Plot near Auroville Township",
      price: "₹2.65 Crores",
      details:
        "3,000 sq.ft. Plot | 1,500 sq.ft. Built-up | 3 BHK Villa | Just 1 KM from Mango Hill Resort",
    },
    {
      id: "ariyankuppam-villas",
      image: property35,
      title: "Ariyankuppam Villas",
      description: "Premium Luxury Villa near Ariyankuppam Church, Pondicherry",
      price: "₹95 Lakhs",
      details:
        "1,200 sq.ft. Land | 1,000 sq.ft. Built-up | 2BHK Villa | Developed Locality",
    },
    {
      id: "ariyankuppam-plots",
      image: property36,
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
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h2 className="h3 fw-bold">
              Auro Architects <br />
              <small className="text-muted">Design and Build</small>
            </h2>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="h3 fw-bold">
              Sadhisha Reality <br />
              <small className="text-muted">Promoters and Builders</small>
            </h2>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="h3 fw-bold">
              Contract <br />
              <small className="text-muted">Joint Ventures</small>
            </h2>
          </div>
        </div>

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
