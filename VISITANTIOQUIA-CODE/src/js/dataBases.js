// BY: SAMUEL
const db_places = [
  {
    id: 1,
    place: "Pueblito Paisa",
    location: "Medellín",
    address: "",
    description:
      "¡Explora la magia paisa en el Pueblito Paisa de Medellín! Encanto tradicional, colores vibrantes y vistas únicas. ¡Sumérgete en lo mejor de Colombia!",
    imageUrl: "../img/places/pueblitoPaisa.jpg",
  },
  {
    id: 2,
    place: "Museo de Antioquia",
    location: "Medellín",
    address: "",
    description:
      "¡Explora la historia y arte de Medellín en el Museo de Antioquia! Obras maestras y cultura en el corazón de la ciudad. ¡Una experiencia artística única!",
    imageUrl: "../img/places/museoAntioquia.jpg",
  },
  {
    id: 3,
    place: "Comuna 13",
    location: "Medellín",
    address: "",
    description:
      "¡Descubre la Comuna 13 de Medellín! Arte callejero, historias vibrantes. ¡Una experiencia única de resiliencia y color en la ciudad!",
    imageUrl: "../img/places/comuna13.jpg",
  },
  {
    id: 4,
    place: "Mirador San Felix",
    location: "Bello",
    address: "",
    description:
      "¡Contempla Medellín desde el mirador de San Félix! Vistas panorámicas, ambiente auténtico y una experiencia única en altura. ¡Bienvenido a un rincón especial de la ciudad!",
    imageUrl: "../img/places/sanFelix.jpg",
  },
  {
    id: 5,
    place: "Parque Arví",
    location: "Santa Elena",
    address: "",
    description:
      "¡Sumérgete en la naturaleza en el Parque Arví! Aventuras al aire libre, senderos serpenteantes y paisajes impresionantes. ¡Explora la biodiversidad de Medellín!",
    imageUrl: "../img/places/parqueArvi.jpg",
  },
  {
    id: 6,
    place: "Jardín Botánico",
    location: "Medellín",
    address: "",
    description:
      "¡Descubre la serenidad en el Jardín Botánico! Flores exóticas, jardines temáticos y una escapada tranquila en el corazón de la ciudad. ¡Una paleta de colores y fragancias te espera!",
    imageUrl: "../img/places/jardinBotanico.jpg",
  },
  {
    id: 7,
    place: "Parque Explora",
    location: "Medellín",
    address: "",
    description:
      "¡Explora ciencia y diversión en el Parque Explora! Exhibiciones interactivas, acuarios fascinantes y actividades educativas para todas las edades. ¡Una experiencia emocionante y educativa!",
    imageUrl: "../img/places/parqueExplora.jpg",
  },
  {
    id: 8,
    place: "Plaza Botero",
    location: "Medellín",
    address: "",
    description:
      "¡Admira arte al aire libre en la Plaza Botero! Esculturas imponentes que capturan la esencia de la forma humana. ¡Un paseo artístico imperdible!",
    imageUrl: "../img/places/plazaBotero.jpg",
  },
  {
    id: 9,
    place: "Parque Lleras",
    location: "Medellín",
    address: "",
    description:
      "¡Sumérgete en la vida nocturna en el Parque Lleras! Restaurantes, bares y una animada atmósfera que cobra vida cuando cae la noche. ¡Disfruta de la diversión y la energía de Medellín!",
    imageUrl: "../img/places/parqueLleras.jpg",
  },
  {
    id: 10,
    place: "",
    location: "Museo El Castillo",
    address: "",
    description:
      "¡Explora la historia en el El Castillo Museum! Una mansión histórica con arte, jardines exquisitos y vistas panorámicas. ¡Una joya cultural en Medellín!",
    imageUrl: "../img/places/museoElCastillo.jpg",
  },
  {
    id: 11,
    place: "Parque Norte",
    location: "",
    address: "",
    description:
      "¡Diversión para toda la familia en Parque Norte! Atracciones emocionantes, zonas verdes y entretenimiento para todas las edades. ¡Un día lleno de alegría en Medellín!",
    imageUrl: "../img/places/parqueNorte.jpg",
  },
  {
    id: 12,
    place: "Cerro de las Tres Cruces",
    location: "",
    address: "",
    description:
      "¡Vistas impresionantes de Medellín! Naturaleza y energía en una caminata única. ¡Descubre la ciudad desde las alturas!",
    imageUrl: "../img/places/3cruces.jpg",
  },
];

const db_users = [
  {
    username: "admin",
    password: "visit2024",
    name: "",
    age: "",
    country: "",
    email: "",
  },
  {
    username: "",
    password: "",
    name: "",
    age: "",
    country: "",
    email: "",
  },
];

