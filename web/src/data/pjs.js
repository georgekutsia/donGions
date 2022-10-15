import {v4 as uuid} from 'uuid'
//físico, mágico, a distancia
//esquiva, bloqueo, parada, resistencia
const planeswalkers = [
    {
    name: "Liliana",
    image: "https://media.magic.wizards.com/images/featured/EN_Liliana_Header.jpg",
    life: 4,
    mana: 6,
    move: 5,
  },
  {
    name: "Gideon",
    image: "https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg",
    life: 7,
    mana: 4,
    move: 3,
    esence : 0,

  },
  {
    name: "Jace",
    image: "https://media.magic.wizards.com/images/featured/EN_Jace_6_Gallery.jpg",
    life: 5,
    mana: 6,
    move: 4,
    esence: 0,
    damage:[1, 2, 1],
    ac:[10, 13, 12],
    def:[10, 14, 14, 10],
    prec: 0,
    speed: 0
  },
  {
    name: "Nissa Revane",
    image: "https://media.wizards.com/2015/images/daily/c4rdar7_S91CI4OVF5.jpg",
    life: 5,
    mana: 6,
    move: 4,
    esence: 0,
    damage:[1, 2, 1],
    ac:[10, 13, 12],
    def:[10, 14, 14, 10],
    prec: 0,
    speed: 0
  }
]
export default planeswalkers