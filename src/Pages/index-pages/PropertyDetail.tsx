import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import Header from "../../Components/ongoingprojects/Header";
import Footer from "../../Components/ongoingprojects/Footer";
import property1 from "../../assets/images/ongoingprojects/property1.jpg";
import property1slide1 from "../../assets/images/ongoingprojects/property1slide1.jpg";
import property1slide2 from "../../assets/images/ongoingprojects/property1slide2.jpg";
import property1slide3 from "../../assets/images/ongoingprojects/property1slide3.jpg";
import property1slide4 from "../../assets/images/ongoingprojects/property1slide4.jpg";

import property2 from "../../assets/images/ongoingprojects/property2.jpg";
import property2slide1 from "../../assets/images/ongoingprojects/property2slide1.jpg";
import property2slide2 from "../../assets/images/ongoingprojects/property2slide2.jpg";
import property2slide3 from "../../assets/images/ongoingprojects/property2slide3.jpg";
import property2slide4 from "../../assets/images/ongoingprojects/property2slide4.jpg";

import property3 from "../../assets/images/ongoingprojects/property3.jpg";
import property3slide1 from "../../assets/images/ongoingprojects/property3slide1.jpg";
import property3slide2 from "../../assets/images/ongoingprojects/property3slide2.jpg";
import property3slide3 from "../../assets/images/ongoingprojects/property3slide3.jpg";
import property3slide4 from "../../assets/images/ongoingprojects/property3slide4.jpg";

import property4 from "../../assets/images/ongoingprojects/property4.jpg";
import property4slide1 from "../../assets/images/ongoingprojects/property4slide1.jpg";
import property4slide2 from "../../assets/images/ongoingprojects/property4slide2.jpg";
import property4slide3 from "../../assets/images/ongoingprojects/property4slide3.jpg";
import property4slide4 from "../../assets/images/ongoingprojects/property4slide4.jpg";

import property5 from "../../assets/images/ongoingprojects/property5.jpg";
import property5slide1 from "../../assets/images/ongoingprojects/property5slide1.jpg";
import property5slide2 from "../../assets/images/ongoingprojects/property5slide2.jpg";
import property5slide3 from "../../assets/images/ongoingprojects/property5slide3.jpg";
import property5slide4 from "../../assets/images/ongoingprojects/property5slide4.jpg";

import property6 from "../../assets/images/ongoingprojects/property6.jpg";
import property6slide1 from "../../assets/images/ongoingprojects/property6slide1.jpg";
import property6slide2 from "../../assets/images/ongoingprojects/property6slide2.jpg";
import property6slide3 from "../../assets/images/ongoingprojects/property6slide3.jpg";
import property6slide4 from "../../assets/images/ongoingprojects/property6slide4.jpg";

import property7 from "../../assets/images/ongoingprojects/property7.jpg";
import property7slide1 from "../../assets/images/ongoingprojects/property7slide1.jpg";
import property7slide2 from "../../assets/images/ongoingprojects/property7slide2.jpg";
import property7slide3 from "../../assets/images/ongoingprojects/property7slide3.jpg";
import property7slide4 from "../../assets/images/ongoingprojects/property7slide4.jpg";

import property8 from "../../assets/images/ongoingprojects/property8.jpg";
import property8slide1 from "../../assets/images/ongoingprojects/property8slide1.jpg";
import property8slide2 from "../../assets/images/ongoingprojects/property8slide2.jpg";
import property8slide3 from "../../assets/images/ongoingprojects/property8slide3.jpg";
import property8slide4 from "../../assets/images/ongoingprojects/property8slide4.jpg";

import property9 from "../../assets/images/ongoingprojects/property9.jpg";
import property9slide1 from "../../assets/images/ongoingprojects/property9slide1.jpg";
import property9slide2 from "../../assets/images/ongoingprojects/property9slide2.jpg";
import property9slide3 from "../../assets/images/ongoingprojects/property9slide3.jpg";
import property9slide4 from "../../assets/images/ongoingprojects/property9slide4.jpg";

import property10 from "../../assets/images/ongoingprojects/property10.jpg";
import property10slide1 from "../../assets/images/ongoingprojects/property10slide1.jpg";
import property10slide2 from "../../assets/images/ongoingprojects/property10slide2.jpg";
import property10slide3 from "../../assets/images/ongoingprojects/property10slide3.jpg";
import property10slide4 from "../../assets/images/ongoingprojects/property10slide4.jpg";

import property11 from "../../assets/images/ongoingprojects/property11.jpg";
import property11slide1 from "../../assets/images/ongoingprojects/property11slide1.jpg";
import property11slide2 from "../../assets/images/ongoingprojects/property11slide2.jpg";
import property11slide3 from "../../assets/images/ongoingprojects/property11slide3.jpg";
import property11slide4 from "../../assets/images/ongoingprojects/property11slide4.jpg";

import property12 from "../../assets/images/ongoingprojects/property12.jpg";
import property12slide1 from "../../assets/images/ongoingprojects/property12slide1.jpg";
import property12slide2 from "../../assets/images/ongoingprojects/property12slide2.jpg";
import property12slide3 from "../../assets/images/ongoingprojects/property12slide3.jpg";
import property12slide4 from "../../assets/images/ongoingprojects/property12slide4.jpg";

