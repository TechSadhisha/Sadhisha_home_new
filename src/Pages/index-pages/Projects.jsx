import { useEffect, useState } from "react";
import "../../styles/pages/index-pages/projects.css";
import projectsData from "../../assets/data/projectsData";
import { Page } from "../../layouts/Page";
import ProjectsMapContainer from "../../Components/index-pages/ProjectsMapContainer";
import { Section } from "../../layouts/Section";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const { propertyPortfolio } = projectsData;
  const [filter, setFilter] = useState("All");
  const [hoveredProperty, setHoveredProperty] = useState(null); // ✅ added

  const filters = ["All", "residency", "commercial", "hospitality"];

  const filteredProjects =
    filter === "All"
      ? propertyPortfolio
      : propertyPortfolio.filter(
          (item) => item.type.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div>
      <Page>
        <div className=" p-2">
          {/* Filter Row */}
          <div className="d-flex justify-content-start gap-2 mb-4 flex-wrap">
            {filters.map((item) => (
              <button
                key={item}
                className={`filter-btn btn btn-sm ${
                  filter === item ? "btn-dark" : "btn-outline-secondary"
                }`}
                onClick={() => setFilter(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <hr className="mb-md-5 mb-3" />

          {/* Properties Grid + Map */}
          <div className="container-fluid">
            <div className="row">
              {/* LEFT: Map (on top for small screens) */}
              <div className="col-12 col-md-6 p-0 order-1 order-md-1">
                <ProjectsMapContainer
                  properties={filteredProjects}
                  hovered={hoveredProperty}
                />
              </div>

              {/* RIGHT: Property List (below on small screens, right on large screens) */}
              <div className="col-12 col-md-6 p-3 order-2 order-md-2">
                <div className="row justify-content-start">
                  {filteredProjects.map((property) => (
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      key={property.id}
                    >
                      <Link
                        to={`/projects/${property.slug}`}
                        className="text-decoration-none"
                      >
                        <div
                          className="card h-100 shadow-sm border-0"
                          onMouseEnter={() => setHoveredProperty(property)}
                          onMouseLeave={() => setHoveredProperty(null)}
                        >
                          <div className="position-relative">
                            <img loading="lazy"
                              src={property.images[0]}
                              className="card-img-top"
                              alt={property.name}
                            />
                            {(property.type === "for rent" ||
                              property.type === "for sale") && (
                              <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                                {property.type.toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="card-body">
                            <h6 className="subTitleGreen fs-6 text-start">
                              {property.name}
                            </h6>
                            <p className="paraBlack mb-0 text-start">
                              {property.area}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Projects;
