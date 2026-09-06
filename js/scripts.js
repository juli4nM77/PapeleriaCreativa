const products = [
  {
    id: 9,
    name: 'Disney Saisons',
    price: 1500,
    description: 'Libro Disney Estaciones de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/olaf.jpeg'
  },
  {
    id: 10,
    name: 'Favorite Cartoon 4',
    price: 690,
    description: 'Libro Favorite Cartoon 4 de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon.jpeg'
  },
  {
    id: 11,
    name: 'Disney Grandes Clásicos',
    price: 1500,
    description: 'Libro Disney Grandes Clásicos de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/mowgli.jpeg'
  },
  {
    id: 12,
    name: 'Disney Favorite Tv Shows',
    price: 890,
    description: 'Libro Disney Favorite Tv Shows de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/avatar.jpeg'
  },
  {
    id: 13,
    name: 'Favorite Cartoon 2',
    price: 690,
    description: 'Libro Favorite Cartoon 2 de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/lossimpsons.jpeg'
  },
  {
    id: 14,
    name: 'Disney Reina',
    price: 1500,
    description: 'Libro Disney Reina de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/reina.jpeg'
  },
  {
    id: 15,
    name: 'Disney Portraits',  
    price: 1500,
    description: 'Libro Disney Portraits de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/stich.jpeg'
  },
  {
    id: 16,
    name: 'Disney Princesses',
    price: 1500,
    description: 'Libro Disney Princesses de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/princesa.jpeg'
  },
  {
    id: 17,
    name: 'Best of Pixar',
    price: 1500,
    description: 'Libro Pixar de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/pixar.jpeg'
  },
  {
    id: 18,
    name: 'Disney Villains',
    price: 1500,
    description: 'Libro Disney Villains de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/villanos.jpeg'
  },
  {
    id: 19,
    name: 'Disney Quien soy Alicia',
    price: 1500,
    description: 'Libro Disney Quien soy Alicia de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/alicia.jpeg'
  },
  {
    id: 20,
    name: 'Disney Bebes de Peliculas',
    price: 1500,
    description: 'Libro Disney Bebes de Peliculas de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/bebes.jpeg'
  },
  {
    id: 21,
    name: 'Ositos Cariñositos 2',
    price: 890,
    description: 'Libro Ositos Cariñositos 2 de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/ositos.jpeg'
  },
  {
    id: 22,
    name: 'Animales Bebés',
    price: 1500,
    description: 'Libro Animales Bebés de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/animalesbebes.jpeg'
  },
  {
    id: 23,
    name: 'Disney Familia',
    price: 1500,
    description: 'Libro Disney Familia de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/familia.jpeg'
  },
  {
    id: 24,
    name: 'Pixar ',  
    price: 1500,
    description: 'Libro Pixar de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/pixar1.jpeg'
  },
  {
    id: 25,
    name: 'Pixar 2',
    price: 1500,
    description: 'Libro Pixar 2 de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/pixar2.jpeg'
  },
  {
    id: 26,
    name: 'Disney Grandes Clásicos 2',
    price: 1500,
    description: 'Libro Disney Grandes Clásicos de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/grandesclasicos2.jpeg'
  },
  {
    id: 27,
    name: 'Disney Grandes Clásicos 8',
    price: 1500,
    description: 'Libro Disney Grandes Clásicos 8 de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/grandesclasicos8.jpeg'
  },
  {
    id: 28,
    name: 'Disney Bestias',
    price: 1500,
    description: 'Libro Disney Bestias de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/bestias.jpeg'
  },
  {
    id: 29,
    name: 'Disney Hiver',
    price: 1500,
    description: 'Libro Disney Hiver de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/hiver.jpeg'
  },
  {
    id: 30,
    name: 'Disney Grandes Clásicos 5',
    price: 1500,
    description: 'Libro Disney Grandes Clásicos 5 de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/grandesclasicos5.jpeg'
  },
  {
    id: 31,
    name: 'Disney Criaturas Fantásticas',
    price: 1500,
    description: 'Libro Disney Criaturas Fantásticas de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/criaturasfantasticas.jpeg'
  },
  {
    id: 32,
    name: 'Disney Reina y Golfo',
    price: 1500,
    description: 'Libro Disney Reina y Golfo de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/reinaygolfo.jpeg'
  },
  {
    id: 33,
    name: 'Disney Bestiario',
    price: 1500,
    description: 'Libro Disney Bestiario de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/bestiario.jpeg'
  },
  {
    id: 34,
    name: 'Favorite Cartoon 5',
    price:590,
    description: 'Libro Favorite Cartoon 5 de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon5.jpeg'
  },
  {
    id: 35,
    name: 'Favorite Cartoon 1',
    price: 690,
    description: 'Libro Favorite Cartoon 1 de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon1.jpeg'
  },
  {
    id: 36,
    name: 'Favorite Cartoon 3',
    price: 590,
    description: 'Libro Favorite Cartoon 3 de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon3.jpeg'
  },
  {
    id: 37,
    name: 'Favorite Cartoon 6',
    price: 690,
    description: 'Libro Favorite Cartoon 6 de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon6.jpeg'
  },
  {
    id: 38,
    name: 'Favorite Cartoon 7',
    price: 590,
    description: 'Libro Favorite Cartoon 7 de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon7.jpeg'
  },
  {
    id: 39,
    name: 'Favorite Cartoon 8',
    price: 590,
    description: 'Libro Favorite Cartoon 8 de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon8.jpeg'
  },
  {
    id: 40,
    name: 'Favorite Cartoon 9',
    price: 590,
    description: 'Libro Favorite Cartoon 9 de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/cartoon9.jpeg'
  },
  {
    id: 41,
    name: 'Disney Best of',
    price: 1500,
    description: 'Libro Disney Best of de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/bestof.jpeg'
  },
  {
    id: 42,
    name: 'Disney Mickey Mago',
    price: 1500,
    description: 'Libro Disney Mickey Mago de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/mickeymago.jpeg'
  },
  {
    id: 43,
    name: 'Disney Capitan Garfio',
    price: 1500,
    description: 'Libro Disney Capitan Garfio de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/capitangarfio.jpeg'
  },
  {
    id: 44,
    name: 'Disney Stitch',
    price: 890,
    description: 'Libro Disney Stitch de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/stitch.jpeg'
  },
  {
    id: 45,
    name: 'Disney Señora Potts',
    price: 1500,
    description: 'Libro Disney Señora Potts de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/senorapotts.jpeg'
  },
  {
    id: 46,
    name: 'Disney Naturaleza',
    price: 1500,
    description: 'Libro Disney Naturaleza de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/naturaleza.jpeg'
  },
  {
    id: 47,
    name: 'Disney Reina Malvada',
    price: 1500,
    description: 'Libro Disney Reina Malvada de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/reinamalvada.jpeg'
  },
  {
    id: 48,
    name: 'Disney Mensajes Misteriosos',
    price: 1500,
    description: 'Libro Disney Mensajes Misteriosos de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/mensajesmisteriosos.jpeg'
  },
  {
    id: 49,
    name: 'Disney Mejores Bebés',
    price: 1500,
    description: 'Libro Disney Mejores Bebés de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/mejoresbebes.jpeg'
  },
  {
    id: 50,
    name: 'Scooby Doo',
    price: 1500,
    description: 'Libro Scooby Doo de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/scoobydoo.jpeg'
  },
  {
    id: 51,
    name: 'Looney Tunes 3',
    price: 1500,
    description: 'Libro Looney Tunes 3 de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/looneytunes3.jpeg'
  },
  {
    id: 52,
    name: 'Disney Vitrales',
    price: 1500,
    description: 'Libro Disney Vitrales de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/vitrales.jpeg'
  },
  {
    id: 53,
    name: 'Disney Grandes Clásicos Aladin',
    price: 1500,
    description: 'Libro Disney Grandes Clásicos Aladin de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/grandesclasicosaladin.jpeg'
  },
  {
    id: 54,
    name: 'Disney La Sirenita',
    price: 890,
    description: 'Libro Disney La Sirenita de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/lasirenita.jpeg'
  },
  {
    id: 55,
    name: 'Looney Tunes 2',
    price: 1500,
    description: 'Libro Looney Tunes 2 de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/looneytunes2.jpeg'
  },
{id: 56,
    name: 'Disney Descubre El Personaje',
    price: 690,
    description: 'Libro Disney Descubre El Personaje Merida de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/merida.jpeg'
  },
  {id: 57,
    name: 'Disney Moana 2',
    price: 990,
    description: 'Libro Disney Moana 2 de 60 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/moana2.jpeg'
  },
  {id: 58,
    name: 'Disney winnie the pooh',
    price: 890,
    description: 'Libro Disney winnie the pooh de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/winnie.jpeg'
  },
  {id: 59,
    name: 'Disney Bebé Animales El Rey León',
    price: 790,
    description: 'Libro Disney Bebé Animales El Rey León de 40 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/elreyleon.jpeg'
  },
  {id: 60,
    name: 'Favorite Cartoon Po',
    price: 690,
    description: 'Libro Favorite Cartoon Po de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/po.jpeg'
  },
  {id: 61,
    name: 'Disney Best of Love Stories',
    price: 1500,
    description: 'Libro Disney Best of Love Stories de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/lovestories.jpeg'
  },
  {id: 62,
    name: 'Libro Winx Club',
    price: 690,
    description: 'Libro Winx Club de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/winxclub.jpeg'
  },
  {id: 63,
    name: 'Libro Bob Esponja',
    price: 590,
    description: 'Libro Bob Esponja de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/bobesponja.jpeg'
  },
  {id: 64,
    name: 'Libro Mega Mix Cartoon',
    price: 1500,
    description: 'Libro Mega Mix Cartoon de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/megamixcartoon.jpeg'
  },
  {id: 65,
    name: 'Libro Mangas',
    price: 1500,
    description: 'Libro Mangas de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/mangas.jpeg'
  },
  {id: 66,
    name: 'Libro Triangulos Magicos',
    price: 1500,
    description: 'Libro Triangulos Magicos de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/triangulosmagicos.jpeg'
  },
  {id: 67,
    name: 'Libro Animales Adorables',
    price: 690,
    description: 'Libro Animales Adorables de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/animalesadorables.jpeg'
  },
  {id: 68,
    name: 'Libro Felinos',
    price: 1500,
    description: 'Libro Felinos de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/felinos.jpeg'
  },
  {id: 69,
    name: 'Libro Misterios Inéditos',
    price: 1500,
    description: 'Libro Misterios Inéditos de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/misteriosineditos.jpeg'
  },
  {id: 70,
    name: 'Libro Animals',
    price: 890,
    description: 'Libro Animals Aves 3 de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/animals.jpeg'
  },
  {id: 71,
    name: 'Libro Gatos Kawaii',
    price: 590,
    description: 'Libro Gatos Kawaii de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/gatoskawaii.jpeg'
  },
  {id: 72,
    name: 'Libro Dogs',
    price: 590,
    description: 'Libro Dogs de 20 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/dogs.jpeg'
  },
  {id: 73,
    name: 'Libro Animales Misteriosos',
    price: 890,
    description: 'Libro Animales Misteriosos de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/animalesmisteriosos.jpeg'
  },
  {id: 74,
    name: 'Libro Safari',
    price: 1500,
    description: 'Libro Safari de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/safari.jpeg'
  },
  {id: 75,
    name: 'Libro Oceans',
    price: 1500,
    description: 'Libro Oceans de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/oceans.jpeg'
  },
  {id: 76,
    name: 'Libro Naturaleza Salvaje',
    price: 1500,
    description: 'Libro Naturaleza Salvaje de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/naturalezasalvaje.jpeg'
  },
  {id: 77,
    name: 'Libro Flores 1',
    price: 1500,
    description: 'Libro Flores 1 de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/flores1.jpeg'
  },
  {id: 78,
    name: 'Libro Flores 2',
    price: 690,
    description: 'Libro Flores 2 de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/flores2.jpeg'
  },
  {id: 79,
    name: 'Libro Flores 3',
    price: 690,
    description: 'Libro Flores 3 de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/flores3.jpeg'
  },
  {id: 80,
    name: 'Libro Japón',
    price: 1500,
    description: 'Libro Japón de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/japon.jpeg'
  },
  {id: 81,
    name: 'Libro Barbie',
    price: 990,
    description: 'Libro Barbie de 60 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/barbie.jpeg'
  },
  {id: 82,
    name: 'Libro Disney Grandes Clásicos 12',
    price: 1500,
    description: 'Libro Disney Grandes Clásicos 12 de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/grandesclasicos12.jpeg'
  },
  {id: 83,
    name: 'Libro Disney Pequeñas Princesas',
    price: 890,
    description: 'Libro Disney Pequeñas Princesas de 50 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/pequenasprincesas.jpeg'
  },
  {id: 84,
    name: 'Libro Disney Best of Nature',
    price: 1500,
    description: 'Libro Disney Best of Nature de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/bestofnature.jpeg'
  },
  {id: 85,
    name: 'Libro Mandalas',
    price: 690,
    description: 'Libro Mandalas de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/mandalas.jpeg'
  },
  {id: 86,
    name: 'Libro Pitufos',
    price: 1500,
    description: 'Libro Pitufos de 100 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/Pitufos.jpeg'
  },
  {id: 87,
    name: 'Libro Dibujo Los Simpsons',
    price: 690,
    description: 'Libro de Dibujo para Aprender a Dibujar Los Simpsons de 30 páginas para colorear. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/dibujolossimpsons.jpeg'
  },
  {id: 88,
    name: 'Libro Toy Story 3',
    price: 590,
    description: 'Libro Toy Story 3 de 20 páginas para colorear con guía de Colores. Medidas: A4 (21 x 29,7 cm)',
    image: 'img/Productos/toystory3.jpeg'
  },
  {
   id: 4,
    name: 'Set Escolar Brillante',
    price: 89,
    description: 'Cuaderno y accesorios con colores alegres.',
    image: 'img/Productos/WhatsApp Image 2026-08-04 at 22.07.22.jpeg'
  },
  {
    id: 5,
    name: 'Mini Actividades y para colorear',
    price: 89,
    description: 'Ideas divertidas para colorear, crear y aprender. Medidas: 7,5 x 10,5 cm',
    image: 'img/Productos/WhatsApp Image 2026-08-04 at 22.07.45.jpeg'
  },
  {
    id: 6,
    name: 'Folleto/Suvenir de Cumpleaños',
    price: 89,
    description: 'Surtido de Folletos/Suvenires con estilo moderno. Medidas: A4 Doblado en 3 partes',
    image: 'img/Productos/WhatsApp Image 2026-08-04 at 22.07.58.jpeg'
  },
  {
    id: 7,
    name: 'Libreta de Actividades y Colorear',
    price: 89,
    description: 'Diseño Personalizado para Actividades y Colorear. Medidas: 15 x 21 cm',
    image: 'img/Productos/WhatsApp Image 2026-08-04 at 22.08.13.jpeg'
  },
  {
    id: 8,
    name: 'Set de Libretas',
    price: 89,
    description: 'Libretas creativas para notas y regalos. Medidas: 7.5 x 10.5 cm',
    image: 'img/Productos/WhatsApp Image 2026-08-04 at 22.08.43.jpeg'
  }
];

