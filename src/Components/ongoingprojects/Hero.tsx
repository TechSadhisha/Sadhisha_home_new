import { Phone } from "lucide-react";
// import heroImage from "@/assets/hero-bg.jpg";
// import Header from "@/components/Header";

const Hero = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="relative min-h-screen flex flex-col">
        {/* Hero Content */}
        <div 
          className="flex-1 flex items-center justify-center bg-cover bg-center relative"
          // style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Premium Lands in Pondicherry
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Build Your Dream. Invest in Growth.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg rounded-md font-medium transition-colors">
              Explore Properties
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919585230000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <Phone className="w-8 h-8" />
      </a>
    </>
  );
};

export default Hero;
