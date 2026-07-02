export const services = [
  {
    id: 'plumbing',
    slug: '/services/plumbing',
    title: 'Plumbing Services',
    tagline: "Indore's Most Trusted Plumbers",
    icon: '🔧',
    image: '/images/plumbing/unnamed.jpg',
    color: 'azure',
    shortDesc: 'From emergency leaks to full pipe installations — same-day service across Indore.',
    groups: [
      {
        name: 'Repairs & Maintenance',
        items: [
          'Leak detection',
          'Pipe repair',
          'Plumbing leak repair',
          'Tap repair',
          'Toilet repair',
          'Shower repair',
          'Water heater (geyser) repair',
          'Drain cleaning',
          'Sewer cleaning',
          'Sewer repair',
        ],
      },
      {
        name: 'Installations & Fittings',
        items: [
          'Tap installation',
          'Toilet installation',
          'Shower installation',
          'Water heater (geyser) installation',
          'Geyser fitting',
          'Water tank installation',
          'Water tank repair',
          'Waste disposal installation',
          'Waste disposal repair',
          'Sump pump installation',
          'Sump pump repair',
        ],
      },
      {
        name: 'Specialist Services',
        items: [
          'Outdoor plumbing system repair',
          'Pool plumbing repair',
        ],
      },
    ],
  },
  {
    id: 'electrical',
    slug: '/services/electrical',
    title: 'Electrical Services',
    tagline: 'Safe, Certified Electrical Work',
    icon: '⚡',
    image: '/images/electrical/unnamed.jpg',
    color: 'amber',
    shortDesc: 'Licensed electricians for wiring, fittings, panel work and safety inspections.',
    groups: [
      {
        name: 'Installation',
        items: [
          'Switch & socket installation',
          'Fan installation & repair',
          'Light fixture installation',
          'MCB & distribution board fitting',
          'Inverter & UPS installation',
          'CCTV & home automation wiring',
          'Earthing & bonding',
        ],
      },
      {
        name: 'Repair & Safety',
        items: [
          'Short circuit diagnosis & repair',
          'Electrical fault tracing',
          'Wiring replacement',
          'Safety inspection & audit',
          'Overload protection',
        ],
      },
    ],
  },
  {
    id: 'interior-design',
    slug: '/services/interior-design',
    title: 'Interior Design',
    tagline: 'Transform Your Space',
    icon: '🏠',
    image: '/images/interior/WhatsApp%20Image%202026-06-28%20at%202.56.00%20PM.jpeg',
    color: 'navy',
    shortDesc: 'End-to-end interior work — design, material selection, and skilled execution in Indore.',
    groups: [
      {
        name: 'Design & Renovation',
        items: [
          'Full home interior design',
          'Modular kitchen design',
          'Bedroom & living room makeovers',
          'Bathroom renovation',
          'Flooring (tiles, vinyl, wooden)',
          'Wall texture & painting',
          'Wardrobe & storage solutions',
        ],
      },
      {
        name: 'Finishing & Décor',
        items: [
          'Custom furniture installation',
          'Curtain & blind fitting',
          'Lighting & ambiance design',
          'False ceiling integration',
        ],
      },
    ],
  },
  {
    id: 'pop-work',
    slug: '/services/pop-work',
    title: 'POP & False Ceiling',
    tagline: 'Expert POP Work & Ceiling Design',
    image: '/images/pop-ceiling.jfif',
    color: 'sky',
    shortDesc: 'POP false ceiling, gypsum board, cornice, and decorative plaster work across Indore.',
    groups: [
      {
        name: 'POP Work',
        items: [
          'POP false ceiling design & installation',
          'Cornice & border work',
          'POP wall panelling',
          'Decorative plaster work',
          'POP repair & restoration',
        ],
      },
      {
        name: 'Gypsum & Grid Ceiling',
        items: [
          'Gypsum board false ceiling',
          'Grid ceiling (office/commercial)',
          'Light cove & tray ceiling',
          'Acoustic ceiling panels',
        ],
      },
    ],
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);
