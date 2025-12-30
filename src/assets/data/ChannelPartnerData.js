import cloudinaryAssets from "../cloudinary_assets.json";

const commission = cloudinaryAssets["src/assets/images/join/commission.png"];
const payouts = cloudinaryAssets["src/assets/images/join/money.png"];
const flexibleTiming = cloudinaryAssets["src/assets/images/join/timer.png"];
const noExperienceNeeded =
  cloudinaryAssets["src/assets/images/join/thumbs-up.png"];
const training = cloudinaryAssets["src/assets/images/join/workshop.png"];

const strongRelationShip =
  cloudinaryAssets["src/assets/images/about/client-centric.png"];
const workforce = cloudinaryAssets["src/assets/images/about/workforce.png"];
const BusinessEmpowerment =
  cloudinaryAssets[
    "src/assets/images/affilates/sadhisha-construction/expansion.png"
  ];
const awards =
  cloudinaryAssets[
    "src/assets/images/affilates/sadhisha-construction/recommendation.png"
  ];

const channelPartnerBenefits = [
  {
    title: "High Commission",
    desc: "Earn up to 5% commission and more",
    img: commission,
  },
  {
    title: "Instant Payouts",
    desc: "Instant payouts upon sale completion",
    img: payouts,
  },
  {
    title: "Work Flexibly",
    desc: "Flexible working hours",
    img: flexibleTiming,
  },
  {
    title: "No Experience Needed",
    desc: "No prior real estate experience required",
    img: noExperienceNeeded,
  },
  {
    title: "Training & Support",
    desc: "Training & Support Provided",
    img: training,
  },
];

const whyChooseChannelPartnerData = [
  {
    title: "Strong Relationship Building",
    description: "We invest in building long-term, value-driven partnerships",
    image: strongRelationShip,
  },

  {
    title: "Rewards & Recognition",
    description:
      "High-performing partners are rewarded through regular meetups, recognition programs, and performance-based incentives",
    image: awards,
  },

  {
    title: "Business Empowerment",
    description:
      "Our support system ensures that you are equipped to deliver and grow",
    image: BusinessEmpowerment,
  },
  {
    title: "Comprehensive Onboarding & Training",
    description:
      "We provide all the necessary tools—training, technology access, and marketing support—to help you succeed",
    image: workforce,
  },
];

export default {
  whyChooseChannelPartnerData,
  channelPartnerBenefits,
};