const cart = [];
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartToggle = document.getElementById('cartToggle');
const floatingCartToggle = document.getElementById('floatingCartToggle');
const floatingCartCount = document.getElementById('floatingCartCount');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutButton = document.getElementById('checkoutButton');
const whatsappNumber = '59895366807';

function formatPrice(value) {
  return `$${value.toLocaleString('es-AR')}`;
}

function renderProducts() {
  productGrid.innerHTML = products.map(product => renderProductCard(product)).join('');
}

function renderProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <div class="product-info">
        <span class="product-price">${formatPrice(product.price)}</span>
        <button type="button" onclick="addToCart(${product.id})">Agregar</button>
      </div>
    </article>
  `;
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  floatingCartCount.textContent = totalItems;
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío. Agrega productos para continuar.</p>';
    cartTotal.textContent = '$0';
    checkoutButton.href = '#';
    return;
  }

  const totalValue = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <p class="cart-item-title">${item.name}</p>
        <div class="cart-item-meta">
          <span>${formatPrice(item.price)}</span>
          <div class="cart-quantity" aria-label="Cantidad de ${item.name}">
            <button type="button" class="cart-quantity-button" onclick="adjustCartQuantity(event, ${item.id}, -1)" aria-label="Restar un ${item.name}" ${item.quantity === 1 ? 'disabled' : ''}>−</button>
            <span class="cart-item-quantity">${item.quantity}</span>
            <button type="button" class="cart-quantity-button" onclick="adjustCartQuantity(event, ${item.id}, 1)" aria-label="Sumar un ${item.name}">+</button>
          </div>
        </div>
      </div>
      <button type="button" class="cart-remove" onclick="removeFromCart(event, ${item.id})">Quitar</button>
    </div>
  `).join('');

  cartTotal.textContent = formatPrice(totalValue);
  const messageLines = cart.map(item => `- ${item.name} x${item.quantity}`).join('\n');
  const message = `Hola Antonella, quisiera comprar:\n${messageLines}\nTotal: ${formatPrice(totalValue)}`;
  checkoutButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  renderCart();
}