import property13 from "../../assets/images/ongoingprojects/property13.jpg";
import property13slide1 from "../../assets/images/ongoingprojects/property13slide1.jpg";
import property13slide2 from "../../assets/images/ongoingprojects/property13slide2.jpg";
import property13slide3 from "../../assets/images/ongoingprojects/property13slide3.jpg";
import property13slide4 from "../../assets/images/ongoingprojects/property13slide4.jpg";

import property14 from "../../assets/images/ongoingprojects/property14.jpg";
import property14slide1 from "../../assets/images/ongoingprojects/property14slide1.jpg";
import property14slide2 from "../../assets/images/ongoingprojects/property14slide2.jpg";
import property14slide3 from "../../assets/images/ongoingprojects/property14slide3.jpg";
import property14slide4 from "../../assets/images/ongoingprojects/property14slide4.jpg";

import property15 from "../../assets/images/ongoingprojects/property15.jpg";
import property15slide1 from "../../assets/images/ongoingprojects/property15slide1.jpg";
import property15slide2 from "../../assets/images/ongoingprojects/property15slide2.jpg";
import property15slide3 from "../../assets/images/ongoingprojects/property15slide3.jpg";
import property15slide4 from "../../assets/images/ongoingprojects/property15slide4.jpg";

import property16 from "../../assets/images/ongoingprojects/property16.jpg";
import property16slide1 from "../../assets/images/ongoingprojects/property16slide1.jpg";
import property16slide2 from "../../assets/images/ongoingprojects/property16slide2.jpg";
import property16slide3 from "../../assets/images/ongoingprojects/property16slide3.jpg";
import property16slide4 from "../../assets/images/ongoingprojects/property16slide4.jpg";

import property17 from "../../assets/images/ongoingprojects/property17.jpg";
import property17slide1 from "../../assets/images/ongoingprojects/property17slide1.jpg";
import property17slide2 from "../../assets/images/ongoingprojects/property17slide2.jpg";
import property17slide3 from "../../assets/images/ongoingprojects/property17slide3.jpg";
import property17slide4 from "../../assets/images/ongoingprojects/property17slide4.jpg";

import property18 from "../../assets/images/ongoingprojects/property18.jpg";
import property18slide1 from "../../assets/images/ongoingprojects/property18slide1.jpg";
import property18slide2 from "../../assets/images/ongoingprojects/property18slide2.jpg";
import property18slide3 from "../../assets/images/ongoingprojects/property18slide3.jpg";
import property18slide4 from "../../assets/images/ongoingprojects/property18slide4.jpg";

import property19 from "../../assets/images/ongoingprojects/property19.jpg";
import property19slide1 from "../../assets/images/ongoingprojects/property19slide1.jpg";
import property19slide2 from "../../assets/images/ongoingprojects/property19slide2.jpg";
import property19slide3 from "../../assets/images/ongoingprojects/property19slide3.jpg";
import property19slide4 from "../../assets/images/ongoingprojects/property19slide4.jpg";

import property20 from "../../assets/images/ongoingprojects/property20.jpg";
import property20slide1 from "../../assets/images/ongoingprojects/property20slide1.jpg";
import property20slide2 from "../../assets/images/ongoingprojects/property20slide2.jpg";
import property20slide3 from "../../assets/images/ongoingprojects/property20slide3.jpg";
import property20slide4 from "../../assets/images/ongoingprojects/property20slide4.jpg";

import property21 from "../../assets/images/ongoingprojects/property21.webp";
import property21slide1 from "../../assets/images/ongoingprojects/property21slide1.webp";
import property21slide2 from "../../assets/images/ongoingprojects/property21slide2.webp";
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

import gandhi from "../../assets/images/ongoingprojects/gandhi.webp";
import growth from "../../assets/images/ongoingprojects/growth.webp";
import property from "../../assets/images/ongoingprojects/mangrove.mp4";
import PropertyMediaSlider from "../../Components/common/PropertyMediaSlider";
import { useNavigate } from "react-router-dom";

