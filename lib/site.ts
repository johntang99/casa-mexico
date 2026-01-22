// Site configuration for Casa Mexico
// Mexican restaurant - Orange & Green theme

export const siteConfig = {
  brand: {
    name: 'Casa Mexico',
    tagline: 'Authentic Mexican Cuisine',
    slogan: '¡Sabor Auténtico!',
    sloganEnglish: 'Authentic Flavor, Vibrant Culture',
    description: 'Experience the bold flavors and warm hospitality of authentic Mexican cuisine in the heart of New York.',
  },

  contact: {
    phone: {
      display: '646-555-5555',
      raw: '+16465555555',
      href: 'tel:+16465555555',
    },
    email: {
      display: 'contact@casamexico.com',
      href: 'mailto:contact@casamexico.com',
    },
    address: {
      street: '123 Mexico Rd',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      full: '123 Mexico Rd, New York, NY 10001',
    },
    hours: {
      monday: { open: '11:00 AM', close: '11:00 PM' },
      tuesday: { open: '11:00 AM', close: '11:00 PM' },
      wednesday: { open: '11:00 AM', close: '11:00 PM' },
      thursday: { open: '11:00 AM', close: '11:00 PM' },
      friday: { open: '11:00 AM', close: '12:00 AM' },
      saturday: { open: '11:00 AM', close: '12:00 AM' },
      sunday: { open: '11:00 AM', close: '10:00 PM' },
    },
    hoursFormatted: [
      { days: 'Monday - Thursday', hours: '11:00 AM - 11:00 PM' },
      { days: 'Friday - Saturday', hours: '11:00 AM - 12:00 AM' },
      { days: 'Sunday', hours: '11:00 AM - 10:00 PM' },
    ],
  },

  schema: {
    businessType: 'Restaurant',
    url: 'https://casamexico.com',
    servesCuisine: 'Mexican',
    priceRange: '$$',
  },

  seo: {
    defaultTitle: 'Casa Mexico | Authentic Mexican Restaurant | New York',
    titleTemplate: '%s | Casa Mexico',
    defaultDescription:
      'Experience authentic Mexican cuisine in New York. Fresh ingredients, traditional recipes, and vibrant atmosphere. Tacos, burritos, margaritas, and more!',
    keywords: [
      'mexican restaurant NYC',
      'authentic mexican food',
      'tacos',
      'burritos',
      'margaritas',
      'mexican delivery',
      'enchiladas',
      'guacamole',
    ],
  },

  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'About', href: '/about' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Catering', href: '/catering' },
      { name: 'Contact', href: '/contact' },
    ],
    footer: {
      menu: [
        { name: 'Tacos', href: '/menu#tacos' },
        { name: 'Burritos', href: '/menu#burritos' },
        { name: 'Margaritas', href: '/menu#margaritas' },
        { name: 'Specialties', href: '/menu#specialties' },
      ],
      quickLinks: [
        { name: 'Order Online', href: '/order' },
        { name: 'Reservations', href: '/reservations' },
        { name: 'Catering', href: '/catering' },
        { name: 'Gift Cards', href: '/gift-cards' },
      ],
    },
  },

  cta: {
    primary: {
      text: 'Order Now',
      href: '/order',
    },
    secondary: {
      text: 'Reservations',
      href: '/reservations',
    },
  },

  settings: {
    acceptReservations: true,
    deliveryAvailable: true,
    takeoutAvailable: true,
    cateringAvailable: true,
    cuisineType: 'Mexican',
    specialties: [
      'Fresh Guacamole',
      'Handmade Tortillas',
      'Award-Winning Tacos',
      'Premium Tequila',
      'Family Recipes',
      'Authentic Mole',
    ],
    amenities: [
      'Dine-in',
      'Takeout',
      'Delivery',
      'Catering',
      'Full Bar',
      'Happy Hour',
      'Outdoor Seating',
      'Family Friendly',
    ],
  },
};

export const brand = siteConfig.brand;
export const contact = siteConfig.contact;
export const navigation = siteConfig.navigation;
export const seo = siteConfig.seo;
export const cta = siteConfig.cta;
export const settings = siteConfig.settings;
export const schema = siteConfig.schema;

export default siteConfig;
