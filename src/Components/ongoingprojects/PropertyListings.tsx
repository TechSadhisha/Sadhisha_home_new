import { Link } from "react-router-dom";
import property1 from "../../assets/images/ongoingprojects/property1.jpg";
import property2 from "../../assets/images/ongoingprojects/property2.jpg";

const PropertyListings = () => {
  const properties = [
    {
      id: "auroville-lakeview",
      image: property1,
      title: "Auroville Lakeview Land",
      description: "Prime Development Land near SBI Kullapalayam Junction",
      price: "₹2,500 per sq. ft.",
      details: "1.25 Acres | 54,450 sq. ft. | Subdividable into 10,000 sq. ft. plots | Auroville"
    },
    {
      id: "ecr-beachfront",
      image: property2,
      title: "ECR Beachfront Enclave",
      description: "Prime Coastal Land 100 meters from East Coast Road (ECR) Shoreline",
      price: "₹550 per sq. ft.",
      details: "1 Acre | 43,560 sq. ft. | Subdividable into 10,000 sq. ft. plots | near Auroville"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Pondicherry Real Estate: Premium Listings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {properties.map((property) => (
            <Link to={`/property-detail?id=${property.id}`} key={property.id}>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                  <p className="text-muted-foreground mb-4">{property.description}</p>
                  <p className="text-2xl font-bold text-accent mb-2">{property.price}</p>
                  <p className="text-sm text-muted-foreground">{property.details}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
