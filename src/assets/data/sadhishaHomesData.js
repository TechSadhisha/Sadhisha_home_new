import cloudinaryAssets from "../cloudinary_assets.json";

const workplaceImage =
  cloudinaryAssets["src/assets/images/affilates/sadhisha-homes/apartment.png"];
const homeImage =
  cloudinaryAssets["src/assets/images/affilates/sadhisha-homes/home.png"];
const educationImage =
  cloudinaryAssets["src/assets/images/affilates/sadhisha-homes/school.png"];
const resortImage =
  cloudinaryAssets["src/assets/images/affilates/sadhisha-homes/resort.png"];

const developmentFeaturesData = [
  {
    title: "Green-certified homes & gated communities",
    image: homeImage,
  },
  {
    title: "Educational institutions & campuses",
    image: educationImage,
  },
  {
    title: "Workplaces & office environments",
    image: workplaceImage,
  },
  {
    title: "Hotels, resorts, and recreational spaces",
    image: resortImage,
  },
];

export default {
  developmentFeaturesData,
};
