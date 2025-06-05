// types/destination.ts

export interface DestinationData {
    slug: string;
    name: string;
    flag: string;
    hero: {
      title: string;
      subtitle: string;
      image: string;
    };
    about: {
      heading: string;
      description: string;
      processTime: string;
      features: string[];
    };
    welcome: {
      title: string;
      content: string;
    };
    visaTypes: {
      type: string;
      description: string;
    }[];
    howItWorks: string[];
    insurance: {
      recommended: boolean;
      originalPrice: number;
      discountedPrice: number;
      description: string;
    };
    pricing: {
      baseFee: number;
      serviceFee: number;
      discount: number;
      total: number;
    };
    faqs: {
      question: string;
      answer: string;
    }[];
  }
  