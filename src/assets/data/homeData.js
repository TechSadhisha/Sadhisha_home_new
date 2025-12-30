import cloudinaryAssets from "../cloudinary_assets.json";

const AuroLogo =
  cloudinaryAssets["src/assets/images/common/AURO ARCHITECTS/1.webp"];
const SadhishaConstructionLogo =
  cloudinaryAssets["src/assets/images/common/SADHISHA CONSTRUCTION/1.webp"];
const SadhishaHomesLogo =
  cloudinaryAssets["src/assets/images/common/SADHISHA LOGO 1/1.webp"];

const logo =
  cloudinaryAssets["src/assets/images/common/sadhisha-half-logo.png"];

const pillar1 = cloudinaryAssets["src/assets/images/home/row-1-column-1.webp"];
const pillar2 = cloudinaryAssets["src/assets/images/home/row-1-column-2.webp"];
const pillar3 = cloudinaryAssets["src/assets/images/home/row-1-column-3.webp"];
const pillar4 = cloudinaryAssets["src/assets/images/home/row-1-column-4.webp"];

const Acquisition =
  cloudinaryAssets["src/assets/images/home/acquisattion.webp"];
const audit = cloudinaryAssets["src/assets/images/home/audit.webp"];
const clientRelation =
  cloudinaryAssets["src/assets/images/home/client-relation.webp"];
const construction =
  cloudinaryAssets["src/assets/images/home/construction.webp"];
const design = cloudinaryAssets["src/assets/images/home/design.webp"];
const development = cloudinaryAssets["src/assets/images/home/development.webp"];
const finance = cloudinaryAssets["src/assets/images/home/finance.webp"];
const legal = cloudinaryAssets["src/assets/images/home/legal.webp"];
const sales = cloudinaryAssets["src/assets/images/home/sales.webp"];
const marketing = cloudinaryAssets["src/assets/images/home/marketing.webp"];

const dataStats = [
  { label: "Years Experience", value: 30, suffix: "+" },
  { label: "Projects Executed", value: 300, suffix: "+" },
  { label: "Villas Designed", value: 3000, suffix: "+" },
  { label: "Plots Developed", value: 10000, suffix: "+" },
];

import { FaComments, FaDraftingCompass, FaTools, FaHome } from "react-icons/fa";

const serviceCategories = [
  {
    title: "Architectural Design",
    image: logo,
    services: [
      "Conceptual Design",
      "Design Development",
      "Interior Design",
      "Urban Planning",
    ],
  },
  {
    title: "Construction Technologies",
    image: logo,
    services: [
      "Building Information Modeling (BIM)",
      "Smart Building Technologies",
      "Construction Robotics",
      "Prefabrication and Modular Construction",
    ],
  },
  {
    title: "Project Management",
    image: logo,
    services: [
      "Pre-Construction Services",
      "Construction Management",
      "Post-Construction Services",
      "Sustainability Consulting",
    ],
  },
  {
    title: "Sustainable Solutions",
    image: logo,
    services: [
      "Green Building Design",
      "Energy-Efficient Systems",
      "Waste Reduction Strategies",
      "Water Conservation",
    ],
  },
  {
    title: "Renovation & Restoration",
    image: logo,
    services: [
      "Historic Preservation",
      "Modernization Projects",
      "Adaptive Reuse",
    ],
  },
  {
    title: "Consulting Services",
    image: logo,
    services: [
      "Feasibility Studies",
      "Design Consultation",
      "Construction Audits",
      "Regulatory Compliance",
    ],
  },
];

const sadhishaPromoters = [
  {
    title: "Real Estate Development",
    image: logo,
    services: [
      "Residential Projects",
      "Commercial Complexes",
      "Land Development",
      "Mixed-Use Projects",
    ],
  },
  {
    title: "Construction Management",
    image: logo,
    services: [
      "Project Scheduling",
      "Quality Control",
      "Cost Estimation",
      "Safety Supervision",
    ],
  },
  {
    title: "Property Marketing",
    image: logo,
    services: [
      "Sales Strategy",
      "Market Analysis",
      "Customer Relations",
      "Post-Sales Support",
    ],
  },
  {
    title: "Legal & Regulatory Services",
    image: logo,
    services: [
      "Title Verification",
      "Approval Coordination",
      "Contract Management",
      "Regulatory Compliance",
    ],
  },
  {
    title: "Financial Services",
    image: logo,
    services: [
      "Project Financing",
      "Investment Advisory",
      "Budget Control",
      "Tax Planning",
    ],
  },
  {
    title: "Customer Support",
    image: logo,
    services: [
      "After-Sales Assistance",
      "Property Maintenance",
      "Service Requests",
      "Client Retention",
    ],
  },
];

