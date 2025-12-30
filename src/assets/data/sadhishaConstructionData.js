import cloudinaryAssets from "../cloudinary_assets.json";

const Customizable =
  cloudinaryAssets[
    "src/assets/images/affilates/sadhisha-construction/flexible.png"
  ];
const expansion =
  cloudinaryAssets[
    "src/assets/images/affilates/sadhisha-construction/expansion.png"
  ];
const sustainability =
  cloudinaryAssets[
    "src/assets/images/affilates/sadhisha-construction/sustainable.png"
  ];
const idea =
  cloudinaryAssets[
    "src/assets/images/affilates/sadhisha-construction/idea.png"
  ];
const expertise =
  cloudinaryAssets[
    "src/assets/images/affilates/sadhisha-construction/recommendation.png"
  ];

const whyChooseSadhishaConstruction = [
  {
    title: "Innovation",
    description:
      "We adopt cutting-edge building systems and stay ahead of industry advancements",
    image: idea,
  },
  {
    title: "Sustainability",
    description:
      "Our green initiatives prioritize eco-friendly materials, reduced waste, and healthy living environments",
    image: sustainability,
  },
  {
    title: "Expertise",
    description:
      "Backed by decades of real-world experience across residential, commercial, and infrastructure projects",
    image: expertise,
  },
  {
    title: "Quality",
    description:
      "Every structure is delivered with precision, safety, and attention to detail",
    image: Customizable,
  },
  {
    title: "Global Reach",
    description: "Successfully executing projects across India and beyond",
    image: expansion,
  },
];

export default {
  whyChooseSadhishaConstruction,
};
