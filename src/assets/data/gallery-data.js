import kuva1 from '..//images/recent/test1.jpg'
import kuva2 from '../images/recent/test2.jpg'
import kuva3 from '../images/recent/test3.jpg'

export const galleryData = [
  {
    id: 1,
    coverimage: kuva1,
    gategory: 'Landsape',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: [kuva1, kuva2, kuva3]
  },
  {
    id: 2,
    coverimage: kuva2,
    gategory: 'Macros',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: [kuva2, kuva1, kuva3]
  },
  {
    id: 3,
    coverimage: kuva3,
    gategory: 'Animals',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: [kuva3, kuva2, kuva1]
  },
  {
    id: 4,
    coverimage: kuva2,
    gategory: 'Animals',
    title: 'Pictures from Finland',
    description: 'Here are some of my favorite landscape pictures from my home country.',
    images: [kuva1, kuva2, kuva3]
  }
]