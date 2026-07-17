export type Industry = 'detailing' | 'pest' | 'cleaning';

export type Service = {
  title: string;
  description: string;
  confirmationRequired?: boolean;
};

export type Source = {
  label: string;
  url: string;
  supports: string;
};

export type PublicReview = {
  reviewerName: string;
  rating: number;
  excerpt?: string;
  relativeDate: string;
};

export type Prospect = {
  slug: string;
  businessName: string;
  shortName: string;
  monogram: string;
  industry: Industry;
  city: string;
  state: string;
  phone: string;
  phoneHref: string;
  email?: string;
  address?: string;
  accent: string;
  accentSoft: string;
  ink: string;
  surface: string;
  visualVariant: string;
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  review: {
    heading: string;
    rating: number;
    count: number;
    status: 'verified-directory' | 'research-snapshot';
    sourceLabel: string;
    sourceUrl: string;
    reviews: PublicReview[];
  };
  services: Service[];
  process: Array<{ title: string; description: string }>;
  highlights: Array<{ label: string; value: string }>;
  serviceAreas: string[];
  faq: Array<{ question: string; answer: string; confirmationRequired?: boolean }>;
  websiteSituation: string;
  sources: Source[];
  ownerConfirmations: string[];
};

export const prospect: Prospect = {
  "slug": "bubbled-up-detailing",
  "businessName": "Bubbled Up Car Wash & Detailing",
  "shortName": "Bubbled Up",
  "monogram": "BU",
  "industry": "detailing",
  "city": "Tulsa",
  "state": "OK",
  "phone": "(918) 453-6363",
  "phoneHref": "+19184536363",
  "address": "4338 N Peoria Ave, Tulsa, OK 74106",
  "accent": "#55d6e8",
  "accentSoft": "#102d34",
  "ink": "#f8fafc",
  "surface": "#081b24",
  "visualVariant": "bubble",
  "heroKicker": "Hand-wash & detailing concept · Tulsa",
  "heroTitle": "The hand-wash finish deserves a polished front door.",
  "heroDescription": "A walk-in and appointment concept that makes the wash, detail, truck, and mobile options easy to understand.",
  "primaryCta": "Request a detail",
  "review": {
    "heading": "What Tulsa drivers say about Bubbled Up.",
    "rating": 4.9,
    "count": 52,
    "status": "research-snapshot",
    "sourceLabel": "Google Maps",
    "sourceUrl": "https://www.google.com/maps/search/?api=1&query=Bubbled%20Up%20Car%20Wash%20%26%20Detailing%20Tulsa%20OK%20918%20453%206363",
    "reviews": [
      {
        "reviewerName": "Brother Yoseph",
        "rating": 5,
        "excerpt": "This place is a jewel",
        "relativeDate": "3 months ago"
      },
      {
        "reviewerName": "Cheryl Lawson",
        "rating": 5,
        "excerpt": "Everyone was so nice",
        "relativeDate": "3 years ago"
      },
      {
        "reviewerName": "Gabrielle Randall",
        "rating": 5,
        "excerpt": "the exterior was AMAZING.",
        "relativeDate": "2 years ago"
      }
    ]
  },
  "services": [
    {
      "title": "Hand car wash",
      "description": "A direct path for drivers looking for a hands-on wash experience."
    },
    {
      "title": "Auto detailing",
      "description": "An appointment request for more involved interior or exterior work."
    },
    {
      "title": "Truck & mobile wash",
      "description": "Verified public categories, with exact availability confirmed per request."
    }
  ],
  "process": [
    {
      "title": "Choose wash or detail",
      "description": "Start with the level of care the vehicle needs."
    },
    {
      "title": "Share vehicle details",
      "description": "Provide vehicle type, preferred day, and any problem areas."
    },
    {
      "title": "Confirm the visit",
      "description": "The business confirms whether to walk in, book, or arrange mobile service."
    }
  ],
  "highlights": [
    {
      "label": "Verified categories",
      "value": "Wash + detail"
    },
    {
      "label": "Public address",
      "value": "N Peoria Ave"
    },
    {
      "label": "Concept focus",
      "value": "Walk-in or appointment"
    }
  ],
  "serviceAreas": [
    "Tulsa",
    "Mobile coverage — confirm"
  ],
  "faq": [
    {
      "question": "Can I come in without an appointment?",
      "answer": "Walk-in hand washes are publicly advertised. Call ahead for detailing, trucks, or mobile service."
    },
    {
      "question": "Is every vehicle washed by hand?",
      "answer": "Yes. Bubbled Up presents itself as Tulsa’s hand car wash and detailing shop."
    },
    {
      "question": "Do you handle trucks or mobile jobs?",
      "answer": "Truck wash and mobile car wash are listed services; call with the vehicle and location to confirm availability."
    }
  ],
  "websiteSituation": "No clearly owned primary domain was located; an established BBB profile is available.",
  "sources": [
    {
      "label": "BBB Business Profile",
      "url": "https://www.bbb.org/us/ok/tulsa/profile/car-wash/bubbled-up-car-wash-1025-38107142",
      "supports": "Phone, address, owner contact, and car wash/detailing/truck/mobile categories."
    },
    {
      "label": "Google Maps listing search",
      "url": "https://www.google.com/maps/search/?api=1&query=Bubbled%20Up%20Car%20Wash%20%26%20Detailing%20Tulsa%20OK",
      "supports": "Public listing and rating snapshot to recheck before launch."
    }
  ],
  "ownerConfirmations": [
    "Current rating and review count",
    "Current hours",
    "Walk-in policy",
    "Mobile coverage",
    "Current service menu and prices",
    "Permission to use project photos"
  ]
};
