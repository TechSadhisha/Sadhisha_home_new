import { Link } from "react-router-dom";
import { properties} from "../../assets/data/properties";

const PropertyListings = () => {


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
