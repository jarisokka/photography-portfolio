import kuva2 from '../images/test2.jpg'
import { macroData } from './macros-data'
import { animalData } from './animals-data'
//import { landscapeData } from './landscapes-data'
import { finlandData } from './finland-data'
import { winterData } from './winter-data'

export const galleryData = [
  {
    id: 1,
    coverimage: finlandData[0].image,
    gategory: 'Landsape',
    title: 'Sceneries from Finland',
    description: 'My favorite summer and autumn landscapes from Finland.',
    images: finlandData
  },
  {
    id: 2,
    coverimage: winterData[3].image,
    gategory: 'Landsape',
    title: 'Wintertime in Finland',
    description: 'My favorite wintertime landscapes from Finland.',
    images: winterData
  },
  {
    id: 3,
    coverimage: macroData[0].image,
    gategory: 'Macros',
    title: 'Small and beautiful',
    description: 'Macro world is so facinating with all those small details.',
    images: macroData
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