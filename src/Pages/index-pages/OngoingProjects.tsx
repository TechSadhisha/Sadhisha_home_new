import Hero from "../../Components/ongoingprojects/Hero";
import Features from "../../Components/ongoingprojects/Features";
import PropertyListings from "../../Components/ongoingprojects/PropertyListings";
import WhyInvest from "../../Components/ongoingprojects/WhyInvest";
import Testimonials from "../../Components/ongoingprojects/Testimonials";
import FAQ from "../../Components/ongoingprojects/FAQ";
import ContactForm from "../../Components/ongoingprojects/ContactForm";
import Footer from "../../Components/ongoingprojects/Footer";

const OngoingProjects = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <PropertyListings />
      <WhyInvest />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default OngoingProjects;
