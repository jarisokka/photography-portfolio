import kuva1 from '../images/test1.jpg'
import kuva2 from '../images/test2.jpg'
import kuva3 from '../images/test3.jpg'
import { macroData } from './macros-data'
import { animalData } from './animals-data'
import { landscapeData } from './landscapes-data'

export const galleryData = [
  {
    id: 1,
    coverimage: kuva1,
    gategory: 'Landsape',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: landscapeData
  },
  {
    id: 2,
    coverimage: kuva2,
    gategory: 'Macros',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: macroData
  },
  {
    id: 3,
    coverimage: kuva3,
    gategory: 'Animals',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: animalData
  },
  {
    id: 4,
    coverimage: kuva2,
    gategory: 'Animals',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: animalData
  }
]