// BY: JULIÁN
const db_towns = [
  {
    name: "san rafael",
    poblation: "15.698 Hab",
    weather: "calido",
    distanceMedellin: "100 km",
    description:
      "San Rafael es un municipio de Colombia, localizado en la subregión Oriente del departamento de Antioquia. Limita por el norte con los municipios de Alejandría y San Roque, por el este y el sur con el municipio de San Carlos y por el oeste con los municipios de Guatapé y Alejandría.",
    imgUrl: "../img/towns/San-Rafel.jpg",
  },
  {
    name: "Guatapé",
    poblation: "9.121 Hab",
    weather: "calido",
    distanceMedellin: "70 km",
    description:
      "Hoy día, Guatapé cuenta con grandes potenciales para explotar el turismo religioso, el agroturismo, el ecoturismo, la cultura y la aventura. Cuenta con hoteles, restaurantes, barcos, lanchas y sitios turísticos para disfrutar, contemplar, meditar y descansar. ",
    imgUrl: "../img/towns/guatape.jpg",
  },
  {
    name: "El peñol",
    poblation: "21.049 Hab",
    weather: "calido",
    distanceMedellin: "60 km",
    description:
      "Este municipio se convirtió en destino turístico después de que gran parte de su territorio fue inundado para la construcción del gigantesco embalse de El Peñol-Guatapé.",
    imgUrl: "../img/towns/elPeñol.jpg",
  },
  {
    name: "La ceja",
    poblation: "71.117 Hab",
    weather: "calido",
    distanceMedellin: "50 km",
    description:
      "El territorio de lo que hoy es La Ceja estuvo habitado por los indios Tahamíes, tribu pacífica dedicada a la agricultura, fundamentalmente al cultivo de maíz.",
    imgUrl: "../img/towns/laCeja.jpg",
  },
  {
    name: "Guarne",
    poblation: "55.121 Hab",
    weather: "calido",
    distanceMedellin: "40 km",
    description:
      "Como en toda la región circundante a este distrito del oriente antioqueño, fueron los indígenas Tahamíes los primeros pobladores del territorio de Guarne, al igual que los Caribes que llegaron del Río Nare. ",
    imgUrl: "../img/towns/Guarne-6.png",
  },
  {
    name: "Sonson",
    poblation: "36.321 Hab",
    weather: "calido",
    distanceMedellin: "75 km",
    description:
      "Sonsón (durante la época de dominio español llamado San José de Ezpeleta de Sonsón) es un municipio de Colombia localizado al surnota 2 del departamento de Antioquia, en la jurisdicción de la subregión Oriente. ",
    imgUrl: "../img/towns/sonson.jpg",
  },
  {
    name: "Cocorna",
    poblation: "15.444 Hab",
    weather: "calido",
    distanceMedellin: "100 km",
    description:
      " Cocorná es un municipio de Colombia, localizado en la subregión Oriente del departamento de Antioquia. Limita por el Norte con los municipios de El Santuario y Granada, por el este con los municipios de Granada, San Luis y San Francisco, por el sur con los municipios de Sonsón y Carmen de Viboral y por el oeste con el municipio del Carmen de Viboral.",
    imgUrl: "../img/towns/cocorna.jpg",
  },
  {
    name: "Puerto triunfo",
    poblation: "18.055 Hab",
    weather: "calido",
    distanceMedellin: "100 km",
    description:
      "Puerto Triunfo es uno de los municipios más jóvenes de Antioquia. Hacia 1905 había sobre el río Magdalena un paraje del vecino municipio de San Luis conocido como ",
    imgUrl: "../img/towns/puertoTriunfo.jpeg",
  },
  {
    name: "Rionegro",
    poblation: "135.465 Hab",
    weather: "calido",
    distanceMedellin: "100 km",
    description:
      "Rionegro es un municipio de Colombia, ubicado en el departamento de Antioquia. Está localizado en el valle de San Nicolás o también llamado Altiplano del Oriente, en la subregión Oriente, siendo la ciudad con mayor población y la que concentra el movimiento económico de la subregión.",
    imgUrl: "../img/towns/Rionegro.jpg",
  },
  {
    name: "Marinilla",
    poblation: "54.186 Hab",
    weather: "calido",
    distanceMedellin: "100 km",
    description:
      "Marinilla es un municipio colombiano ubicado en el departamento de Antioquia y es uno de los 9 municipios que conforman el altiplano del oriente.",
    imgUrl: "../img/towns/marinilla.jpg",
  },
  {
    name: "Carmen de Viboral",
    poblation: "15.698 Hab",
    weather: "calido",
    distanceMedellin: "100 km",
    description:
      "Carmen de Viboral fue fundado el 13 de abril de 1752, los fundadores establecieron una hacienda de recreo o lugar de descanso que recibió el nombre de Carmen, en la que construyeron una capilla.",
    imgUrl: "../img/towns/carmenDeViboral.jpg",
  },
  {
    name: "La Union",
    poblation: "21.475Hab",
    weather: "calido",
    distanceMedellin: "100 km",
    description:
      "La Unión surge como otro de los distritos de la región oriental de Antioquia que aparece como efecto de la colonización espontánea de toda esta zona centro oriental de Antioquia.",
    imgUrl: "../img/towns/laUnion.jpg",
  },
];

// BY: MANUELA
const db_restaurants = [{}];
