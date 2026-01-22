// Menu for Casa Mexico - Authentic Mexican Restaurant

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  nameSpanish: string;
  category: string;
  description: string;
  price: number;
  image?: string;
  spicyLevel?: number; // 0-3
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  popular?: boolean;
  houseSpecial?: boolean;
}

export const menuItems: MenuItem[] = [
  // TACOS
  {
    id: '1',
    slug: 'tacos-al-pastor',
    name: 'Tacos Al Pastor',
    nameSpanish: 'Tacos Al Pastor',
    category: 'Tacos',
    description: 'Marinated pork with pineapple, onions, and cilantro',
    price: 14.95,
    spicyLevel: 2,
    popular: true,
    houseSpecial: true,
  },
  {
    id: '2',
    slug: 'carne-asada-tacos',
    name: 'Carne Asada Tacos',
    nameSpanish: 'Tacos de Carne Asada',
    category: 'Tacos',
    description: 'Grilled steak with fresh salsa and guacamole',
    price: 15.95,
    popular: true,
  },
  {
    id: '3',
    slug: 'fish-tacos',
    name: 'Baja Fish Tacos',
    nameSpanish: 'Tacos de Pescado',
    category: 'Tacos',
    description: 'Beer-battered fish with cabbage slaw and chipotle mayo',
    price: 14.95,
    spicyLevel: 1,
  },

  // BURRITOS
  {
    id: '10',
    slug: 'burrito-california',
    name: 'California Burrito',
    nameSpanish: 'Burrito California',
    category: 'Burritos',
    description: 'Carne asada, fries, cheese, guacamole, and sour cream',
    price: 16.95,
    popular: true,
  },
  {
    id: '11',
    slug: 'burrito-carnitas',
    name: 'Carnitas Burrito',
    nameSpanish: 'Burrito de Carnitas',
    category: 'Burritos',
    description: 'Slow-cooked pork with rice, beans, and fresh pico',
    price: 15.95,
  },

  // ENCHILADAS
  {
    id: '20',
    slug: 'enchiladas-verdes',
    name: 'Enchiladas Verdes',
    nameSpanish: 'Enchiladas Verdes',
    category: 'Enchiladas',
    description: 'Chicken enchiladas in tangy green tomatillo sauce',
    price: 16.95,
    spicyLevel: 2,
  },
  {
    id: '21',
    slug: 'mole-enchiladas',
    name: 'Mole Enchiladas',
    nameSpanish: 'Enchiladas de Mole',
    category: 'Enchiladas',
    description: 'Rich mole poblano sauce with sesame seeds',
    price: 17.95,
    houseSpecial: true,
  },

  // ESPECIALIDADES
  {
    id: '30',
    slug: 'mole-poblano',
    name: 'Mole Poblano',
    nameSpanish: 'Mole Poblano',
    category: 'Especialidades',
    description: 'Traditional mole sauce with chicken, rice, and tortillas',
    price: 19.95,
    spicyLevel: 1,
    houseSpecial: true,
  },
  {
    id: '31',
    slug: 'carnitas',
    name: 'Carnitas Platter',
    nameSpanish: 'Carnitas',
    category: 'Especialidades',
    description: 'Slow-cooked pork served with rice, beans, and tortillas',
    price: 18.95,
    popular: true,
  },
];

export const categories = [
  { id: 'antojitos', name: 'Antojitos', nameSpanish: 'Antojitos', icon: '🌶️' },
  { id: 'tacos', name: 'Tacos', nameSpanish: 'Tacos', icon: '🌮' },
  { id: 'burritos', name: 'Burritos', nameSpanish: 'Burritos', icon: '🌯' },
  { id: 'enchiladas', name: 'Enchiladas', nameSpanish: 'Enchiladas', icon: '🫔' },
  { id: 'especialidades', name: 'Specialties', nameSpanish: 'Especialidades', icon: '⭐' },
  { id: 'margaritas', name: 'Margaritas', nameSpanish: 'Margaritas', icon: '🍹' },
];

export const getMenuByCategory = (category: string) => {
  return menuItems.filter(item => item.category === category);
};

export const getHouseSpecials = () => {
  return menuItems.filter(item => item.houseSpecial);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.popular);
};

export default menuItems;
