import type Property from '@/types/property.interface'

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Apartment',
    description: 'Beautiful apartment in the city center.',
    price: 120000,
    image: 'https://static.photos/estate/320x240/1.webp',
    location: 'Yerevan',
    type: 'apartment',
    bedrooms: 2,
    area: 85,
  },
  {
    id: 2,
    title: 'Luxury House',
    description: 'Spacious house with a garden.',
    price: 350000,
    image: 'https://static.photos/estate/320x240/2.webp',
    location: 'Dilijan',
    type: 'house',
    bedrooms: 4,
    area: 200,
  },
  {
    id: 3,
    title: 'Cozy Studio',
    description: 'Perfect for one person.',
    price: 60000,
    image: 'https://static.photos/estate/320x240/3.webp',
    location: 'Gyumri',
    type: 'studio',
    bedrooms: 1,
    area: 40,
  },
]