// Property data
const properties = {
  // 1. Apartments in Pondicherry
  "apartments-in-pondicherry": {
    id: "apartments-in-pondicherry",
    title: "Apartments in Pondicherry",
    heroTitle: "Apartments in Pondicherry",
    heroSubtitle:
      "Modern premium apartments located in the heart of Pondicherry with luxury amenities and sea breeze views.",
    price: "₹75 Lakhs",
    priceLabel: "Starting",
    description:
      "Modern premium apartments located in the heart of Pondicherry with luxury amenities and sea breeze views.",
    details:
      "2 & 3 BHK | 1,200–1,800 sq.ft. | Near White Town | Gated Community with Gym & Pool",
    images: [
      property1,
      property1slide1,
      property1slide2,
      property1slide3,
      property1slide4,
    ],
    mainImage: property1,
  },

  // 2. Club House
  "club-house": {
    id: "club-house",
    title: "Club House",
    heroTitle: "Club House",
    heroSubtitle:
      "A lifestyle hub featuring modern architecture, sports zones, and leisure facilities designed for community gatherings.",
    price: "₹4.5 Crores",
    priceLabel: "Total",
    description:
      "A lifestyle hub featuring modern architecture, sports zones, and leisure facilities designed for community gatherings.",
    details:
      "10,000 sq.ft. Built-up | Banquet, Indoor Games, Café | Located near Auroville Township",
    images: [property2, property2slide1, property2slide2],
    mainImage: property2,
  },

  // 3. Convention Center
  "convention-center": {
    id: "convention-center",
    title: "Convention Center",
    heroTitle: "Convention Center",
    heroSubtitle:
      "A state-of-the-art facility designed for corporate events, exhibitions, and weddings with ample parking and modern interiors.",
    price: "₹12 Crores",
    priceLabel: "Total",
    description:
      "A state-of-the-art facility designed for corporate events, exhibitions, and weddings with ample parking and modern interiors.",
    details:
      "30,000 sq.ft. | Seating Capacity 1,500 | Near ECR Highway | Fully Air-conditioned",
    images: [
      property3,
      property3slide1,
      property3slide2,
      property3slide3,
      property3slide4,
    ],
    mainImage: property3,
  },

  // 4. Education Institution
  "education-institution": {
    id: "education-institution",
    title: "Education Institution",
    heroTitle: "Education Institution",
    heroSubtitle:
      "Spacious academic campus with modern classrooms, labs, and green surroundings — ideal for schools or colleges.",
    price: "₹8 Crores",
    priceLabel: "Total",
    description:
      "Spacious academic campus with modern classrooms, labs, and green surroundings — ideal for schools or colleges.",
    details:
      "4 Acres | 1,74,000 sq.ft. | 2 Academic Blocks + Playground | Located in Vanur",
    images: [
      property4,
      property4slide1,
      property4slide2,
      property4slide3,
      property4slide4,
    ],
    mainImage: property4,
  },

  // 5. Financial District
  "financial-district": {
    id: "financial-district",
    title: "Financial District",
    heroTitle: "Financial District",
    heroSubtitle:
      "Premium commercial land designated for banks, offices, and fintech startups in a rapidly developing zone.",
    price: "₹3.5 Crores",
    priceLabel: "per Acre",
    description:
      "Premium commercial land designated for banks, offices, and fintech startups in a rapidly developing zone.",
    details:
      "5 Acres | Commercial Zone | Wide 60ft Road Access | Near Pondicherry Airport",
images: [property5, property5slide1, property5slide2, property5slide3, property5slide4],

    mainImage: property5,
  },

  // 6. High Rise Apartment
  "high-rise-apartment": {
    id: "high-rise-apartment",
    title: "High Rise Apartment",
    heroTitle: "High Rise Apartment",
    heroSubtitle:
      "Luxury skyscraper residences offering panoramic city and sea views with premium lifestyle facilities.",
    price: "₹1.5 Crores",
    priceLabel: "Starting",
    description:
      "Luxury skyscraper residences offering panoramic city and sea views with premium lifestyle facilities.",
    details:
      "3 & 4 BHK | 1,800–2,800 sq.ft. | 20 Floors | Sky Lounge, Infinity Pool, Gym",
images: [property6, property6slide1, property6slide2, property6slide3, property6slide4],

    mainImage: property6,
  },

  // 7. Industrial Park
  "industrial-park": {
    id: "industrial-park",
    title: "Industrial Park",
    heroTitle: "Industrial Park",
    heroSubtitle:
      "Fully developed industrial layout with road connectivity, power supply, and drainage — ideal for factories and logistics.",
    price: "₹2.2 Crores",
    priceLabel: "per Acre",
    description:
      "Fully developed industrial layout with road connectivity, power supply, and drainage — ideal for factories and logistics.",
    details:
      "15 Acres | Ready Infrastructure | Near Villupuram Highway | Zoned for Manufacturing",
images: [property7, property7slide1, property7slide2, property7slide3, property7slide4],
    mainImage: property7,
  },

  // 8. IT World
  "it-world": {
    id: "it-world",
    title: "IT World",
    heroTitle: "IT World",
    heroSubtitle:
      "A cutting-edge tech park for IT and startups featuring smart infrastructure and business-friendly facilities.",
    price: "₹7 Crores",
    priceLabel: "per Acre",
    description:
      "A cutting-edge tech park for IT and startups featuring smart infrastructure and business-friendly facilities.",
    details:
      "10 Acres | 3,00,000 sq.ft. Development Potential | Fiber Optic Connectivity | Near Chennai-Pondy Highway",
images: [property8, property8slide1, property8slide2, property8slide3, property8slide4],
    mainImage: property8,
  },

  // 9. Luxury Villas
  "luxury-villas": {
    id: "luxury-villas",
    title: "Luxury Villas",
    heroTitle: "Luxury Villas",
    heroSubtitle:
      "Exclusive collection of modern villas with private pools and landscaped gardens, designed for elite living.",
    price: "₹2.5 Crores",
    priceLabel: "Starting",
    description:
      "Exclusive collection of modern villas with private pools and landscaped gardens, designed for elite living.",
    details:
      "4 BHK | 3,000 sq.ft. | 4,000 sq.ft. Plot | Near Auroville Beach Road",
images: [property9, property9slide1, property9slide2, property9slide3, property9slide4],
    mainImage: property9,
  },

  // 10. Multiplex Theatre
  "multiplex-theatre": {
    id: "multiplex-theatre",
    title: "Multiplex Theatre",
    heroTitle: "Multiplex Theatre",
    heroSubtitle:
      "Premium entertainment complex featuring multiple screens, food court, and advanced projection systems.",
    price: "₹15 Crores",
    priceLabel: "Total",
    description:
      "Premium entertainment complex featuring multiple screens, food court, and advanced projection systems.",
    details:
      "25,000 sq.ft. | 5 Screens | Seating Capacity 1,200 | Located on ECR",
images: [property10, property10slide1, property10slide2, property10slide3, property10slide4],

    mainImage: property10,
  },

  // 11. Office Space
  "office-space": {
    id: "office-space",
    title: "Office Space",
    heroTitle: "Office Space",
    heroSubtitle:
      "Modern workspace complex ideal for corporate offices and co-working setups with flexible layouts.",
    price: "₹1.2 Crores",
    priceLabel: "per Floor",
    description:
      "Modern workspace complex ideal for corporate offices and co-working setups with flexible layouts.",
    details:
      "4 Floors | 2,500 sq.ft. Each | Lift & Power Backup | Near Pondicherry City Center",
images: [property11, property11slide1, property11slide2, property11slide3, property11slide4],
    mainImage: property11,
  },

  // 12. Recreational Center
  "recreational-center": {
    id: "recreational-center",
    title: "Recreational Center",
    heroTitle: "Recreational Center",
    heroSubtitle:
      "A health and fitness retreat featuring gyms, yoga halls, and activity zones for families and corporates.",
    price: "₹3 Crores",
    priceLabel: "Total",
    description:
      "A health and fitness retreat featuring gyms, yoga halls, and activity zones for families and corporates.",
    details:
      "8,000 sq.ft. Built-up | Swimming Pool | Multi-purpose Hall | Near Auroville",
images: [property12, property12slide1, property12slide2, property12slide3, property12slide4],

    mainImage: property12,
  },
  // 13. Resort in Goa
  "resort-in-goa": {
    id: "resort-in-goa",
    title: "Resort in Goa",
    heroTitle: "Resort in Goa",
    heroSubtitle:
      "Luxury beachfront resort property in North Goa offering villas, cottages, and a private beach zone.",
    price: "₹18 Crores",
    priceLabel: "Total",
    description:
      "Luxury beachfront resort property in North Goa offering villas, cottages, and a private beach zone.",
    details:
      "2 Acres | 25 Keys | Infinity Pool | 300 Meters from Beach | North Goa",
images: [property13, property13slide1, property13slide2, property13slide3, property13slide4],

    mainImage: property13,
  },

  // 14. Row Housing
  "row-housing": {
    id: "row-housing",
    title: "Row Housing",
    heroTitle: "Row Housing",
    heroSubtitle:
      "Stylish row houses designed for urban family living with community parks and easy city access.",
    price: "₹95 Lakhs",
    priceLabel: "Starting",
    description:
      "Stylish row houses designed for urban family living with community parks and easy city access.",
    details:
      "2 & 3 BHK | 1,200–1,600 sq.ft. | 50 Units | Near Ariyankuppam, Pondicherry",
images: [property14, property14slide1, property14slide2, property14slide3, property14slide4],
    mainImage: property14,
  },

  // 15. Shopping Mall
  "shopping-mall": {
    id: "shopping-mall",
    title: "Shopping Mall",
    heroTitle: "Shopping Mall",
    heroSubtitle:
      "A large commercial complex with retail spaces, food courts, and entertainment zones for high footfall traffic.",
    price: "₹25 Crores",
    priceLabel: "Total",
    description:
      "A large commercial complex with retail spaces, food courts, and entertainment zones for high footfall traffic.",
    details:
      "1,00,000 sq.ft. | 4 Floors | Parking for 150 Cars | On East Coast Road (ECR)",
images: [property15, property15slide1, property15slide2, property15slide3, property15slide4],

    mainImage: property15,
  },

  // 16. Spiritual Retreat
  "spiritual-retreat": {
    id: "spiritual-retreat",
    title: "Spiritual Retreat",
    heroTitle: "Spiritual Retreat",
    heroSubtitle:
      "A serene wellness center surrounded by nature, ideal for meditation camps and holistic living.",
    price: "₹6 Crores",
    priceLabel: "Total",
    description:
      "A serene wellness center surrounded by nature, ideal for meditation camps and holistic living.",
    details:
      "3 Acres | 15 Cottages | Meditation Hall & Organic Garden | Near Auroville Forest Zone",
images: [property16, property16slide1, property16slide2, property16slide3, property16slide4],

    mainImage: property16,
  },

  // 17. Theme Park
  "theme-park": {
    id: "theme-park",
    title: "Theme Park",
    heroTitle: "Theme Park",
    heroSubtitle:
      "Adventure and water park designed for family entertainment with attractions, rides, and restaurants.",
    price: "₹30 Crores",
    priceLabel: "Total",
    description:
      "Adventure and water park designed for family entertainment with attractions, rides, and restaurants.",
    details:
      "12 Acres | 50,000 sq.ft. Built-up | 25 Rides | Near Chennai–Pondicherry Highway",
images: [property17, property17slide1, property17slide2, property17slide3, property17slide4],

    mainImage: property17,
  },

  // 18. Urbanscape Township
  "urbanscape-township": {
    id: "urbanscape-township",
    title: "Urbanscape Township",
    heroTitle: "Urbanscape Township",
    heroSubtitle:
      "Integrated township offering residential, commercial, and recreational zones with premium amenities.",
    price: "₹4.5 Crores",
    priceLabel: "per Acre",
    description:
      "Integrated township offering residential, commercial, and recreational zones with premium amenities.",
    details:
      "50 Acres | Mixed-Use Zoning | 12m Road Network | Near Puducherry–Tindivanam Highway",
images: [property18, property18slide1, property18slide2, property18slide3, property18slide4],

    mainImage: property18,
  },

  // 19. Yoga Retreat
  "yoga-retreat": {
    id: "yoga-retreat",
    title: "Yoga Retreat",
    heroTitle: "Yoga Retreat",
    heroSubtitle:
      "An eco-friendly yoga sanctuary amidst lush greenery offering calm, rejuvenating stays and workshops.",
    price: "₹3.8 Crores",
    priceLabel: "Total",
    description:
      "An eco-friendly yoga sanctuary amidst lush greenery offering calm, rejuvenating stays and workshops.",
    details:
      "2 Acres | 10 Cottages | Yoga Hall | Near Auroville Forest | Organic Café",
images: [property19, property19slide1, property19slide2, property19slide3, property19slide4],

    mainImage: property19,
  },

  // 20. Multispeciality Hospital in Bangalore
  "multispeciality-hospital-bangalore": {
    id: "multispeciality-hospital-bangalore",
    title: "Multispeciality Hospital in Bangalore",
    heroTitle: "Multispeciality Hospital in Bangalore",
    heroSubtitle:
      "A cutting-edge medical complex equipped with modern facilities and advanced healthcare technology.",
    price: "₹60 Crores",
    priceLabel: "Total",
    description:
      "A cutting-edge medical complex equipped with modern facilities and advanced healthcare technology.",
    details:
      "2 Acres | 1,50,000 sq.ft. | 150 Beds | Located in Bangalore Tech Corridor",
images: [property20, property20slide1, property20slide2, property20slide3, property20slide4],

    mainImage: property20,
  },

  // 21. Auroville Lakeview Land
  "auroville-lakeview": {
    id: "auroville-lakeview",
    title: "Auroville Lakeview Land",
    heroTitle: "Auroville Lakeview Land",
    heroSubtitle: "Prime Development Land near SBI Kuilapalayam Junction",
    price: "₹2,500",
    priceLabel: "per sq. ft.",
    description: "Prime Development Land near SBI Kuilapalayam Junction",
    details:
      "1.25 Acres (54,450 sq. ft.) | Subdividable into 10,000 sq. ft. plots | Auroville",
    images: [property21, property21slide1,property21slide2],
    mainImage: property21,
  },

  // 22. ECR Beachfront Enclave
  "ecr-beachfront-enclave": {
    id: "ecr-beachfront-enclave",
    title: "ECR Beachfront Enclave",
    heroTitle: "ECR Beachfront Enclave",
    heroSubtitle:
      "Prime Coastal Land 100 meters from East Coast Road (ECR) Shoreline",
    price: "₹550",
    priceLabel: "per sq. ft.",
    description:
      "Prime Coastal Land 100 meters from East Coast Road (ECR) Shoreline",
    details:
      "1 Acre (43,560 sq. ft.) | Subdividable into 10,000 sq. ft. plots | near Auroville",
    images: [property22, property21slide1,property21slide2],
    mainImage: property22,
  },

  // 23. Auroville Coastal Grove
  "auroville-coastal-grove": {
    id: "auroville-coastal-grove",
    title: "Auroville Coastal Grove",
    heroTitle: "Auroville Coastal Grove",
    heroSubtitle: "Villas Near ECR & Aurolec",
    price: "₹2.25 Cr",
    priceLabel: "Starting Price",
    description: "Villas Near ECR & Aurolec",
    details: "85 Cents | 37,000 sq. ft | Subdividable into 2,500 sq. ft. plots",
    images: [property23, property21slide1,property21slide2],
    mainImage: property23,
  },

  // 24. ECR Coconut Grove
  "ecr-coconut-grove": {
    id: "ecr-coconut-grove",
    title: "ECR Coconut Grove",
    heroTitle: "ECR Coconut Grove",
    heroSubtitle: "Development Land Near Wooden Resort – Just 20m Off ECR",
    price: "₹2.5 Cr",
    priceLabel: "per Acre",
    description: "Development Land Near Wooden Resort – Just 20m Off ECR",
    details:
      "2.5 Acres | 1,08,900 sq. ft. | Subdividable into 10,000 sq. ft. plots",
    images: [property24, property21slide1,property21slide2],
    mainImage: property24,
  },
  // 25. ECR Anumanthai Haven
  "ecr-anumanthai-haven": {
    id: "ecr-anumanthai-haven",
    title: "ECR Anumanthai Haven",
    heroTitle: "ECR Anumanthai Haven",
    heroSubtitle: "Premium Coconut Land – 1 km from Anumanthai Toll Gate",
    price: "₹2.5 Cr",
    priceLabel: "per Acre",
    description: "Premium Coconut Land – 1 km from Anumanthai Toll Gate",
    details:
      "1.1 Acres | Approx. 47,916 sq.ft | Subdividable into 10,000 sq.ft plots",
    images: [property25, property21slide1,property21slide2],
    mainImage: property25,
  },

  // 26. Marakanam Meadows
  "marakanam-meadows": {
    id: "marakanam-meadows",
    title: "Marakanam Meadows",
    heroTitle: "Marakanam Meadows",
    heroSubtitle: "Prime Development Land – 1 km from Marakanam (ECR)",
    price: "₹1.5 Cr",
    priceLabel: "per Acre",
    description: "Prime Development Land – 1 km from Marakanam (ECR)",
    details:
      "34 Acres | Approx. 14,80,000+ sq.ft | Suitable for Township Projects",
    images: [property26, property21slide1,property21slide2],
    mainImage: property26,
  },

  // 27. PIMS Enclave
  "pims-enclave": {
    id: "pims-enclave",
    title: "PIMS Enclave",
    heroTitle: "PIMS Enclave",
    heroSubtitle:
      "Prime Development Land 1 km from ECR, Close to PIMS Hospital",
    price: "₹550",
    priceLabel: "per sq.ft.",
    description: "Prime Development Land 1 km from ECR, Close to PIMS Hospital",
    details:
      "1.5 Acres | Approx. 65,340 sq.ft | Subdividable into 10,000 sq.ft plots",
    images: [property27, property21slide1,property21slide2],
    mainImage: property27,
  },

  // 28. Auroville Coastal Grove Apartments
  "auroville-coastal-grove-apartments": {
    id: "auroville-coastal-grove-apartments",
    title: "Auroville Coastal Grove Apartments",
    heroTitle: "Auroville Coastal Grove Apartments",
    heroSubtitle: "Studio Apartments Near ECR & Aurolec",
    price: "₹55 Lakh",
    priceLabel: "Starting Price",
    description: "Studio Apartments Near ECR & Aurolec",
    details: "85 Cents | 37,000 sq.ft | Subdividable into 2,500 sq.ft plots",
    images: [property28, property21slide1,property21slide2],
    mainImage: property28,
  },

  // 29. Chinna Kottakuppam Villa Plots
  "chinna-kottakuppam-villa-plots": {
    id: "chinna-kottakuppam-villa-plots",
    title: "Chinna Kottakuppam Villa Plots",
    heroTitle: "Chinna Kottakuppam Villa Plots",
    heroSubtitle:
      "Premium Residential Villa Plots Near Kottakuppam, Pondicherry",
    price: "₹95 Lakh",
    priceLabel: "Total",
    description:
      "Premium Residential Villa Plots Near Kottakuppam, Pondicherry",
    details: "2,500 sq.ft Land | 1,000 sq.ft Villa | Chinna Kottakuppam",
    images: [property29,property21slide1,property21slide2],
    mainImage: property29,
  },

  // 30. Chinna Kottakuppam Plots
  "chinna-kottakuppam-plots": {
    id: "chinna-kottakuppam-plots",
    title: "Chinna Kottakuppam Plots",
    heroTitle: "Chinna Kottakuppam Plots",
    heroSubtitle: "Premium Residential Plots Near Kottakuppam, Pondicherry",
    price: "₹45 Lakh",
    priceLabel: "Total",
    description: "Premium Residential Plots Near Kottakuppam, Pondicherry",
    details: "2,500 sq.ft Land | ₹1,700 per sq.ft | Chinna Kottakuppam",
    images: [property30, property21slide1,property21slide2],
    mainImage: property30,
  },

  // 31. Sandai Pudukuppam Plot
  "sandai-pudukuppam-plot": {
    id: "sandai-pudukuppam-plot",
    title: "Sandai Pudukuppam Plot",
    heroTitle: "Sandai Pudukuppam Plot",
    heroSubtitle: "Prime Land Parcel at Vanur",
    price: "₹500",
    priceLabel: "per sq.ft.",
    description: "Prime Land Parcel at Vanur",
    details:
      "5,750 sq.ft | Total Price: ₹30 Lakhs | Individual Plot near Puducherry",
    images: [property31, property21slide1,property21slide2],
    mainImage: property31,
  },

  // 32. Arumbarthapuram Apartment
  "arumbarthapuram-apartment": {
    id: "arumbarthapuram-apartment",
    title: "Arumbarthapuram Apartment",
    heroTitle: "Arumbarthapuram Apartment",
    heroSubtitle:
      "3 BHK Residential Apartment at Prime Location in Pondicherry",
    price: "₹90 Lakh",
    priceLabel: "Total",
    description: "3 BHK Residential Apartment at Prime Location in Pondicherry",
    details:
      "1,450 sq.ft | Spacious 3 BHK | Near AG Padhmavathi Hospital, Arumbarthapuram",
    images: [property32, property21slide1,property21slide2],
    mainImage: property32,
  },

  // 33. Bommayapalayam Buddha Garden Plot
  "bommayapalayam-buddha-garden-plot": {
    id: "bommayapalayam-buddha-garden-plot",
    title: "Bommayapalayam Buddha Garden Plot",
    heroTitle: "Bommayapalayam Buddha Garden Plot",
    heroSubtitle: "Premium Residential Plot near Auroville Township",
    price: "₹1 Cr",
    priceLabel: "Total",
    description: "Premium Residential Plot near Auroville Township",
    details:
      "3,000 sq.ft Plot | 1 KM from Mango Hill Resort | 500 M from Aurolec",
    images: [property33, property21slide1,property21slide2],
    mainImage: property33,
  },

  // 34. Bommayapalayam Buddha Garden Villa
  "bommayapalayam-buddha-garden-villa": {
    id: "bommayapalayam-buddha-garden-villa",
    title: "Bommayapalayam Buddha Garden Villa",
    heroTitle: "Bommayapalayam Buddha Garden Villa",
    heroSubtitle: "Premium Luxury Villa near Auroville Township",
    price: "₹2.65 Cr",
    priceLabel: "Total",
    description: "Premium Luxury Villa near Auroville Township",
    details:
      "3,000 sq.ft Plot | 1,500 sq.ft Built-up | 3 BHK Villa | Near Mango Hill Resort",
    images: [property34, property21slide1,property21slide2],
    mainImage: property34,
  },

  // 35. Ariyankuppam Villas
  "ariyankuppam-villas": {
    id: "ariyankuppam-villas",
    title: "Ariyankuppam Villas",
    heroTitle: "Ariyankuppam Villas",
    heroSubtitle: "Premium Luxury Villa near Ariyankuppam Church, Pondicherry",
    price: "₹95 Lakh",
    priceLabel: "Total",
    description: "Premium Luxury Villa near Ariyankuppam Church, Pondicherry",
    details:
      "1,200 sq.ft Land | 1,000 sq.ft Built-up | 2 BHK Villa | Developed Locality",
    images: [property35, property21slide1,property21slide2],
    mainImage: property35,
  },

  // 36. Ariyankuppam Plots
  "ariyankuppam-plots": {
    id: "ariyankuppam-plots",
    title: "Ariyankuppam Plots",
    heroTitle: "Ariyankuppam Plots",
    heroSubtitle:
      "Premium Residential Plot Near Ariyankuppam Church, Pondicherry",
    price: "₹45 Lakh",
    priceLabel: "Total",
    description:
      "Premium Residential Plot Near Ariyankuppam Church, Pondicherry",
    details: "1,200 sq.ft Plot | ₹3,750 per sq.ft | Developed Locality",
    images: [property36, property21slide1,property21slide2],
    mainImage: property36,
  },
};

