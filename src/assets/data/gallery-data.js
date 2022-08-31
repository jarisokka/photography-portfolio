import { macroData } from './macros-data'
import { finlandData } from './finland-data'
import { winterData } from './winter-data'
import { worldData } from './world-data'
import { birdsData } from './birds-data'
import { mammalsData } from './mammals-data'

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
    coverimage: worldData[0].image,
    gategory: 'Landscapes',
    title: 'Around the world',
    description: 'Some memorable sceneries from my travels',
    images: worldData
  },
  {
    id: 4,
    coverimage: macroData[0].image,
    gategory: 'Macros',
    title: 'Small and beautiful',
    description: 'Macro world is so facinating with all those small details.',
    images: macroData
  },
  {
    id: 5,
    coverimage: birdsData[3].image,
    gategory: 'Animals',
    title: 'Fluffy beautifull birds',
    description: 'Birds are so delicate and interesting creatures.',
    images: birdsData
  },
  {
    id: 6,
    coverimage: mammalsData[1].image,
    gategory: 'Animals',
    title: 'Creatures of all size',
    description: 'Furry creatures are fascinating and challenging to photograph',
    images: mammalsData
  }
]