import React, { useEffect } from 'react';
import { Section } from '../../layouts/Section';
import '../../styles/pages/affilate-pages/sadhisha-homes.css';
import sadhishaHomesData from '../../assets/data/sadhishaHomesData';
import GeneralEnquiryForm from '../../Components/Forms/GeneralEnquiryForm';
import SadhishaHomesLogo from '../../assets/images/common/SADHISHA LOGO 1/1.webp';
import ContactDetails from '../../Components/index-pages/ContactDetails';

const SadhishaAi = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const { developmentFeaturesData } = sadhishaHomesData;

  return (
    <div>
      {/* Header Section */}
      <div className="bgWhite">
        <Section>
          <div className="md-md-0">
            <div className="flex-row-center mb-3">
              <img
                src={SadhishaHomesLogo}
                width={130}
                alt="SadhishaHomesLogo"
                style={{ borderRadius: '50%' }}
              />
            </div>

            <div className="flex-row-center row mb-md-2 mb-2">
              <h4 className="subTitleGreen fs-3 text-center">Sadhisha Ai</h4>
              <p className="subParaTextGreen text-uppercase mb-md-4 mb-2 text-center">
                Intelligent Design • Sustainable Living • Smart Spaces
              </p>
            </div>

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="AI-Optimized Home Design"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80"
                    alt="Smart Construction Technology"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
                    alt="AI-Powered Interior Spaces"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row flex-row-center pt-md-5 pt-3">
            <p className="paraBlack col-md-10 text-md-center px-4 px-md-0">
              <strong>Sadhisha Ai</strong> is our next-generation initiative that blends human creativity with artificial intelligence to build future-ready spaces. 
              From AI-optimized layouts and smart material usage to automated climate control and data-driven architecture, 
              we ensure each structure is efficient, sustainable, and truly intelligent.
            </p>
          </div>
        </Section>
      </div>

      {/* Developments Section */}
      <div className="bgGreen">
        <Section>
          <div className="mb-md-4 mb-5 row flex-row-center">
            <h2 className="secTitleWhite mb-md-3 mb-2 text-center">AI-Driven Developments</h2>
            <p className="subParaTextWhite text-uppercase mb-md-4 mb-2 text-center">
              Architecture Empowered by Artificial Intelligence
            </p>
          </div>

          <div className="row justify-content-center">
            {developmentFeaturesData.map((point, index) => (
              <div key={index} className="col-md-3 d-flex align-items-start justify-content-center">
                <div className="rounded-2 py-md-5 px-md-3 p-3 developmentFeaturesCard mb-md-4 mb-3">
                  <div className="d-flex justify-content-center mb-md-4 mb-3">
                    <img
                      className="p-3"
                      src={point.image}
                      width={120}
                      alt={point.title}
                      style={{ border: '1px solid var(--gold)', borderRadius: '50%' }}
                    />
                  </div>
                  <div className="service-body align-items-start d-flex row justify-content-center">
                    <h3 className="subTitleWhite mb-3 fs-5 text-center">{point.title}</h3>
                    <p className="paraWhite text-center small">
                      {point.description || "Smartly designed, AI-optimized and sustainable for modern living."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row flex-row-center pt-md-5 py-3">
            <p className="paraWhite col-md-10 text-center px-4 px-md-0">
              With over 24 years of experience, 250+ successful projects, and 10,000+ happy residents, 
              <strong> Sadhisha Homes </strong> now integrates cutting-edge AI tools to analyze design efficiency, 
              predict energy performance, and ensure eco-conscious construction—paving the way for smarter, greener living.
            </p>
          </div>
        </Section>
      </div>

      {/* Contact Section */}
      <div className="bgWhite">
        <Section>
          <div className="row d-flex justify-content-center py-md-5 py-3">
            <div className="col-md-7">
              <ContactDetails />
            </div>

            <div className="col-md-5">
              <div className="pb-md-4 pb-2">
                <h2 className="secTitleGreen mb-md-3 text-md-start text-center">Enquire with Sadhisha Ai</h2>
                <p className="paraBlack col-md-10 text-md-start text-center">
                  Discover how AI can enhance your next home or commercial project.
                  Connect with us today—our experts will guide you every step of the way.
                </p>
              </div>
              <GeneralEnquiryForm />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default SadhishaAi;