const PropertyDetail = () => {
  const location = useLocation(); // ✅ now defined

  const navigate = useNavigate();

  const handleBookVisit = () => {
    // navigate to ongoing projects and pass scroll info
    navigate("/ongoing-projects", { state: { scrollTo: "contact" } });
  };

  //   const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get("id") || "auroville-lakeview";
  const currentProperty =
    properties[propertyId as keyof typeof properties] ||
    properties["auroville-lakeview"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:
      "I am interested in receiving more information about this property.\nThank you",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll to top when property changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentImageIndex(0);
  }, [propertyId, location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Enquiry Submitted",
    //   description: "We'll get back to you shortly!",
    // });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProperty.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentProperty.images.length) %
        currentProperty.images.length
    );
  };

  // Get similar properties (all except current)
  const similarProperties = Object.values(properties).filter(
    (p) => p.id !== propertyId
  );

  const faqs = [
    {
      question: "1. Can outsiders invest in land near Auroville?",
      answer:
        "Yes. While the core Auroville township follows unique governance and land use norms, properties in the Auroville Green Belt or surrounding areas like Kullapalayam, Bommayapalayam, and ECR are available for private investment and development.",
    },
    {
      question:
        "2. Are there any restrictions for NRIs buying land near Auroville?",
      answer:
        "NRIs can purchase agricultural or non-agricultural land in the Auroville region, subject to standard government regulations and RBI guidelines. It's recommended to work with legal experts familiar with property laws in Tamil Nadu.",
    },
    {
      question: "3. Is it safe to invest in real estate near Auroville?",
      answer:
        "Yes. The Auroville region is considered a stable and secure investment zone with clear land titles, growing infrastructure, and strong demand for eco-friendly and boutique developments.",
    },
    {
      question: "4. What makes Auroville a valuable real estate destination?",
      answer:
        "Auroville offers a unique combination of spiritual tranquility, eco-conscious living, proximity to beaches, and international community appeal—making it ideal for wellness resorts, boutique villas, and sustainable living projects.",
    },
    {
      question:
        "5. What kind of properties are best to invest in/near Auroville?",
      answer:
        "Plotted land for eco-farmhouses, luxury villas, boutique resorts, and yoga/wellness retreats are highly sought after. Properties with lake views, green surroundings, or proximity to the ECR command premium appreciation.",
    },
  ];

  return (
    <div className="min-vh-100 bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          height: "1000px",
          backgroundImage: `url(${currentProperty.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>

      {/* Property Details and Form */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left: Property Details */}
            <div className="col-lg-8">
              <h2 className="h4 fw-bold mb-3">{currentProperty.title}</h2>
              <p className="text-muted mb-3">{currentProperty.description}</p>
              <p
                className="text-muted h6 mb-2"
                style={{ color: "var(--gold-color)" }}
              >
                {currentProperty.price}{" "}
                {currentProperty.priceLabel.toLowerCase()}
              </p>
              <p className="text-muted mb-4" style={{ whiteSpace: "pre-line" }}>
                {currentProperty.details}
              </p>

              <div className="text-center">
                <button
                  className="btn btn-dark px-4 py-2 mb-4"
                  onClick={handleBookVisit}
                >
                  Book a Site Visit
                </button>
              </div>

              {/* Image Carousel */}
              <div className="container my-4">
                <PropertyMediaSlider media={currentProperty.images} />
              </div>

              <div
                className="mb-4 rounded overflow-hidden"
                style={{
                  width: "100%",
                  height: "500px", // or whatever you prefer
                }}
              >
                <video
                  src={property}
                  className="w-100 h-80"
                  style={{
                    objectFit: "cover", // fills area, crops a little
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>

              {/* Property Description */}
              <div className="mb-5">
                <p className="text-muted">
                  We are proud to present an exclusive opportunity to own 1.25
                  acres of premium land near the tranquil shores of Auroville
                  Lake, nestled just minutes from SBI Kullapalayam Junction.
                  This rare parcel of real estate offers a blank canvas for
                  discerning buyers looking to create something extraordinary—be
                  it a private estate, boutique development, or a serene
                  retreat.
                </p>

                <h3 className="h6 fw-bold mt-4 mb-3">Property Highlights</h3>
                <ul className="list-styled">
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">Prestigious Location:</strong>{" "}
                    Just off Auroville's scenic green belt, with easy access to
                    Matrimandir, local cafés, international schools, and the
                    East Coast Road.
                  </li>
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">
                      Versatile Usage Potential:
                    </strong>{" "}
                    Ideal for subdividing into 10,000 sq. ft. plots or for
                    building private villas, eco-farmhouses, yoga retreats, or a
                    boutique resort.
                  </li>
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">Breathtaking Setting:</strong>{" "}
                    Enjoy unobstructed views of lush greenery, peaceful
                    surroundings, and the lake breeze—perfect for luxury living
                    or high-end hospitality ventures.
                  </li>
                  <li className="mb-3 text-muted">
                    <strong className="text-dark">
                      Developer-Friendly Parcel:
                    </strong>{" "}
                    Flat terrain, road-facing access, and well-connected
                    infrastructure make this plot ready for immediate planning
                    and execution.
                  </li>
                </ul>

                <h3 className="h6 fw-bold mt-4 mb-3">Investment Insights</h3>
                <ul className="list-styled">
                  <li className="mb-2 text-muted">High Appreciation Zone</li>
                  <li className="mb-2 text-muted">
                    Proximity to Coastal Tourism Belt
                  </li>
                  <li className="mb-2 text-muted">
                    Ideal for NRI Investment, Wellness Resorts & Green Living
                    Concepts
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="col-lg-4">
              <div
                className="card border-0 shadow-sm sticky-top"
                style={{ top: "20px" }}
              >
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-4">Enquire Sadhisha</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Your name
                      </label>
                      <input
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
                      <label className="form-label fw-semibold">
                        Your email
                      </label>
                      <input
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
                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Your message (optional)
                      </label>
                      <textarea
                        className="form-control text-muted"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={6}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark w-100 py-2 fw-semibold"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Pondicherry */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6">
              <img
                src={gandhi}
                alt="Pondicherry landmark"
                className="img-fluid rounded shadow-lg"
                style={{ height: "400px", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="h3 fw-bold mb-4">About pondicherry</h2>
              <p className="text-muted">
                Pondicherry—often called the "French Riviera of the East"—is a
                serene coastal town that beautifully blends colonial charm with
                contemporary living. Known for its clean beaches, spiritual
                centers like Auroville, vibrant cafés, and heritage
                architecture, Pondicherry offers a lifestyle that balances
                peace, culture, and accessibility. With a unique blend of
                tradition and modernity, it remains one of South India's most
                desirable destinations for both living and tourism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Investment */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6">
              <h2 className="h3 fw-bold mb-4">
                Real Estate Investment in Pondicherry
              </h2>
              <p className="text-muted">
                Pondicherry is fast emerging as a prime destination for real
                estate investment in South India. With growing demand for
                eco-living, vacation homes, and plotted development near
                Auroville and along the East Coast Road (ECR), property values
                continue to appreciate steadily. Its proximity to Chennai,
                strong tourism appeal, and increasing infrastructure make it an
                ideal choice for long-term investors, NRI buyers, and developers
                seeking high-value coastal opportunities.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={growth}
                alt="Investment growth"
                className="img-fluid rounded shadow-lg"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h3 fw-bold text-center mb-5">
            Frequently Asked Questions About Auroville
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-bottom mb-3">
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="btn btn-link text-decoration-none text-dark w-100 text-start d-flex justify-content-between align-items-center py-3"
                  >
                    <span className="fs-6">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                      style={{
                        transform:
                          openFaqIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="pb-3 text-muted small">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Listings */}
      <section className="py-5">
        <div className="container">
          <h2 className="h2 fw-bold text-center mb-5">
            Similar Listings recommended by Sadhisha
          </h2>
          <div className="row g-4">
            {similarProperties.map((property) => (
              <div key={property.id} className="col-md-4">
                <Link
                  to={`/property-detail?id=${property.id}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 border-0 shadow-sm overflow-hidden">
                    <img
                      src={property.mainImage}
                      alt={property.title}
                      className="card-img-top"
                      style={{ height: "280px", objectFit: "cover" }}
                    />
                    <div className="card-body p-4">
                      <h3 className="h5 fw-bold mb-2 text-decoration-underline">
                        {property.title}
                      </h3>
                      <p className="small text-muted mb-3">
                        {property.description}
                      </p>
                      <p
                        className="fw-bold mb-0"
                        style={{ color: "var(--gold-color)" }}
                      >
                        {property.price} {property.priceLabel}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
