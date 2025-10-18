import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I invested in a villa plot near ECR through Sadhisha in 2021. The appreciation has been phenomenal—and the legal clarity gave me peace of mind.",
      author: "Arun Venkatesh",
      role: "NRI Investor, Dubai",
      rating: 5,
      date: "1 Month Ago",
    },
    {
      quote:
        "Sadhisha Homes delivered exactly what they promised. The location near Auroville is perfect for my retirement home. Highly recommended!",
      author: "Priya Sharma",
      role: "Retired Teacher, Chennai",
      rating: 5,
      date: "2 Months Ago",
    },
    {
      quote:
        "Professional service from start to finish. The team helped us through every step of the documentation process. Very satisfied with our beachfront plot.",
      author: "Rajesh Kumar",
      role: "Business Owner, Bangalore",
      rating: 5,
      date: "3 Months Ago",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold mb-3">What our Clients Say?</h2>
          <p className="lead text-muted">Real Stories. Real Trust.</p>
          <p className="text-muted">
            At Sadhisha, our clients aren't just buyers—they're part of a
            growing family built on trust, transparency, and timeless value.
            Here's what some of them have to say:
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="position-relative">
              <div className="">
                <div className="card-body p-5">
                  <div className="text-center">
                    <p className="fs-5 fst-italic text-muted mb-4">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="d-flex justify-content-center gap-1 mb-3">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={24}
                            fill="#f59e0b"
                            color="#f59e0b"
                          />
                        )
                      )}
                    </div>
                    <p className="small text-muted mb-3">
                      {testimonials[currentIndex].date}
                    </p>
                    <p className="h5 fw-bold mb-1">
                      — {testimonials[currentIndex].author}
                    </p>
                    <p className="text-muted">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>

                  <div className="d-flex justify-content-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm rounded-circle p-0 ${
                          index === currentIndex ? "bg-warning" : "bg-secondary"
                        }`}
                        style={{ width: "8px", height: "8px", border: "none" }}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-secondary rounded-circle position-absolute top-50 start-0 translate-middle-y"
                style={{
                  width: "48px",
                  height: "48px",
                  transform: "translate(-50%, -50%)", 
                }}
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                className="btn btn-outline-secondary rounded-circle position-absolute top-50 end-0 translate-middle-y"
                style={{
                  width: "48px",
                  height: "48px",
                  transform: "translate(50%, -50%)", 
                }}
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
