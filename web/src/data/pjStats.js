const planeswalkers = [
    {
      name : "Liliana", surname:"Vess", life : 6, mana : 6,  weight: 8, actions: 5, reach: 4, move : 2, 
      image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910922/donGions%20imgs/register%20images/planLiliana_ciptar.jpg"),
      damFis : 0.5, damDist : 0, damMag : 1, acFis : 16, acDist : 15, acMag : 14, precision : 0, speed:0, marciality:0,
      block:17, dodge : 16, parry : 17, resist : 16, reflex: 0, firm: 0, temple: 0, style : "blueviolet"
  },
  {
    name : "Gideon", surname:"Jura", life : 7, mana : 6,  weight: 8, actions: 5, reach: 3, move : 2, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910922/donGions%20imgs/register%20images/planGideon_ombatu.jpg"),
    damFis : 1, damDist : 1, damMag : 0, acFis : 14, acDist : 16, acMag : 16, precision : 0, speed:0, marciality:0,
    dodge : 15, block:15, parry : 15, resist : 15, reflex: 0, firm: 0, temple: 0, style : "white"
  },
  {
    name : "Jace", surname:"Beleren", life : 6, mana : 6,  weight: 8, actions: 5, reach: 3, move : 2, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910917/donGions%20imgs/register%20images/planJace_uhtc2f.jpg"),
    damFis : 0.5, damDist : 0, damMag : 1, acFis : 16, acDist : 15, acMag : 14, precision : 0, speed:0, marciality:0,
    block:15, dodge : 15, parry : 16, resist : 15, reflex: 0, firm: 0, temple: 0, style : "blue"
  },
  {
    name : "Nissa", surname:"Revane", life : 5, mana : 8,  weight: 8, actions: 5, reach: 5, move : 2, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910916/donGions%20imgs/register%20images/planNissa_yw0wvd.jpg"),
    damFis : 0.5, damDist : 1, damMag : 1, acFis : 16, acDist : 15, acMag : 14, precision : 0, speed:0, marciality:0,
    block:16, dodge : 14, parry : 16, resist : 16, reflex: 0, firm: 0, temple: 0, style : "green"
  },
  {
    name : "Ral", surname:"Zarek", life : 6, mana : 6,  weight: 8, actions: 5, reach: 3, move : 2, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910916/donGions%20imgs/register%20images/planRal_ihok5x.webp"),
    damFis : 0.5, damDist : 0, damMag : 1, acFis : 16, acDist : 15, acMag : 14, precision : 0, speed:0, marciality:0,
    block:17, dodge : 16, parry : 17, resist : 16, reflex: 0, firm: 0, temple: 0, style : "aqua"
  },
  {
    name : "Ajani", surname:"Goldmane", life : 6, mana : 6,  weight: 8, actions: 5, reach: 3, move : 2, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910916/donGions%20imgs/register%20images/planAjani_nqucg9.webp"),
    damFis : 0.5, damDist : 1, damMag : 0, acFis : 16, acDist : 14, acMag : 16, precision : 0, speed:0, marciality:0,
    block:16, dodge : 16, parry : 16, resist : 16, reflex: 0, firm: 0, temple: 0, style : "yellow"
  },
  {
    name : "Sorin", surname:"Markov", life : 6, mana : 6,  weight: 8, actions: 5, reach: 3, move : 3, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665911168/donGions%20imgs/register%20images/planSorin_ymdbqo.jpg"),
    damFis : 1, damDist : 0, damMag : 1, acFis : 15, acDist : 15, acMag : 15, precision : 0, speed:0, marciality:0,
    block:16, dodge : 15, parry : 15, resist : 15, reflex: 0, firm: 0, temple: 0, style : "maroon"
  },
  {
    name : "Elspeth", surname:"Tirel", life : 7, mana : 6,  weight: 8, actions: 5, reach: 3, move : 2, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910916/donGions%20imgs/register%20images/planElspeth_gtther.webp"),
    damFis : 1, damDist : 1, damMag : 0, acFis : 14, acDist : 16, acMag : 16, precision : 0, speed:0, marciality:0,
    block:16, dodge : 16, parry : 15, resist : 15, reflex: 0, firm: 0, temple: 0, style : "dimgrey"
  },
  {
    name : "Sarkhan", surname:"Sarkhan", life : 6, mana : 6,  weight: 8, actions: 5, reach: 3, move : 3, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910916/donGions%20imgs/register%20images/planSarkhan_uyvvcp.jpg"),
    damFis : 1, damDist : 0, damMag : 1, acFis : 15, acDist : 15, acMag : 15, precision : 0, speed:0, marciality:0,
    block:16, dodge : 15, parry : 15, resist : 16, reflex: 0, firm: 0, temple: 0, style : "red"
  },
  {
    name : "Teferi", surname:"Akosa", life : 5, mana : 6,  weight: 10, actions: 6, reach: 3, move : 2, 
    image : ("https://res.cloudinary.com/dfrda73uc/image/upload/v1665910916/donGions%20imgs/register%20images/planTeferi_nghzw7.jpg"),
    damFis : 1, damDist : 0, damMag : 1, acFis : 15, acDist : 15, acMag : 14, precision : 0, speed:0, marciality:0,
    block:15, dodge : 14, parry : 17, resist : 13, reflex: 0, firm: 0, temple: 0, style : "moccasin"
  }
]
export default planeswalkers