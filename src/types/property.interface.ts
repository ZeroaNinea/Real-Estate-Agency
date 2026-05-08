export default interface Property {
  id: number
  title: string
  description: string
  price: number
  image: string
  location: string
  type: 'apartment' | 'house' | 'villa' | 'studio'
  bedrooms: number
  area: number
}

export type PropertyType = 'apartment' | 'house' | 'villa' | 'studio'

export const propertyTypes: PropertyType[] = ['apartment', 'house', 'villa', 'studio']
