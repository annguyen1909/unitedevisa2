// app/destinations/kenya/data.ts

import { DestinationData } from "@/types/destination"

const kenya: DestinationData = {
  slug: "kenya",
  name: "Kenya",
  flag: "🇰🇪",
  hero: {
    title: "Kenya ETA",
    subtitle: "Apply Online for Your Kenya Electronic Travel Authorization",
    image: "/images/kenya-hero.jpg",
  },
  about: {
    heading: "About Kenya ETA",
    description:
      "Kenya now requires travelers to obtain an ETA prior to arrival. Apply easily online in just a few steps and receive your authorization by email.",
    processTime: "1 Business Day",
    features: [
      "Apply Online in 3 Steps",
      "Receive ETA by Email",
      "24/7 Support Available",
    ],
  },
  welcome: {
    title: "Welcome to Kenya",
    content:
      "Discover Kenya’s stunning landscapes, rich culture, and unforgettable wildlife safaris. Your adventure starts with your ETA.",
  },
  visaTypes: [
    {
      type: "Tourist ETA",
      description: "Perfect for leisure travelers, valid up to 90 days.",
    },
    {
      type: "Business ETA",
      description: "For meetings, events, or conferences in Kenya.",
    },
  ],
  howItWorks: [
    "Fill out the secure online form",
    "Pay the application fee",
    "Receive your ETA via email",
  ],
  insurance: {
    recommended: true,
    originalPrice: 299,
    discountedPrice: 119,
    description: "Get COVID-19 protection, travel delay compensation, and more.",
  },
  pricing: {
    baseFee: 50,
    serviceFee: 20,
    discount: 0,
    total: 70,
  },
  faqs: [
    {
      question: "How long does the Kenya ETA take?",
      answer: "It is typically processed within 1 business day.",
    },
    {
      question: "Do I need a printed copy of the ETA?",
      answer: "Yes, it is recommended to carry a printed copy.",
    },
    {
      question: "How long does the Kenya ETA take?",
      answer: "It is typically processed within 1 business day.",
    },
    {
      question: "How long does the Kenya ETA take?",
      answer: "It is typically processed within 1 business day.",
    },
  ],
};

export default kenya;
