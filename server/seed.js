require("dotenv").config();
const mongoose = require("mongoose");
const Content = require("./models/Content");

const defaultContent = {
  hero: {
    tagline: "THINKING OF A FANTASTIC VICINITY?",
    subTagline: "25+ MODERN LUXURIOUS AMENITIES",
    price1BHK: "₹69.99 Lacs*",
    price2BHK: "₹96.99 Lacs*",
    address: "BLDG NO. 123/234, CIRCLE: KANNAMWAR NAGAR 1, VIKHROLI (EAST)",
  },
  aboutProject: {
    heading: "About Megaplex Infinity",
    para1: "Megaplex Infinity is a premium residential development offering world-class amenities and modern living spaces. Our project is strategically located with excellent connectivity to all major landmarks.",
    para2: "With spacious units, 24/7 security, and top-tier facilities, we ensure your family enjoys the best lifestyle possible.",
    para3: "Experience luxury living with our thoughtfully designed apartments and comprehensive amenities that cater to every need.",
  },
  amenities: {
    heading: "Premium Amenities",
    subheading: "Experience luxury living with 25+ world-class facilities",
    items: ["Swimming Pool", "Gym & Yoga Studio", "Play Area", "Landscaped Garden", "Security", "Parking"],
  },
  connectivity: {
    heading: "Nearby Connectivity",
    subheading: "Strategically located with excellent connectivity",
    locations: [
      { name: "Airport", distance: "12 km", icon: "Plane" },
      { name: "Railway Station", distance: "5 km", icon: "Train" },
      { name: "Metro Station", distance: "2 km", icon: "Zap" },
      { name: "Shopping Mall", distance: "1 km", icon: "ShoppingBag" },
      { name: "Schools", distance: "0.5 km", icon: "BookOpen" },
      { name: "Hospitals", distance: "1.5 km", icon: "Heart" },
    ],
  },
  floorPlans: {
    type: "1 BHK / 2 BHK / 3 BHK",
    area: "500 - 1200 Sq.ft",
    priceText: "Starting from ₹69.99 Lacs",
  },
  aboutDeveloper: {
    heading: "About Our Developer",
    description: "With 25+ years of excellence in real estate, we have delivered 500+ premium projects across major cities. Our commitment to quality and customer satisfaction is unwavering.",
    stats: [
      { number: "25", label: "Years Experience" },
      { number: "500+", label: "Projects Delivered" },
      { number: "5 Lac", label: "Happy Families" },
      { number: "¹ TLAC", label: "Sq.ft Development" },
    ],
  },
  constructionUpdates: {
    heading: "Construction Progress",
    labels: ["Foundation Completed", "Structural Work Ongoing", "Interior Finishing"],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "What is the payment plan?",
        answer: "We offer flexible payment plans with 30% at booking, 40% during construction, and 30% on possession.",
      },
      {
        question: "What amenities are included?",
        answer: "All units include access to 25+ premium amenities including pool, gym, playground, and 24/7 security.",
      },
      {
        question: "What is the expected possession date?",
        answer: "The expected possession date is 36 months from the booking date.",
      },
      {
        question: "Are there any hidden charges?",
        answer: "No, we maintain complete transparency in all transactions with no hidden charges.",
      },
    ],
  },
};

async function seedContent() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Content.deleteMany({});
    console.log("Cleared existing content");

    for (const [key, value] of Object.entries(defaultContent)) {
      await Content.create({
        sectionKey: key,
        contentValue: value,
      });
    }

    console.log("Seeding completed successfully");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seedContent();
