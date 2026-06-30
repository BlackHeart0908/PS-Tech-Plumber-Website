// Each entry: { id, file, alt, category, title }
// file → path relative to /public/images/
// When adding real photos: drop file into public/images/<category>/, update this array.
// SEO filenames and alt text are already set — just match the filename.

export const galleryItems = [
  // PLUMBING
  {
    id: 'pl-01',
    file: '/images/plumbing/plumber-geyser-installation-vijay-nagar-indore.jpg',
    alt: 'PS Tech technician installing a geyser in Vijay Nagar, Indore',
    category: 'plumbing',
    title: 'Geyser Installation – Vijay Nagar',
  },
  {
    id: 'pl-02',
    file: '/images/plumbing/pipe-leak-repair-indore.jpg',
    alt: 'PS Tech plumber fixing a burst pipe in an Indore home',
    category: 'plumbing',
    title: 'Emergency Pipe Leak Repair',
  },
  {
    id: 'pl-03',
    file: '/images/plumbing/tap-installation-indore-kitchen.jpg',
    alt: 'New kitchen tap installation by PS Tech in Indore',
    category: 'plumbing',
    title: 'Kitchen Tap Installation',
  },
  {
    id: 'pl-04',
    file: '/images/plumbing/water-tank-installation-indore.jpg',
    alt: 'Overhead water tank installation by PS Tech in Indore',
    category: 'plumbing',
    title: 'Water Tank Installation',
  },
  {
    id: 'pl-05',
    file: '/images/plumbing/drain-cleaning-service-indore.jpg',
    alt: 'Drain cleaning and jetting service in Indore by PS Tech',
    category: 'plumbing',
    title: 'Drain Cleaning & Jetting',
  },
  {
    id: 'pl-06',
    file: '/images/plumbing/toilet-installation-indore.jpg',
    alt: 'Concealed cistern toilet installation in Indore',
    category: 'plumbing',
    title: 'Toilet Installation',
  },
  {
    id: 'pl-07',
    file: '/images/plumbing/sump-pump-installation-indore.jpg',
    alt: 'Sump pump installed by PS Tech for monsoon waterlogging in Indore',
    category: 'plumbing',
    title: 'Sump Pump – Monsoon-Ready',
  },
  {
    id: 'pl-08',
    file: '/images/plumbing/shower-installation-indore-bathroom.jpg',
    alt: 'Shower fitting and installation in Indore bathroom',
    category: 'plumbing',
    title: 'Shower Fitting',
  },

  // ELECTRICAL
  {
    id: 'el-01',
    file: '/images/electrical/electrical-panel-installation-indore.jpg',
    alt: 'MCB distribution board installation by PS Tech electrician in Indore',
    category: 'electrical',
    title: 'MCB Panel Installation',
  },
  {
    id: 'el-02',
    file: '/images/electrical/fan-installation-indore.jpg',
    alt: 'Ceiling fan installation by certified electrician in Indore',
    category: 'electrical',
    title: 'Fan Installation',
  },
  {
    id: 'el-03',
    file: '/images/electrical/home-wiring-repair-indore.jpg',
    alt: 'Home wiring fault repair by PS Tech in Indore',
    category: 'electrical',
    title: 'Wiring Fault Repair',
  },

  // INTERIOR
  {
    id: 'in-01',
    file: '/images/interior/modular-kitchen-design-indore.jpg',
    alt: 'Modular kitchen interior design and installation in Indore by PS Tech',
    category: 'interior',
    title: 'Modular Kitchen Design',
  },
  {
    id: 'in-02',
    file: '/images/interior/bathroom-renovation-indore.jpg',
    alt: 'Complete bathroom renovation in Indore home by PS Tech',
    category: 'interior',
    title: 'Bathroom Renovation',
  },
  {
    id: 'in-03',
    file: '/images/interior/living-room-interior-indore.jpg',
    alt: 'Living room interior makeover by PS Tech in Indore',
    category: 'interior',
    title: 'Living Room Makeover',
  },
  {
    id: 'in-04',
    file: '/images/interior/bedroom-wardrobe-indore.jpg',
    alt: 'Custom bedroom wardrobe installation in Indore',
    category: 'interior',
    title: 'Bedroom & Wardrobe',
  },

  // POP / CEILING
  {
    id: 'pop-01',
    file: '/images/pop/pop-false-ceiling-design-indore.jpg',
    alt: 'POP false ceiling design and installation in Indore living room',
    category: 'pop',
    title: 'POP False Ceiling – Living Room',
  },
  {
    id: 'pop-02',
    file: '/images/pop/gypsum-false-ceiling-indore.jpg',
    alt: 'Gypsum board false ceiling installed by PS Tech in Indore',
    category: 'pop',
    title: 'Gypsum False Ceiling',
  },
  {
    id: 'pop-03',
    file: '/images/pop/pop-cornice-work-indore.jpg',
    alt: 'Decorative POP cornice and border work in Indore home',
    category: 'pop',
    title: 'POP Cornice & Border Work',
  },
  {
    id: 'pop-04',
    file: '/images/pop/light-cove-ceiling-indore.jpg',
    alt: 'Light cove and LED tray ceiling design in Indore',
    category: 'pop',
    title: 'LED Cove Ceiling',
  },
];

export const categories = [
  { id: 'all',       label: 'All Work' },
  { id: 'plumbing',  label: 'Plumbing' },
  { id: 'electrical',label: 'Electrical' },
  { id: 'interior',  label: 'Interior' },
  { id: 'pop',       label: 'POP & Ceiling' },
];
