export interface ContentInterface {
  mainRoute: string;
  paymentForm: {
    link: string;
  };
  prices: {
    current: number;
    original: number;
    percentageOff: number;
    currency: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    heroImage: string;
  };
  program: {
    title: string;
    subtitle: string;
    modules: {
      title: string;
      description: string;
      lessonsList: {
        title: string;
        list: string[];
      }[];
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    faqList: {
      question: string;
      answer: string;
    }[];
  };
  results: {
    title: string;
    subtitle: string;
    resultsList: {
      title: string;
      description: string;
    }[];
  };
  reasons: {
    title: string;
    reasonsList: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonialsList: {
      name: string;
      role: string;
      text: string;
      rating: number;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    ctaButtonText: string;
  };
}
