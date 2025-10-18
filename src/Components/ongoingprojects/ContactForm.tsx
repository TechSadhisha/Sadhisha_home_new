import { useState } from "react";
import { toast } from "sonner";
import contactImage from "../../assets/images/ongoingprojects/contact.jpg";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:
      "I am interested in receiving more information about this property. Thank you",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Success message
    toast.success("Thank you! We'll contact you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message:
        "I am interested in receiving more information about this property. Thank you",
    });
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      const section = document.getElementById("contact");
      if (section) {
        // Wait a short moment for the page to fully render
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }

      // 🧹 Clear the scroll state so it doesn’t persist on reload
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <section
      id="contact"
      className="py-5 contact-section"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h4 fw-bold mb-3">Enquire Sadhisha</h2>
          <p className="lead text-muted">
            Get in touch with our land advisors today to schedule a private site
            visit or request layout options.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white rounded shadow-sm"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Your name
                </label>
                <input
                  id="name"
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
                <label htmlFor="email" className="form-label fw-semibold">
                  Your email
                </label>
                <input
                  id="email"
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
                <label htmlFor="phone" className="form-label fw-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-semibold">
                  Your message (optional)
                </label>
                <textarea
                  id="message"
                  className="form-control text-muted"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={contactImage}
              alt="Business handshake"
              className="img-fluid h-100 w-100 rounded shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