const auroArchitects = [
  {
    title: "Architectural Design",
    image: logo,
    services: [
      "Concept Design",
      "Design Development",
      "3D Visualization",
      "Urban Planning",
    ],
  },
  {
    title: "Sustainable Architecture",
    image: logo,
    services: [
      "Green Building Design",
      "Energy-Efficient Planning",
      "Material Optimization",
      "Water Conservation",
    ],
  },
  {
    title: "Interior Design",
    image: logo,
    services: [
      "Space Planning",
      "Furniture Design",
      "Lighting Design",
      "Color Coordination",
    ],
  },
  {
    title: "Urban Design",
    image: logo,
    services: [
      "Master Planning",
      "Landscape Integration",
      "Public Space Design",
      "Transportation Layout",
    ],
  },
  {
    title: "Building Technology",
    image: logo,
    services: [
      "BIM Coordination",
      "Smart Building Systems",
      "Construction Detailing",
      "Structural Collaboration",
    ],
  },
  {
    title: "Consulting & Compliance",
    image: logo,
    services: [
      "Design Reviews",
      "Code Compliance",
      "Feasibility Studies",
      "Sustainability Consulting",
    ],
  },
];

const sadhishaRapidConstruction = [
  {
    title: "Civil Construction",
    image: logo,
    services: [
      "Residential Projects",
      "Industrial Facilities",
      "Institutional Buildings",
      "Infrastructure Works",
    ],
  },
  {
    title: "Precast & Modular Systems",
    image: logo,
    services: [
      "Prefabricated Structures",
      "Steel Frameworks",
      "Panel Assembly",
      "On-Site Installation",
    ],
  },
  {
    title: "Project Execution",
    image: logo,
    services: [
      "Material Logistics",
      "Vendor Coordination",
      "Workforce Management",
      "Time Optimization",
    ],
  },
  {
    title: "Safety & Quality Control",
    image: logo,
    services: [
      "Safety Audits",
      "Quality Inspections",
      "Testing & Commissioning",
      "Compliance Reporting",
    ],
  },
  {
    title: "Sustainability Integration",
    image: logo,
    services: [
      "Eco Materials",
      "Waste Reduction",
      "Energy Optimization",
      "Environmental Compliance",
    ],
  },
  {
    title: "Post-Construction Services",
    image: logo,
    services: [
      "Maintenance Planning",
      "Warranty Support",
      "Facility Management",
      "Lifecycle Analysis",
    ],
  },
];

const sadhishaInteriors = [
  {
    title: "Residential Interiors",
    image: logo,
    services: [
      "Living Room Design",
      "Bedroom Concepts",
      "Kitchen Interiors",
      "Bathroom Styling",
    ],
  },
  {
    title: "Commercial Interiors",
    image: logo,
    services: [
      "Office Design",
      "Retail Outlets",
      "Hospitality Spaces",
      "Educational Facilities",
    ],
  },
  {
    title: "Design & Visualization",
    image: logo,
    services: [
      "3D Rendering",
      "Concept Development",
      "Furniture Layouts",
      "Color Schemes",
    ],
  },
  {
    title: "Turnkey Solutions",
    image: logo,
    services: [
      "Material Procurement",
      "Fabrication & Installation",
      "Project Supervision",
      "Quality Assurance",
    ],
  },
  {
    title: "Custom Fabrication",
    image: logo,
    services: [
      "Modular Furniture",
      "Woodwork & Joinery",
      "Soft Furnishings",
      "Decor Integration",
    ],
  },
  {
    title: "Maintenance & Renovation",
    image: logo,
    services: [
      "Interior Upgrades",
      "Repainting & Finishing",
      "Layout Modifications",
      "Furniture Restoration",
    ],
  },
];

const sadhishaAI = [
  {
    title: "AI-Powered Design",
    image: logo,
    services: [
      "Generative Architecture",
      "Parametric Modeling",
      "AI Space Planning",
      "Predictive Analytics",
    ],
  },
  {
    title: "Smart Construction Systems",
    image: logo,
    services: [
      "BIM Integration",
      "Predictive Maintenance",
      "AI Safety Monitoring",
      "Digital Twin Management",
    ],
  },
  {
    title: "Data Analytics",
    image: logo,
    services: [
      "Project Tracking",
      "Risk Forecasting",
      "Cost Analysis",
      "Performance Insights",
    ],
  },
  {
    title: "Automation Solutions",
    image: logo,
    services: [
      "Workflow Automation",
      "AI Chatbots",
      "Digital Assistants",
      "Smart Scheduling",
    ],
  },
  {
    title: "Research & Development",
    image: logo,
    services: [
      "Robotics Integration",
      "AR/VR Simulations",
      "Machine Learning Models",
      "AI Design Tools",
    ],
  },
  {
    title: "Innovation Consulting",
    image: logo,
    services: [
      "Tech Feasibility Studies",
      "AI Integration Planning",
      "Process Optimization",
      "Smart System Design",
    ],
  },
];

