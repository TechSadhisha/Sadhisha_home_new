import cloudinaryAssets from "../cloudinary_assets.json";

const donation = cloudinaryAssets["src/assets/images/about/csr/donation.webp"];
const medicalCamps =
  cloudinaryAssets["src/assets/images/about/csr/medical-camps.webp"];
const massMarriage =
  cloudinaryAssets["src/assets/images/about/csr/mass-marriage.webp"];
const homes = cloudinaryAssets["src/assets/images/about/homes.avif"];

const charityData = [
  {
    img: medicalCamps,
    title: "Free Medical Camps",
    desc: "Free medical camps in underserved areas to improve healthcare accessibility.",
  },
  {
    img: massMarriage,
    title: "Mass Marriage Functions",
    desc: "Large-scale marriage functions for economically challenged families.",
  },

  {
    img: donation,
    title: "Essential Donations",
    desc: "Providing food, clothes, and other essentials to the poor and needy.",
  },
  {
    img: homes,
    title: "Affordable Housing",
    desc: "Affordable housing support for the homeless and displaced individuals.",
  },
];

export default {
  charityData,
};