function removeFromCart(event, id) {
  event.stopPropagation();
  const itemIndex = cart.findIndex(item => item.id === id);
  if (itemIndex === -1) return;
  cart.splice(itemIndex, 1);
  updateCartCount();
  renderCart();
}

function adjustCartQuantity(event, id, change) {
  event.stopPropagation();
  const item = cart.find(cartItem => cartItem.id === id);
  if (!item) return;

  item.quantity = Math.max(1, item.quantity + change);

  updateCartCount();
  renderCart();
}

function toggleCart(open) {
  if (open === undefined) {
    cartPanel.classList.toggle('open');
  } else if (open) {
    cartPanel.classList.add('open');
  } else {
    cartPanel.classList.remove('open');
  }
  cartPanel.setAttribute('aria-hidden', !cartPanel.classList.contains('open'));
}

cartToggle.addEventListener('click', () => toggleCart(true));
floatingCartToggle.addEventListener('click', () => toggleCart(true));
cartClose.addEventListener('click', () => toggleCart(false));

window.addEventListener('scroll', () => {
  floatingCartToggle.classList.toggle('is-visible', window.scrollY > 160);
}, { passive: true });

window.addEventListener('click', (event) => {
  if (!cartPanel.contains(event.target) && !cartToggle.contains(event.target) && !floatingCartToggle.contains(event.target) && cartPanel.classList.contains('open')) {
    toggleCart(false);
  }
});

renderProducts();
renderCart();