const sadhishaHospitality = [
  {
    title: "Hotel Development",
    image: logo,
    services: [
      "Concept Planning",
      "Design Coordination",
      "Construction Oversight",
      "Operational Setup",
    ],
  },
  {
    title: "Restaurant Design",
    image: logo,
    services: [
      "Theme Conceptualization",
      "Kitchen Planning",
      "Interior Design",
      "Brand Identity Integration",
    ],
  },
  {
    title: "Resort Projects",
    image: logo,
    services: [
      "Master Planning",
      "Landscape Design",
      "Villa Construction",
      "Amenity Planning",
    ],
  },
  {
    title: "Facility Management",
    image: logo,
    services: [
      "Maintenance Operations",
      "Energy Management",
      "Housekeeping Support",
      "Safety Compliance",
    ],
  },
  {
    title: "Event Spaces",
    image: logo,
    services: [
      "Venue Design",
      "Lighting & Acoustics",
      "Seating Layouts",
      "AV Integration",
    ],
  },
  {
    title: "Hospitality Consulting",
    image: logo,
    services: [
      "Market Research",
      "Brand Development",
      "Staff Training",
      "Revenue Optimization",
    ],
  },
];

export const pillars = [
  {
    title: "Innovation",
    description: `We embrace cutting-edge technologies and design thinking to deliver solutions that are creative, future-focused, and distinctly impactful.`,
    image: pillar1,
  },
  {
    title: "Sustainability",
    description: `We prioritize eco-friendly practices in every project, ensuring minimal environmental impact while promoting long-term resilience and responsible development.`,
    image: pillar2,
  },
  {
    title: "Integrity",
    description: `We build lasting relationships rooted in trust, transparency, and ethical conduct—upholding the highest standards in everything we do.`,
    image: pillar3,
  },
  {
    title: "Client-centricity",
    description: `Your vision is our mission. We work hand-in-hand with every client to bring their ideas to life through thoughtful collaboration and personalized service.`,
    image: pillar4,
  },
];

export const departments = [
  {
    title: "Acquisition",
    description: `We identify and secure strategic land in high-growth areas through thorough due diligence and forward-thinking planning.`,
    image: Acquisition,
  },
  {
    title: "Finance",
    description: `Our finance team builds cost-efficient models that align with investment goals and ensure sustainable growth.`,
    image: finance,
  },
  {
    title: "Development",
    description: `We manage end-to-end project development—ensuring timely execution, regulatory compliance, and coordination.`,
    image: development,
  },
  {
    title: "Design",
    description: `Partnering with Auro Architects, we design innovative, functional, and eco-friendly spaces tailored to modern lifestyles.`,
    image: design,
  },
  {
    title: "Construction",
    description: `Our on-site teams deliver quality structures using advanced engineering, smart technology, and skilled craftsmanship.`,
    image: construction,
  },
  {
    title: "Legal",
    description: `We manage all legal aspects—land titles, RERA, and approvals—with full transparency and regulatory compliance.`,
    image: legal,
  },
  {
    title: "Audit",
    description: `We track budgets, revenue, and performance through robust systems, ensuring accountability and data-driven decisions.`,
    image: audit,
  },
  {
    title: "Sales",
    description: `We connect people to properties through transparent processes, driving value in both home sales and commercial leases.`,
    image: sales,
  },
  {
    title: "Marketing",
    description: `We position each project with strong narratives, digital strategies, and targeted campaigns to boost visibility and trust.`,
    image: marketing,
  },
  {
    title: "Client Relations",
    description: `From enquiry to post-sale, our team ensures smooth customer experiences built on clarity, care, and long-term trust.`,
    image: clientRelation,
  },
];

const affiliatesData = [
  {
    name: "Auro Architects",
    description: `The creative powerhouse behind Sadhisha’s award-winning designs. Auro Architects specializes in sustainable architecture, urban planning, interior design, and project visualization, bringing form and function together with cultural sensitivity.`,
    image: AuroLogo,
    route: "/auro-architects",
  },
  {
    name: "Sadhisha Homes",
    description: `Our flagship real estate development company, known for delivering high-quality villas, apartments, and residential communities with a strong emphasis on lifestyle, comfort, and timely delivery.`,
    image: SadhishaHomesLogo,
    route: "/sadhisha-homes",
  },
  {
    name: "Sadhisha Construction Technologies",
    description: `Our advanced construction arm focused on innovation through light-gauge steel systems, prefabrication, BIM, and modular construction—ensuring speed, sustainability, and structural excellence.`,
    image: SadhishaConstructionLogo,
    route: "/sadhisha-constructions",
  },
];

export default {
  dataStats,
  serviceCategories,

  pillars,
  departments,
  affiliatesData,
  sadhishaPromoters,
  auroArchitects,
  sadhishaRapidConstruction,
  sadhishaInteriors,
  sadhishaAI,
  sadhishaHospitality,
};
