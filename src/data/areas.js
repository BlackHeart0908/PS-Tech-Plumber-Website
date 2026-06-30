export const areas = [
  {
    id: 'vijay-nagar',
    name: 'Vijay Nagar',
    slug: '/service-areas/vijay-nagar',
    description:
      "Vijay Nagar is one of Indore's fastest-growing and most densely-populated residential areas, known for its high-rise apartments and modern housing societies. The hard-borewell water prevalent here is rich in calcium and magnesium, accelerating limescale buildup inside geysers, taps, and supply pipes. PS Tech regularly handles geyser descaling, pipe de-scaling, and tap replacement across Vijay Nagar's societies. With hundreds of multi-storey buildings sharing common risers, water-pressure issues and overhead-tank overflows are also frequent — our team is trained to diagnose building-level plumbing faults, not just individual unit problems.",
    commonIssues: ['Hard-water limescale in geysers & taps', 'High-rise water-pressure balancing', 'Overhead tank installation & repair', 'Society-level pipe maintenance'],
    localities: ['AB Bypass Road', 'Scheme 78', 'LIG Colony', 'Vijaynagar Square'],
  },
  {
    id: 'nipania',
    name: 'Nipania',
    slug: '/service-areas/nipania',
    description:
      "Nipania has emerged as a premium residential corridor along the Indore-Bhopal highway, attracting gated societies and township developments. New construction here means frequent plumbing commissioning — from fitting geysers and modular kitchen sinks to connecting overhead tanks and water purifiers. PS Tech is a go-to plumber for Nipania's builders and homeowners alike. Monsoon seasons bring waterlogging risks in basement parking lots of society buildings; our sump pump installation service is in high demand every pre-monsoon season in this area.",
    commonIssues: ['New-build plumbing commissioning', 'Water purifier connection', 'Sump pump for basement waterlogging', 'Society common-area plumbing'],
    localities: ['Nipania Main Road', 'Godrej Garden City', 'Super Corridor vicinity'],
  },
  {
    id: 'mahalaxmi-nagar',
    name: 'Mahalaxmi Nagar',
    slug: '/service-areas/mahalaxmi-nagar',
    description:
      "Mahalaxmi Nagar is a well-established mid-density residential area in western Indore, comprising a mix of older bungalows and newer apartment blocks. Older homes here often run galvanised iron (GI) pipes that have begun to corrode after 15–20 years of Indore's hard water, leading to brownish tap water, reduced flow, and pinhole leaks. PS Tech specialises in GI-to-CPVC/UPVC pipe replacement in Mahalaxmi Nagar homes — a once-for-decades fix that eliminates recurring repair costs. We also handle bathroom renovation packages popular with families upgrading older bathrooms.",
    commonIssues: ['Old GI pipe replacement (CPVC/UPVC)', 'Brownish water from corroded pipes', 'Bathroom renovation plumbing', 'Leak detection in hidden walls'],
    localities: ['Mahalaxmi Nagar Main', 'Palasia Junction vicinity', 'Scheme 54 border'],
  },
  {
    id: 'khajrana',
    name: 'Khajrana',
    slug: '/service-areas/khajrana',
    description:
      "Khajrana and its surrounding areas in eastern Indore house a dense mix of independent houses, small businesses, and older colonies. The drainage network in some pockets predates modern standards, making blocked drains and sewer backflow during monsoon a recurring headache for residents. PS Tech carries high-pressure jetting equipment and CCTV-ready drain inspection tools for Khajrana's tougher blockages. Our local team is also experienced with traditional Indian toilet fitting — squat-pan replacement, concealed cistern installation, and seat-cover upgrades.",
    commonIssues: ['Blocked drains & sewer backflow', 'Toilet fitting & replacement', 'Monsoon sewer overflow', 'Drain jetting for older colonies'],
    localities: ['Khajrana Square', 'Sukhliya', 'Bicholi Mardana'],
  },
  {
    id: 'palasia',
    name: 'Palasia',
    slug: '/service-areas/palasia',
    description:
      "Palasia is Indore's central commercial-residential hub, with a busy mix of shops, offices, and residential towers. Water usage intensity is high; commercial kitchens, offices, and densely occupied buildings put heavy load on waste lines and supply systems. PS Tech serves both residential flats and commercial premises in Palasia — from office bathroom upgrades and waste-disposal fitting for restaurant kitchens, to geyser installation in compact urban apartments. Our central location means rapid response times for Palasia emergencies.",
    commonIssues: ['Commercial waste disposal & sink fitting', 'Urban apartment geyser installation', 'Water meter & pressure issues', 'Emergency leak response in commercial buildings'],
    localities: ['Palasia Square', 'MG Road vicinity', 'Chhawni', 'Nehru Park area'],
  },
  {
    id: 'bhawarkuan',
    name: 'Bhawarkuan',
    slug: '/service-areas/bhawarkuan',
    description:
      "Bhawarkuan is a major residential and transit node in south-west Indore. The area includes large housing societies, individual bungalows, and the gateway to Indore's rapidly expanding outskirts. Water tanks on rooftops in this area are often undersized for growing households — PS Tech installs and replaces storage tanks (500 L to 10,000 L capacity) with proper inlet float valves, overflow pipes, and UV-safe tank covers. We also handle complete outdoor plumbing including garden taps, car-wash points, and boundary-wall water connections.",
    commonIssues: ['Overhead water tank replacement & upsizing', 'Float valve & ball-cock repair', 'Outdoor garden & car-wash plumbing', 'Society boundary water connections'],
    localities: ['Bhawarkuan Square', 'Banganga', 'Rajendra Nagar', 'Scheme 136 vicinity'],
  },
];

export const getAreaById = (id) => areas.find((a) => a.id === id);
